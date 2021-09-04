import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { OpenEndpointController } from './open-endpoint.controller';
import { OpenEndpointService } from './open-endpoint.service';
import todo from '../../mock/entries.json';

describe('OpenEndpointController', () => {
	let controller: OpenEndpointController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [OpenEndpointController],
			providers: [OpenEndpointService],
			imports: [HttpModule]
		}).compile();

		controller = module.get<OpenEndpointController>(OpenEndpointController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});

	it('should return todo with id #1', (done) => {
		controller.findOne({ id: 1 }).subscribe((data) => {
			expect(data).toStrictEqual(require('../../mock/entries.json'));
			done();
		});
	});

	it('should fail with id #2', (done) => {
		controller.findOne({ id: 2 }).subscribe((data) => {
			expect(data).not.toStrictEqual(require('../../mock/entries.json'));
			done();
		});
	});
});
