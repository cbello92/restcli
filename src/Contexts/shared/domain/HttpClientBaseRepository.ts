export interface HttpClientBaseRepository {
  get<V>(url: string, moreConfig?: Record<string, unknown>): Promise<V>;
  post<T, V>(url: string, body: T, moreConfig?: Record<string, unknown>): Promise<V>;
  patch<T, V>(url: string, body: T, moreConfig?: Record<string, unknown>): Promise<V>;
  put<V, T>(url: string, data: T, moreConfig?: Record<string, unknown>): Promise<V>;
  delete<V>(url: string, moreConfig?: Record<string, unknown>): Promise<V>;
}
