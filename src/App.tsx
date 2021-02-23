import React, { FunctionComponent } from 'react';
import Header from './components/header/Header';
import MainContent from './containers/Content/MainContent';

interface AppProps { };

const App: FunctionComponent<AppProps> = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="mt-3 ml-3">
          <MainContent />
        </div>
      </div>
    </div>
  );
}

export default App;
