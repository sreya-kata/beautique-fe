import {
  Input,
  HStack,
  Box,
  Text,
  Link,
  Heading,
  Separator,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { Field } from "@/components/ui/field";
import CustomButton from "../button/CustomButton";
import { useState } from "react";

const AuthForm = ({
  pageTitle,
  buttonText,
  inputs,
  linkText,
  linkHref,
  handleSubmit,
}) => {
  const [formValues, setFormValues] = useState(
    inputs.reduce((acc, input) => ({ ...acc, [input.name]: "" }), {})
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formValues);
  };

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
            {pageTitle}
          </Heading>
          <HStack
            spacing={6}
            justify="center"
            mx="auto"
            px={4}
            mb={10}
            gap={24}
          >
            {inputs.map((input) => (
              <Field label={input.label} key={input.name} w="100%">
                <Input
                  name={input.name}
                  type={input.type}
                  placeholder={input.placeholder}
                  value={formValues[input.name]}
                  onChange={handleChange}
                  _focus={{ bg: "white", borderColor: "#FE99B4" }}
                />
              </Field>
            ))}
          </HStack>
          <CustomButton
            type="submit"
            mx="auto"
            display="block"
            onClick={onSubmit}
          >
            {buttonText}
          </CustomButton>
          <Text fontSize="sm" mt={6}>
            {linkText}{" "}
            <Link
              href={linkHref}
              color="#FE99B4"
              fontWeight="bold"
              _hover={{
                transition: "transform 0.3s",
              }}
            >
              Click here!
            </Link>
          </Text>
        </Box>
      </Box>
    </>
  );
};

AuthForm.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string,
    })
  ).isRequired,
  linkText: PropTypes.string.isRequired,
  linkHref: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default AuthForm;
