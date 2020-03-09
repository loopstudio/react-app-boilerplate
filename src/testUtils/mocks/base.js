import nock from 'nock';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';

axios.defaults.adapter = httpAdapter;

export default nock(process.env.REACT_APP_API_URL);
