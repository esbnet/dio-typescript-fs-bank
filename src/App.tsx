import {
  Box,
  Button,
  Center,
  ChakraProvider,
  Input,
  VStack,
} from "@chakra-ui/react";
import "./App.css";
import login from "./services/login";

function App() {
  return (
    <ChakraProvider>
      <Box
        minH={"100vh"}
        minW={"100vw"}
        p={5}
        bg={"black"}
        alignContent={"center"}
        justifyContent={"center"}
        color={"white"}
      >
        <Center>
          <VStack backgroundColor={"tomato"} p={5} borderRadius={5} w={400}>
            <Center>
              <h1>Faça o login</h1>
            </Center>

            <Input type="email" id="email" placeholder="Email" />
            <Input type="password" id="password" placeholder="Senha" />
            <Button onClick={login} type="submit" w={"100%"}>
              Entrar
            </Button>
          </VStack>
        </Center>
      </Box>
    </ChakraProvider>
  );
}

export default App;
