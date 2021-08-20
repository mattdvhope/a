import React, { useState, useEffect } from "react";
import YoutubeHolder from "../templates/YoutubeHolder"

const SetInitialVideosAbove = (data) => {
  const orderOfInitialVideo = data.contentfulBlogs.order;
  const [initialVideosAbove, setInitialVideosAbove] = useState(null);

  const edgesArray = data.allContentfulBlogs.edges;
  const edgesAbove = edgesArray.filter(obj => obj.node.order < orderOfInitialVideo);
  const edAbvSorted = edgesAbove.sort((a,b) => a.node.order - b.node.order)
  const twoAbove = edAbvSorted.slice(-2);

  useEffect(() => {
    setInitialVideosAbove(() => 
      <div className="site-container blog-post">
        {twoAbove
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