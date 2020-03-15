import styled from 'styled-components';

import { extractColor } from '~/utils';
import metrics from '~/styles/metrics';

export const Container = styled.header`
  height: ${metrics.baseElementHeight}px !important;
  padding: ${metrics.spacing.basePadding / 2}px ${metrics.spacing.basePadding}px;
  background: ${props => extractColor(props, 'background')};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 6;
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.3);

  img {
    height: 36px;
  }

  ul > li button {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: ${props => extractColor(props, 'primary')};
    background: ${props => extractColor(props, 'background')};
    font-weight: bold;
    font-size: 12px;
    text-transform: uppercase;

    svg {
      margin-left: ${metrics.spacing.baseMargin / 2}px;
    }
  }
`;
