import { useForm, FormProvider } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@mui/material"
import { NavLink, useNavigate } from "react-router-dom"
import CustomTextField from "./CustomTextField"
import PasswordField from "./PasswordField"

export const signUpValueSchema = z
  .object({
    email: z.string().email().min(1, { message: "Email is required" }),
    username: z.string().min(1, { message: "Username is required" }),
    password: z
      .string()
      .min(8, { message: "The password must be least 8 characters long." }),
    confirmPassword: z
      .string()
      .min(8, { message: "The password must be at least 8 characters long." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords and Confirm Password does not match.",
    path: ["confirmPassword"],
  })

export default function SignUpForm() {
  const navigate = useNavigate()
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      username: "",
      confirmPassword: "",
    },
    resolver: zodResolver(signUpValueSchema),
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
        <CustomTextField
          label="Username"
          placeholder="Username"
          type="text"
          id={"signup-username"}
          name="username"
        />
        <CustomTextField
          label="Email"
          placeholder="Email"
          type="text"
          id={"signup-email"}
          name="email"
        />
        <PasswordField
          label="Password"
          placeholder="Password"
          id="signup-password"
          name="password"
        />
        <PasswordField
          label="Confirm Password"
          placeholder="Confirm Password"
          id="signup-confirmPassword"
          name="confirmPassword"
        />
        <div className="mt-2 d-flex justify-content-center gap-15 align-items-center">
          <Button fullWidth type="submit" variant="contained" color="success">
            Register
          </Button>
          <Button
            fullWidth
            onClick={() => {
              navigate("/login")
            }}
            type="button"
            variant="contained"
            color="error"
          >
            Cancel
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}
