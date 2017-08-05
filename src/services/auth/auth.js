import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import authMock from 'mocks/auth'

const auth = payload => {
  const mock = new MockAdapter(axios, { delayResponse: 2000 })
  mock.onPost('/auth').reply(200, { authMock })

  return axios.post('/auth', payload)
}

export default { auth }