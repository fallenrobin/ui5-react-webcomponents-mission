import React from 'react';
// import { MyApp } from './MyApp'; //
import { ThemeProvider } from "@ui5/webcomponents-react";
import MyApp from './MyApp';


function App() {
  return (

    <ThemeProvider>

      <MyApp />

    </ThemeProvider>

  );
}

export default App;
