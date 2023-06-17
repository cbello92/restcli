/* eslint-disable @typescript-eslint/no-explicit-any */
import {HttpClientBaseRepository} from '../../../shared/domain/HttpClientBaseRepository';
import {EndpointStrategy} from '../domain/EndpointStrategy';
import {IRequestOption} from '../domain/RequestOption';

export class DeleteEndpointExecutor implements EndpointStrategy {
  constructor(private httpClient: HttpClientBaseRepository) {}

  async execute(url: string, dataAction: IRequestOption): Promise<any> {
    return this.httpClient.delete(url, {...dataAction});
  }
}
