import styled from 'styled-components';

import { extractColor } from '~/utils';
import metrics from '~/styles/metrics';

export const Container = styled.div`
  .pagination-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${metrics.spacing.baseMargin}px;

    .page-nextprev a {
      border: 1px solid ${props => extractColor(props, 'primary')};
      color: ${props => extractColor(props, 'white')};
      background: ${props => extractColor(props, 'primary')};
      height: 30px;
      border-radius: 15px;
      padding: 2px 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 ${metrics.spacing.baseMargin / 3}px;
      font-weight: bold;
      text-transform: uppercase;
      cursor: pointer;
    }

    .page-bullet {
      border: 1px solid ${props => extractColor(props, 'borderColor')};
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 ${metrics.spacing.baseMargin / 6}px;
      cursor: pointer;

      &.active {
        border-color: ${props => extractColor(props, 'primary')};
        background: ${props => extractColor(props, 'primary')};
        a {
          color: ${props => extractColor(props, 'white')};
        }
      }

      a {
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        color: ${props => extractColor(props, 'textColor')};
        font-size: 14px;
        font-weight: bold;
      }
    }
  }
`;
