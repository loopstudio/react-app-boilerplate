import nock from 'nock';

export default nock(process.env.REACT_APP_API_URL);
