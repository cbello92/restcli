import {HttpClientBaseRepository} from '../../../shared/domain/HttpClientBaseRepository';
import {EndpointStrategy} from '../domain/EndpointStrategy';
import {IRequestOption} from '../domain/RequestOption';

export class PostEndpointExecutor implements EndpointStrategy {
  constructor(private httpClient: HttpClientBaseRepository) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async execute(url: string, dataAction: IRequestOption): Promise<any> {
    const {body, ...rest} = dataAction;
    console.log('POST ->', body, {...rest});
    return this.httpClient.post(url, body, {...rest});
  }
}
