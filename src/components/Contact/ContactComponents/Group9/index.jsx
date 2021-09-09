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
  width: 145px;
  top: 119px;
  left: 190px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 45px;
`;

const LoremIpsumBlah = styled.div`
  ${NotosansBoldMidnight14px}
  width: 143px;
  min-height: 21px;
  margin-right: 2px;
  letter-spacing: 0;
`;

const SubtitleHere = styled.div`
  ${NotosansNormalMidnight12px}
  width: 81px;
  min-height: 18px;
  margin-top: 7px;
  margin-left: 2.42px;
  letter-spacing: 0;
`;

export default Group9;
