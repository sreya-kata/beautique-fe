import {
  Box,
  Input,
  Button,
  VStack,
  HStack,
  Text,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { useUser } from "../hooks/useUser";
import CustomButton from "../button/CustomButton";

const MultiStepForm = () => {
  const { userId } = useUser();

  const [step, setStep] = useState(1); // Track the current step
  const [formValues, setFormValues] = useState({
    nickname: "",
    pronouns: "",
    age: "",
    gender: "",
    skinType: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  // Handle navigation between steps
  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  // Submit all data at the end of the form
  const handleSubmit = async () => {
    try {
      // Consolidate all data into one payload
      const payload = {
        nickname: formValues.nickname,
        pronouns: formValues.pronouns,
        age: formValues.age,
        gender: formValues.gender,
        skinType: formValues.skinType,
      };

      // Call the backend APIs
      await axios.put(`/api/profile/update/${userId}`, {
        nickname: payload.nickname,
        pronouns: payload.pronouns,
        age: payload.age,
        gender: payload.gender,
      });

      await axios.put(`/api/profile/skincare-profile/${userId}`, {
        skinType: payload.skinType,
        pronouns: payload.pronouns,
        age: payload.age,
        gender: payload.gender,
      });

      console.log("All data submitted successfully!");
      // Optionally redirect or show success message
    } catch (error) {
      console.error(
        "Error submitting form:",
        error.response?.data || error.message
      );
    }
  };

  // Render the form fields for the current step
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <Heading>Let’s Personalize Your Experience!</Heading>
            <Text mb={6}>
              Answer these questions so we can build a custom dashboard for you.
            </Text>
            <HStack w="100%" spacing={6}>
              <VStack w="50%">
                <Text>Nickname</Text>
                <Input
                  name="nickname"
                  placeholder="Enter your nickname"
                  value={formValues.nickname}
                  onChange={handleChange}
                />
              </VStack>
              <VStack w="50%">
                <Text>Pronouns</Text>
                <Input
                  name="pronouns"
                  placeholder="Enter your pronouns"
                  value={formValues.pronouns}
                  onChange={handleChange}
                />
              </VStack>
            </HStack>
            <HStack w="100%" spacing={6} mt={4}>
              <VStack w="50%">
                <Text>Age</Text>
                <Input
                  name="age"
                  placeholder="Enter your age"
                  value={formValues.age}
                  onChange={handleChange}
                />
              </VStack>
              <VStack w="50%">
                <Text>Gender</Text>
                <Input
                  name="gender"
                  placeholder="Enter your gender"
                  value={formValues.gender}
                  onChange={handleChange}
                />
              </VStack>
            </HStack>
          </>
        );
      case 2:
        return (
          <>
            <Heading>Skincare Preferences</Heading>
            <Text mb={6}>
              Let us know about your skincare preferences to personalize your
              dashboard.
            </Text>
            <HStack w="100%" spacing={6}>
              <VStack w="50%">
                <Text>Skin Type</Text>
                <Input
                  name="skinType"
                  placeholder="Enter your skin type"
                  value={formValues.skinType}
                  onChange={handleChange}
                />
              </VStack>
              <VStack w="50%">
                <Text>Pronouns</Text>
                <Input
                  name="pronouns"
                  placeholder="Enter your pronouns"
                  value={formValues.pronouns}
                  onChange={handleChange}
                  isReadOnly // To keep consistent data across steps
                />
              </VStack>
            </HStack>
          </>
        );
      default:
        return <Heading>Error: Invalid Step</Heading>;
    }
  };

  if (!userId) {
    console.error("User ID is missing");
    return <p>Error: Missing user information.</p>;
  }

  return (
    <Box textAlign="center" py={8} mx="auto" w="50%">
      {renderStep()}
      <HStack mt={8} spacing={4} justifyContent="center">
        {step > 1 && (
          <Button colorScheme="gray" onClick={handleBack}>
            Back
          </Button>
        )}
        {step < 2 && <CustomButton onClick={handleNext}>Next</CustomButton>}
        {step === 2 && (
          <Button colorScheme="pink" onClick={handleSubmit}>
            Submit
          </Button>
        )}
      </HStack>
    </Box>
  );
};

export default MultiStepForm;
