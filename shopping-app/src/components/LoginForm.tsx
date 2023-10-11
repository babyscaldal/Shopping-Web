import { useForm, FormProvider } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@mui/material"
import { NavLink, useNavigate } from "react-router-dom"
import PasswordField from "./PasswordField"
import EmailField from "./CustomTextField"

export const loginValueSchema = z.object({
  emailLogin: z.string().email().min(1, { message: "Email is required" }),
  passwordLogin: z
    .string()
    .min(8, { message: "The password must be least 8 characters long." }),
})

export default function LoginForm() {
  const form = useForm({
    defaultValues: { emailLogin: "", passwordLogin: "" },
    resolver: zodResolver(loginValueSchema),
    mode: "onSubmit",
  })

  const navigate = useNavigate()
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
        <EmailField
          label="Email"
          placeholder="Email"
          id={"login-email"}
          type="Email"
          name="emailLogin"
        />
        <PasswordField
          label="Password"
          placeholder="Password"
          id="login-password"
          name="passwordLogin"
        />
        <div className="d-flex justify-content-between align-items-center">
          <NavLink
            style={{
              fontSize: "14px",
              fontWeight: "400",
              color: "blue",
            }}
            to="/forgot-password"
          >
            Forgot Password?
          </NavLink>
        </div>
        <div className="mt-2 d-flex justify-content-center gap-15 align-items-center">
          <Button type="submit" variant="contained" color="success" fullWidth>
            Log In
          </Button>
          <Button
            onClick={() => navigate("/signup")}
            fullWidth
            type="button"
            variant="contained"
            color="warning"
          >
            Sign Up
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}
