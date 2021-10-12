import {Link} from 'react-router-dom';
import { AddIcon } from '@chakra-ui/icons';
import {
  Flex,
  Box,
  Center,
  Image,
  Button,
  Spacer,
  Heading,
  Textarea,
  Text,
  Divider,
  VStack,
  HStack,
  Avatar,
  FormControl,
  Input,
  FormLabel,
  useColorModeValue,
} from '@chakra-ui/react';

const Write = ()=>{
    return(
        <Flex >
            <Center w={"100%"}>
            <VStack w={"90%"} py={10}>
            <Image src={"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" }
                w={"100%"}
                h={"200px"}
                borderRadius={5} 
                style={{objectFit: "cover"}}
            />
            <FormControl id="postCover">
                <FormLabel htmlFor="postCover" cursor={"pointer"} ><Text as="span" ><AddIcon/></Text></FormLabel>
                <Input type="file" id="postCover" display={"none"}/>
            </FormControl>
            <FormControl id="title" isRequired>
                <FormLabel >Title</FormLabel>
                <Input autoFocus={true} 
                placeholder="Enter blog title here" 
                type="text" 
                border ={"none"}
                />
            </FormControl>
            <FormControl id="desc" isRequired>
                <FormLabel >Description</FormLabel>
                <Textarea placeholder="Start writing here..." 
                type="text" 
                border ={"none"}
                height={"180px"}/>
            </FormControl>
            <Button bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>Publish Post</Button>
              
                <Divider py ={10} my={10}/>
            </VStack>
            </Center>
        </Flex>
    )
}

export default Write;