import React from "react";
import Header from "./Header/Header";

const Layout = ({children}) => {
  return (
    <>
      <Header /> <br/>
      contents... <br/>
      {children}
    </>
  )
}
export default Layout;