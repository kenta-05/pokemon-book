import { Flex, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { ColorContext } from '../providers/ColorProvider';

export const PokemonName = ({ pokemon }) => {
  const { textPrimary } = useContext(ColorContext);

  return (
    <>
      <Flex alignItems="center" justifyContent="center" w="100%">
        <Text
          variant="primary"
          sx={{
            maxWidth: '85%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            cursor: 'default',
            color: textPrimary,
          }}
        >
          {pokemon.name}
        </Text>
      </Flex>
    </>
  );
};
