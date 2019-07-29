import { ErrorRequestHandler } from 'express';

type ErrorName =
  | 'NOT_FOUND_EXCEPTION'
  | 'UNAUTHORIZED_EXCEPTION'
  | 'FORBIDDEN_EXCEPTION'
  | 'BAD_REQUEST_EXCEPTION'
  | 'UNPROCESSABLE_ENTITY_EXCEPTION'
  | 'INTERNAL_SERVER_ERROR_EXCEPTION';

type ErrorStatus = 400 | 401 | 403 | 404 | 422 | 500;

class CustomError extends Error {
  name: ErrorName;
  status: ErrorStatus;
}

export class BadRequestException extends CustomError {
  constructor(message: string) {
    super(message);
    this.name = 'BAD_REQUEST_EXCEPTION';
    this.status = 400;
  }
}

export class UnauthorizedException extends CustomError {
  constructor(message: string) {
    super(message);
    this.name = 'UNAUTHORIZED_EXCEPTION';
    this.status = 401;
  }
}

export class ForbiddenException extends CustomError {
  constructor(message: string) {
    super(message);
    this.name = 'FORBIDDEN_EXCEPTION';
    this.status = 403;
  }
}

export class NotFoundException extends CustomError {
  constructor(message: string) {
    super(message);
    this.name = 'NOT_FOUND_EXCEPTION';
    this.status = 404;
  }
}

export class UnprocessableEntityException extends CustomError {
  constructor(message: string) {
    super(message);
    this.name = 'UNPROCESSABLE_ENTITY_EXCEPTION';
    this.status = 422;
  }
}

export class InternalServerErrorException extends CustomError {
  constructor(message: string) {
    super(message);
    this.name = 'INTERNAL_SERVER_ERROR_EXCEPTION';
    this.status = 500;
  }
}

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(err.status).json({
    success: false,
    error: {
      name: err.name,
      message: err.message,
    },
  });
};
