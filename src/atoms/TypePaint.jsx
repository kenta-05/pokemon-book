import { Text } from '@chakra-ui/react';

export const TypePaint = ({ color, children }) => {
  return (
    <>
      <Text
        sx={{
          color: color,
          fontWeight: 'bold',
          fontSize: 'xl',
          cursor: 'default',
        }}
      >
        {children}
      </Text>
    </>
  );
};
