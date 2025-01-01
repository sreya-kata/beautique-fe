import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useUser } from "../hooks/useUser";
import AuthForm from "./AuthForm";

const API_BASE_URL = "http://localhost:8080/api/auth";

const Register = () => {
  const navigate = useNavigate();
  const { setUserId } = useUser();

  const handleRegister = async (formData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/register`, formData);
      const userId = response.data.userId; // Capture userId from the response
      setUserId(userId); // Save userId in context
      navigate("/post-registration");
    } catch (error) {
      console.error(
        "Registration failed:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <AuthForm
      pageTitle="Create Account"
      buttonText="Register"
      inputs={[
        {
          label: "Name",
          name: "name",
          type: "text",
          placeholder: "Enter your name",
        },
        {
          label: "Email",
          name: "email",
          type: "email",
          placeholder: "Enter your email",
        },
        {
          label: "Password",
          name: "password",
          type: "password",
          placeholder: "Enter your password",
        },
      ]}
      linkText="Already have an account?"
      linkHref="/login"
      handleSubmit={handleRegister}
    />
  );
};

export default Register;
