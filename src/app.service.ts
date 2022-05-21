import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return JSON.stringify({
      message: 'Hi, welcome to the Trivia Game API!',
      year: new Date().getFullYear(),
    });
  }
}
