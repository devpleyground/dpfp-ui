import React, {useState} from "react";
import * as S from "./style";
import {HomeFilled, HomeOutlined, UnorderedListOutlined, UpCircleFilled, UpCircleOutlined} from "@ant-design/icons";
import MenuItem from "./MenuItem";

const MenuList = () => {

    return (
        <S.MenuList>
            <MenuItem id = "home" name = "홈" link = "/" defaultIcon = { HomeOutlined } selectedIcon = { HomeFilled } />
            <MenuItem id = "menu1" name = "메뉴1" link = "/semple" defaultIcon = { UpCircleOutlined } selectedIcon = { UpCircleFilled } />
            <MenuItem id = "menu2" name = "메뉴2" link = "/menu02" defaultIcon = { UpCircleOutlined } selectedIcon = { UpCircleFilled } />
            <MenuItem id = "menu3" name = "메뉴3" link = "/menu03" defaultIcon = { UpCircleOutlined } selectedIcon = { UpCircleFilled } />
        </S.MenuList>
    )
}
export default MenuList;