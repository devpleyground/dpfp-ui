import React, {useEffect} from "react";
import Header from "./Header/Header";
import {Frame} from "./style";
import theme from "../../styles/theme";

const Layout = ({children}) => {
    useEffect(() => {
        document.body.style.background = theme.backDropColor
    });

  return (
    <Frame>
      <Header />
      {children}
    </Frame>
  )
}
export default Layout;