import React from "react";

const Home = () => {
  return (
    <>
      HOME <br/>
      deploy_type : {process.env.REACT_APP_DEPLOY_TYPE}
    </>
  )
}
export default Home;