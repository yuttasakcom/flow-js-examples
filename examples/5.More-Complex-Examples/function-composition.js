// @flow
import {flow} from 'lodash'

const add2  = (value: number) => value + 2
const double = (value: number) => value * 2

const calculate = flow(double, add2)
calculate(1)
