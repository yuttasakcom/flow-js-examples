// @flow

const service = (user: { name: string, age: number, city: string }) => {
  return Promise.resolve(true)
 }

 service({name: 'Gabriel', age: 19, city: 'Recife'})

