import styled from 'styled-components';

import { extractColor } from '~/utils';
import metrics from '~/styles/metrics';
import backgroundPattern from '~/assets/images/background-pattern.jpg';

export const Container = styled.div`
  background: ${props => extractColor(props, 'primary')};
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 100%;
  height: 100%;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: url(${backgroundPattern}) center center repeat;
    background-size: 500px;
    width: 100%;
    height: 100%;
    opacity: 0.1;
  }

  a {
    display: block;
    height: 36px;
  }
`;

export const Content = styled.div`
  background: ${props => extractColor(props, 'background')};
  padding: ${props =>
    props.noPaddingX
      ? `${metrics.spacing.basePadding}px 0`
      : `${metrics.spacing.basePadding}px`};
  width: 900px;
  max-width: 100%;
  min-height: calc(100vh - 44px);
  margin: 0 auto;
  z-index: 5;
`;
