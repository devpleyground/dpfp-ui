import React, {useEffect} from "react";
import Header from "./Header/Header";
import theme from "../../styles/theme";
import * as S from "./style";

const Layout = ({children}) => {
    useEffect(() => {
        document.body.style.background = theme.backDropColor
    });

  return (
    <S.Frame>
      <Header />
        {children}
    </S.Frame>
  )
}
export default Layout;