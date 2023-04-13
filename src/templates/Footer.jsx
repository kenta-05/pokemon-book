import { Button, HStack } from '@chakra-ui/react';
import { ColorContext } from '../providers/ColorProvider';
import React, { useContext, memo } from 'react';

export const Footer = memo(({ pokeData }) => {
  const {
    sandwichBg,
    subButtonBg,
    subButtonBgHover,
    subButtonColor,
    subButtonColorHover,
  } = useContext(ColorContext);

  return (
    <>
      <HStack
        bg={sandwichBg}
        w="100%"
        h="12"
        sx={pokeData.length >= 10 ? null : { position: 'fixed', bottom: '0' }}
      >
        <Button
          bg={subButtonBg}
          color={subButtonColor}
          as="a"
          variant="primary"
          href="https://pokeapi.co/"
          target="_blank"
          justifySelf="center"
          h="100%"
          sx={{
            w: '28',
            h: '9',
            position: 'absolute',
            right: '2',
            _hover: { bg: subButtonBgHover, color: subButtonColorHover },
          }}
        >
          PokeAPIURL
        </Button>
      </HStack>
    </>
  );
});
