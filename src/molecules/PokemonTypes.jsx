import { VStack } from '@chakra-ui/react';
import { Type } from '../atoms/Type';

export const PokemonTypes = ({ pokemon }) => {
  return (
    <>
      <VStack spacing={0} pt="4">
        {pokemon.types.map((type, i) => {
          return (
            <Type key={`${pokemon.id}-${type.type.name}-${i}`} type={type} />
          );
        })}
      </VStack>
    </>
  );
};
