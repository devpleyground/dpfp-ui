import React, { useEffect, useState } from "react";
import { sempleCheckApi } from "../../apis/exampleApis";
import styled from "styled-components";

const Semple = () => {

  const StyledDiv = styled.div`
    color: blue;
    font-size: 2em; 
  `;

  const [date, setDate] = useState(null);

  useEffect( () => {
    getSempleCheck()
  },[])

  const getSempleCheck = async () => {
    try {
      const date = await sempleCheckApi();
      setDate(date);
    } catch (e) {

    }
  }

  return (
    <>
      semple-check : {date}
      <StyledDiv>styled contents</StyledDiv>
    </>
  )
}

export default Semple;