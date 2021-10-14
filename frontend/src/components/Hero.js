import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    Box,
    useBreakpointValue,
  } from '@chakra-ui/react';
  import {Link} from 'react-router-dom'
  import HeroImg from '../images/hero.svg'
  
  export default function Hero() {
    return (
      <Stack minH={'75vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Box fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Heading><Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  zIndex: -1,
                }}>
               Welcome to
              </Text>
              <br />{' '}</Heading>

              <Heading color={'blue.400'} as={'h2'} size="3xl">
              BlogSpace;
              </Heading>{' '}
              </Box>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              The project board is an exclusive resource for contract work. It's
              perfect for freelancers, agencies, and moonlighters.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Link to="/register"><Button
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Start Reading
              </Button></Link>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'fit'}
            src={HeroImg}
          />
        </Flex>
      </Stack>
    );
  }