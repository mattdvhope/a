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
            <Vector src="https://anima-uploads.s3.amazonaws.com/projects/61385c5bb805f6960d684af4/releases/61385cc3b3c4d67a8d5b9038/img/vector@1x.svg" />
            <Rectangle1 src="https://anima-uploads.s3.amazonaws.com/projects/61385c5bb805f6960d684af4/releases/61385cc3b3c4d67a8d5b9038/img/rectangle-1@1x.svg" />
            <Rectangle37 src="https://anima-uploads.s3.amazonaws.com/projects/61385c5bb805f6960d684af4/releases/61385cc3b3c4d67a8d5b9038/img/rectangle-37@2x.svg" />
            <Rectangle48 src="https://anima-uploads.s3.amazonaws.com/projects/61385c5bb805f6960d684af4/releases/61385cc3b3c4d67a8d5b9038/img/rectangle-48@2x.svg" />
            <Rectangle38 src="https://anima-uploads.s3.amazonaws.com/projects/61385c5bb805f6960d684af4/releases/61385cc3b3c4d67a8d5b9038/img/rectangle-38@2x.svg" />
            <Rectangle47 src="https://anima-uploads.s3.amazonaws.com/projects/61385c5bb805f6960d684af4/releases/61385cc3b3c4d67a8d5b9038/img/rectangle-47@2x.svg" />
            <Rectangle46 src="https://anima-uploads.s3.amazonaws.com/projects/61385c5bb805f6960d684af4/releases/61385cc3b3c4d67a8d5b9038/img/rectangle-46@2x.svg" />
            <Rectangle42 src="https://anima-uploads.s3.amazonaws.com/projects/61385c5bb805f6960d684af4/releases/61385cc3b3c4d67a8d5b9038/img/rectangle-42@2x.svg" />
            <Rectangle39 src="https://anima-uploads.s3.amazonaws.com/projects/61385c5bb805f6960d684af4/releases/61385cc3b3c4d67a8d5b9038/img/rectangle-39@2x.svg" />
            <Rectangle49 src="https://anima-uploads.s3.amazonaws.com/projects/61385c5bb805f6960d684af4/releases/61385cc3b3c4d67a8d5b9038/img/rectangle-49@2x.svg" />
            <Rectangle45 src="https://anima-uploads.s3.amazonaws.com/projects/61385c5bb805f6960d684af4/releases/61385cc3b3c4d67a8d5b9038/img/rectangle-45@2x.svg" />
            <Rectangle44 src="https://anima-uploads.s3.amazonaws.com/projects/61385c5bb805f6960d684af4/releases/61385cc3b3c4d67a8d5b9038/img/rectangle-44@2x.svg" />
            <Rectangle40 src="https://anima-uploads.s3.amazonaws.com/projects/61385c5bb805f6960d684af4/releases/61385cc3b3c4d67a8d5b9038/img/rectangle-40@2x.svg" />
            <Rectangle43 src="https://anima-uploads.s3.amazonaws.com/projects/61385c5bb805f6960d684af4/releases/61385cc3b3c4d67a8d5b9038/img/rectangle-43@2x.svg" />
            <Rectangle41 src="https://anima-uploads.s3.amazonaws.com/projects/61385c5bb805f6960d684af4/releases/61385cc3b3c4d67a8d5b9038/img/rectangle-41@2x.svg" />
            <Rectangle51 src="https://anima-uploads.s3.amazonaws.com/projects/61385c5bb805f6960d684af4/releases/61385cc3b3c4d67a8d5b9038/img/rectangle-51@2x.svg" />
            <Path8 src="https://anima-uploads.s3.amazonaws.com/projects/61385c5bb805f6960d684af4/releases/61385cc3b3c4d67a8d5b9038/img/path-8@2x.svg" />
            <Rectangle3 src="https://anima-uploads.s3.amazonaws.com/projects/61385c5bb805f6960d684af4/releases/61385cc3b3c4d67a8d5b9038/img/rectangle-3@2x.svg" />
            <Group5 src={group5} />
            <Group11 src="https://anima-uploads.s3.amazonaws.com/projects/61385c5bb805f6960d684af4/releases/61385cc3b3c4d67a8d5b9038/img/group-11@2x.svg" />
            <Group9 />
            <Rectangle63 src="https://anima-uploads.s3.amazonaws.com/projects/61385c5bb805f6960d684af4/releases/61385cc3b3c4d67a8d5b9038/img/rectangle-63@2x.svg" />
            <Chat>{chat}</Chat>
            <Text1>{text1}</Text1>
            <FollowUs>{followUs}</FollowUs>
            <Title>{title}</Title>
            <Messenger src={messenger} />
            <FacebookCircularLogo src={facebookCircularLogo} />
          </OverlapGroup>
          <Group15 src="https://anima-uploads.s3.amazonaws.com/projects/61385c5bb805f6960d684af4/releases/61385cc3b3c4d67a8d5b9038/img/group-15@2x.svg" />
        </OverlapGroup1>
      </div>
    </div>
  );
}

const OverlapGroup1 = styled.div`
  width: 474px;
  height: 723px;
  position: relative;
  margin-left: -48px;
  margin-top: -8px;
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 467px;
  height: 724px;
  top: 0;
  left: -1px;
`;

const Vector = styled.img`
  position: absolute;
  width: 375px;
  height: 667px;
  top: 8px;
  left: 49px;
`;

const Rectangle1 = styled.img`
  position: absolute;
  width: 408px;
  height: 563px;
  top: 133px;
  left: 29px;
`;

const Rectangle37 = styled.img`
  position: absolute;
  width: 96px;
  height: 95px;
  top: 79px;
  left: 187px;
`;

const Rectangle48 = styled.img`
  position: absolute;
  width: 96px;
  height: 95px;
  top: 580px;
  left: 170px;
`;

const Rectangle38 = styled.img`
  position: absolute;
  width: 96px;
  height: 96px;
  top: 148px;
  left: 236px;
`;

const Rectangle47 = styled.img`
  position: absolute;
  width: 96px;
  height: 96px;
  top: 626px;
  left: 218px;
`;

const Rectangle46 = styled.img`
  position: absolute;
  width: 96px;
  height: 96px;
  top: 514px;
  left: 48px;
`;

const Rectangle42 = styled.img`
  position: absolute;
  width: 96px;
  height: 96px;
  top: 280px;
  left: 371px;
`;

const Rectangle39 = styled.img`
  position: absolute;
  width: 96px;
  height: 95px;
  top: 150px;
  left: 141px;
`;

const Rectangle49 = styled.img`
  position: absolute;
  width: 95px;
  height: 96px;
  top: 628px;
  left: 124px;
`;

const Rectangle45 = styled.img`
  position: absolute;
  width: 96px;
  height: 95px;
  top: 328px;
  left: 324px;
`;

const Rectangle44 = styled.img`
  position: absolute;
  width: 96px;
  height: 96px;
  top: 267px;
  left: 0;
`;

const Rectangle40 = styled.img`
  position: absolute;
  width: 96px;
  height: 96px;
  top: 196px;
  left: 189px;
`;

const Rectangle43 = styled.img`
  position: absolute;
  width: 96px;
  height: 95px;
  top: 314px;
  left: 48px;
`;

const Rectangle41 = styled.img`
  position: absolute;
  width: 95px;
  height: 96px;
  top: 422px;
  left: 326px;
`;

const Rectangle51 = styled.img`
  position: absolute;
  width: 96px;
  height: 96px;
  top: 410px;
  left: 172px;
`;

const Path8 = styled.img`
  position: absolute;
  width: 408px;
  height: 93px;
  top: 0;
  left: 29px;
`;

const Rectangle3 = styled.img`
  position: absolute;
  width: 408px;
  height: 69px;
  top: 92px;
  left: 29px;
`;

const Group5 = styled.img`
  position: absolute;
  width: 1px;
  height: 1px;
  top: 46px;
  left: 367px;
`;

const Group11 = styled.img`
  position: absolute;
  width: 308px;
  height: 40px;
  top: 107px;
  left: 83px;
`;

const Rectangle63 = styled.img`
  position: absolute;
  width: 408px;
  height: 321px;
  top: 375px;
  left: 29px;
`;

const Chat = styled.div`
  ${NotosansBoldMidnight14px}
  position: absolute;
  top: 480px;
  left: 217px;
  letter-spacing: 0;
`;

const Text1 = styled.p`
  position: absolute;
  width: 211px;
  top: 260px;
  left: 129px;
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
  top: 592px;
  left: 211px;
  letter-spacing: 0;
`;

const Title = styled.h1`
  ${NotosansBoldWhite26px}
  position: absolute;
  top: 214px;
  left: 161px;
  letter-spacing: 0;
`;

const Messenger = styled.img`
  position: absolute;
  width: 56px;
  height: 56px;
  top: 414px;
  left: 209px;
`;

const FacebookCircularLogo = styled.img`
  position: absolute;
  width: 55px;
  height: 55px;
  top: 525px;
  left: 209px;
`;

const Group15 = styled.img`
  position: absolute;
  width: 307px;
  height: 48px;
  top: 23px;
  left: 82px;
`;

export default Contact;
