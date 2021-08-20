import React, { useState, useLayoutEffect } from "react";
import YoutubeHolder from "../templates/YoutubeHolder"

//   // To set the first video's position AFTER the DOM loaded...////
const SetInitialVideosAbove = (data) => {
  const slug = data.contentfulBlogs.slug;
  const [videosAbove, setInitialVideosAbove] = useState(null);

  useLayoutEffect(() => {
    setInitialVideosAbove(() => 
      <div className="site-container blog-post">
        {data.allContentfulBlogs.edges
          .filter(edge => edge.node.slug === "i-am")
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

  return [videosAbove, setInitialVideosAbove];

};

export default SetInitialVideosAbove;