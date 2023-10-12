export interface IOption {
  value: string
  label: string
}

export const availabilityOptions: IOption[] = [
  { value: "in-stock", label: "In Stock (1)" },
  { value: "out-of-stock", label: "Out of Stock (1)" },
]

export const sizeOptions: IOption[] = [
  { value: "size-s", label: "S (2)" },
  { value: "size-m", label: "M (2)" },
]
