// @flow
const save = (user: { name: string, age: number, city: string }): Promise<boolean> => {
  return Promise.resolve(true)
}

save({ name: 'Gabriel', age: 19, city: 'Recife' })
//  save({name: 'Gabriel', age: 19})
//  save({name: 'Gabriel', age: 19, city: 'Recife', extraParam: true})
