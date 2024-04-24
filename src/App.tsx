import { Main } from './components/Main';
import { PeopleTable } from './components/PeopleTable'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Main>
        <PeopleTable />
      </Main>
    </ChakraProvider>
  );
}

export default App;
