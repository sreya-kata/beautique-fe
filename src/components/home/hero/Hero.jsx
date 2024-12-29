import { Box, Text, Button, Stack } from "@chakra-ui/react";
import hero from "../../../assets/hero.jpg";
import "./Hero.css";

function Hero() {
  return (
    <Box
      as="section"
      bgImage={`url(${hero})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      color="white"
      textAlign="center"
      className="hero-section"
    >
      <h1 className="hero-heading">
        Discover Your Perfect Beauty Routine with <br></br> AI-Powered Advice
      </h1>
      <Text fontSize="lg" mb={4}>
        Get personalized recommendations and insights tailored just for you
      </Text>
      <Stack
        direction={["column", "row"]}
        spacing={4}
        justify="center"
        align="center"
      >
        <Button colorScheme="pink" variant="solid" size="lg">
          Get Started
        </Button>
        <Button colorScheme="whiteAlpha" variant="outline" size="lg">
          Learn More
        </Button>
      </Stack>
    </Box>
  );
}

export default Hero;
