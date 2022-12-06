import React from "react";
import {useQuery} from "react-query";
import {exampleCheck, exampleError} from "../../apis/exampleApi";
import {Error, Success} from "./style";

const Semple = () => {

  const check =  useQuery('check', exampleCheck);
  const error =  useQuery('error', exampleError);

  return(
      <>
        { check.isLoading && '🕛 examples/check : Loading...' }
        { check.error && <Error> 🚫 examples/check : An error has occurred:  + check.error.message</Error> }
        { check.data && <Success> 🚀 examples/check : {check.data}</Success> }
        <br/>
        { error.isLoading && '🕛 examples/errormsg : Loading...' }
        { error.error && <Error> 🚫 examples/errormsg : An error has occurred:  + {error.error.message}</Error> }
        { error.data && <Success> 🚀 examples/errormsg : {error.data}</Success> }
      </>
  )
}

export default Semple;