/* eslint-disable @typescript-eslint/no-explicit-any */
import {HttpClientBaseRepository} from '../../../shared/domain/HttpClientBaseRepository';
import {EndpointStrategy} from '../domain/EndpointStrategy';
import {IRequestOption} from '../domain/RequestOption';

export class PatchEndpointExecutor implements EndpointStrategy {
  constructor(private httpClient: HttpClientBaseRepository) {}

  async execute(url: string, dataAction: IRequestOption): Promise<any> {
    const {body, ...rest} = dataAction;
    return this.httpClient.patch(url, body, {...rest});
  }
}
