import {Container} from "../components/Container";
import {Slider} from "../components/Slider";
import {CatalogSection} from "../components/CatalogSection";
import {Box} from "@mui/material";

export const HomePage = () => {
  return (
    <Container mt="20px">
      <Slider />
      <Box height="30px" />
      <CatalogSection />
      <Box height="30px" />
    </Container>
  )
}
