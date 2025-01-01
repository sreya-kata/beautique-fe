import { Box, Input, HStack, Text, Heading, Separator } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { Field } from "@/components/ui/field";
import {
  NativeSelectField,
  NativeSelectRoot,
} from "@/components/ui/native-select";
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
    skinTone: "",
    budget: "",
    allergiesSensitivities: "",
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
        skinTone: formValues.skinTone,
        budget: formValues.budget,
        allergiesSensitivities: formValues.allergiesSensitivities,
      };

      // Call the backend APIs
      await axios.put(`/api/profile/update/${userId}`, {
        nickname: payload.nickname,
        pronouns: payload.pronouns,
        age: Number(payload.age),
        gender: payload.gender,
      });

      await axios.put(`/api/profile/skincare-profile/${userId}`, {
        skinType: payload.skinType,
        skinTone: payload.pronouns,
        budget: payload.budget,
        allergiesSensitivities: payload.allergiesSensitivities,
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
            <Heading
              fontSize="4xl"
              fontWeight="500"
              fontFamily="'Reddit Sans', sans-serif"
            >
              Let&apos;s Personalize Your Experience!
            </Heading>
            <Text my={6} fontSize="lg" fontFamily="'Reddit Sans', sans-serif">
              Answer some questions so we can build a custom dashboard for you.
            </Text>
            <HStack w="100%" spacing={6} mt={12} gap={24}>
              <Field label="Nickname" key="name" w="100%">
                <Input
                  name="nickname"
                  placeholder="Enter your nickname"
                  value={formValues.nickname}
                  onChange={handleChange}
                  _focus={{ bg: "white", borderColor: "#FE99B4" }}
                />
              </Field>
              <Field label="Age" key="age" w="100%">
                <Input
                  name="age"
                  placeholder="Enter your age"
                  value={formValues.age}
                  onChange={handleChange}
                />
              </Field>
            </HStack>
            <HStack w="100%" spacing={6} mt={12} gap={24}>
              <Field label="Gender" key="gender" w="100%">
                <NativeSelectRoot>
                  <NativeSelectField
                    name="gender"
                    items={["Female", "Male", "Non-Binary", "Other"]}
                    value={formValues.gender}
                    onChange={handleChange}
                  />
                </NativeSelectRoot>
              </Field>
              <Field label="Pronouns" key="pronouns" w="100%">
                <NativeSelectRoot>
                  <NativeSelectField
                    items={["She/Her", "He/Him", "They/Them"]}
                  />
                </NativeSelectRoot>
              </Field>
            </HStack>
          </>
        );
      case 2:
        return (
          <>
            <Heading
              fontSize="4xl"
              fontWeight="500"
              fontFamily="'Reddit Sans', sans-serif"
            >
              Skincare Preferences
            </Heading>
            <Text my={6} fontSize="lg" fontFamily="'Reddit Sans', sans-serif">
              Let us know about your skincare preferences to personalize your
              dashboard.
            </Text>
            <HStack w="100%" spacing={6} mt={12}>
              <Field label="Skin Type" key="skintype" w="100%">
                <Input
                  name="skinType"
                  placeholder="Enter your skin type"
                  value={formValues.skinType}
                  onChange={handleChange}
                />
              </Field>
              <Text>Pronouns</Text>
              <Input
                name="pronouns"
                placeholder="Enter your pronouns"
                value={formValues.pronouns}
                onChange={handleChange}
                isReadOnly // To keep consistent data across steps
              />
            </HStack>
          </>
        );
      default:
        return <Heading>Error: Invalid Step</Heading>;
    }
  };

  // if (!userId) {
  //   console.error("User ID is missing");
  //   return <p>Error: Missing user information.</p>;
  // }

  return (
    <>
      <Separator w="80%" mx="auto" borderColor="gray.300" />
      <Box textAlign="center" px={72} pt={12} mb={24}>
        {renderStep()}
        <HStack mt={8} spacing={4} justifyContent="center">
          {step > 1 && (
            <CustomButton variant="secondary" onClick={handleBack}>
              Back
            </CustomButton>
          )}
          {step < 2 && <CustomButton onClick={handleNext}>Next</CustomButton>}
          {step === 2 && (
            <CustomButton onClick={handleSubmit}>Submit</CustomButton>
          )}
        </HStack>
      </Box>
    </>
  );
};

export default MultiStepForm;
