import HttpException from './HttpException';

class AuthenticationFailedException extends HttpException {
  constructor(message:string) {
    super(401, message || "Authentication failed.");
  }
}

export default AuthenticationFailedException;