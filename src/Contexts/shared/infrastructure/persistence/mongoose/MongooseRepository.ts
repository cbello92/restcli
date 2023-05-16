import {
  Model,
  Document,
  CallbackError,
  InsertManyResult,
  UpdateWriteOpResult,
  FilterQuery,
  UpdateQuery,
  QueryOptions,
} from 'mongoose';
import {PersistenceBaseRepository} from '../../../domain/PersistenceBaseRepository';

export class MongooseRepository implements PersistenceBaseRepository {
  constructor(private model: Model<Document>) {}

  persist<T, V>(data: T): Promise<V> {
    return new Promise<V>((resolve, reject) => {
      this.model
        .create(data)
        .then((res: Document) => {
          resolve(<V>(<unknown>res));
        })
        .catch((err: CallbackError) => {
          reject(err);
        });
    });
  }

  persistMany<T, V>(data: T): Promise<V> {
    return new Promise<V>((resolve, reject) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this._model
        .insertMany(data, {})
        .then((res: Array<Document> | InsertManyResult<Document>) => {
          resolve(<V>(<unknown>res));
        })
        .catch((err: CallbackError) => {
          reject(err);
        });
    });
  }

  updateOne<T, V>(query: FilterQuery<T>, update: UpdateQuery<T>, options?: QueryOptions): Promise<V> {
    return new Promise<V>((resolve, reject) => {
      this.model
        .updateOne(query as Record<string, unknown>, update, options)
        .then((res: UpdateWriteOpResult) => {
          resolve(<V>(<unknown>res));
        })
        .catch((err: CallbackError) => {
          reject(err);
        });
    });
  }

  updateMany<T, V>(query: FilterQuery<T>, update: UpdateQuery<T>, options?: QueryOptions): Promise<V> {
    return new Promise<V>((resolve, reject) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.model
        .updateMany(query as Record<string, unknown>, update, options)
        .then((res: UpdateWriteOpResult) => {
          resolve(<V>(<unknown>res));
        })
        .catch((err: CallbackError) => {
          reject(err);
        });
    });
  }

  find<V>(
    filter: FilterQuery<Record<string, unknown>>,
    projection?: Record<string, number>,
    options?: QueryOptions,
  ): Promise<Array<V>> {
    return new Promise<Array<V>>((resolve, reject) => {
      this.model
        .find(filter, projection, options)
        .then(res => {
          resolve(res as Array<V>);
        })
        .catch((err: CallbackError) => {
          reject(err);
        });
    });
  }

  findOne<T, V>(filter: FilterQuery<T>, projection?: Record<string, number>, options?: QueryOptions): Promise<V> {
    return new Promise<V>((resolve, reject) => {
      this.model
        .findOne(filter as Record<string, unknown>, projection, options)
        .then((res: Document | null) => {
          resolve(<V>(<unknown>res));
        })
        .catch((err: CallbackError) => {
          reject(err);
        });
    });
  }
}
