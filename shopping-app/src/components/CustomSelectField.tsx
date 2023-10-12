import { FormControl, Select } from "@mui/material"
import { Controller, useFormContext } from "react-hook-form"

interface ICustomSelectField {
  label?: string
  children?: any
  name: string
  width?: string
}

export default function CustomSelectField({
  width,
  name,
  children,
  label,
}: ICustomSelectField) {
  const { control } = useFormContext()
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange, onBlur } }) => {
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
