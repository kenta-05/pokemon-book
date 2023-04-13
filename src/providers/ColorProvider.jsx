import { useColorModeValue } from '@chakra-ui/react';
import React, { createContext } from 'react';

export const ColorContext = createContext({});

export const ColorProvider = ({ children }) => {
  // 色の定義
  const mainBg = useColorModeValue('#efefef', '#525252');
  const cardBg = useColorModeValue(
    'rgba(249, 250, 251, 0.7)',
    'rgba(46, 47, 52, 0.75)'
  );
  const cardBgHover = useColorModeValue('gray.200', 'rgba(44, 52, 55, 0.85)');
  const textPrimary = useColorModeValue('#000000', '#efefef');

  const shadow = useColorModeValue('#1879a7', '#dbdbdb');
  const shadowHover = useColorModeValue('#e78658', '#ffe44b');

  const sandwichBg = useColorModeValue('#1879a7', '#162d38');
  const headerText = useColorModeValue('#efefef', '#dbdbdb');

  const buttonBg = useColorModeValue('#efefef', '#dbdbdb');
  const buttonBgHover = useColorModeValue('#ffe44b', '#162d38');
  const buttonColor = useColorModeValue('#1879a7', '#162d38');
  const buttonColorHover = useColorModeValue('#1879a7', '#ffe44b');

  const subButtonBg = useColorModeValue('#efefef', '#efefef');
  const subButtonBgHover = useColorModeValue('#080000', '#909090');
  const subButtonColor = useColorModeValue('#000000', '#162d38');
  const subButtonColorHover = useColorModeValue('#ffffff', '#000000');

  const spinColor = useColorModeValue('#efefef', '#efefef');

  const tButtonBg = useColorModeValue('#1879a7', '#6b8089');
  const tButtonBgHover = useColorModeValue('#1b4356', '#18242a');

  const toastColor = useColorModeValue('#1879a7', '#6b8089');

  const pButtonBg = useColorModeValue('#1879a7', '#364d56');
  const pButtonCo = useColorModeValue('#ffffff', '#ffffff');
  const pButtonBorder = useColorModeValue('', '#efefef');
  const pButtonBgHover = useColorModeValue('#1b4356', '#162d38');
  const pButtonCoHover = useColorModeValue('#ffffff', '#ffffff');

  const modalBg = useColorModeValue('#ffffff', '#4c5559');
  const modalButtonBg = useColorModeValue('#1879a7', '#253e49');

  const searchBg = useColorModeValue('#bdbdbd', '#9c9c9c');

  return (
    <ColorContext.Provider
      value={{
        mainBg,
        cardBg,
        cardBgHover,
        textPrimary,
        shadow,
        shadowHover,
        sandwichBg,
        headerText,
        buttonBg,
        buttonBgHover,
        buttonColor,
        buttonColorHover,
        subButtonBg,
        subButtonBgHover,
        subButtonColor,
        subButtonColorHover,
        spinColor,
        tButtonBg,
        tButtonBgHover,
        toastColor,
        pButtonBg,
        pButtonCo,
        pButtonBorder,
        pButtonBgHover,
        pButtonCoHover,
        modalBg,
        modalButtonBg,
        searchBg,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};
