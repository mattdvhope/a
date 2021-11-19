import { useEffect } from "react";
import { navigate } from "gatsby"

const VideosPage = () => {
  useEffect(() => {
    navigate("/eating-the-fruit")
  }, []); // useEffect
  return null;
}

export default VideosPage;