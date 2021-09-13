import React from "react";
import styled from "styled-components";
import { detect } from "detect-browser";
import { NotosansBoldWhite26px } from "../../styledMixins";
import "./Contact.css";

function Contact(props) {
  const browser = detect();
  const mobileBrowser = browser.name === "chromium-webview" || browser.name === "node" || browser.name === "facebook" || browser.name === "ios" ? true : false;
  const fbLink = mobileBrowser ? "fb://page/?id=106619367753772" : "https://web.facebook.com/relationshipsthailand";
  const msgLink = "http://m.me/relationshipsthailand";

  const { group5, chat, text1, followUs, title, messenger, facebookCircularLogo } = props;
  return (
    <div className="container-center-horizontal">
      <div className="contact screen">
        <OverlapGroup>
          <Vector src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/vector@1x.svg" />
          <Rectangle1 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/rectangle-1@1x.svg" />
          <Rectangle37 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/rectangle-37@2x.svg" />
          <Rectangle48 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/rectangle-48@2x.svg" />
          <Rectangle38 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/rectangle-38@2x.svg" />
          <Rectangle47 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/rectangle-47@2x.svg" />
          <Rectangle46 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/rectangle-46@2x.svg" />
          <Rectangle42 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/rectangle-42@2x.svg" />
          <Rectangle39 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/rectangle-39@2x.svg" />
          <Rectangle49 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/rectangle-49@2x.svg" />
          <Rectangle45 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/rectangle-45@2x.svg" />
          <Rectangle44 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/rectangle-44@2x.svg" />
          <Rectangle40 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/rectangle-40@2x.svg" />
          <Rectangle43 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/rectangle-43@2x.svg" />
          <Rectangle41 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/rectangle-41@2x.svg" />
          <Rectangle51 src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/rectangle-51@2x.svg" />
          <Group5 src={group5} />
          <GreenRectangle src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/green-rectangle@1x.svg" />
          <a href={msgLink}><Chat>{chat}</Chat></a>
          <Text1>{text1}</Text1>
          <a href={fbLink}><FollowUs>{followUs}</FollowUs></a>
          <Title>{title}</Title>
          <a href={msgLink}><Messenger src={messenger} /></a>
          <a href={fbLink}><FacebookCircularLogo src={facebookCircularLogo} /></a>
        </OverlapGroup>
      </div>
    </div>
  );
}

const OverlapGroup = styled.div`
  width: 554px;
  height: 1030px;
  position: relative;
  margin-left: -58px;
  margin-top: -112.45px;
`;

const Vector = styled.img`
  position: absolute;
  width: 445px;
  height: 855px;
  top: 112px;
  left: 58px;
`;

const Rectangle1 = styled.img`
  position: absolute;
  width: 516px;
  height: 1005px;
  top: 0;
  left: 18px;
`;

const Rectangle37 = styled.img`
  position: absolute;
  width: 113px;
  height: 122px;
  top: 203px;
  left: 223px;
`;

const Rectangle48 = styled.img`
  position: absolute;
  width: 113px;
  height: 122px;
  top: 846px;
  left: 202px;
`;

const Rectangle38 = styled.img`
  position: absolute;
  width: 113px;
  height: 122px;
  top: 292px;
  left: 280px;
`;

const Rectangle47 = styled.img`
  position: absolute;
  width: 114px;
  height: 122px;
  top: 905px;
  left: 259px;
`;

const Rectangle46 = styled.img`
  position: absolute;
  width: 114px;
  height: 112px;
  top: 767px;
  left: 57px;
`;

const Rectangle42 = styled.img`
  position: absolute;
  width: 113px;
  height: 122px;
  top: 461px;
  left: 441px;
`;

const Rectangle39 = styled.img`
  position: absolute;
  width: 113px;
  height: 122px;
  top: 294px;
  left: 168px;
`;

const Rectangle49 = styled.img`
  position: absolute;
  width: 113px;
  height: 122px;
  top: 908px;
  left: 147px;
`;

const Rectangle45 = styled.img`
  position: absolute;
  width: 104px;
  height: 122px;
  top: 522px;
  left: 389px;
`;

const Rectangle44 = styled.img`
  position: absolute;
  width: 114px;
  height: 123px;
  top: 444px;
  left: 0;
`;

const Rectangle40 = styled.img`
  position: absolute;
  width: 113px;
  height: 123px;
  top: 354px;
  left: 225px;
`;

const Rectangle43 = styled.img`
  position: absolute;
  width: 114px;
  height: 122px;
  top: 504px;
  left: 57px;
`;

const Rectangle41 = styled.img`
  position: absolute;
  width: 109px;
  height: 123px;
  top: 642px;
  left: 389px;
`;

const Rectangle51 = styled.img`
  position: absolute;
  width: 108px;
  height: 122px;
  top: 627px;
  left: 207px;
`;

const Group5 = styled.img`
  position: absolute;
  width: 1px;
  height: 1px;
  top: 161px;
  left: 435px;
`;

const GreenRectangle = styled.img`
  position: absolute;
  width: 527px;
  height: 546px;
  top: 476px;
  left: 19px;
`;

const Chat = styled.div`
  position: absolute;
  width: 79px;
  top: 584px;
  left: 240px;
  font-family: var(--font-family-noto_sans);
  font-weight: 700;
  color: var(--white);
  font-size: var(--font-size-xl);
  letter-spacing: 0;
`;

const Text1 = styled.div`
  position: absolute;
  width: 294px;
  top: 323px;
  left: 150px;
  font-family: var(--font-family-noto_sans);
  font-weight: 700;
  color: var(--caribbean-green);
  font-size: var(--font-size-xl);
  text-align: center;
  letter-spacing: 0;
`;

const FollowUs = styled.div`
  position: absolute;
  width: 134px;
  top: 749px;
  left: 219px;
  font-family: var(--font-family-noto_sans);
  color: var(--white);
  font-size: var(--font-size-xl);
  letter-spacing: 0;
`;

const Title = styled.h1`
  ${NotosansBoldWhite26px}
  position: absolute;
  width: 171px;
  top: 264px;
  left: 195px;
  letter-spacing: 0;
`;

const Messenger = styled.img`
  position: absolute;
  width: 65px;
  height: 62px;
  top: 510px;
  left: 247px;
`;

const FacebookCircularLogo = styled.img`
  position: absolute;
  width: 65px;
  height: 64px;
  top: 672px;
  left: 248px;
`;

export default Contact;
