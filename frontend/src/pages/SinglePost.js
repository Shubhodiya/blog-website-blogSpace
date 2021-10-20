import {Link} from 'react-router-dom';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import {
  Flex,
  Box,
  Input,
  Image,
  Textarea,
  Heading,
  Text,
  Divider,
  VStack,
  Button,
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

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);

    const handleEdit=()=>{
        setUpdateMode(true);
    }

    const handleUpdate= async ()=>{
        try {
            await axios.put(`/posts/${post._id}`, {
              username: user.username,
              title,
              desc,
            });
            setUpdateMode(false)
          } catch (err) {}
    }

    const handleDelete= async ()=>{
    try{
        await axios.delete("/posts/"+path, {data: {username: user.username, title, desc}})
        window.location.replace("/")
    }catch(err){
        console.log(err);
    }

    }
    // console.log(path);
    useEffect(()=>{
        const getPost = async()=>{
            const res = await axios.get("/posts/"+path);
            setTitle(res.data.title);
            setDesc(res.data.desc)
            setPost(res.data);
        }
        getPost();
    }, [path])
    return(
        <Flex>
            <VStack w={"100%"}>
                { 
                updateMode 
                ?  
                <Input 
                color={"gray.400"}
                fontSize={"20px"}
                textAlign={"center"}
                value={title}
                type="text" 
                onChange={e=>setTitle(e.target.value)}
                /> 
                : 
                <Heading my={5}>
                    {title}
                </Heading>
                }
                    
          
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
                        <EditIcon onClick={handleEdit} cursor={"pointer"} color={"blue.300"} h={5} w={5} mx={2}/>
                        <DeleteIcon onClick={handleDelete} cursor={"pointer"} color={"red.300"} h={5} w={5} mx={2}/>
                    </Box>
                }
                </VStack> 
                
                { 
                updateMode 
                ?  
                <Textarea color={"gray.400"} placeholder="Start writing here..." 
                onChange={e=>setDesc(e.target.value)}
                type="text" 
                value={desc}
                height={"180px"}/>
                : 
                <Text>
                {post.desc}
                </Text>
                }
                {
                    updateMode && 
                <Button bg={'blue.400'}
                type={"submit"}
                color={'white'}
                _hover={{
                bg: 'blue.500',   
                }}
                onClick={handleUpdate}>
                Save Changes
                </Button>
                }

                {/* {console.log(post.categories)} */}
                
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