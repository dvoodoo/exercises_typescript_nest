import {Body, Controller, Get, Post} from '@nestjs/common';
import { UserService } from './user.service';

@Controller(`user`)
export class UserController {
  constructor(private readonly appService: UserService) {}

  @Get()
  getHello(): string {
    return "user";
    // return this.appService.getHello();
  }

  @Post ('data')
  functionName(@Body('user') user: {name: string, age: number} ) {
    return user;
  }
}
