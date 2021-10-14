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
    // console.log(post)
    const PF = "http://localhost:5000/images/"
    return (
      
    <Center py={6}>
      <Link to={`/post/${post._id}`}><Box
        maxW={'400px'}
        h={'530px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        {post.postCover && (<Image src={PF + post.postCover}/>)}
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
          <Heading isTruncated
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
           {post.title}
          </Heading>
          <Text color={'gray.500'} >
            {post.desc.substring(0, 150)+"..."}
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
            <Text color={'gray.500'} size={"sm"}>{
            post.categories.map((c)=>{
                return <span key={c}>| {c} |</span>
            })
            }</Text>
          </Stack>
        </Stack>
      </Box></Link>
    </Center>
  );
}