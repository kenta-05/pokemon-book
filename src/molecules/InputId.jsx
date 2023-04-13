import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  useMediaQuery,
} from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { memo } from 'react';

export const InputId = memo(({ inputValue, setInputValue, idSearch }) => {
  const [isLargerThanLG] = useMediaQuery('(min-width: 71.25em)');

  const inputStyle = {
    color: '#efefef',
    fontSize: '2xl',
    py: '6',
    rounded: 'full',
    borderColor: '#efefef',
    borderWidth: '0.13rem',
    _hover: { borderColor: '#efefef' },
    _placeholder: { color: '#bebec3' },
    _focus: { borderColor: '#efefef', boxShadow: 'none' },
  };

  return (
    <>
      <Box>
        {isLargerThanLG ? (
          <InputGroup
            sx={{
              size: 'md',
              w: '48',
              mr: '8',
            }}
          >
            <Input
              type="text"
              inputMode="numeric"
              pattern="\d*"
              placeholder="ID検索"
              sx={{ ...inputStyle }}
              value={inputValue}
              onChange={e => {
                setInputValue(e.target.value);
              }}
            />
            <InputRightElement sx={{ height: '100%' }}>
              <IconButton
                size="md"
                mr="4"
                bg="#efefef"
                onClick={idSearch}
                _hover={{ bg: '#c0c0c0' }}
                icon={
                  <SearchIcon sx={{ boxSize: '1.2rem', color: '#000000' }} />
                }
              ></IconButton>
            </InputRightElement>
          </InputGroup>
        ) : (
          ''
        )}
      </Box>
    </>
  );
});
