import react from 'react';
import styled from 'styled-components';

export const Horizontal = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.div`
  background-color: #f6f6f6;
  display: flex;
  justify-content: space-between;
  padding: 78px 94px;
  min-height: 100vh;

  .navigation {
    width: 15%;
  }

  .main-section {
    width: 80%;

    .main-section__header {
      margin-bottom: 25px;
    }

    .main-section__sub-header {
      margin-bottom: 25px;
      color: #9b9b9b;
      font-size: 18px;
    }

    .card-wrap {
      display: flex;
      justify-content: space-between;
    }

    .main-section__separator {
      opacity: 0.33;
      border: solid 1px #979797;
      margin-top: 62px;
      margin-bottom: 42px;
    }

    .quick-links {
      width: 30%;
      display: flex;
      flex-direction: column;
      padding: 10px 0;
      justify-content: space-around;

      &__header {
        color: red;
        text-transform: uppercase;
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 2.3px;
        color: #9b9b9b;
      }

      &__link {
        font-size: 18px;
        font-weight: bold;
        line-height: 1.22;
        color: #1c2d41;

        span:first-child {
          margin-right: 10px;
        }
      }
    }

    .invite-users {
      display: flex;
      flex-direction: column;
      align-items: center;

      &__header {
        margin-bottom: 34px;
        font-size: 24px;
      }

      &__input-wrap {
        position: relative;

        input {
          width: 487px;
          height: 68px;
          border-radius: 9px;
          box-shadow: 0 8px 17px 0 rgba(153, 160, 169, 0.23);
          background-color: #ffffff;
          border: solid 1px rgba(179, 179, 179, 0.3);
        }

        button {
          width: 115px;
          height: 53px;
          border: 0;
          border-radius: 9px;
          background-color: #50e3c2;
          position: absolute;
          right: 8px;
          top: 8px;
          font-size: 18px;
          font-weight: bold;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #1c2d41;
        }
      }

      &__link {
        margin-top: 25px;

        a {
          font-size: 12px;
          font-weight: bold;
          letter-spacing: 2px;
          color: #1c2d41;
        }
      }
    }
  }
`;
