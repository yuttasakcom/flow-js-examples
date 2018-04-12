// @flow

type State = {
  +users: Array<{
    +id: string,
    +name: string,
    +age: number,
    +phoneNumber: string,
  }>,
  +activeUserID: string,
}


type Action = {
  +type: string,
}

type UserAction =
  | { type: 'FOO', foo: number }
  | { type: 'BAR', bar: boolean }
  | { type: 'BAZ', baz: string }

const addUser = (state): UserAction => {
  return {type: 'FOO', foo: 1}
}

type FooAction = { type: 'FOO', foo: number };
type BarAction = { type: 'BAR', bar: boolean };

type OrganizationAction =
  | FooAction
  | BarAction;


// More details on https://flow.org/en/docs/react/redux/


