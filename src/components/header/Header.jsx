import { Box, Flex, Text, Link } from "@chakra-ui/react";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <Box as="header" px={20} py={8}>
      <Flex justify="space-between" align="center">
        <Link href="/">
          <Text
            fontSize="4xl"
            fontWeight="400"
            fontStyle="italic"
            color="#fe99b4"
            fontFamily="'Reddit Sans', sans-serif"
          >
            Beautique
          </Text>
        </Link>
        <Link href="/login">
          <FontAwesomeIcon icon={faUser} size="2x" color="#E988A3" />
        </Link>
      </Flex>
    </Box>
  );
}

export default Header;
