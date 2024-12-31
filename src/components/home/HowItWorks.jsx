import { Box, Heading, VStack, Text, SimpleGrid, Flex } from "@chakra-ui/react";
import mirror from "../../assets/mirror.svg";
import bottle from "../../assets/bottle.svg";
import perfume from "../../assets/perfume.svg";
import serum from "../../assets/serum.svg";

function HowItWorks() {
  const steps = [
    { icon: mirror, text: "Create your profile", number: "1" },
    { icon: bottle, text: "Analyze your products", number: "2" },
    { icon: perfume, text: "Get personalized advice", number: "3" },
    { icon: serum, text: "Track your progress", number: "4" },
  ];

  return (
    <Box as="section" px={70} py={10} textAlign="center" mb={16}>
      <Heading
        fontSize="4xl"
        fontWeight="500"
        mb={20}
        fontFamily="'Reddit Sans', sans-serif"
      >
        How it Works
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
        {steps.map((step, index) => (
          <VStack key={index} spacing={4}>
            <Box
              as="img"
              src={step.icon}
              alt={`Step ${step.number}`}
              boxSize="8rem"
              mb={6}
            />
            <Flex alignItems="center" justifyContent="center">
              <Box
                as="span"
                bg="#fe99b4"
                borderRadius="full"
                w={8}
                h={8}
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="md"
                color="white"
                fontWeight="bold"
                mr={2}
              >
                {step.number}
              </Box>
              <Text fontSize="md">{step.text}</Text>
            </Flex>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default HowItWorks;
