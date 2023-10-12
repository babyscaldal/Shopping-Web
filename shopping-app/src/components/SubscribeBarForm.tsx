import { useForm, FormProvider } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import AddAlertIcon from "@mui/icons-material/AddAlert"
import CustomOutLineInputField from "./CustomOutLineInputField"

export const subscribeValueSchema = z.object({
  subscribe: z
    .string()
    .email("Invalid email")
    .min(1, { message: "Email is required" }),
})

export default function SubscribeBarForm() {
  const form = useForm({
    defaultValues: { subscribe: "" },
    resolver: zodResolver(subscribeValueSchema),
    mode: "all",
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
          placeholder="Your Email Address"
          id="subscribe"
          name={"subscribe"}
          type="email"
        >
          <AddAlertIcon />
        </CustomOutLineInputField>
      </form>
    </FormProvider>
  )
}
