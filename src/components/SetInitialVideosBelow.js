import React, { useState, useLayoutEffect } from "react";
import YoutubeHolder from "../templates/YoutubeHolder"
import SetVideos from "./SetVideos"

const SetInitialVideosBelow = (data) => {



  const slug = data.contentfulBlogs.slug;
  const [initialVideosBelow, setInitialVideosBelow] = useState(null);

  useLayoutEffect(() => {
    setInitialVideosBelow(() =>
      <div className="site-container blog-post">
        {data.allContentfulBlogs.edges
          .filter(obj => obj.node.slug === "doubting-thomas")
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

  return [initialVideosBelow, setInitialVideosBelow];

};

export default SetInitialVideosBelow;