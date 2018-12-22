import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller(`cats`)
export class CatsController {
  constructor(private readonly appService: CatsService) {}

  @Get()
  getHello(): string {
    return "cats";
    // return this.appService.getHello();
  }
    @Get('more')
    some(): string {
        return "in Secont/last";
        // return this.appService.getHello();
    }
}
