import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Text,
} from '@chakra-ui/react';
import { Header } from '../templates/Header';
import { Footer } from '../templates/Footer';
import React, { useEffect, useState, useContext, useCallback } from 'react';
import { Main } from '../templates/Main';
import backgroundImg from '../images/mainBackground.png';
import { ColorContext } from '../providers/ColorProvider';

export const HomePage = () => {
  //初期設定
  const [pokeData, setPokeData] = useState([]);
  const [pokeCount, setPokeCount] = useState(null);
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=80');
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [searching, setSearching] = useState(false);

  const getPokeAll = async () => {
    setSearching(true);
    const res = await fetch(url);
    const json = await res.json();
    setPokeCount(json.count);
    setNextUrl(json.next);
    setPrevUrl(json.previous);
    const data = json.results;
    return data;
  };
  const getPokeDetail = async piece => {
    let _pokeData = await Promise.all(
      piece.map(async nameURL => {
        const res = await fetch(nameURL.url);
        const json = await res.json();
        return json;
      })
    );
    setPokeData(_pokeData);
  };
  const allLoading = () => {
    async function fetchData() {
      const data = await getPokeAll();
      await getPokeDetail(data);
    }
    fetchData().then(() => {
      setSearching(false);
    });
  };

  useEffect(() => {
    allLoading();
  }, [url]);

  const { mainBg } = useContext(ColorContext);

  const goNext = useCallback(() => {
    if (!nextUrl) {
      return;
    }
    setUrl(nextUrl);
    window.scrollTo(0, 0);
  }, [nextUrl]);
  const backPrev = useCallback(() => {
    if (!prevUrl) {
      return;
    }
    setUrl(prevUrl);
    window.scrollTo(0, 0);
  }, [prevUrl]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const SettingUrl = num => {
    setUrl(`https://pokeapi.co/api/v2/pokemon?offset=${num}&limit=60`);
  };

  const clickTitle = useCallback(() => {
    setSearching(true);
    SettingUrl(`https://pokeapi.co/api/v2/pokemon?limit=80`);
    window.scrollTo(0, 0);
    setSearching(false);
  }, []);

  const idSearch = useCallback(() => {
    if (
      inputValue - 1 >= pokeCount ||
      inputValue == 0 ||
      inputValue == null ||
      isNaN(inputValue)
    ) {
      onOpen();
      setInputValue('');
      setSearching(false);
      return;
    }
    SettingUrl(inputValue - 1);
    setSearching(true);

    setInputValue('');
  }, [inputValue, pokeCount, onOpen]);

  const { pButtonCo, pButtonBgHover, pButtonCoHover, modalBg, modalButtonBg } =
    useContext(ColorContext);

  return (
    <>
      <Box
        sx={{
          minHeight: '100vh',
          bg: mainBg,
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: 'repeat',
        }}
      >
        <Header
          inputValue={inputValue}
          setInputValue={setInputValue}
          idSearch={idSearch}
          pokeCount={pokeCount}
          searching={searching}
          clickTitle={clickTitle}
        />
        <Main
          pokeData={pokeData}
          backPrev={backPrev}
          goNext={goNext}
          nextUrl={nextUrl}
          prevUrl={prevUrl}
          searching={searching}
        />
        <Footer pokeData={pokeData} />
      </Box>
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
            <Text sx={{ fontSize: 'xl' }}>エラー</Text>
          </ModalHeader>
          <ModalBody>
            <Text sx={{ fontSize: 'lg' }}>
              ID検索には1～{pokeCount}の数字を{<br />}入力してください
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={onClose}
              sx={{
                bg: modalButtonBg,
                color: pButtonCo,
                _hover: {
                  bg: pButtonBgHover,
                  color: pButtonCoHover,
                },
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
