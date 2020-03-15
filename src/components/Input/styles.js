import styled from 'styled-components';
import { lighten } from 'polished';

import { extractColor } from '~/utils';
import metrics from '~/styles/metrics';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  span {
    padding: ${metrics.spacing.basePadding / 4}px;
    border-radius: ${metrics.baseRadius}px;
    border: 1px solid ${props => extractColor(props, 'primary')};
    background: ${props => lighten(0.4, extractColor(props, 'primary'))};
    color: ${props => extractColor(props, 'primary')};
    margin: ${metrics.spacing.basePadding / 2}px 0;
    display: block;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
  }

  & + div {
    margin-top: ${metrics.spacing.basePadding}px;
  }
`;

export const InputText = styled.input`
  height: ${metrics.baseElementHeight}px;
  padding: 0 ${metrics.spacing.basePadding / 2}px;
  border: 1px solid ${props => extractColor(props, 'primary')};
  color: ${props => extractColor(props, 'textColor')};
  caret-color: ${props => extractColor(props, 'primary')};
  background: ${props => extractColor(props, 'background')};
  border-radius: ${metrics.baseRadius}px;
  width: 100%;

  &::placeholder {
    color: ${props => extractColor(props, 'secondaryTextColor')};
  }
`;
