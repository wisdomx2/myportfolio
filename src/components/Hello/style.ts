/* eslint-disable import/prefer-default-export */
import styled from "styled-components";
import postBg from '../../assets/images/post_image.jpg';

export const HelloWrapper = styled.div`
  display: flex;
  height: 100vh;

  .background-section {
    background-image: url(${postBg});
    background-size: cover;
    background-position: center;
    flex: 1;
  }

  .form-section {
    flex: 1;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
