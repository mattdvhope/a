import React, { useEffect } from "react"
import { navigate } from "gatsby"

const IndexPage = () => {
  useEffect(() => {
    navigate("/eating-the-fruit")
  }, []) // useEffect
  return null
}

export default IndexPage
