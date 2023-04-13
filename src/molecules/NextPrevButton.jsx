import { Flex, Button } from '@chakra-ui/react';
import { ColorContext } from '../providers/ColorProvider';
import { useContext } from 'react';

export const NextPrevButton = ({
  pokeData,
  backPrev,
  goNext,
  nextUrl,
  prevUrl,
}) => {
  const {
    pButtonBg,
    pButtonCo,
    pButtonBgHover,
    pButtonCoHover,
    pButtonBorder,
  } = useContext(ColorContext);

  const goBStyle = {
    bg: nextUrl ? pButtonBg : '#8d8d8d',
    color: nextUrl ? pButtonCo : 'gray.300',
    px: '8',
    py: '6',
    rounded: '2xl',
    cursor: nextUrl ? 'pointer' : 'not-allowed',
    boxShadow: nextUrl ? `0px 0px 0.75rem -0.2rem ${pButtonBorder}` : '',
    _hover: {
      bg: nextUrl ? pButtonBgHover : '',
      color: nextUrl ? pButtonCoHover : '',
      boxShadow: 'none',
      transform: nextUrl ? 'translateY(0.4rem)' : '',
    },
  };
  const backBStyle = {
    bg: prevUrl ? pButtonBg : '#8d8d8d',
    color: prevUrl ? pButtonCo : 'gray.300',
    px: '8',
    py: '6',
    rounded: '2xl',
    cursor: prevUrl ? 'pointer' : 'not-allowed',
    boxShadow: prevUrl ? `0px 0px 0.75rem -0.2rem ${pButtonBorder}` : '',
    _hover: {
      bg: prevUrl ? pButtonBgHover : '',
      color: prevUrl ? pButtonCoHover : '',
      boxShadow: 'none',
      transform: prevUrl ? 'translateY(0.4rem)' : '',
    },
  };
  return (
    <>
      {pokeData.length >= 1 ? (
        <Flex sx={{ pt: '16', pb: '16' }} justify="center" gap={20}>
          <Button variant="primary" sx={{ ...backBStyle }} onClick={backPrev}>
            戻る
          </Button>
          <Button variant="primary" sx={{ ...goBStyle }} onClick={goNext}>
            次へ
          </Button>
        </Flex>
      ) : (
        ''
      )}
    </>
  );
};
