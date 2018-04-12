// @flow

type Validator = (value:number) => boolean

const service = (value: number, validator: Validator) => {
    if(validator(value)) {
      return 'Valid'
    } else {
      return 'Invalid'
    }
}

const isValid = (value: number) => {
  return true
}


service(2, isValid)
// service(2)
// const isValid = (value: string) => {
//   return true
// }

