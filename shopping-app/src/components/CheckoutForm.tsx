import { useForm, FormProvider } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Col, Container, Row, Stack } from "react-bootstrap"
import CustomTextAreaField from "./CustomTextAreaField"
import CustomTextField from "./CustomTextField"
import CustomSelectField from "./CustomSelectField"
import { Button, MenuItem } from "@mui/material"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"

export const checkoutFormValueSchema = z.object({
  country: z.string().min(1, { message: "Name is required" }),
  firstName: z.string().min(1, { message: "Name is required" }),
  lastName: z.string().min(1, { message: "Name is required" }),
  address: z.string().min(1, { message: "Name is required" }),
  apartment: z.string().min(1, { message: "Comments is required" }),
  city: z.string().min(1, { message: "Comments is required" }),
  state: z.string().min(1, { message: "Comments is required" }),
  zipCode: z.number().min(1, { message: "ZipCode is required" }),
})

export default function CheckoutForm() {
  const form = useForm({
    defaultValues: {
      country: "default",
      firstName: "",
      lastName: "",
      address: "",
      apartment: "",
      city: "",
      state: "default",
      zipCode: "",
    },
    resolver: zodResolver(checkoutFormValueSchema),
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
        <Container className="p-0">
          <Row>
            <Col xs={12} className="mb-3">
              <CustomSelectField name="country">
                <MenuItem selected disabled value="default">
                  Select Country
                </MenuItem>
              </CustomSelectField>
            </Col>
            <Col xs={6} className="mb-3">
              <CustomTextField
                label="First Name"
                placeholder="First Name"
                name="firstName"
                id="checkout-form-firstName"
                type="text"
              />
            </Col>
            <Col xs={6} className="mb-3">
              <CustomTextField
                label="Last Name"
                placeholder="Last Name"
                name="lastName"
                id="checkout-form-lastName"
                type="text"
              />
            </Col>
            <Col xs={12} className="mb-3">
              <CustomTextField
                label="Address"
                placeholder="Address"
                name="address"
                id="checkout-form-address"
                type="text"
              />
            </Col>
            <Col xs={12} className="mb-3">
              <CustomTextField
                label="Apartment,Suite,etc"
                placeholder="Apartment"
                name="apartment"
                id="checkout-form-apartment"
                type="text"
              />
            </Col>
            <Col xs={4} className="mb-3">
              <CustomTextField
                label="City"
                placeholder="City"
                name="city"
                id="checkout-form-city"
                type="text"
              />
            </Col>
            <Col xs={4} className="mb-3">
              <CustomSelectField name="state">
                <MenuItem selected disabled value="default">
                  Select State
                </MenuItem>
              </CustomSelectField>
            </Col>
            <Col xs={4}>
              <CustomTextField
                label="ZipCode"
                placeholder="ZIPCode"
                name="zipCode"
                id="checkout-form-zipCode"
                type="text"
              />
            </Col>
          </Row>
          <div className="d-flex justify-content-between my-3">
            <Button startIcon={<ArrowBackIosIcon />} variant="text">
              Return to cart
            </Button>
            <Button variant="contained" type="submit">
              Continue to shipping
            </Button>
          </div>
        </Container>
      </form>
    </FormProvider>
  )
}
