import { useForm, FormProvider } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "react-bootstrap"
import CustomTextAreaField from "./CustomTextAreaField"
import CustomTextField from "./CustomTextField"

const phoneNumberRegex = /^\d{10}$/

export const contactFormValueSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z
    .string()
    .email("Invalid email")
    .min(1, { message: "Email is required" }),
  comments: z.string().min(1, { message: "Comments is required" }),
  tel: z.string().refine((value) => phoneNumberRegex.test(value), {
    message: "Invalid phone number",
  }),
})

export default function ContactForm() {
  const form = useForm({
    defaultValues: { name: "", email: "", tel: "", comments: "" },
    resolver: zodResolver(contactFormValueSchema),
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
        <div className="d-flex flex-column gap-15">
          <CustomTextField
            placeholder="Name"
            label="Name"
            id="contact-form-name"
            name={"name"}
            type="text"
          />
          <CustomTextField
            placeholder="Email"
            label="Email"
            id="contact-form-email"
            name={"email"}
            type="email"
          />
          <CustomTextField
            placeholder="tel"
            label="Tel"
            id="contact-form-tel"
            name={"tel"}
            type="text"
          />
          <CustomTextAreaField
            placeholder="Comments"
            label="Comments"
            id="contact-form-comments"
            name={"comments"}
          />
          <Button type="submit" className="button border-0">
            Submit
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}
