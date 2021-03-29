import { Injectable } from '@nestjs/common';

@Injectable()
export default class StartService {
  async getHello(): Promise<string> {
    return 'Hello World!';
  }
}
