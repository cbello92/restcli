/* eslint-disable @typescript-eslint/no-explicit-any */

import {HttpClientAxiosRepository} from '../../../shared/infrastructure/client/HttpClientAxiosRepository';
import {IRequestOptionExtra} from '../domain/RequestOption';
import {DeleteEndpointExecutor} from './DeleteEndpointExecutor';
import {EndpointContext} from './EndpointContext';
import {GetEndpointExecutor} from './GetEndpointExecutor';
import {PatchEndpointExecutor} from './PatchEndpointExecutor';
import {PostEndpointExecutor} from './PostEndpointExecutor';
import {PutEndpointExecutor} from './PutEndpointExecutor';

type ClassConstructor<T> = new (...args: any[]) => T;

export class ConfigEndpointStrategy {
  classMap = new Map<string, ClassConstructor<any>>();

  constructor(private url: string, private dataAction: IRequestOptionExtra) {
    this.classMap.set('GET', GetEndpointExecutor);
    this.classMap.set('POST', PostEndpointExecutor);
    this.classMap.set('PUT', PutEndpointExecutor);
    this.classMap.set('PATCH', PatchEndpointExecutor);
    this.classMap.set('DELETE', DeleteEndpointExecutor);
  }

  async run(): Promise<any> {
    console.log('METHOD', this.dataAction);
    const httpClientAxios = new HttpClientAxiosRepository();
    const EndpointHttp = this.classMap.get(this.dataAction.method);
    const endpoint = new EndpointContext(new EndpointHttp(httpClientAxios));
    return await endpoint.execute(this.url, this.dataAction);
  }
}
