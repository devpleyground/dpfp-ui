import React, {useEffect, useState} from "react";
import * as S from "./style";
import {useRecoilState} from "recoil";
import {currentMenu} from "../../../recoil/atoms/header";

const MenuItem = (props) => {

    const {id, name, link, defaultIcon, selectedIcon} = props

    const [menu, setMenu] = useRecoilState(currentMenu);
    const [current, setCurrent] = useState(false);

    useEffect(()=>{
        setCurrent(menu === props.id)
    },[menu])

    const onclickNavItem = () => {
       setMenu(id);
    }

    return (
        <S.MenuLink to={link}>
            <S.MenuItem onClick={onclickNavItem} current={current}>
                <S.MenuIcon>
                    { current ? selectedIcon.render() : defaultIcon.render() }
                </S.MenuIcon>
                <S.MenuName>{name}</S.MenuName>
            </S.MenuItem>
        </S.MenuLink>
    )
}
export default MenuItem;