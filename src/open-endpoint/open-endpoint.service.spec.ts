import { HttpModule, HttpService } from '@nestjs/axios';
import { Test } from '@nestjs/testing';
import { of } from 'rxjs';
import { OpenEndpointService } from './open-endpoint.service';
describe('OpenEndpointService', () => {
	let service: OpenEndpointService;
	let httpService: HttpService;

	beforeEach(async () => {
		const module = await Test.createTestingModule({
			providers: [OpenEndpointService],
			imports: [HttpModule]
		}).compile();

		service = module.get(OpenEndpointService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
	it('should fail with id #2', (done) => {
		service.findOne(2).subscribe((data) => {
			expect(data).not.toStrictEqual(require('../../mock/entries.json'));
			done();
		});
	});
	it('should return todo with #1', (done) => {
		service.findOne(1).subscribe((data) => {
			expect(data).toStrictEqual(require('../../mock/entries.json'));
			done();
		});
	});
});
