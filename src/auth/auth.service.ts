import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOneBy(email);

    console.log(user);

    if (user && password === user.password) {
      return user;
    }
    return null;
  }
}
