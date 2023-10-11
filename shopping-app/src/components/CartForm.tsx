import { useForm, FormProvider } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import CountInputField from "./CountInputField"

export const quantityValueSchema = z.object({
  quantity: z.string().email().min(1, { message: "Email is required" }),
})

export default function CartForm() {
  const form = useForm({
    defaultValues: { quantity: "1" },
    resolver: zodResolver(quantityValueSchema),
    mode: "onSubmit",
  })

  const { handleSubmit, reset } = form

  const onSubmit = (data: any) => {
    console.log(data)
    reset()
  }

  return (
    <FormProvider {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="d-flex flex-column gap-15"
      >
        <CountInputField id={"cart-form-quantity"} name={"quantity"} />
      </form>
    </FormProvider>
  )
}
