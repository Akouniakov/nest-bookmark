import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login() {
    return { msg: 'Je suis connecté' };
  }
  signUp() {}
}
