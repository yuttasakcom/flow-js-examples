//@flow
import type {User} from './repository'
const { save } = require('./repository')

export const store = (user: User):Promise<User> => {
  return save(user)
    // .then((data)=> data + 1)
}


// save({id: 1,  name: 'name', age: '1', city: 'abc'})

