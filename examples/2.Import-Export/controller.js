// @flow

import * as service from './service'

type Request = {
  params: Object
}

type Response = {
  status: 200 | 400 | 500,
  body: Object
}

const save = (request: Request): Promise<Response> => {
  const { name, age, city } = request.params

  return service.store({name: 'name', city: 'Recife', age: 19}).then((data) => {
    return {body: data, status: 200}
  })
}

// if (!name || !age || !city) {
//   throw new Error('Invalid params')
// }

// return store({ name, age, city: 'city' })
//   .then(user => ({body: user, status: 200}))
