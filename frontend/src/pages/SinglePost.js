import {Link} from 'react-router-dom';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import {
  Flex,
  Box,
  Center,
  Image,
  Spacer,
  Heading,
  Text,
  Divider,
  VStack,
  HStack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';
import axios from 'axios';
import { useLocation } from 'react-router';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../context/Context';

const SinglePost = ()=>{
    const {user} = useContext(Context)
    const [post, setPost] = useState({});
    const location = useLocation();
    const path = location.pathname.split("/")[2];

    const PF = "http://localhost:5000/images/"

    const handleEdit=()=>{

    }

    const handleDelete= async ()=>{
    try{
        await axios.delete("/posts/"+path, {data: {username: user.username}})
        window.location.replace("/")
    }catch(err){
        console.log(err);
    }

    }
    // console.log(path);
    useEffect(()=>{
        const getPost = async()=>{
            const res = await axios.get("/posts/"+path);
            // console.log(res);
            setPost(res.data);
        }
        getPost();
    }, [path])
    return(
        <Flex>
            <VStack w={"100%"}>
                <Heading my={5}>
                    {post.title}
                </Heading>
          
                {post.postCover && (<Image src={PF + post.postCover}
                w={"100%"}
                h={"400px"}
                borderRadius={5} 
                style={{objectFit: "fill"}}
                />)}
                <VStack>
                <Link to={`/?user=${post.username}`}>
                    <Heading as="h4" size={"sm"} marginTop={3}>{post.username}</Heading>
                </Link>
                {post.username === user?.username && 
                    <Box>
                        <EditIcon onClick={handleEdit} color={"blue.300"} h={5} w={5} mx={2}/>
                        <DeleteIcon onClick={handleDelete} color={"red.300"} h={5} w={5} mx={2}/>
                    </Box>
                }
                </VStack> 
                <Text>
                {post.desc}
                {/* {console.log(post.categories)} */}
                </Text>
                { post.categories && <Text>{ post.categories.map((cat)=>{
                    return  <Link key={cat} to={`/?category=${cat}`}><small > | {cat +" | "}</small></Link>
                })
                }</Text>}
                <Divider py ={10} my={10}/>
            </VStack>
        </Flex>
    )
}

export default SinglePost;