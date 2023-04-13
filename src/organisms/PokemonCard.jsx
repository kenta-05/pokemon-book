import { VStack, Text, Skeleton } from '@chakra-ui/react';
import { PokemonImage } from '../molecules/PokemonImage';
import { PokemonName } from '../molecules/PokemonName';
import { PokemonTypes } from '../molecules/PokemonTypes';
import { ColorContext } from '../providers/ColorProvider';
import React, { useContext } from 'react';
import { ToastButton } from '../atoms/ToastButton';

export const PokemonCard = ({
  pokemon,
  exceptList,
  setExceptList,
  searching,
}) => {
  const { cardBg, cardBgHover, shadow, shadowHover } = useContext(ColorContext);

  return (
    <>
      <VStack
        sx={{
          bg: cardBg,
          w: '64',
          h: '64',
          mb: '6',
          mt: '6',
          pt: '4',
          borderRadius: 'xl',
          boxShadow: `0px 0px 5px 1px ${shadow}`,
          transition: 'all 0.3s',
          position: 'relative',
          _hover: {
            bg: cardBgHover,
            boxShadow: `0px 0px 3px 2px ${shadowHover}`,
          },
        }}
        spacing={0}
      >
        <Text
          variant="primary"
          sx={{
            textDecor: 'none',
            position: 'absolute',
            top: '2',
            left: '4',
            fontSize: 'md',
          }}
        >
          {pokemon.id < 906 ? pokemon.id : ''}
        </Text>
        <Skeleton isLoaded={!searching} sx={{ rounded: 'full' }}>
          <PokemonImage
            pokemon={pokemon}
            setExceptList={setExceptList}
            exceptList={exceptList}
          />
        </Skeleton>
        <PokemonName pokemon={pokemon} />
        <PokemonTypes pokemon={pokemon} />
        <ToastButton pokemon={pokemon} />
      </VStack>
    </>
  );
};
