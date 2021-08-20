import React, { useState, useLayoutEffect } from "react";
import YoutubeHolder from "../templates/YoutubeHolder"
import SetVideos from "./SetVideos"

const SetInitialVideosAbove = (data) => {
  const [initialVideosAbove, setInitialVideosAbove] = useState(null);

  const allVideos = [{slug: "eating-the-fruit", topic: "faith"}, {slug: "who-is-jesus", topic: "faith"}, {slug: "walk-water", topic: "faith"}, {slug: "five-thousand", topic: "faith"}, {slug: "heals-son", topic: "faith"}, {slug: "man-walks", topic: "faith"}, {slug: "water-to-wine", topic: "faith"}, {slug: "mercy-jesus", topic: "faith"}, {slug: "blind-see", topic: "hope"}, {slug: "i-am", topic: "hope"}, {slug: "good-shepherd", topic: "hope"}, {slug: "raising-lazarus", topic: "hope"}, {slug: "triumphal-entry", topic: "hope"}, {slug: "voice-from-heaven", topic: "hope"}, {slug: "i-have-chosen-you", topic: "hope"}, {slug: "abide-in-me", topic: "hope"}, {slug: "arresting-jesus", topic: "love"}, {slug: "trial-of-jesus-1", topic: "love"}, {slug: "trial-of-jesus-2", topic: "love"}, {slug: "dies-on-cross", topic: "love"}, {slug: "jesus-risen", topic: "love"}, {slug: "jesus-appears", topic: "love"}, {slug: "many-fish", topic: "love"}, {slug: "doubting-thomas", topic: "love"}, {slug: "many-fish", topic: "love"}]
console.log(allVideos.filter(vid => vid.topic === "faith"));
  const slug = data.contentfulBlogs.slug;

  useLayoutEffect(() => {
    setInitialVideosAbove(() => 
      <div className="site-container blog-post">
        {data.allContentfulBlogs.edges
          .filter(obj => obj.node.slug === "i-am")
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

  return [initialVideosAbove, setInitialVideosAbove];

};

export default SetInitialVideosAbove;