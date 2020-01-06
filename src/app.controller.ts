import { Controller, Get, Res, Next, Req } from '@nestjs/common';
import { Response, NextFunction, Request } from 'express';
import { join } from 'path';
import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
}
