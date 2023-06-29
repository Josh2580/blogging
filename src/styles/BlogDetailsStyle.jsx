import styled from "styled-components";

export const BlogDetails = styled.div`
  margin: 48px 0px;
  /* h2 {
    padding: 10px 0px;
  } */
`;

export const PostHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  font-size: 14px;
  .author {
    display: flex;
    /* justify-content: space-between; */
    font-size: 12px;
    gap: 10px;
    p {
      display: flex;
      gap: 4px;
      align-items: center;
    }
  }
  .header {
    display: flex;
    width: 100%;
    text-align: left;
    h3 {
      color: #444444;
      font-size: 4.2vw;
      text-transform: capitalize;
    }
    @media (max-width: 769px) {
      text-align: left;
    }
    h2 {
      padding-right: 1rem;
      text-transform: capitalize;
      /* font-size: 2vw; */
    }
  }
`;

export const PostBody = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 24px;
  font-size: 14px;

  ul {
    display: flex;
    flex-direction: row;
    width: 160px;
    gap: 0.5rem;

    .icons {
      width: 22px;
      height: 20px;
    }
  }
`;

export const PostImage = styled.div`
  width: 100%;
  height: 100vh;
  @media (max-width: 1158px) {
    height: 90vh;
  }
  @media (max-width: 916px) {
    height: 75vh;
  }
  @media (max-width: 769px) {
    height: 65vh;
  }
  @media (max-width: 669px) {
    height: 60vh;
  }
  @media (max-width: 569px) {
    height: 40vh;
  }
  img {
    padding-top: 1rem;
    width: 100%;
    height: 90%;
  }
`;

export const RelatedStylePosts = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
  background: white;
  /* box-shadow: 0px 0px 5px 7px #ececec;
  margin: 2px;
  padding: 16px; */
`;
