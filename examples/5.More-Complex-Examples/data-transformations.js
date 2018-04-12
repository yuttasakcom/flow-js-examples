// @flow
import {merge} from 'lodash'

type User = {
  name: string,
  username: string,
  nickname: string
}

type Profile = {
  address: Array<string>,
  preferences: Array<string>
}

type UserWithProfile = User & Profile

const request = () =>
  Promise.resolve(true)

const getUserId = () =>
  Promise.resolve('1')

const getUser = (id: string): Promise<User> =>
  Promise.resolve({name: 'Gabriel', username:'username', nickname: 'name'})

const getProfile = (id: string):Promise<Profile> =>
  Promise.resolve({address: ['Address A'], preferences: ['chocolate', 'ice cream']})

const createUserWithProfile = ([user:User, profile:Profile]): Promise<UserWithProfile> =>
  Promise.resolve(merge({}, user, profile))

const result = request()
  .then(getUserId)
  .then((id) => Promise.all([getUser(id), getProfile(id)]))
  .then(createUserWithProfile)
  .then((user) => user.nickname)
