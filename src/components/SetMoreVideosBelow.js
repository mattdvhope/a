import React, { useState, useLayoutEffect } from "react";
import YoutubeHolder from "../templates/YoutubeHolder"

const SetMoreVideosBelow = (data) => {
  const orderOfInitialVideo = data.contentfulBlogs.order;
  const [moreVideosBelow, setMoreVideosBelow] = useState(null);

  const edgesArray = data.allContentfulBlogs.edges;
  const edgesBelow = edgesArray.filter(obj => obj.node.order > orderOfInitialVideo);
  const edBlwSorted = edgesBelow.sort((a,b) => a.node.order - b.node.order)
  edBlwSorted.shift(1);

  useLayoutEffect(() => {
    if (edBlwSorted) { // in case there are no more videos below
      setMoreVideosBelow(() => 
        <div className="site-container blog-post">
          {edBlwSorted
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
    }
  }, []);

  return [moreVideosBelow, setMoreVideosBelow];

};

export default SetMoreVideosBelow;