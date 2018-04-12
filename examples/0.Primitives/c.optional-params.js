// @flow
const create = (name: string, id?: string) => {
  return Promise.resolve({ name, id })
}

create('name')
create('name', 'id')
// create('name', 1)


const create2 = (name: string, age: number) => {
  return Promise.resolve({ name, age })
}


create2('name', 1)
// create2('name', null)
// create2('name', undefined)
// const user = {name: 'Gabriel', city: 'Recife'}
// create2(user.name, user['age'])
// create2(user.name, user.blha)
