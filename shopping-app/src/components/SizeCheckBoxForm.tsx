import { FormProvider, useForm } from "react-hook-form"
import CustomCheckbox from "./CustomCheckbox"
import { sizeOptions } from "../data/checkboxData"

export default function SizeCheckBoxForm() {
  const form = useForm({
    defaultValues: { size: [] },
    mode: "all",
  })

  const { handleSubmit } = form

  const onSubmit = (data: any) => {
    console.log(data)
  }
  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomCheckbox options={sizeOptions} name="size" />
      </form>
    </FormProvider>
  )
}
