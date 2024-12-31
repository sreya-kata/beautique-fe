import { Box, Text, HStack, VStack } from "@chakra-ui/react";
import { faGlobe, faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <Box
      as="footer"
      py={7}
      px={20}
      bg="#E988A3"
      color="white"
      textAlign="start"
    >
      <VStack align="start" spacing={4}>
        <Text mb={6}>
          Made with ❤️ as a passion project for all things beauty
        </Text>

        <HStack w="100%" alignItems="flex-end" justifyContent="space-between">
          <HStack spacing={4} gap={8}>
            <FontAwesomeIcon icon={faCode} size="2x" />
            <FontAwesomeIcon icon={faGlobe} size="2x" />
          </HStack>
          <Text alignSelf="flex-end">
            © {new Date().getFullYear()} Sreya Katabathuni
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
}

export default Footer;
