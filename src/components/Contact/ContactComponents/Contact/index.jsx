import React from "react";
import Group9 from "../Group9";
import styled from "styled-components";
import { NotosansBoldWhite26px, NotosansNormalWhite12px, NotosansBoldMidnight14px } from "../../styledMixins";
import "./Contact.css";

function Contact(props) {
  const { group5, chat, text1, followUs, title, messenger, facebookCircularLogo } = props;

  return (
    <div className="container-center-horizontal">
      <div className="contact screen">
        <OverlapGroup1>
          <OverlapGroup>
            <Vector src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/61392e3ab35a35de674cfc3f/img/vector@1x.svg" />
            <Rectangle1 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/61392e3ab35a35de674cfc3f/img/rectangle-1@1x.svg" />
            <Rectangle37 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/61392e3ab35a35de674cfc3f/img/rectangle-37@2x.svg" />
            <Rectangle48 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/61392e3ab35a35de674cfc3f/img/rectangle-48@2x.svg" />
            <Rectangle38 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/61392e3ab35a35de674cfc3f/img/rectangle-38@2x.svg" />
            <Rectangle47 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/61392e3ab35a35de674cfc3f/img/rectangle-47@2x.svg" />
            <Rectangle46 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/61392e3ab35a35de674cfc3f/img/rectangle-46@2x.svg" />
            <Rectangle42 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/61392e3ab35a35de674cfc3f/img/rectangle-42@2x.svg" />
            <Rectangle39 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/61392e3ab35a35de674cfc3f/img/rectangle-39@2x.svg" />
            <Rectangle49 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/61392e3ab35a35de674cfc3f/img/rectangle-49@2x.svg" />
            <Rectangle45 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/61392e3ab35a35de674cfc3f/img/rectangle-45@2x.svg" />
            <Rectangle44 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/61392e3ab35a35de674cfc3f/img/rectangle-44@2x.svg" />
            <Rectangle40 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/61392e3ab35a35de674cfc3f/img/rectangle-40@2x.svg" />
            <Rectangle43 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/61392e3ab35a35de674cfc3f/img/rectangle-43@2x.svg" />
            <Rectangle41 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/61392e3ab35a35de674cfc3f/img/rectangle-41@2x.svg" />
            <Rectangle51 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/61392e3ab35a35de674cfc3f/img/rectangle-51@2x.svg" />
            <Path8 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/61392e3ab35a35de674cfc3f/img/path-8@2x.svg" />
            <Rectangle3 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/61392e3ab35a35de674cfc3f/img/rectangle-3@2x.svg" />
            <Group5 src={group5} />
            <Group11 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/61392e3ab35a35de674cfc3f/img/group-11@2x.svg" />
            <Group9 />
            <Rectangle63 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/61392e3ab35a35de674cfc3f/img/rectangle-63@2x.svg" />
            <Chat>{chat}</Chat>
            <Text1>{text1}</Text1>
            <FollowUs>{followUs}</FollowUs>
            <Title>{title}</Title>
            <Messenger src={messenger} />
            <FacebookCircularLogo src={facebookCircularLogo} />
          </OverlapGroup>
          <Group15 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/61392e3ab35a35de674cfc3f/img/group-15@2x.svg" />
        </OverlapGroup1>
      </div>
    </div>
  );
}

const OverlapGroup1 = styled.div`
  width: 522px;
  height: 798px;
  position: relative;
  margin-left: -53px;
  margin-top: -8.83px;
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 516px;
  height: 799px;
  top: -1px;
  left: -1px;
`;

const Vector = styled.img`
  position: absolute;
  width: 414px;
  height: 736px;
  top: 9px;
  left: 54px;
`;

const Rectangle1 = styled.img`
  position: absolute;
  width: 452px;
  height: 623px;
  top: 146px;
  left: 31px;
`;

const Rectangle37 = styled.img`
  position: absolute;
  width: 106px;
  height: 105px;
  top: 87px;
  left: 207px;
`;

const Rectangle48 = styled.img`
  position: absolute;
  width: 106px;
  height: 105px;
  top: 641px;
  left: 188px;
`;

const Rectangle38 = styled.img`
  position: absolute;
  width: 106px;
  height: 105px;
  top: 164px;
  left: 260px;
`;

const Rectangle47 = styled.img`
  position: absolute;
  width: 106px;
  height: 106px;
  top: 691px;
  left: 241px;
`;

const Rectangle46 = styled.img`
  position: absolute;
  width: 106px;
  height: 96px;
  top: 573px;
  left: 53px;
`;

const Rectangle42 = styled.img`
  position: absolute;
  width: 106px;
  height: 106px;
  top: 309px;
  left: 410px;
`;

const Rectangle39 = styled.img`
  position: absolute;
  width: 105px;
  height: 106px;
  top: 166px;
  left: 156px;
`;

const Rectangle49 = styled.img`
  position: absolute;
  width: 105px;
  height: 106px;
  top: 693px;
  left: 137px;
`;

const Rectangle45 = styled.img`
  position: absolute;
  width: 96px;
  height: 105px;
  top: 362px;
  left: 362px;
`;

const Rectangle44 = styled.img`
  position: absolute;
  width: 106px;
  height: 105px;
  top: 295px;
  left: 0;
`;

const Rectangle40 = styled.img`
  position: absolute;
  width: 106px;
  height: 105px;
  top: 217px;
  left: 209px;
`;

const Rectangle43 = styled.img`
  position: absolute;
  width: 106px;
  height: 106px;
  top: 346px;
  left: 53px;
`;

const Rectangle41 = styled.img`
  position: absolute;
  width: 101px;
  height: 106px;
  top: 465px;
  left: 362px;
`;

const Rectangle51 = styled.img`
  position: absolute;
  width: 101px;
  height: 106px;
  top: 452px;
  left: 192px;
`;

const Path8 = styled.img`
  position: absolute;
  width: 452px;
  height: 103px;
  top: 0;
  left: 31px;
`;

const Rectangle3 = styled.img`
  position: absolute;
  width: 452px;
  height: 77px;
  top: 102px;
  left: 31px;
`;

const Group5 = styled.img`
  position: absolute;
  width: 1px;
  height: 1px;
  top: 51px;
  left: 405px;
`;

const Group11 = styled.img`
  position: absolute;
  width: 341px;
  height: 45px;
  top: 118px;
  left: 91px;
`;

const Rectangle63 = styled.img`
  position: absolute;
  width: 452px;
  height: 356px;
  top: 413px;
  left: 31px;
`;

const Chat = styled.div`
  ${NotosansBoldMidnight14px}
  position: absolute;
  width: 38px;
  top: 530px;
  left: 239px;
  letter-spacing: 0;
`;

const Text1 = styled.p`
  position: absolute;
  width: 233px;
  top: 287px;
  left: 142px;
  font-family: var(--font-family-noto_sans);
  font-weight: 700;
  color: var(--caribbean-green);
  font-size: var(--font-size-l2);
  text-align: center;
  letter-spacing: 0;
`;

const FollowUs = styled.div`
  ${NotosansNormalWhite12px}
  position: absolute;
  width: 61px;
  top: 654px;
  left: 232px;
  letter-spacing: 0;
`;

const Title = styled.h1`
  ${NotosansBoldWhite26px}
  position: absolute;
  width: 158px;
  top: 237px;
  left: 177px;
  letter-spacing: 0;
`;

const Messenger = styled.img`
  position: absolute;
  width: 62px;
  height: 62px;
  top: 457px;
  left: 230px;
`;

const FacebookCircularLogo = styled.img`
  position: absolute;
  width: 61px;
  height: 62px;
  top: 579px;
  left: 230px;
`;

const Group15 = styled.img`
  position: absolute;
  width: 340px;
  height: 54px;
  top: 25px;
  left: 90px;
`;

export default Contact;
