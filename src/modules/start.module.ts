import { Module } from '@nestjs/common';
import { StartController } from '../controllers';
import { StartService } from '../services';
@Module({
    controllers:[StartController],
    providers:[StartService]
})
export default class StartModule {}
