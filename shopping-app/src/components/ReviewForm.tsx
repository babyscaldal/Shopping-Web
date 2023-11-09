import { useForm, FormProvider } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import CustomTextAreaField from "./CustomTextAreaField"
import { Rating } from "@mui/material"
import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { currentUserState } from "../app/Redux/users/userSlice"
import {
  postCommentsSingleProduct,
  selectedProductState,
} from "../app/Redux/products/productSlice"
import { IComments } from "../app/Redux/products/productType"

export const reviewFormValueSchema = z.object({
  comments: z.string().min(1, { message: "Comments is required" }),
})

interface ReviewFormValue {
  comments: string
}

export default function ReviewForm() {
  const dispatch = useAppDispatch()
  const form = useForm<ReviewFormValue>({
    defaultValues: { comments: "" },
    resolver: zodResolver(reviewFormValueSchema),
    mode: "onSubmit",
  })

  const [rate, setRate] = useState<number | null>(0)

  const { handleSubmit, reset } = form

  const currentUser = useAppSelector(currentUserState)
  const selectedProduct = useAppSelector(selectedProductState)

  const onSubmit = (data: ReviewFormValue) => {
    let commentData: IComments
    if (currentUser && selectedProduct && rate) {
      commentData = {
        productId: selectedProduct.id,
        content: data.comments,
        rate,
        username: currentUser.user.username,
      }
      dispatch(postCommentsSingleProduct(commentData))
    }
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
            value={rate}
            onChange={(_, newValue) => {
              setRate(newValue)
            }}
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
