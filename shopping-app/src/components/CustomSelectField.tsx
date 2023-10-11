import { InputLabel, FormControl, Select } from "@mui/material"
import { Controller, useForm, useFormContext } from "react-hook-form"

interface ICustomSelectField {
  label?: string
  children?: any
  name: string
}

export default function CustomSelectField({
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
        // console.log(value)
        return (
          <FormControl fullWidth size="small">
            <Select
              sx={{ width: "250px" }}
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
