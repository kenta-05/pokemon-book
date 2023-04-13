import { Box, HStack, Text } from '@chakra-ui/react';
import headerBackground from '../images/headerBackground.png';
import { ColorContext } from '../providers/ColorProvider';
import React, { useContext, memo } from 'react';
import { SunMoonButton } from '../atoms/SunMoonButton';
import { InputId } from '../molecules/InputId';
import { SmallSearchButton } from '../atoms/SmallSearchButton';
import { SpinIcon } from '../atoms/SpinIcon';

export const Header = memo(
  ({
    inputValue,
    setInputValue,
    idSearch,
    pokeCount,
    searching,
    clickTitle,
  }) => {
    const { sandwichBg, headerText } = useContext(ColorContext);

    return (
      <>
        <Box
          as="header"
          bg={sandwichBg}
          w="100%"
          h={{ base: '12', sm: '16' }}
          cursor="default"
          sx={{
            position: 'fixed',
            top: '0',
            backgroundImage: `url(${headerBackground})`,
            backgroundSize: 'contain',
            zIndex: '100',
          }}
        >
          <HStack
            h="100%"
            w="100%"
            display="flex"
            justify={{ base: 'flex-start', md: 'center' }}
            ml={{ base: '2', md: '0' }}
          >
            <Text
              variant="title"
              cursor="pointer"
              onClick={clickTitle}
              color={headerText}
            >
              PokemonBook
            </Text>
            <SpinIcon searching={searching} />
            <SmallSearchButton
              pokeCount={pokeCount}
              inputValue={inputValue}
              setInputValue={setInputValue}
              idSearch={idSearch}
            />
            <HStack
              sx={{
                h: '100%',
                position: 'absolute',
                right: ['3', '4', '6', '4', '8', '12'],
              }}
            >
              <InputId
                inputValue={inputValue}
                setInputValue={setInputValue}
                idSearch={idSearch}
              />
              <SunMoonButton />
            </HStack>
          </HStack>
        </Box>
      </>
    );
  }
);
