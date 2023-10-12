import { useForm, FormProvider } from "react-hook-form"
import CustomSelectField from "./CustomSelectField"
import { selectFilterData } from "../data/data"
import { MenuItem } from "@mui/material"

export default function SortBarForm() {
  const form = useForm({
    defaultValues: { sort: 0 },
    mode: "all",
  })

  const { handleSubmit } = form

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomSelectField width="250px" name={"sort"}>
          {selectFilterData.map((item, index) => (
            <MenuItem key={index} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </CustomSelectField>
      </form>
    </FormProvider>
  )
}
