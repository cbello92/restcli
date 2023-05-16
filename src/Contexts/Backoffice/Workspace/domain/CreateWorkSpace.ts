export interface CreateWorkSpace<T, V> {
  execute(body: T): Promise<V>;
}
