import React, { useEffect, useState } from "react";
import { sempleCheckApi } from "../../apis/exampleApis";
import * as S from './style';

const Semple = () => {

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
      <S.Title>innople devpleyground</S.Title>
      <S.Content>semple-check : {date}</S.Content>
    </>
  )
}

export default Semple;