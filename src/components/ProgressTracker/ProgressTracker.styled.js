import styled, { css } from 'styled-components';

import media from '../../tools/media';

export const ProgressHeader = styled.div`
  /* --------- progress header ---------- */

  position: relative;

  /* media returns functon with css keyword */
  ${media.medium`background:red;
  `}
    ${media.large`
    background:green
  `}
  /* using css below */
  ${(props) => css`
    background: blue;
  `}




  width: 650px;
  height: 20px;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(90deg, #9c27b0, #9c27b0) 0 9px/0% 4px no-repeat,
    linear-gradient(90deg, #ddd, #ddd) 0 9px/100% 4px no-repeat;
  transition: 0.5s ease;
  background-size: 25% 4px, 100% 4px;

  p {
    position: relative;
    margin: 0;
  }

  p strong {
    position: absolute;
    min-width: 100px;
    text-align: center;
    left: 50%;
    top: 150%;
    transform: translateX(-50%);
    font-size: 12px;
    color: #222;
  }

  .step {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    background: #eee;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    z-index: 1;
    border: 1px solid #9c27b0;
    transition: background 0.3s ease 0.3s, color 0.15s ease 0.3s;
  }

  .completed .step {
    ${(props) =>
      props.isCompleted
        ? css`
            background: #9c27b0;
            color: #fff;
          `
        : ''}
  }
`;
