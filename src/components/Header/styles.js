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

  nav {
    display: flex;
    align-items: center;

    > button {
      margin-right: ${metrics.spacing.baseMargin / 2}px;
    }
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

export const SwitchButton = styled.button`
  border: 0;
  height: 30px;
  border-radius: 15px;
  background: ${props =>
    extractColor(
      props,
      props.value === 'light' ? 'secondaryBackground' : 'primary'
    )};
  display: flex;
  width: 50px;
  padding: 3px;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    height: 24px;
    width: 24px;
    border-radius: 50%;
    background: ${props => extractColor(props, 'white')};
    margin-left: ${props => (props.value === 'dark' ? 'calc(100% - 24px)' : 0)};
    transition: margin 200ms ease-in-out;
    font-size: 12px;
    font-weight: bold;
  }
`;
