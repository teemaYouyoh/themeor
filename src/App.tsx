import React, { useState } from 'react';
import lightTheme from './theme-light.json';
import darkTheme from './theme-dark.json';
import { Theme, Box, Font, Align } from 'themeor';

const App: React.FC = () => {
  return (
    <Theme config={[lightTheme, darkTheme]}>
      <Align vert="center" hor="center">
        <Box fill="base">
          <Align vert="center" hor="center">
            <Font fill="base" size="x3l" weight="700">
              API TEST
            </Font>
          </Align>
        </Box>
      </Align>
    </Theme>
  );
}

export default App;
