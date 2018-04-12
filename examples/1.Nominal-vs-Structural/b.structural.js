//Structural Type Checking
// @flow

type Organization = {
  code: string
}

type User = {
  id?: string,
  name: string,
  age: number,
  city: string,
  timestamp?: Date,
  organization?: Organization
}

const save = (user: User): Promise<Organization> => {
  return Promise.resolve({code:'Organization'})
}

save({name: 'Gabriel', age: 99, city:'Recife'})
// save({name: 'Gabriel', age: 99, city: undefined})
// save({name: 'Gabriel without age'})
// save({name: 'Gabriel', age: 99, city:'Recife', organization: {id:1}})
// save({name: 'Gabriel', age: 99, city:'Recife', organization: {coda:'name'}})
// save({ code: 'String' })

 //Extra Info:
 // No overloads
