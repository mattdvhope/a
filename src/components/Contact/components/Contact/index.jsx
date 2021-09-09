import React from "react";
import styled from "styled-components";
import { NotosansBoldWhite26px } from "../../styledMixins";
import "./Contact.css";

function Contact(props) {
  const { group5, chat, text1, followUs, title, messenger, facebookCircularLogo } = props;

  return (
    <div className="container-center-horizontal">
      <div className="contact screen">
        <OverlapGroup>
          <Vector src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/6139d253299db253c7955b40/img/vector@1x.svg" />
          <Rectangle1 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/6139d253299db253c7955b40/img/rectangle-1@1x.svg" />
          <Rectangle37 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/6139d253299db253c7955b40/img/rectangle-37@2x.svg" />
          <Rectangle48 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/6139d253299db253c7955b40/img/rectangle-48@2x.svg" />
          <Rectangle38 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/6139d253299db253c7955b40/img/rectangle-38@2x.svg" />
          <Rectangle47 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/6139d253299db253c7955b40/img/rectangle-47@2x.svg" />
          <Rectangle46 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/6139d253299db253c7955b40/img/rectangle-46@2x.svg" />
          <Rectangle42 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/6139d253299db253c7955b40/img/rectangle-42@2x.svg" />
          <Rectangle39 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/6139d253299db253c7955b40/img/rectangle-39@2x.svg" />
          <Rectangle49 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/6139d253299db253c7955b40/img/rectangle-49@2x.svg" />
          <Rectangle45 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/6139d253299db253c7955b40/img/rectangle-45@2x.svg" />
          <Rectangle44 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/6139d253299db253c7955b40/img/rectangle-44@2x.svg" />
          <Rectangle40 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/6139d253299db253c7955b40/img/rectangle-40@2x.svg" />
          <Rectangle43 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/6139d253299db253c7955b40/img/rectangle-43@2x.svg" />
          <Rectangle41 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/6139d253299db253c7955b40/img/rectangle-41@2x.svg" />
          <Rectangle51 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/6139d253299db253c7955b40/img/rectangle-51@2x.svg" />
          <Group5 src={group5} />
          <GreenRectangle src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/6139d253299db253c7955b40/img/green-rectangle@1x.svg" />
          <Chat>{chat}</Chat>
          <Text1>{text1}</Text1>
          <FollowUs>{followUs}</FollowUs>
          <Title>{title}</Title>
          <Messenger src={messenger} />
          <FacebookCircularLogo src={facebookCircularLogo} />
        </OverlapGroup>
      </div>
    </div>
  );
}

const OverlapGroup = styled.div`
  width: 516px;
  height: 957px;
  position: relative;
  margin-left: -54px;
  margin-top: -104.33px;
`;

const Vector = styled.img`
  position: absolute;
  width: 414px;
  height: 795px;
  top: 104px;
  left: 54px;
`;

const Rectangle1 = styled.img`
  position: absolute;
  width: 479px;
  height: 934px;
  top: 0;
  left: 17px;
`;

const Rectangle37 = styled.img`
  position: absolute;
  width: 106px;
  height: 114px;
  top: 188px;
  left: 207px;
`;

const Rectangle48 = styled.img`
  position: absolute;
  width: 106px;
  height: 113px;
  top: 786px;
  left: 188px;
`;

const Rectangle38 = styled.img`
  position: absolute;
  width: 106px;
  height: 114px;
  top: 271px;
  left: 260px;
`;

const Rectangle47 = styled.img`
  position: absolute;
  width: 106px;
  height: 114px;
  top: 841px;
  left: 241px;
`;

const Rectangle46 = styled.img`
  position: absolute;
  width: 106px;
  height: 104px;
  top: 713px;
  left: 53px;
`;

const Rectangle42 = styled.img`
  position: absolute;
  width: 106px;
  height: 114px;
  top: 428px;
  left: 410px;
`;

const Rectangle39 = styled.img`
  position: absolute;
  width: 105px;
  height: 114px;
  top: 273px;
  left: 156px;
`;

const Rectangle49 = styled.img`
  position: absolute;
  width: 105px;
  height: 114px;
  top: 843px;
  left: 137px;
`;

const Rectangle45 = styled.img`
  position: absolute;
  width: 96px;
  height: 114px;
  top: 485px;
  left: 362px;
`;

const Rectangle44 = styled.img`
  position: absolute;
  width: 106px;
  height: 114px;
  top: 413px;
  left: 0;
`;

const Rectangle40 = styled.img`
  position: absolute;
  width: 106px;
  height: 114px;
  top: 329px;
  left: 209px;
`;

const Rectangle43 = styled.img`
  position: absolute;
  width: 106px;
  height: 114px;
  top: 469px;
  left: 53px;
`;

const Rectangle41 = styled.img`
  position: absolute;
  width: 101px;
  height: 114px;
  top: 597px;
  left: 362px;
`;

const Rectangle51 = styled.img`
  position: absolute;
  width: 101px;
  height: 114px;
  top: 583px;
  left: 192px;
`;

const Group5 = styled.img`
  position: absolute;
  width: 1px;
  height: 1px;
  top: 149px;
  left: 405px;
`;

const GreenRectangle = styled.img`
  position: absolute;
  width: 490px;
  height: 507px;
  top: 442px;
  left: 18px;
`;

const Chat = styled.div`
  position: absolute;
  width: 109px;
  top: 542px;
  left: 223px;
  font-family: var(--font-family-noto_sans);
  font-weight: 700;
  color: var(--white);
  font-size: var(--font-size-xl);
  letter-spacing: 0;
`;

const Text1 = styled.div`
  position: absolute;
  width: 254px;
  top: 300px;
  left: 140px;
  font-family: var(--font-family-noto_sans);
  font-weight: 700;
  color: var(--caribbean-green);
  font-size: var(--font-size-xl);
  text-align: center;
  letter-spacing: 0;
`;

const FollowUs = styled.div`
  position: absolute;
  width: 125px;
  top: 696px;
  left: 204px;
  font-family: var(--font-family-noto_sans);
  color: var(--white);
  font-size: var(--font-size-xl);
  letter-spacing: 0;
`;

const Title = styled.h1`
  ${NotosansBoldWhite26px}
  position: absolute;
  width: 187px;
  top: 245px;
  left: 181px;
  letter-spacing: 0;
`;

const Messenger = styled.img`
  position: absolute;
  width: 60px;
  height: 57px;
  top: 474px;
  left: 230px;
`;

const FacebookCircularLogo = styled.img`
  position: absolute;
  width: 60px;
  height: 59px;
  top: 624px;
  left: 231px;
`;

export default Contact;
