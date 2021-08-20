import React, { useState, useLayoutEffect } from "react";
import YoutubeHolder from "../templates/YoutubeHolder"

//   // To set the first video's position AFTER the DOM loaded...////
const SetInitialVideosBelow = (data) => {
  const slug = data.contentfulBlogs.slug;
  const [evenMoreVideos, setInitialVideosBelow] = useState(null);

  useLayoutEffect(() => {
    setInitialVideosBelow(() =>
      <div className="site-container blog-post">
        {data.allContentfulBlogs.edges
          .filter(edge => edge.node.slug === "doubting-thomas")
          .map(({ node }, i) => (
            <div key={i} className="container">
              <YoutubeHolder data={node} />
              <br/>
              <hr/>
              <hr/>
            </div>
          )
        )}
      </div>
    )
  }, []);

  return [evenMoreVideos, setInitialVideosBelow];

};

export default SetInitialVideosBelow;