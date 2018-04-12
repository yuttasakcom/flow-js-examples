//@flow

export type User = {
  id?: string,
  name: string,
  age: number,
  city: string,
  gender: 'male' | 'female'
}

type Fail = {| success: false |}
type Success = {| success: true, data: User |}

export type Response = Fail | Success

export const save = (user: User): Promise<Response> => {
  if (Math.random() > .5) {
    return Promise.resolve({ success: true, data: user })
  }
  return Promise.resolve({ success: false })
}
