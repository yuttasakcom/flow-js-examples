// //@flow
import {save} from './repository'
import type {User, Response} from './repository'


export const saveWithLogic = async (user: User): Promise<User> => {
  return save(user).then((response: Response) => {
    // console.log(response.data)
    if (response.data) {
      console.log(response.data)
    }
    return user
  })
}
