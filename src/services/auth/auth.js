import axios from 'axios'

const auth = payload => axios.post('http://demo6288389.mockable.io/signin', payload)

export default { auth }