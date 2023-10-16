import { Col, Container, Dropdown, Row } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import images from "../Image/images"
import { navOption } from "../data/data"
import SearchBarForm from "./SearchBarForm"
import { Badge } from "@mui/material"
import CompareIcon from "@mui/icons-material/Compare"
import PersonIcon from "@mui/icons-material/Person"
import FavoriteIcon from "@mui/icons-material/Favorite"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import { AppBar } from "@mui/material"
import UserLoggedInMenu from "./UserLoggedInMenu"
import { useState } from "react"

const HeaderUpperContainer = styled.div`
  background: var(--color-131921);
  height: 75px;
`

const HeaderBottomContainer = styled.div`
  background-color: var(--color-232f3e);
  height: 75px;
`

const MenuBottom = styled.div``
const MenuLink = styled.div``

const StyledNavLink = styled(NavLink)`
  color: white;
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  letter-spacing: 0.3;
  text-transform: uppercase;
`

const DropdownToggle = styled(Dropdown.Toggle)`
  color: white;
  font-size: 16px;
  line-height: 18px;
  font-weight: 400;
  letter-spacing: 0.3;
  text-transform: uppercase;

  &:focus {
    box-shadow: none;
  }
`

const DropdownMenu = styled(Dropdown.Menu)`
  background-color: var(--color-131921);
  transform: translate3d(0px, 49px, 0px) !important;
  width: 100%;
`

const DropdownItem = styled(Dropdown.Item)`
  font-size: 14px;
  padding: 20px;
  margin-bottom: 3px;
  border-bottom: 1px solid var(--color-3b4149);
  color: #fff;

  &:hover ${StyledNavLink} {
    color: var(--color-131921);
    font-weight: 400;
  }

  &:hover {
    background-color: var(--color-febd69);
  }

  &:active {
    background-color: var(--color-febd69);
  }
`

export default function Header() {
  const [isLogin] = useState(true)
  return (
    <AppBar position="fixed" sx={{ boxShadow: "none" }}>
      <HeaderUpperContainer className="py-3">
        <Container fluid="xxl">
          <Row className="align-items-center justify-content-around">
            <Col xs={2}>
              <h2 className="m-0">
                <NavLink className="text-white" to="/">
                  STORAGE
                </NavLink>
              </h2>
            </Col>
            <Col xs={8}>
              <div className="header-upper-links d-flex align-items-center justify-content-end gap-30">
                <div>
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        fontSize: "18px",
                        color: isActive
                          ? "var(--color-febd69)"
                          : "var(--color-ededed)",
                      }
                    }}
                    to="compare"
                    className="d-flex align-items-center gap-10"
                  >
                    <CompareIcon />
                    <p className="mb-0">Compare</p>
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        fontSize: "18px",
                        color: isActive
                          ? "var(--color-febd69)"
                          : "var(--color-ededed)",
                      }
                    }}
                    to="favorite"
                    className="d-flex align-items-center gap-10"
                  >
                    <Badge
                      badgeContent={50}
                      color="warning"
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                    >
                      <FavoriteIcon />
                    </Badge>
                    <p className="mb-0">Favorite</p>
                  </NavLink>
                </div>
                {/* {isLogin && ( */}
                <div>
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        fontSize: "18px",
                        color: isActive
                          ? "var(--color-febd69)"
                          : "var(--color-ededed)",
                      }
                    }}
                    to="login"
                    className="d-flex align-items-center gap-10"
                  >
                    <PersonIcon />
                    <p className="mb-0">Login</p>
                  </NavLink>
                </div>
                {/* )} */}
                <div>
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        fontSize: isActive ? "16px" : "14px",
                        fontWeight: isActive ? "bolder" : "",
                        color: isActive
                          ? "var(--color-febd69)"
                          : "var(--color-ededed)",
                      }
                    }}
                    to="cart"
                    className="d-flex align-items-center gap-10"
                  >
                    <Badge badgeContent={50} color="warning">
                      <ShoppingCartOutlinedIcon />
                    </Badge>
                  </NavLink>
                </div>
                {/* {!isLogin && ( */}
                <div>
                  <UserLoggedInMenu />
                </div>
                {/* )} */}
              </div>
            </Col>
          </Row>
        </Container>
      </HeaderUpperContainer>
      <HeaderBottomContainer className="py-3">
        <Container fluid="xxl">
          <Row className="align-items-center">
            <Col xs={12}>
              <MenuBottom className="d-flex align-items-center gap-30 justify-content-between">
                <Dropdown>
                  <DropdownToggle
                    className="bg-transparent border-0 gap-15 d-flex align-items-center"
                    variant="success"
                    id="dropdown-basic"
                    size="lg"
                  >
                    <img src={images.menu} alt="menu" />
                    <span className="me-5 d-inline-block">Shop categories</span>
                  </DropdownToggle>

                  <DropdownMenu>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Action</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <MenuLink className="">
                  <div className="d-flex align-items-center gap-15">
                    {navOption.map((link, index) => (
                      <StyledNavLink
                        key={index}
                        to={link.to}
                        style={({ isActive }) => {
                          return {
                            fontSize: "16px",
                            color: isActive
                              ? "var(--color-febd69)"
                              : "var(--color-ededed)",
                          }
                        }}
                      >
                        {link.title}
                      </StyledNavLink>
                    ))}
                  </div>
                </MenuLink>
                <div style={{ flexGrow: 1 }}>
                  <SearchBarForm />
                </div>
              </MenuBottom>
            </Col>
          </Row>
        </Container>
      </HeaderBottomContainer>
    </AppBar>
  )
}
