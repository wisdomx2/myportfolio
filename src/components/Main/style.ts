/* eslint-disable import/prefer-default-export */
import styled from "styled-components";
// import mainBg from 'assets/images/main_image.png';

export const MainWrapper = styled.div`
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
  .main-container {
    // background-color: #c5dae3;
    background-color: white;
    display: flex;
    justify-content: space-around;
    padding: 50px;
    align-items: center;
  }
  .main-text {
    margin: 30px;
  }
  .main-img img{
    width: 400px;
    height: auto;
    border-radius: 15px;
  }
  .main-contact {
    display: flex;
  }
`;
