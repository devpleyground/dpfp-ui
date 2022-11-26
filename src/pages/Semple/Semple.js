import React from "react";
import * as S from './style';
import {useQuery} from "react-query";
import {exampleCheck, exampleError} from "../../apis/exampleApi";

const Semple = () => {

  const check =  useQuery('check', exampleCheck);
  const error =  useQuery('error', exampleError);

  return(
      <>
        { check.isLoading && '🕛 examples/check : Loading...' }
        { check.error && <S.Error> 🚫 examples/check : An error has occurred:  + check.error.message</S.Error> }
        { check.data && <S.Success> 🚀 examples/check : {check.data}</S.Success> }
        <br/>
        { error.isLoading && '🕛 examples/errormsg : Loading...' }
        { error.error && <S.Error> 🚫 examples/errormsg : An error has occurred:  + {error.error.message}</S.Error> }
        { error.data && <S.Success> 🚀 examples/errormsg : {error.data}</S.Success> }
      </>
  )
}

export default Semple;