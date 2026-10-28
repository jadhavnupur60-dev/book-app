const request = require('supertest');
const app = require('../server');

describe('GET /books Route', () => {
  it('should return status 200 and a JSON array of books', async () => {
    const response = await request(app).get('/books');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });
});