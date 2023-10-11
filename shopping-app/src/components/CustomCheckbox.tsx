import { Form } from "react-bootstrap"
import { Controller, useFormContext } from "react-hook-form"
import { IOption } from "../data/checkboxData"

interface ICustomCheckbox {
  options: IOption[]
  name: string
}

export default function CustomCheckbox({ options, name }: ICustomCheckbox) {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => {
        // console.log(value)
        return (
          <>
            {options.map((option, index) => {
              const isHas = value.some((item: any) => item === option.value)
              return (
                <Form.Check
                  checked={isHas}
                  className="z-0"
                  id={option.label}
                  key={index}
                  type="checkbox"
                  label={option.label}
                  value={value}
                  onChange={() => {
                    if (!isHas) {
                      onChange([...value, option.value])
                    } else if (isHas) {
                      onChange(
                        value.filter((item: any) => item !== option.value),
                      )
                    }
                  }}
                />
              )
            })}
          </>
        )
      }}
    />
  )
}
