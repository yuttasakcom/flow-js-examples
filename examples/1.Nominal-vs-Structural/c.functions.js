// @flow

type Validator = (value: number) => boolean

const service = (value: number, validator: Validator) => {
  if (validator(value)) {
    return 'Valid'
  } else {
    return 'Invalid'
  }
  // do something
}

const isValid = (value: number) => {
  return true
}

const isValid2 = (value: string) => {
  return true
}

const isValid3 = (value) => {
  return value * value
}

service(2, isValid)
// service(2, isValid2)
// service(2, isValid3)


