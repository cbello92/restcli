export class ConfigEnvironment {
  constructor(private name: string, private context_environment: {id: string; name: string; value: string}[]) {}
}
