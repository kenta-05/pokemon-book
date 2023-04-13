import { SearchIcon } from '@chakra-ui/icons';
import {
  Button,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useMediaQuery,
  Text,
  Input,
} from '@chakra-ui/react';
import { ColorContext } from '../providers/ColorProvider';
import React, { memo, useContext } from 'react';

export const SmallSearchButton = memo(
  ({ pokeCount, inputValue, setInputValue, idSearch }) => {
    const [isLargerThanLG] = useMediaQuery('(min-width: 71.25em)');
    const {
      buttonBg,
      buttonColor,
      searchBg,
      pButtonCo,
      pButtonBgHover,
      pButtonCoHover,
      modalBg,
      modalButtonBg,
    } = useContext(ColorContext);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const clickSearch = () => {
      idSearch();
      onClose();
    };

    return (
      <>
        {!isLargerThanLG ? (
          <IconButton
            onClick={onOpen}
            alignSelf="center"
            sx={{
              position: 'absolute',
              right: { base: '16', md: '24', sm: '20' },
              bg: buttonBg,
              transition: 'background-color 0.3s',
              _hover: {
                bg: searchBg,
              },
            }}
            w={{ base: '', sm: '12' }}
            h={{ base: '10', sm: '12' }}
            aria-label="DarkMode Switch"
            icon={
              <SearchIcon
                sx={{ boxSize: '1.2rem', color: buttonColor }}
                w={{ base: '5', sm: '6' }}
                h={{ base: '5', sm: '6' }}
              />
            }
          />
        ) : (
          ''
        )}
        <Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={false}>
          <ModalOverlay />
          <ModalContent
            sx={{
              mt: '12%',
              bg: modalBg,
              boxShadow: '0px 0px 10px -3px #090909',
            }}
          >
            <ModalHeader>
              <Text sx={{ fontSize: 'xl' }}>ID検索</Text>
            </ModalHeader>
            <ModalBody>
              <Text sx={{ fontSize: 'lg', mb: '3' }}>
                1～{pokeCount}までの数字を入力してください
              </Text>
              <Input
                type="text"
                inputMode="numeric"
                pattern="\d*"
                placeholder="ID検索"
                value={inputValue}
                onChange={e => {
                  setInputValue(e.target.value);
                }}
              />
            </ModalBody>
            <ModalFooter>
              <Button
                onClick={clickSearch}
                sx={{
                  bg: modalButtonBg,
                  color: pButtonCo,
                  _hover: {
                    bg: pButtonBgHover,
                    color: pButtonCoHover,
                  },
                }}
              >
                Search
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
);
