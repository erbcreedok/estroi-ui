import {Header} from "./components/Header";
import {HomePage} from "./pages/HomePage";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Box, ThemeProvider} from "@mui/material";
import {theme} from "./theme";
import {StoreProvider} from "./store";
import {routerService} from "./services/routerService";
import {ProductPage} from "./pages/ProductPage";
import {CatalogPage} from "./pages/CatalogPage";
import {Footer} from "./components/Footer";
import {Flex} from "./components/Flex";

function App() {
  return (
    <BrowserRouter>
      <StoreProvider>
        <ThemeProvider theme={theme}>
          <Flex flexDirection="column" minHeight="100vh">
            <Header />
            <Box>
              <Routes>
                <Route path={routerService.home()} element={<HomePage />} />
                <Route path={routerService.catalog()} element={<CatalogPage />} />
                <Route path={routerService.product()} element={<ProductPage />} />
                <Route path="/" element={<Navigate to={routerService.home()} />} />
              </Routes>
            </Box>
            <Footer mt="auto" />
          </Flex>
        </ThemeProvider>
      </StoreProvider>
    </BrowserRouter>
  );
}

export default App;
