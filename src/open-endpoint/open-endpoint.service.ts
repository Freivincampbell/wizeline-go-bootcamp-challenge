import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';

@Injectable()
export class OpenEndpointService {
	constructor(private httpService: HttpService) {}

	findOne(id: number): Observable<AxiosResponse<ITodo>> {
		return this.httpService
			.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
			.pipe(
				map((response) => {
					const { data } = response;
					return data;
				})
			);
	}
}

export interface ITodo {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}
