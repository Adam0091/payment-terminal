import { TValueInputs } from "../type"

const api_host = process.env.API_HOST

export const postPayment = async (inputValues: TValueInputs) => {
  const res = await fetch(`${api_host}/api/pay`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      tel: inputValues.tel,
      sum: inputValues.sum,
    }),
  })

  return res
}

export const getProviders = async () => {
  const response = await fetch(`${api_host}/api/providers`)
  const dataGet = await response.json()
  return dataGet
}

export const addNewProviders = async (
  id: number,
  name: string,
  logo: string,
) => {
  const dataPost = await fetch(`${api_host}/api/providers`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
      name,
      logo,
    }),
  })
  return dataPost
}
