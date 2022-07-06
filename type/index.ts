export type providerType = {
  id: number
  name: string
  logo: string
}

export type activeType = {
  isActive: boolean
  setIsActive: Function
}

export type inputType = {
  value: string
  onChange: Function
  setError: Function
}
