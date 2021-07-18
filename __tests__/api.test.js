import request from 'supertest';

import app from '../src/app';

describe('API Requests', () => {
  afterAll(async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
  });

  it('should send an sms', async () => {
    const res = await request(app).post('/sms/create').send({
      recipient: '5511941439844',
      text: 'Hello!',
    });

    expect(res.body).toHaveProperty('campaignId');
    expect(res.statusCode).toEqual(201);
  });

  it('should create a shortened link', async () => {
    const res = await request(app)
      .post('/shorts/create')
      .send({
        data: {
          fullLink: 'https://google.com.br',
        },
      });

    expect(res.body).toHaveProperty('shortLink');
    expect(res.statusCode).toEqual(201);
  });

  it('should list all shortened links', async () => {
    const res = await request(app)
      .post('/shorts/list')
      .send({
        criteria: {
          status: '1',
          moderatorStatus: '1',
        },
        pagination: {
          currentPage: '1',
          pageSize: '10',
        },
        sort: {
          clickCnt: 'DESC',
        },
      });

    expect(res.body).toHaveProperty('items');
    expect(res.statusCode).toEqual(200);
  });
});
