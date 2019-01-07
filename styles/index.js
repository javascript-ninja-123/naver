import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  min-height: 100vh;
  .home-container__second-comp {
    flex: 1;
    position: relative;
    & > div {
      box-shadow: 0px 2px 4px #000000;
    }
    &--center-button {
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
      z-index: 100;
      padding: 0.3rem;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    &--zoomIn-button {
      position: absolute;
      top: 6.91rem;
      right: 1.5rem;
      z-index: 100;
      padding: 0.3rem;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      img {
        width: 2.4rem;
        height: 2.4rem;
      }
    }
    &--zoomOut-button {
      position: absolute;
      top: 10rem;
      right: 1.5rem;
      z-index: 100;
      padding: 0.3rem;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      img {
        transform: rotate(90deg);
        width: 2.4rem;
        height: 2.4rem;
      }
    }
    &--who {
      box-sizing: border-box;
      position: absolute;
      top: 15rem;
      right: 1.5rem;
      z-index: 100;
      padding: 0.3rem;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.8rem;
      font-weight: bold;
      width: 3rem;
      cursor: pointer;
    }
    &--who-answer {
      box-sizing: border-box;
      position: absolute;
      top: 16.5rem;
      width: 3rem;
      right: 1.5rem;
      z-index: 100;
      padding: 0.3rem;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: 0.8rem;
      cursor: pointer;
    }
    &--search-container {
      width: 15rem;
      height: 4rem;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 100;
    }
  }
  @media (max-width: 70rem) {
    flex-direction: column-reverse;
    .home-container__second-comp {
      #map {
        width: 100vw !important;
      }
    }
  }
`,
StandardContaienr = styled.div`
 color:${({standard}) => standard ? '#1ebea5' : 'lightgrey'}
`;