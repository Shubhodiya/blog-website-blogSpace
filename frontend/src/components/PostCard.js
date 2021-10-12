import {Link} from 'react-router-dom';
import {
  Box,
  Center,
  Image,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

export default function PostCard({post}) {
    console.log(post)
    return (
      
    <Center py={6}>
      <Link to={`/post/${post._id}`}><Box
        maxW={'400px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        {post.postCover && (
          <Image maxWidth={"100%"}
          style={{objectFit:"cover"}}
            src={
              'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
          />)
          }
        {/* </Box> */}
        <Stack>
          <Text
            color={'blue.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.5}>
            Blog
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
           {post.title}
          </Heading>
          <Text color={'gray.500'}>
            {post.desc}
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar
            src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
            alt={'Author'}
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>{post.username}</Text>
            <Text color={'gray.500'}>{new Date(post.createdAt).toDateString()}</Text>
            {
            post.categories.map((c)=>{
                return <span>{c.name}</span>
            })
            }
          </Stack>
        </Stack>
      </Box></Link>
    </Center>
  );
}