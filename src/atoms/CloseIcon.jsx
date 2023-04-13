import { Icon } from '@chakra-ui/react';
import { MdClose } from 'react-icons/md';
import { HStack } from '@chakra-ui/react';

export const CloseIcon = () => {
  return (
    <>
      <HStack sx={{ py: '9' }}>
        <Icon as={MdClose} sx={{ w: '6', h: '6', color: 'red.500' }} />
      </HStack>
    </>
  );
};
