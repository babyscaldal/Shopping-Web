import styled from "styled-components"
import { ITotalCart } from "../data/data"

interface IServiceItem {
  service: ITotalCart
}

const StyledServiceItem = styled.div``

function ServiceItem({ service }: IServiceItem) {
  const { image, info, title } = service
  return (
    <StyledServiceItem className="d-flex align-items-center gap-10">
      <img src={image} alt="service" />
      <div>
        <h6>{title}</h6>
        <p className="mb-0">{info}</p>
      </div>
    </StyledServiceItem>
  )
}

export default ServiceItem
