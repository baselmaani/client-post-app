import './App.css';

import { QueryClient, QueryClientProvider } from 'react-query';
import { StateProvider } from './providers/stateContext';
import { initialState, reducer } from './providers/mainReducer';
import LocalStorageConmtainer from './providers/LocalStorageConmtainer';
import Roots from './navigators/Roots';

function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <StateProvider initialState={initialState} reducer={reducer}>
        <LocalStorageConmtainer>
          <Roots />
        </LocalStorageConmtainer>
      </StateProvider>
    </QueryClientProvider>
  );
}

export default App;
