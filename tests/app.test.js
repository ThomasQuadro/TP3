const request = require('supertest');
const app = require('../src/app');

describe('GET /health', () => {
  it('returns status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });
});

describe('GET /api/info', () => {
  it('returns date and hostname', async () => {
    const res = await request(app).get('/api/info');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('date');
    expect(res.body).toHaveProperty('hostname');
    expect(new Date(res.body.date).toISOString()).toBe(res.body.date);
    expect(typeof res.body.hostname).toBe('string');
  });
});
