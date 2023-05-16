export interface UseCaseBaseRepository<V> {
  execute(): Promise<V>;
}
