import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useColorMode } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { ColorContext } from '../providers/ColorProvider';
import React, { useContext, memo } from 'react';

export const SunMoonButton = memo(() => {
  const { colorMode, toggleColorMode } = useColorMode();

  const { buttonBg, buttonBgHover, buttonColor, buttonColorHover } =
    useContext(ColorContext);

  const sunMoonChange = {
    bg: buttonBg,
    color: buttonColor,
    rounded: 'full',
    transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
    _hover: {
      bg: buttonBgHover,
      color: buttonColorHover,
      boxShadow: '0px 0px 9px 3px #efefef',
    },
  };
  return (
    <>
      <IconButton
        alignSelf="center"
        w={{ base: '', sm: '12' }}
        h={{ base: '10', sm: '12' }}
        sx={sunMoonChange}
        aria-label="DarkMode Switch"
        icon={
          colorMode === 'light' ? (
            <MoonIcon w={{ base: '5', sm: '6' }} h={{ base: '5', sm: '6' }} />
          ) : (
            <SunIcon w={{ base: '5', sm: '6' }} h={{ base: '5', sm: '6' }} />
          )
        }
        onClick={toggleColorMode}
      />
    </>
  );
});
