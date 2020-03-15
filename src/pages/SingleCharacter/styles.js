import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { extractColor } from '~/utils';
import metrics from '~/styles/metrics';

export const Character = styled.div`
  padding: 0 ${metrics.spacing.basePadding}px;

  div {
    display: flex;
  }

  button {
    max-width: fit-content;
    margin-top: ${metrics.spacing.baseMargin}px;
    margin-left: auto;

    @media screen and (max-width: 565px) {
      max-height: 36px;
      max-width: 100%;
      margin-left: 0;
    }
  }

  div.thumb-container {
    width: 200px;
    height: 200px;
    position: relative;
    margin-right: ${metrics.spacing.baseMargin / 2}px;

    @media screen and (max-width: 565px) {
      width: 100px;
      height: 100px;
    }

    &::before {
      content: '';
      width: 0;
      height: 0;
      border-left: 40px solid transparent;
      border-right: 40px solid transparent;
      border-bottom: 40px solid ${props => extractColor(props, 'background')};
      position: absolute;
      left: -31px;
      top: -7px;
      transform: rotate(-45deg);

      @media screen and (max-width: 565px) {
        border-width: 20px;
        left: -16px;
        top: -4px;
      }
    }

    &::after {
      content: '';
      width: 0;
      height: 0;
      border-left: 40px solid transparent;
      border-right: 40px solid transparent;
      border-bottom: 40px solid ${props => extractColor(props, 'background')};
      position: absolute;
      right: -33px;
      bottom: -8px;
      transform: rotate(135deg);

      @media screen and (max-width: 565px) {
        border-width: 20px;
        right: -16px;
        bottom: -4px;
      }
    }

    img.thumbnail {
      width: 100%;
      height: 100%;
      background: ${props => extractColor(props, 'background')};
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: ${metrics.spacing.basePadding}px;
  border-radius: ${metrics.baseRadius}px;
  border: 1px solid ${props => extractColor(props, 'borderColor')};

  h1 {
    color: ${props => extractColor(props, 'primary')};
    font-size: 26px;
    border-bottom: 1px solid ${props => extractColor(props, 'borderColor')};
    padding-bottom: ${metrics.spacing.basePadding / 2}px;
    margin-bottom: ${metrics.spacing.baseMargin / 2}px;

    @media screen and (max-width: 565px) {
      font-size: 20px;
    }
  }

  color: ${props => extractColor(props, 'textColor')};
`;

export const Scrollbar = styled(PerfectScrollbar)`
  max-height: calc(100vh - 500px);
  padding: 0 ${metrics.spacing.basePadding}px;
  padding-bottom: ${metrics.spacing.basePadding}px;
  position: relative;

  @media screen and (max-width: 565px) {
    margin: 0 ${metrics.spacing.baseMargin}px;
    max-height: calc(
      100vh - ${props => (props['data-paginate'] === 'true' ? 400 : 350)}px
    );
    padding-left: 0;
  }
`;

export const ComicContainer = styled.div`
  margin: ${metrics.spacing.baseMargin}px 0;
  display: flex;

  @media screen and (max-width: 565px) {
    flex-direction: column;
    align-items: center;

    padding-top: ${metrics.spacing.baseMargin}px;

    & + div {
      border-top: 1px solid ${props => extractColor(props, 'borderColor')};
    }
  }

  img,
  .cover-container {
    width: 120px;
    height: 185px;
    margin-right: ${metrics.spacing.basePadding}px;
    color: ${props => extractColor(props, 'textColor')};

    @media screen and (max-width: 565px) {
      margin-bottom: ${metrics.spacing.baseMargin}px;
      width: 200px;
      height: 309px;
    }
  }

  .cover-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .comic-info {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: ${metrics.spacing.basePadding}px;
    border: 1px solid ${props => extractColor(props, 'borderColor')};
    border-radius: ${metrics.baseRadius}px;

    .comic-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: ${metrics.spacing.baseMargin / 2}px;
      padding-bottom: ${metrics.spacing.basePadding / 2}px;
      border-bottom: 1px solid ${props => extractColor(props, 'borderColor')};

      p {
        font-size: 14px;
        color: ${props => extractColor(props, 'textColor')};
      }
    }

    .comic-description {
      * {
        color: ${props => extractColor(props, 'textColor')};
      }
    }
  }
`;

export const Title = styled.h2`
  font-size: 26px;
  color: ${props => extractColor(props, 'textColor')};
  padding-bottom: ${metrics.spacing.basePadding}px;
  margin: ${metrics.spacing.basePadding}px;
  border-bottom: 1px solid ${props => extractColor(props, 'borderColor')};
`;

export const NoComics = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 50%;
  margin: ${metrics.spacing.basePadding}px;
  border: 1px solid ${props => extractColor(props, 'borderColor')};
  border-radius: ${metrics.baseRadius}px;

  h3 {
    color: ${props => extractColor(props, 'secondaryTextColor')};
  }
`;
