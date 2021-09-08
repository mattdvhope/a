import React from "react";
import styled from "styled-components";
import { NotosansBoldCaribbeanGreen26px } from "../../styledMixins";
import "./Menu.css";

function Menu(props) {
  const { group5, place, about, contact } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu screen">
        <OverlapGroup2>
          <OverlapGroup1>
            <Vector src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/61392e3ab35a35de674cfc3f/img/vector@1x.svg" />
            <Path8 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/61392e3ab35a35de674cfc3f/img/path-8-3@2x.svg" />
            <Group5 src={group5} />
            <Rectangle64 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/61392e3ab35a35de674cfc3f/img/rectangle-64@1x.svg" />
            <Group17>
              <OverlapGroup>
                <Group16>
                  <Place>{place}</Place>
                  <About>{about}</About>
                  <Contact>{contact}</Contact>
                </Group16>
                <Line1 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/61392e3ab35a35de674cfc3f/img/line-1@2x.svg" />
                <Line2 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/61392e3ab35a35de674cfc3f/img/line-2@2x.svg" />
              </OverlapGroup>
              <Line3 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/61392e3ab35a35de674cfc3f/img/line-3@2x.svg" />
            </Group17>
            <Group14 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/61392e3ab35a35de674cfc3f/img/group-14@2x.svg" />
          </OverlapGroup1>
          <Group15 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/61392e3ab35a35de674cfc3f/img/group-15-3@2x.svg" />
        </OverlapGroup2>
      </div>
    </div>
  );
}

const OverlapGroup2 = styled.div`
  width: 450px;
  height: 746px;
  position: relative;
  margin-left: -22px;
  margin-top: -8.83px;
`;

const OverlapGroup1 = styled.div`
  position: absolute;
  width: 452px;
  height: 747px;
  top: -1px;
  left: -1px;
`;

const Vector = styled.img`
  position: absolute;
  width: 414px;
  height: 736px;
  top: 9px;
  left: 23px;
`;

const Path8 = styled.img`
  position: absolute;
  width: 452px;
  height: 103px;
  top: 0;
  left: 0;
`;

const Group5 = styled.img`
  position: absolute;
  width: 1px;
  height: 1px;
  top: 51px;
  left: 374px;
`;

const Rectangle64 = styled.img`
  position: absolute;
  width: 416px;
  height: 646px;
  top: 101px;
  left: 21px;
`;

const Group17 = styled.div`
  position: absolute;
  width: 121px;
  top: 262px;
  left: 165px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 222px;
`;

const OverlapGroup = styled.div`
  width: 122px;
  height: 200px;
  position: relative;
  margin-left: -0.28px;
`;

const Group16 = styled.div`
  ${NotosansBoldCaribbeanGreen26px}
  position: absolute;
  width: 119px;
  top: 0;
  left: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 200px;
`;

const Place = styled.h1`
  text-align: center;
  width: 125px;
  min-height: 39px;
  margin-right: 2.9px;
  letter-spacing: 0;
`;

const About = styled.h1`
  text-align: center;
  width: 119px;
  min-height: 39px;
  margin-top: 27px;
  margin-right: 2.9px;
  text-align: center;
  letter-spacing: 0;
`;

const Contact = styled.h1`
  text-align: center;
  width: 155px;
  min-height: 39px;
  margin-top: 19px;
  margin-right: 4px;
  text-align: center;
  letter-spacing: 0;
`;

const Line1 = styled.img`
  width: 122px;
  height: 2px;
  margin-top: 50px;
  left: 0;
`;

const Line2 = styled.img`
  width: 122px;
  height: 2px;
  margin-top: 65px;
  left: 0;
`;

const Line3 = styled.img`
  width: 122px;
  height: 2px;
  margin-top: 20px;
  margin-left: -0.28px;
`;

const Group14 = styled.img`
  position: absolute;
  width: 32px;
  height: 27px;
  top: 37px;
  left: 368px;
`;

const Group15 = styled.img`
  position: absolute;
  width: 58px;
  height: 54px;
  top: 25px;
  left: 59px;
`;

export default Menu;
