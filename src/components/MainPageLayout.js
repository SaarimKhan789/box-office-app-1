import React from 'react';
import Navs from './Navs';
import Title from './Title';

const MainPageLayout = ({ children }) => (
  <div>
    <Title title="Box Office" subtitle="Looking for a actor or a movie?" />
    <Navs />
    {children}
  </div>
);

export default MainPageLayout;
