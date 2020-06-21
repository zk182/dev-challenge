/* eslint-disable no-tabs */
/* eslint-disable node/no-unpublished-require */
const chai = require('chai');
const chaiHttp = require('chai-http');
const config = require('../../config');
const src = require('./postService');

config.NODE_ENV = 'test';

const { expect } = chai;
chai.use(chaiHttp);
describe('Post', () => {
	beforeEach('mock dependencies', async () => {
	});
	it('should get all posts', async () => {
		const data = await src.getAll();
		expect(data).to.be.an('array');
	});
	it('should remove a post', async () => {
		const data = await src.remove(1);
		expect(data).to.be.an('string');
	});
	it('should post an item', async () => {
		const data = {
			text: 'test',
			state: 'Public',
		};
		const postData = await src.post(data, 1, 'testUser');
		expect(postData).to.be.an('object');
	});
});
