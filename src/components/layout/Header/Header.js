import React, {useState} from "react";
import * as S from "./style"
import MenuList from "./MenuList";
const Header = () => {

    return (
        <S.Header>
            <MenuList/>
        </S.Header>
    )
}
export default Header;