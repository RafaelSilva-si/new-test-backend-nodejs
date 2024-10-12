export class MissingParamError extends Error {
  statusCode: number;
  constructor(paramName: string) {
    super(`Missing param: ${paramName}`);
    this.statusCode = 400;
  }
}
