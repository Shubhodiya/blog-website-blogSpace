import {
    Button,
    Flex,
    Heading,
    Image,
    HStack,
    Wrap,
    WrapItem,
    Center,
    VStack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Hero from '../components/Hero.js'
import Posts from '../components/Posts';
import PostCard from '../components/PostCard';
import { useLocation } from 'react-router';
  
export default function Home() {
      const [posts, setPosts] = useState([]);
      const {search} = useLocation()
      console.log(useLocation());
    //   useEffect(()=>{
    //     const fetchPosts = async()=>{
    //         const result = await axios.get("/posts");
    //         setPosts(result.data);
    //         //console.log(posts);
    //     }
    //     fetchPosts();
    // }, [])

      useEffect(()=>{
        const fetchPost = async()=>{
            const res = await axios.get("/posts"+search);
            setPosts(res.data)
            // console.log(posts);
        }
        fetchPost();
      }, [search])
      
    return (
     <Flex>
         <VStack>
         <Hero/>
            {/* <Posts posts={posts}/> */}
            <Center> 
         <Wrap spacing="20px" justify="center">
            {posts.map(p=>{
                return <PostCard key={p._id} post = {p}/>
            })}           
            {/* <WrapItem>
                <PostCard/>
            </WrapItem> */}
         </Wrap>
         </Center>
         </VStack>
     </Flex>
    );
  }

