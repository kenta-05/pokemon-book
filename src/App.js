import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { HomePage } from './pages/HomePage';
import { Theme } from './theme/theme';
import { ColorProvider } from './providers/ColorProvider';

function App() {
  return (
    <ChakraProvider theme={Theme}>
      <ColorProvider>
        <HomePage />
      </ColorProvider>
    </ChakraProvider>
  );
}

export default App;
