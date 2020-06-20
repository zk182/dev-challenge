/* eslint-disable no-tabs */
/* eslint-disable node/no-unpublished-require */
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const proxyrequire = require('proxyquire');
const config = require('../../config');
const src = require('./postService');

config.NODE_ENV = 'test';

const { expect } = chai;
chai.use(chaiHttp);
describe('Post', () => {
	beforeEach('mock dependencies', async () => {
		const responseMock = {};
		const responseGetMock = {};
		const responseUpdateMock = {};
		const getAllStub = sinon.stub().returns({ Id: 1 });
		const getStub = sinon.stub().returns({
			promise: sinon.stub().resolves(responseGetMock),
		});
		const postStub = sinon.stub().returns({
			promise: sinon.stub().resolves(responseMock),
		});
	});
	it('should get all posts', async () => {
		const data = await src.getAll();
		expect(data).to.be.an('array');
	});
	// it('should get a post', async () => {
	// 	const data = await src.get(1);
	// 	expect(data).to.be.an('object');
	// });
	// it('should remove a post', async () => {
	// 	const data = await src.remove(1);
	// 	expect(data).to.be.undefined;
	// });
	// it('should post an item', async () => {
	// 	const data = {
	// 	};
	// 	const postData = await src.post(1, data);
	// 	expect(postData).to.be.undefined;
	// });
});
