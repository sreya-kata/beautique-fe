import { Box, Text, Stack, Heading, Link } from "@chakra-ui/react";
import hero from "../../assets/hero.jpg";
import CustomButton from "../button/CustomButton";

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
      padding={32}
    >
      <Heading
        fontSize="4xl"
        fontWeight="500"
        lineHeight="2.75rem"
        mb={6}
        fontFamily="'Lato', sans-serif"
      >
        Discover Your Perfect Beauty Routine with <br></br> AI-Powered Advice
      </Heading>
      <Text fontSize="lg" mb={4}>
        Get personalized recommendations and insights tailored just for you
      </Text>
      <Stack
        direction={["column", "row"]}
        spacing={4}
        justify="center"
        align="center"
        gap={12}
      >
        <Link href="/register">
          <CustomButton>Get Started</CustomButton>
        </Link>
        <CustomButton variant="secondary">Learn More</CustomButton>
      </Stack>
    </Box>
  );
}

export default Hero;
