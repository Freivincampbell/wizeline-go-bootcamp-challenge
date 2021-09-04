import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { HelloWorldModule } from './hello-world/hello-world.module';
import { OpenEndpointModule } from './open-endpoint/open-endpoint.module';

@Module({
	imports: [HelloWorldModule, HttpModule, OpenEndpointModule],
	controllers: [],
	providers: []
})
export class AppModule {}
