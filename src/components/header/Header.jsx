import { Box, Flex, Text } from "@chakra-ui/react";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <Box as="header" px={20} py={8}>
      <Flex justify="space-between" align="center">
        {/* Logo */}
        <Text
          fontSize="4xl"
          fontWeight="400"
          fontStyle="italic"
          color="#fe99b4"
          fontFamily="'Reddit Sans', sans-serif"
        >
          Beautique
        </Text>
        {/* User Icon with Hover Effect */}
        <Box
          as="span"
          cursor="pointer"
          onMouseEnter={(e) =>
            e.currentTarget.setAttribute("data-hover", "true")
          }
          onMouseLeave={(e) =>
            e.currentTarget.setAttribute("data-hover", "false")
          }
          _hover={{
            transform: "scale(1.1)",
            transition: "transform 0.3s",
          }}
          data-hover={false}
        >
          <FontAwesomeIcon icon={faUser} size="2x" color="#E988A3" />
        </Box>
      </Flex>
    </Box>
  );
}

export default Header;
