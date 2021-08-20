import React, { useState, useLayoutEffect } from "react";
import YoutubeHolder from "../templates/YoutubeHolder"

const SetInitialVideosAbove = (data) => {
  const orderOfInitialVideo = data.contentfulBlogs.order;
  const [initialVideosAbove, setInitialVideosAbove] = useState(null);

  const edgesArray = data.allContentfulBlogs.edges;
  const edgesAbove = edgesArray.filter(obj => obj.node.order < orderOfInitialVideo);
  const edAbvSorted = edgesAbove.sort((a,b) => a.node.order - b.node.order)
  const oneAbove = edAbvSorted.slice(-1);

  useLayoutEffect(() => {
    setInitialVideosAbove(() => 
      <div className="site-container blog-post">
        {oneAbove
          .map(({ node }, i) => (
            <div key={i} className="container">
              <YoutubeHolder data={node} />
              <hr/>
              <hr/>
            </div>
          )
        )}
      </div>
    )
  }, []);

  return [initialVideosAbove, setInitialVideosAbove];

};

export default SetInitialVideosAbove;