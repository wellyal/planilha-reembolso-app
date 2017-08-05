import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import expensesMock from 'mocks/expenses'

const getUserExpenses = () => {
  const mock = new MockAdapter(axios, { delayResponse: 2000 })
  mock.onGet('/expenses').reply(200, { expensesMock })

  return axios.get('/expenses')
}

export default { getUserExpenses }