import React, { useState, useLayoutEffect, useRef } from "react";
import YoutubeHolder from "../templates/YoutubeHolder"

const SetInitialVideosBelow = (data) => {
  const initVidBlwRef = useRef(null);

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
            <div key={i} className="container this-eol" ref={initVidBlwRef}>
              <YoutubeHolder data={node} />
            </div>
          )
        )}
      </div>
    )
  }, []);

  return [initialVideosBelow, setInitialVideosBelow, initVidBlwRef];

};

export default SetInitialVideosBelow;