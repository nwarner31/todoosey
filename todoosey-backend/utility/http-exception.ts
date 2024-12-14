export enum ErrorCodes {
    REQUIRED_INFORMATION_MISSING = 1001,
    PASSWORDS_DO_NOT_MATCH = 4101,
    USER_ALREADY_EXISTS = 4102,
    UNKNOWN_SERVER_ERROR = 5001
}

export class HttpException extends Error {
    message: string;
    errorCode: ErrorCodes;
    statusCode: number;
    errors: any;
    constructor(message: string, errorCode: ErrorCodes, statusCode: number, errors: any) {
        super(message);
        this.message = message;
        this.errorCode = errorCode;
        this.statusCode = statusCode;
        this.errors = errors;
    }
}