import { Button } from "@mui/material"
import styled from "styled-components"

const Wrapper = styled.section`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px #0000001a;
  position: sticky;
  top: 150px;
`
const Price = styled.span`
  color: red;
  font-size: 20px;
`
const Title = styled.div`
  height: 57px;
  border-bottom: 1px solid var(--color-777777);
`

export default function CartPayment() {
  return (
    <Wrapper className="home-wrapper-2">
      <Title>
        <h3 className="text-center mb-4">Payment</h3>
      </Title>
      <div className=" my-4 d-flex justify-content-between align-items-center">
        <p className="m-0">Total Price:</p>
        <Price>$100</Price>
      </div>
      <Button fullWidth variant="contained" color="primary">
        Buy Now
      </Button>
    </Wrapper>
  )
}
