import HttpException from './HttpException';

class UserAlreadyExistsException extends HttpException {
  constructor(userName: string) {
    super(400, `User with userName ${userName} already exists`);
  }
}

export default UserAlreadyExistsException;