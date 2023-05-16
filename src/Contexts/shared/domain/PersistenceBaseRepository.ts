import {FilterQuery, QueryOptions, UpdateQuery} from 'mongoose';

export abstract class PersistenceBaseRepository {
  abstract persist<T, V>(data: T): Promise<V>;
  abstract persistMany<T, V>(data: T): Promise<V>;
  abstract updateOne<T, V>(query: FilterQuery<T>, update: UpdateQuery<T>, options?: QueryOptions): Promise<V>;
  abstract updateMany<T, V>(query: FilterQuery<T>, update: UpdateQuery<T>, options?: QueryOptions): Promise<V>;
  abstract find<V>(
    filter: FilterQuery<Record<string, unknown>>,
    projection?: Record<string, number>,
    options?: QueryOptions,
  ): Promise<Array<V>>;

  abstract findOne<T, V>(
    filter: FilterQuery<T>,
    projection?: Record<string, number>,
    options?: QueryOptions,
  ): Promise<V>;
}
