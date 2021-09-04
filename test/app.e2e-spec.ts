import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('Basic App (e2e)', () => {
	let app: INestApplication;

	beforeEach(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule]
		}).compile();

		app = moduleFixture.createNestApplication();
		await app.init();
	});

	it('/hello-word (GET)', () => {
		return request(app.getHttpServer())
			.get('/hello-world')
			.expect(200)
			.expect('Hello World!');
	});

	it('/open-endpoint (GET)', () => {
		return request(app.getHttpServer())
			.get('/open-endpoint/1')
			.expect(200)
			.expect({
				userId: 1,
				id: 1,
				title: 'delectus aut autem',
				completed: false
			});
	});

	it('it should fail when a route does not match (GET)', () => {
		return request(app.getHttpServer()).get('/open-endpoints').expect(404);
	});
});
