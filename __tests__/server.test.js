'use strict';

const supergoose = require('@code-fellows/supergoose'); //this pulls in and configs and runs mongo memory server and supertest

const { server } = require('../src/server.js');
const mockServer = supergoose(server);

describe('Error-Handlers', () => {
  
  it('handles invalid requests', async () => {
    const response = await mockServer.get('/bad');
    expect(response.status).toEqual(404);
  });
  
  it('handles invalid methods', async () => {
    const response = await mockServer.patch('/food');
    expect(response.status).toEqual(404);
  });
});