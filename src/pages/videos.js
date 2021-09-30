import React, { useEffect } from "react";
import { navigate } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const VideosPage = () => {
  useEffect(() => {
    navigate("/eating-the-fruit")
  }, []); // useEffect
  return null;
}

export default VideosPage;