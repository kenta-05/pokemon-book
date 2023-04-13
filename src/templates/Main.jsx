import { Box, Grid } from '@chakra-ui/react';
import { PokemonCard } from '../organisms/PokemonCard';
import { useState, memo } from 'react';
import { NextPrevButton } from '../molecules/NextPrevButton';

//poke配列と図鑑番号が渡ってきている
export const Main = memo(
  ({ pokeData, backPrev, goNext, nextUrl, prevUrl, searching }) => {
    const [exceptList, setExceptList] = useState([]);

    return (
      <>
        <Box w="100%" pt={{ base: '12', sm: '16' }}>
          <Grid
            templateColumns={[
              'repeat(1, 1fr)',
              'repeat(2, 1fr)',
              'repeat(3, 1fr)',
              'repeat(4, 1fr)',
              'repeat(5, 1fr)',
              'repeat(6, 1fr)',
            ]}
            sx={{
              w: '95%',
              mx: 'auto',
              justifyItems: 'center',
            }}
          >
            {pokeData.map((pokemon, i) => {
              return (
                <PokemonCard
                  pokemon={pokemon}
                  key={`${pokemon.name}-${i}`}
                  exceptList={exceptList}
                  setExceptList={setExceptList}
                  searching={searching}
                />
              );
            })}
          </Grid>
          {/* <SpinIcon pokeData={pokeData} /> */}
          <NextPrevButton
            pokeData={pokeData}
            backPrev={backPrev}
            goNext={goNext}
            nextUrl={nextUrl}
            prevUrl={prevUrl}
          />
        </Box>
      </>
    );
  }
);
