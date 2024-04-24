import { Main } from './components/Main';
import { PeopleTable } from './components/PeopleTable'
import { ChakraProvider } from '@chakra-ui/react'


/* 
3. Use styled components for the UI. (Have fun with it!)
4. Use packages as needed.
5. Create various components as needed to construct the UI (table header, table rows, buttons
etc.)
6. Incorporate a loader for route renders and data fetching
7. The app should retrieve/display the data and create next/previous buttons based on number of
items and current page. Buttons must show/hide based on first page, last page.
8. Create a view page/route or modal that populates the detail data.
9. Bonus points for unit tests
10. Upload to a public github repository and share the URL back to us
*/

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
