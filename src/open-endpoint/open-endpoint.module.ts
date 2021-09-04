import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { OpenEndpointController } from './open-endpoint.controller';
import { OpenEndpointService } from './open-endpoint.service';

@Module({
	imports: [HttpModule, HttpModule],
	controllers: [OpenEndpointController],
	providers: [OpenEndpointService]
})
export class OpenEndpointModule {}
