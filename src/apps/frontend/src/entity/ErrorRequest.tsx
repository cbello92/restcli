export interface ErrorRequest {
  meta?: Meta;
  shape?: Shape;
  data?: ErrorRequestData;
  name?: string;
}

export interface ErrorRequestData {
  cause: Cause;
}

export interface Cause {
  statusCode: number;
  message: string;
  type: string;
  data: CauseData;
}

export interface CauseData {
  error: string;
  name: string;
}

export interface Meta {
  response: Response;
}

export interface Shape {
  message: string;
  code: number;
  data: ErrorRequestData;
}
