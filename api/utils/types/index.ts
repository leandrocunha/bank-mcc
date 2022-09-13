export interface SimpleDirent {
    name: string;
    dir: boolean;
};

export interface IReadDirAPIResponse {
    statusCode: Number
    statusMessage: String
    data: SimpleDirent[] | null
    error: Boolean
}