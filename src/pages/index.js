<<<<<<< Updated upstream
import { useEffect } from "react";
=======
import React, { useEffect } from "react"
>>>>>>> Stashed changes
import { navigate } from "gatsby"

const IndexPage = () => {
  useEffect(() => {
    navigate("/eating-the-fruit")
  }, []) // useEffect
  return null
}

export default IndexPage
