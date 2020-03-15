import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Link } from 'react-router-dom';

import { extractColor } from '~/utils';
import metrics from '~/styles/metrics';

export const Container = styled.div``;

export const Scrollbar = styled(PerfectScrollbar)`
  max-height: calc(100vh - 200px);
  padding: 0 ${metrics.spacing.basePadding}px;
  padding-bottom: ${metrics.spacing.basePadding}px;
  position: relative;

  @media screen and (max-width: 565px) {
    margin: 0 ${metrics.spacing.baseMargin}px;
    padding-left: 0;
  }
`;

export const DataRow = styled(Link)`
  background: ${props => extractColor(props, 'secondaryBackground')};
  height: ${metrics.baseElementHeight}px;
  padding: ${metrics.spacing.basePadding / 2}px;
  border-radius: ${metrics.baseRadius}px;
  display: flex !important;
  align-items: center;
  text-align: left;
  flex: 1;
  min-width: 100%;
  margin: 0;

  @media screen and (max-width: 768px) {
    min-width: 650px;
  }

  @media screen and (max-width: 565px) {
    min-width: 450px;
  }

  & + a {
    margin-top: ${metrics.spacing.baseMargin / 2}px;
    margin-right: 0 !important;
  }

  span {
    width: 270px;
    max-width: 270px;
    color: ${props => extractColor(props, 'textColor')};
    font-size: 14px;
    font-weight: bold;
    max-lines: 1;

    &:first-child {
      width: 280px;
      max-width: 280px;

      @media screen and (max-width: 768px) {
        width: 250px;
        max-width: 250px;
      }
    }

    &:nth-child(2) {
      @media screen and (max-width: 565px) {
        display: none;
      }
    }

    @media screen and (max-width: 768px) {
      width: 200px;
      max-width: 200px;
    }
  }
`;

export const DataHead = styled.div`
  background: ${props => extractColor(props, 'secondary')};
  height: ${metrics.baseElementHeight}px;
  padding: ${metrics.spacing.basePadding / 2}px;
  border-radius: ${metrics.baseRadius}px;
  margin-bottom: ${metrics.spacing.baseMargin / 2}px;
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 100%;
  position: sticky;
  top: 0;
  left: ${metrics.spacing.baseMargin}px;

  @media screen and (max-width: 768px) {
    min-width: 650px;
  }

  @media screen and (max-width: 565px) {
    min-width: 450px;
    margin-left: auto;
    margin-right: auto;
  }

  span {
    color: ${props => extractColor(props, 'white')};
    width: 270px;
    max-width: 270px;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 14px;

    @media screen and (max-width: 768px) {
      width: 200px;
      max-width: 200px;
    }

    &:first-child {
      width: 280px;
      max-width: 280px;

      @media screen and (max-width: 768px) {
        width: 250px;
        max-width: 250px;
      }
    }

    &:nth-child(2) {
      @media screen and (max-width: 565px) {
        display: none;
      }
    }
  }
`;
