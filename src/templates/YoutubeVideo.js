import React from "react"

const YoutubeVideo = ({src}) => {
	return (
		<iframe // Youtube video 
      id="FrameHolder"
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        height: `49vw`,
        width: `81vw`,
      }}
      src={src}
      title="Relationships Thailand"
      frameBorder="0"
      allowFullScreen
    />
  )
}

export default YoutubeVideo
