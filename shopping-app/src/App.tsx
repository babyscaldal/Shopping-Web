import { BrowserRouter, Route, Routes } from "react-router-dom"
import { publicRoutes } from "./routes/routes"
import "bootstrap/dist/css/bootstrap.min.css"
import GlobalStyles from "./style/GlobalStyle"
import { useAppSelector } from "./app/hooks"
import { usersSaved } from "./app/Redux/users/userSlice"
import { useLocalStorageState } from "./hooks/useLocalStorage"

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles>
        <Routes>
          {publicRoutes.map((route, index) => {
            const path = route.path
            const Element = route.element
            return (
              <Route key={index} path={path} element={<Element />}>
                {route.children &&
                  route.children.map((item, index) => {
                    const Child = item.element
                    const childPath = item.path
                    return (
                      <Route
                        path={childPath}
                        key={index}
                        index={item.isIndex}
                        element={<Child />}
                      />
                    )
                  })}
              </Route>
            )
          })}
        </Routes>
      </GlobalStyles>
    </BrowserRouter>
  )
}

export default App
