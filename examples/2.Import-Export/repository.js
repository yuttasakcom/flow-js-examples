//@flow
export type User = {
  id?: string,
  name: string,
  age: number,
  city: string
}

const save = (user: User): Promise<User> => {
  return Promise.resolve(Object.assign({}, user, {id: 'crazy id'}))
}

// const save2 = (user: User): Promise<User> => {
//   return Promise.resolve(Object.assign({}, user, {age: 'crazy id'}))
// }

module.exports = { save }

