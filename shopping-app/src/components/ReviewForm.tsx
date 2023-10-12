import { useForm, FormProvider } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import CustomTextAreaField from "./CustomTextAreaField"
import { Rating } from "@mui/material"

export const reviewFormValueSchema = z.object({
  comments: z.string().min(1, { message: "Comments is required" }),
})

export default function ReviewForm() {
  const form = useForm({
    defaultValues: { comments: "" },
    resolver: zodResolver(reviewFormValueSchema),
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
        <div>
          <Rating
            size="small"
            name="simple-controlled"
            value={5}
            // onChange={(event, newValue) => {
            //   setValue(newValue)
            // }}
          />
        </div>
        <div>
          <CustomTextAreaField
            placeholder="Comments"
            label="Comments"
            id="review-form-comments"
            name="comments"
          />
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="button border-0">
            Submit Review
          </button>
        </div>
      </form>
    </FormProvider>
  )
}
