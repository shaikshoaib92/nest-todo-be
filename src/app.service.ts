import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {


  getHello(): string {
    return 'Hello World!';
  }

  getChallo(): string {
    return 'jhinga lala hu hu'
  }


  secondFunction(): string {
    return "I am a second function"
  }

  thirdFunction(): string {
    return "I am a third function"
  }

  fourthFunction(): string {
    return " Iam a fourth function"
  }


}
