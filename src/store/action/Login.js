import { userToken } from '../Type'


export function setTokenAction (data) {
  return {
    type: userToken,
    value: data
  }
}