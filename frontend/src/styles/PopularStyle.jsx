import styled from "styled-components";

export const PopularStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px 1fr));
  .popular {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.5rem 0rem;
    box-shadow: 0.5px 0.5px 5px 3px #dedede;
    margin-top: 2rem;
    max-width: 25.5rem;
    flex-wrap: wrap;
    height: 26rem;
    .content {
      height: 30%;
    }
    /* box-shadow: 0.5px 0.5px 5px 3px #dedede; */

    .header {
      padding-bottom: 8px;
    }

    /* .images {
    width: 30%;
    height: 100%;
    object-fit: cover;
    */
    img {
      overflow: hidden;
      max-height: 65%;
      width: 400px;
      object-fit: cover;
      border-radius: 3px;
    }

    .buttom {
      padding: 0.5rem;
      display: flex;
      justify-content: space-between;
      gap: 3rem;
      span {
      }
    }
  }
`;
