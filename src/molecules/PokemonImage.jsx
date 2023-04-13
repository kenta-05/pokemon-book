import { Image } from '@chakra-ui/react';
import { CloseIcon } from '../atoms/CloseIcon';
import pokeball from '../images/pokeball.png';

export const PokemonImage = ({ pokemon, setExceptList, exceptList }) => {
  const addList = () => {
    if (exceptList.includes(pokemon.id)) {
      setExceptList(exceptList.filter(id => id !== pokemon.id));
    } else {
      setExceptList([...exceptList, pokemon.id]);
    }
  };
  const isException = exceptList.includes(pokemon.id);
  return (
    <>
      {pokemon.sprites.front_default ? (
        isException && pokemon.sprites.front_shiny ? (
          <Image
            w="96px"
            minH="9"
            cursor="pointer"
            src={pokemon.sprites.front_shiny}
            onClick={addList}
          />
        ) : (
          <Image
            w="96px"
            minH="9"
            cursor="pointer"
            src={pokemon.sprites.front_default}
            fallbackSrc={pokeball}
            onClick={addList}
          />
        )
      ) : (
        <CloseIcon />
      )}
    </>
  );
};
