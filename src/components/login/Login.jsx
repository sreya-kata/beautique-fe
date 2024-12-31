import { Input, Stack, Fieldset } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import CustomButton from "../button/CustomButton";

const Login = () => {
  return (
    <Fieldset.Root size="lg" maxW="md" mx="auto" mt={12}>
      <Stack spacing={4}>
        {/* Fieldset Legend */}
        <Fieldset.Legend textAlign="center" fontSize="xl" fontWeight="bold">
          Sign In
        </Fieldset.Legend>
      </Stack>

      <Fieldset.Content>
        {/* Email Field */}
        <Field label="Email">
          <Input name="email" type="email" />
        </Field>

        {/* Password Field */}
        <Field label="Password">
          <Input name="password" type="password" />
        </Field>
      </Fieldset.Content>

      <CustomButton type="submit" alignSelf="center" mt={4}>
        Log In
      </CustomButton>
    </Fieldset.Root>
  );
};

export default Login;
