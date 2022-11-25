import React from "react";
import Header from "./Header/Header";

const Layout = ({children}) => {
  return (
    <>
      <Header /> <br/>
      {children}
    </>
  )
}
export default Layout;