import { toast } from "react-toastify"

function useFormError(error: string | undefined): void {
  toast.error(error, {
    position: toast.POSITION.BOTTOM_RIGHT,
    theme: "colored",
  })
}

export default useFormError
