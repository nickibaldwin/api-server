'use strict'

const supergoose = require('@code-fellows/supergoose'); //this pulls in and configs and runs mongo memory server and supertest

const logger = require('../src/middleware/logger.js');


describe('Logger Test' , () => {
  let consoleRecord;
  let req = {};
  let res = {};
  let next = jest.fn();

  beforeEach(() => {
    consoleRecord = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleRecord.mockRestore();
  });

  it('properly logs some output', () => {
    logger(req, res, next);
    expect(consoleRecord).toHaveBeenCalled();
  });

  it('properly moves to the next middleware', () => {
    logger(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });
});