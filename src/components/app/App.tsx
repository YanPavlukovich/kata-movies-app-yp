import React from 'react';

import './App.scss';

import Search from '../search-box/SearchBox';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import RatedMovies from '../rated-movies/rated-movies';
import ErrorText from '../error-text/error-text';

const App = () => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Search',
      children: <Search />,
    },
    {
      key: '2',
      label: 'Rated',
      children: <RatedMovies />,
    },
  ];

  return (
    <div className="app">
      <ErrorText />
      <Tabs defaultActiveKey="1" items={items} centered={true} />
    </div>
  );
};

export default App;
