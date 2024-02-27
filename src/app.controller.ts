import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {

  
    constructor(
      private readonly appService: AppService
    ){}






  @Get()
  getHello(): string {
    return this.appService.getChallo();
  }


  @Get('second-api')
  secondApi(): string {
    return this.appService.secondFunction()
  }


  @Get('third-api')
  thirdApi(): string {
    return this.appService.thirdFunction()
  }

  @Get('fourth-api')
  fourthApi(): string {
    return this.appService.fourthFunction()
  }




}
