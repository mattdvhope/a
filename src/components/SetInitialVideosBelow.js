import React, { useState, useLayoutEffect } from "react";
import YoutubeHolder from "../templates/YoutubeHolder"

const SetInitialVideosBelow = (data) => {
  const orderOfInitialVideo = data.contentfulBlogs.order;
  const [initialVideosBelow, setInitialVideosBelow] = useState(null);

  const edgesArray = data.allContentfulBlogs.edges;
  const edgesBelow = edgesArray.filter(obj => obj.node.order > orderOfInitialVideo);
  const edAbvSorted = edgesBelow.sort((a,b) => a.node.order - b.node.order)
  const oneBelow = edAbvSorted.slice(0, 1);

  useLayoutEffect(() => {
    setInitialVideosBelow(() =>
      <div className="site-container blog-post">
        {oneBelow
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

  return [initialVideosBelow, setInitialVideosBelow];

};

export default SetInitialVideosBelow;