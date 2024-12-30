import PropTypes from "prop-types";
import { Button } from "@chakra-ui/react";

function CustomButton({ variant, children, ...props }) {
  const isSecondary = variant === "secondary";

  return (
    <Button
      size="lg"
      bg={isSecondary ? "transparent" : "#FE99B4"}
      border="1px solid #FE99B4"
      borderRadius="9999px"
      color={isSecondary ? "#FE99B4" : "white"}
      fontWeight={400}
      fontFamily="'Lato', sans-serif"
      _hover={{
        bg: isSecondary ? "#FE99B4" : "#E988A3",
        color: "white",
        border: isSecondary ? "1px solid #FE99B4" : "1px solid #E988A3",
      }}
      {...props}
    >
      {children}
    </Button>
  );
}

// Define prop types for validation
CustomButton.propTypes = {
  variant: PropTypes.oneOf(["secondary", "outline"]).isRequired,
  children: PropTypes.node.isRequired, // Validates that children are passed
};

export default CustomButton;
