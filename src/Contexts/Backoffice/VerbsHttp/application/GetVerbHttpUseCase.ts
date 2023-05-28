import {GetVerbHttp} from '../domain/GetVerbHttp';
import {VerbHttpRepository} from '../domain/repository/VerbHttpRepository';
import {VerbHttpResponse} from '../domain/response/VerbHttpResponse';

export class GetVerbHttpUseCase implements GetVerbHttp {
  constructor(private repository: VerbHttpRepository) {}

  async execute(): Promise<VerbHttpResponse[]> {
    return this.repository.list();
  }
}
