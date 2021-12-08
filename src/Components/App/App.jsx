import React, { useState } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Redirect, Switch } from "react-router"
import { styled } from "@mui/system"
import { Container } from "@mui/material"
import "./App.css"
import MenuAppBar from "../MenuAppBar"
import TabsProvider from "../../context/TabsContext"
import ClassDetails from "../../pages/ClassDetails"
import ClassJoin from "../../pages/ClassJoin"
import SignIn from "../../pages/SignIn"
import SignUp from "../../pages/SignUp"
import SocialLogout from "../Button/GoogleLogoutButton"
import SocialLogin from "../Button/GoogleLoginButton"
import Profile from "../../pages/Profile"
import ClassList from "../../pages/ClassList"
import { ClassroomContextProvider } from "../../context/ClassroomContext"

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
}))

// function checkLoginHomePage(newClassId) {
//   const isLogin = localStorage.getItem('isLogedin');
//   console.log(isLogin);
//   return isLogin? <Homepage newClassId={newClassId} />: <Navigate to="/log-in" replace/>;
// }

function App() {
  const [newClassId, setNewClassId] = useState("")

  return (
    <Router>
      <ClassroomContextProvider>
        <TabsProvider>
          <MenuAppBar handleRender={setNewClassId} />
          <StyledContainer maxWidth="xl">
            <Switch>
              <Route
                exact
                path="/"
                render={() => {
                  if (localStorage.isSocialLogin) {
                    return <ClassList newClassId={newClassId} />
                  } else if (localStorage.isLogin) {
                    return <ClassList newClassId={newClassId} />
                  } else {
                    return <Redirect to="/sign-in" />
                  }
                }}
              />
              {/* <Route exact path ="//forget-password">
              <formEmail/>
            </Route> */}
              <Route exact path="/log-in">
                <SocialLogin />
              </Route>
              <Route exact path="/log-out">
                <SocialLogout />
              </Route>
              <Route exact path="/sign-up">
                <SignUp />
              </Route>
              <Route exact path="/sign-in">
                <SignIn />
              </Route>
              <Route exact path="/classes/*">
                <ClassDetails />
              </Route>
              <Route
                exact
                path="/join-Student/*"
                render={() => {
                  if (localStorage.isSocialLogin) {
                    return <ClassJoin />
                  } else if (localStorage.isLogin) {
                    return <ClassJoin />
                  } else {
                    localStorage.setItem(
                      "previousLocation",
                      window.location.pathname
                    )
                    return <Redirect to="/sign-in" />
                  }
                }}
              />
              <Route
                exact
                path="/join-Teacher/*"
                render={() => {
                  if (localStorage.isSocialLogin) {
                    return <ClassJoin />
                  } else if (localStorage.isLogin) {
                    return <ClassJoin />
                  } else {
                    localStorage.setItem(
                      "previousLocation",
                      window.location.pathname
                    )
                    return <Redirect to="/sign-in" />
                  }
                }}
              />
              <Route exact path="/profile">
                <Profile />
              </Route>
            </Switch>
          </StyledContainer>
        </TabsProvider>
        {/* <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes> */}
      </ClassroomContextProvider>
    </Router>
  )
}

export default App