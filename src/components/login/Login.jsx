import {
  Input,
  HStack,
  Box,
  Text,
  Link,
  Heading,
  Separator,
} from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import CustomButton from "../button/CustomButton";

const Login = () => {
  return (
    <>
      <Separator w="80%" mx="auto" borderColor="gray.300" />
      <Box
        w="100%"
        minH="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        {/* Main Content */}
        <Box textAlign="center" pt={12} px={72}>
          <Heading
            fontSize="4xl"
            fontWeight="500"
            mb={12}
            fontFamily="'Reddit Sans', sans-serif"
          >
            Sign In
          </Heading>
          <HStack
            spacing={6}
            justify="center"
            mx="auto"
            px={4}
            mb={10}
            gap={24}
          >
            {/* Email Field */}
            <Field label="Email" w="100%">
              <Input
                name="email"
                type="email"
                placeholder="Enter your email"
                _focus={{ bg: "white", borderColor: "#FE99B4" }}
              />
            </Field>

            {/* Password Field */}
            <Field label="Password" w="100%">
              <Input
                name="password"
                type="password"
                placeholder="Enter your password"
                _focus={{ bg: "white", borderColor: "#FE99B4" }}
              />
            </Field>
          </HStack>
          <CustomButton type="submit" mx="auto" display="block">
            Log In
          </CustomButton>
          <Text fontSize="sm" mt={6}>
            New user?{" "}
            <Link
              href="/signup"
              color="#FE99B4"
              fontWeight="bold"
              _hover={{
                transition: "transform 0.3s",
              }}
            >
              Sign up here!
            </Link>
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Login;
