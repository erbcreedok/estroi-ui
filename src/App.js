import {Header} from "./components/Header";
import {HomePage} from "./pages/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ThemeProvider} from "@mui/material";
import {theme} from "./theme";
import {StoreProvider} from "./store";

function App() {
  return (
    <BrowserRouter>
      <StoreProvider>
        <ThemeProvider theme={theme}>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </div>
        </ThemeProvider>
      </StoreProvider>
    </BrowserRouter>
  );
}

export default App;
