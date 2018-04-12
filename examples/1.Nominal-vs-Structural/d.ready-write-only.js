// @flow

type User = {
  +id: string,
  name: string,
  age: number,
  -password: number
}


const get = (id): User => {
  return {id: 'id', name: 'Gabriel', age: 1, password: 'facebook is bad'}
}
const user = get('1')
// user.id = 1
// user.password
