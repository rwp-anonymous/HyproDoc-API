import {Injectable} from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const port = process.env.PORT || 3000;
    return `HyproDoc API started on Port: ${port}`;
  }
}
