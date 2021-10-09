import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import Login from './pages/login';
import Register from './pages/register';
import {
  ChakraProvider,
  Divider,
  Box,
  Heading,
  Text,
  Flex,
  Spacer,
  HStack,
  Center,
  theme
} from '@chakra-ui/react';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
   
      <Flex>
          <Box minH="100vh" flex="1" p="2">
          <NavBar/>
          <Switch>
            <Route path = "/login">
              <Login/> 
            </Route>
            <Route path = "/register">
              <Register/> 
            </Route>

          </Switch>
          </Box>
      </Flex>
     
      </Router>
    </ChakraProvider>
  );
}

export default App;

