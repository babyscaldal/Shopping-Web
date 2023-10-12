import { FormProvider, useForm } from "react-hook-form"
import CustomCheckbox from "./CustomCheckbox"
import { availabilityOptions, sizeOptions } from "../data/checkboxData"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { SubTitle } from "../pages/OurStore"
import Color from "./Colors"
import { Button } from "@mui/material"
import CustomTextField from "./CustomTextField"

const numberRegex = /^[0-9]+$/

const priceValueSchema = z.object({
  maxPrice: z.string().refine((value) => numberRegex.test(value), {
    message: "Must be number",
  }),
  minPrice: z.string().refine((value) => numberRegex.test(value), {
    message: "Must be number",
  }),
  availability: z.string().array().optional(),
  size: z.string().array().optional(),
})

export default function FilterSideBarForm() {
  const form = useForm({
    defaultValues: { availability: [], size: [], minPrice: "", maxPrice: "" },
    resolver: zodResolver(priceValueSchema),
  })

  const { handleSubmit, reset } = form

  const onSubmit = (data: any) => {
    console.log(data)
  }
  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SubTitle>Availability</SubTitle>
        <CustomCheckbox options={availabilityOptions} name="availability" />
        <SubTitle>Price</SubTitle>
        <div className="d-flex align-items-center gap-10">
          <CustomTextField
            placeholder="From"
            name="minPrice"
            id="min-price"
            label="From"
            type={"text"}
          />
          <CustomTextField
            placeholder="To"
            name="maxPrice"
            id="max-price"
            label="To"
            type={"text"}
          />
        </div>
        <SubTitle>Colors</SubTitle>
        <div>
          <Color />
        </div>
        <SubTitle>Size</SubTitle>
        <CustomCheckbox options={sizeOptions} name="size" />

        <div className="mt-3">
          <Button
            fullWidth
            color="warning"
            size="small"
            variant="contained"
            type="button"
            onClick={() => {
              reset()
            }}
          >
            Reset
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}
