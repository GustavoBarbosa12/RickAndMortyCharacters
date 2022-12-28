import { CharactersProvider } from "./presentation/context/characters-context";
import { Router } from "./presentation/router/router";

function App() {
  return (
    <CharactersProvider>
      <Router />
    </CharactersProvider>
  );
}

export default App;
