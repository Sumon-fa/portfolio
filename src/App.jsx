import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/resume/Home';
function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} exact />
      </Routes>
    </Fragment>
  );
}

export default App;
