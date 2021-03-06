/* @flow */
/* eslint-disable import/no-commonjs */

import * as React from 'react';
import { styled } from 'linaria/react';
import { Link } from 'component-docs/components';

import Content from './components/Content';

export default class Home extends React.Component<{}> {
  render() {
    return (
      <Container>
        <Banner>
          Looking for the documentation for version 1.0? You can find it{' '}
          <a href="1.0">here</a>.
        </Banner>
        <Content>
          <h1>
            Cross-platform{' '}
            <Highlighted target="_blank" href="https://material.io/design">
              Material Design
            </Highlighted>{' '}
            for React Native.
          </h1>
          <p>
            Paper is a collection of customizable and production-ready
            components for React Native, following Google’s Material Design
            guidelines.
          </p>
          <a
            href="https://snack.expo.io/@satya164/github.com-callstack-react-native-paper:example"
            target="_blank"
            rel="noopener noreferrer"
          >
            Try the demo on Snack
          </a>
          <Buttons>
            <Button className="primary" as={Link} to="getting-started">
              Get started
            </Button>
            <Button
              href="https://github.com/callstack/react-native-paper"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
          </Buttons>
          <Gallery>
            {screenshots.map((image, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <img key={i} src={image} alt="" />
            ))}
          </Gallery>
        </Content>
      </Container>
    );
  }
}

const PRIMARY_COLOR = '#6200ee';
const RESTING_SHADOW = '0 1px 3px rgba(0, 0, 0, 0.12)';

const Banner = styled.p`
  margin: 0;
  padding: 12px;
  margin: 24px;
  border-radius: 3px;
  text-align: center;
  background-color: #f8f9fa;

  @media (max-width: 640px) {
    margin-top: 72px;
  }
`;

const Highlighted = styled.a`
  color: ${PRIMARY_COLOR};

  &:hover,
  &:focus,
  &:active {
    color: ${PRIMARY_COLOR};
  }
`;

const Container = styled.div`
  width: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 16px -8px;
  min-width: 0;
`;

const Button = styled.a`
  appearance: none;
  margin: 8px;
  min-width: 120px;
  white-space: nowrap;
  font-size: 13px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 8px 16px;
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.3s;

  background-color: transparent;
  border-color: rgba(0, 0, 0, 0.24);
  color: ${PRIMARY_COLOR};

  &:hover,
  &:focus,
  &:active {
    background-color: rgba(98, 0, 238, 0.08);
    color: ${PRIMARY_COLOR};
  }

  &.primary {
    box-shadow: ${RESTING_SHADOW};
    background-color: ${PRIMARY_COLOR};
    border-color: ${PRIMARY_COLOR};
    color: #fff;

    &:hover,
    &:focus,
    &:active {
      background-color: ${PRIMARY_COLOR};
      color: #fff;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 3px 6px rgba(0, 0, 0, 0.24);
    }
  }
`;

const Gallery = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 48px -16px;
  min-width: 0;

  > img {
    box-shadow: ${RESTING_SHADOW};
    display: block;
    max-height: 480px;
    width: auto;
    margin: 16px;
  }
`;

const screenshots = [
  'gallery/button.png',
  'gallery/input.png',
  'gallery/card.png',
  'gallery/appbar.png',
  'gallery/searchbar.png',
  'gallery/snackbar.png',
  'gallery/chip.png',
  'gallery/list.png',
  'gallery/list-accordion.png',
  'gallery/typography.png',
  'gallery/bottom-navigation.png',
  'gallery/fab.png',
];
