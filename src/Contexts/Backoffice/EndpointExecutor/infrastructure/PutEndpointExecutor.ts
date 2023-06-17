/* eslint-disable @typescript-eslint/no-explicit-any */
import {HttpClientBaseRepository} from '../../../shared/domain/HttpClientBaseRepository';
import {EndpointStrategy} from '../domain/EndpointStrategy';
import {IRequestOption} from '../domain/RequestOption';

export class PutEndpointExecutor implements EndpointStrategy {
  constructor(private httpClient: HttpClientBaseRepository) {}

  async execute(url: string, dataAction: IRequestOption): Promise<any> {
    const {body, ...rest} = dataAction;
    return this.httpClient.put(url, body, {...rest});
  }
}
