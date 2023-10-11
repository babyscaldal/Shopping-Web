import { useForm, FormProvider } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import SearchIcon from "@mui/icons-material/Search"

import CustomOutLineInputField from "./CustomOutLineInputField"

export const searchValueSchema = z.object({
  search: z.string().min(1, { message: "Product is required" }),
})

export default function SearchBarForm() {
  const form = useForm({
    defaultValues: { search: "" },
    resolver: zodResolver(searchValueSchema),
    mode: "onSubmit",
  })

  const { handleSubmit, reset } = form

  const onSubmit = (data: any) => {
    console.log(data)
    reset()
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomOutLineInputField
          placeholder="Search Products Here..."
          id={"search-product"}
          name={"search"}
        >
          <SearchIcon />
        </CustomOutLineInputField>
      </form>
    </FormProvider>
  )
}
