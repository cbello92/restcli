export interface UpdateWorkSpace<T, V> {
  execute(id: string, body: T): Promise<V>;
}
