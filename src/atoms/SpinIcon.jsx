import { Spinner } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { ColorContext } from '../providers/ColorProvider';

export const SpinIcon = ({ searching }) => {
  const { spinColor } = useContext(ColorContext);

  return (
    <>
      {searching ? (
        <Spinner
          thickness={{ sm: '0.4rem', base: '0.3rem' }}
          speed="0.65s"
          emptyColor="#162d38"
          size="xl"
          sx={{
            position: 'absolute',
            top: { sm: '2', base: '16' },
            left: { md: '2', sm: '', base: '' },
            right: { lg: '', md: '', sm: '40', base: '' },
            zIndex: '200',
            color: spinColor,
          }}
        />
      ) : (
        ''
      )}
    </>
  );
};
