// @flow

class User {
  name: string
  age: ?number

  constructor(name: string, age?: number) {
    this.name = name
    this.age = age
  }
}

class Organization {
  code: string
  constructor(code: string) {
    this.code = code
  }
}

class SuperUser extends User {}
class HyperUser extends SuperUser {}
class SuperMarioWithStartUser extends HyperUser {}

function save(user: User): boolean {
  return true
}

save(new User('name', 1))
save(new SuperUser('name', 1))
save(new SuperMarioWithStartUser('name', 1))

// save(new User('a', 'a'))
// save(new Organization('name', 1))


