import { FormControl, Select } from "@mui/material"
import { useEffect } from "react"
import { Controller, useFormContext } from "react-hook-form"
import {
  sortProductsByAlphabetAZ,
  sortProductsByAlphabetZA,
  sortProductsByPriceHigh,
  sortProductsByPriceLow,
} from "../app/Redux/products/productSlice"
import { useAppDispatch } from "../app/hooks"

interface ICustomSelectField {
  label?: string
  children?: any
  name: string
  width?: string
  onSelectValueChange?: (value: number) => void
}

export default function CustomSelectField({
  width,
  name,
  children,
  label,
  onSelectValueChange,
}: ICustomSelectField) {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange, onBlur } }) => {
        useEffect(() => {
          onSelectValueChange && onSelectValueChange(value)
        }, [value])
        console.log(value)
        return (
          <FormControl fullWidth size="small">
            <Select
              sx={{ width: width ? width : null, backgroundColor: "#fff" }}
              value={value}
              label={label}
              onChange={onChange}
              onBlur={onBlur}
            >
              {children}
            </Select>
          </FormControl>
        )
      }}
    />
  )
}
