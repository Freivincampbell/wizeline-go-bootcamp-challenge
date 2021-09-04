import { Controller, Get, Param } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { OpenEndpointService, ITodo } from './open-endpoint.service';

@Controller('open-endpoint')
export class OpenEndpointController {
	constructor(private readonly openEndpoint: OpenEndpointService) {}

	@Get(':id')
	findOne(@Param() { id }): Observable<AxiosResponse<ITodo>> {
		return this.openEndpoint.findOne(+id);
	}
}
