import React from 'react';
import Media from 'react-media';

export const OnMobileAndTabletOnly: React.FC = ({ children }) => (
  <Media query="(max-width: 1023px)" defaultMatches={true} render={() => children} />
);

export const OnMobileOnly: React.FC = ({ children }) => (
  <Media query="(max-width: 767px)" defaultMatches={true} render={() => children} />
);

export const OnDesktopOnly: React.FC = ({ children }) => (
  <Media query="(min-width: 1024px)" defaultMatches={true} render={() => children} />
);
