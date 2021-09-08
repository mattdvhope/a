import React from "react";
import styled from "styled-components";
import { NotosansNormalMidnight12px, NotosansBoldMidnight14px } from "../../styledMixins";


function Group9() {
  return (
    <Group91>
      <LoremIpsumBlah>Lorem Ipsum Blah</LoremIpsumBlah>
      <SubtitleHere>Subtitle here</SubtitleHere>
    </Group91>
  );
}

const Group91 = styled.div`
  position: absolute;
  width: 132px;
  top: 107px;
  left: 172px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 41px;
`;

const LoremIpsumBlah = styled.div`
  ${NotosansBoldMidnight14px}
  min-height: 19px;
  margin-right: 2px;
  min-width: 130px;
  letter-spacing: 0;
`;

const SubtitleHere = styled.div`
  ${NotosansNormalMidnight12px}
  min-height: 16px;
  margin-top: 6px;
  margin-left: 2px;
  min-width: 74px;
  letter-spacing: 0;
`;

export default Group9;
