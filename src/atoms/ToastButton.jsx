import { Box, Button } from '@chakra-ui/react';
import { ColorContext } from '../providers/ColorProvider';
import React, { useContext } from 'react';
import { useToast } from '@chakra-ui/react';

export const ToastButton = ({ pokemon }) => {
  const { tButtonBg, tButtonBgHover, toastColor } = useContext(ColorContext);
  const toast = useToast();

  return (
    <>
      <Box sx={{ position: 'absolute', right: '2', bottom: '2' }}>
        <Button
          sx={{
            bg: tButtonBg,
            p: '3',
            color: '#ffffff',
            trasition: 'all 0.5s',
            _hover: {
              bg: tButtonBgHover,
            },
          }}
          size="xs"
          onClick={() => {
            console.log(pokemon);
            toast({
              title: '',
              duration: 1600,
              render: () => (
                <Box
                  color="#ffffff"
                  p={3}
                  borderRadius="4"
                  bg={toastColor}
                  cursor="default"
                >
                  高さ: {pokemon.height / 10}m 重さ: {pokemon.weight / 10}kg
                </Box>
              ),
            });
          }}
        >
          Data
        </Button>
      </Box>
    </>
  );
};
