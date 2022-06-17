import {Slider} from "../components/Slider";
import {CatalogSection} from "../components/CatalogSection";
import {Box, Container} from "@mui/material";

export const HomePage = () => {
  return (
    <Container sx={{ mt: '20px' }} maxWidth="xl">
      <Slider />
      <Box height="30px" />
      <CatalogSection />
      <Box height="30px" />
    </Container>
  )
}
