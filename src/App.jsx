import React from 'react';
import { ThemeProvider } from "@ui5/webcomponents-react";
import MyApp from './MyApp';
// import { MyApp } from './MyApp'; via tutorial; wrong way to import


function App() {
  return (

    <ThemeProvider>

      <MyApp />

    </ThemeProvider>

  );
}

export default App;
