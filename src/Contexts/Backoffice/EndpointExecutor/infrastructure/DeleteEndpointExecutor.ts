/* eslint-disable @typescript-eslint/no-explicit-any */
import {HttpClientBaseRepository} from '../../../shared/domain/HttpClientBaseRepository';
import {EndpointStrategy} from '../domain/EndpointStrategy';
import {OptionsAction} from '../domain/OptionsAction';

export class DeleteEndpointExecutor implements EndpointStrategy {
  constructor(private httpClient: HttpClientBaseRepository) {}

  async execute(url: string, dataAction: OptionsAction): Promise<any> {
    return this.httpClient.delete(url, {...dataAction});
  }
}
