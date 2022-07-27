import React from 'react';
import { ThemeProvider } from "@ui5/webcomponents-react";
import MyApp from './MyApp';
// import { MyApp } from './MyApp'; via tutorial; wrong way to import
import { HashRouter } from "react-router-dom";


function App() {
  return (
    <HashRouter>
      <ThemeProvider>

        <MyApp />

      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
