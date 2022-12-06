import styled from "styled-components";

export const Frame = styled.div`
    width: 100%;
    max-width: 768px;
    height: calc(var(--vh, 1vh) * 100);
    background-color: ${ props => props.theme.backGroundColor};;
    margin: 0 auto;
    `;