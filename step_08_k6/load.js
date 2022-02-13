import http from 'k6/http';
import { check, group, sleep, fail } from 'k6';

export const options = {
  vus: 1, // 1 user looping for 1 minute
  duration: '2m',

  thresholds: {
    http_req_duration: ['p(99)<1500'], // 99% of requests must complete below 1.5s
  },
};

const BASE_URL = 'http://app:3000/fibo/';
const FIBO_NUMBER = '40';


export default () => {

  const myObjects = http.get(`${BASE_URL}${FIBO_NUMBER}`);
  check(myObjects, {
    'status 200': (r) => r.status === 200,
  });
};
