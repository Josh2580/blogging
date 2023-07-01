import React from "react";
import styled from "styled-components";
import {
  FacebookIcon,
  FacebookShareButton,
  //
  WhatsappIcon,
  WhatsappShareButton,
  //
  TwitterIcon,
  TwitterShareButton,
  //
  TelegramIcon,
  TelegramShareButton,
  //
  PinterestIcon,
  PinterestShareButton,
  //
  LinkedinIcon,
  LinkedinShareButton,
  //
  EmailIcon,
  EmailShareButton,
} from "react-share";

const ShareComp = ({ pathname }) => {
  //   let url = `http://localhost:3000${pathname}`;
  let url = `https://jochuks.netlify.app/`;
  let appId = 541579274798036;
  const shareCount = () => {
    console.log("It is working");
  };
  return (
    <MySharedButtons>
      <FacebookShareButton
        url={url}
        quote="This is String"
        hashtag="This is HashTag"
      >
        <FacebookIcon round={true} size={20} />
      </FacebookShareButton>
      <WhatsappShareButton
        url={url}
        title="This is the header or SEO title to be shared"
        seperator="-"
      >
        <WhatsappIcon round={true} size={20} />
      </WhatsappShareButton>
      <PinterestShareButton media={url} url={url}>
        <PinterestIcon round={true} size={20} />
      </PinterestShareButton>
      <TwitterShareButton url={url}>
        <TwitterIcon round={true} size={20} />
      </TwitterShareButton>
      <TelegramShareButton url={url}>
        <TelegramIcon round={true} size={20} />
      </TelegramShareButton>
      <LinkedinShareButton url={url}>
        <LinkedinIcon round={true} size={20} />
      </LinkedinShareButton>
      <EmailShareButton url={url}>
        <EmailIcon round={true} size={20} />
      </EmailShareButton>
    </MySharedButtons>
  );
};

const MySharedButtons = styled.div`
  display: flex;
  gap: 5px;
  /* align-items: center;
  justify-content: center; */
`;

export default ShareComp;
