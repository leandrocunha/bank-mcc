export interface SimpleDirent {
  name: string;
  dir: boolean;
}

export interface IReadDirAPIResponse {
  statusCode: number;
  statusMessage: string;
  data: SimpleDirent[] | null;
  error: boolean;
}
