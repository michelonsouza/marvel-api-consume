import styled, { css } from 'styled-components';
import { readableColor, darken } from 'polished';

import { extractColor } from '~/utils';
import metrics from '~/styles/metrics';

export const Container = styled.button`
  height: ${metrics.baseElementHeight}px;
  padding: 0 ${metrics.spacing.basePadding}px;
  border-radius: ${metrics.baseRadius}px;
  background: ${props => extractColor(props, props.variant)};
  color: ${props =>
    readableColor(extractColor(props, props.variant), '#fff', '#444')};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 18px;

  ${props =>
    props.mb &&
    css`
      margin-top: ${metrics.spacing.baseMargin}px;
    `}

  ${props =>
    props.mt &&
    css`
      margin-top: ${metrics.spacing.baseMargin}px;
    `}

  &:hover {
    background: ${props => darken(0.08, extractColor(props, props.variant))};
  }
`;
