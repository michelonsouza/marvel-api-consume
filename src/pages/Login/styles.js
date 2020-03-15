import styled from 'styled-components';

import metrics from '~/styles/metrics';
import { extractColor } from '~/utils';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: ${props => extractColor(props, 'primary')};
`;

export const Content = styled.div`
  width: 400px;
  max-width: 94%;
  padding: ${metrics.spacing.basePadding}px;
  border-radius: ${metrics.baseRadius}px;
  background: ${props => extractColor(props, 'background')};
  display: flex;
  justify-content: center;
  flex-direction: column;

  img {
    width: 200px;
    margin: 0 auto ${metrics.spacing.baseMargin}px auto;
  }

  h1 {
    color: ${props => extractColor(props, 'primary')};
    margin-bottom: ${metrics.spacing.basePadding}px;
    font-size: 24px;
    text-align: center;
    text-transform: uppercase;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
