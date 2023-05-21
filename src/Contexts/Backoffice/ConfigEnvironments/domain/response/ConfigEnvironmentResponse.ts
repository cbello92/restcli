export interface ConfigEnvironmentResponse {
  name: string;
  context_environment: {
    id: string;
    name: string;
    value: string;
  }[];
}
