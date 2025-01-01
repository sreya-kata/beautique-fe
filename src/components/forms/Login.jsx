import AuthForm from "./AuthForm";
import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/auth";

const Login = () => {
  const handleLogin = async (formData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, formData);
      console.log("Login Successful", response.data);
      // Handle success, e.g., redirect or store token
    } catch (error) {
      console.error("Login Failed", error.response?.data || error.message);
      // Handle error
    }
  };

  return (
    <AuthForm
      pageTitle="Sign In"
      buttonText="Log In"
      inputs={[
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
      linkText="New user?"
      linkHref="/register"
      handleSubmit={handleLogin}
    />
  );
};

export default Login;
