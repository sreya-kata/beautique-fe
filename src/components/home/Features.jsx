import { Card, Image, Box } from "@chakra-ui/react";
import skincare from "../../assets/skincare.jpg";
import hairTools from "../../assets/hair-tools.jpg";
import product from "../../assets/product.jpg";

function Features() {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="space-between"
      gap={6}
      p={20}
    >
      <Box flex="1 1 calc(33.333% - 1rem)" maxW="sm">
        <Card.Root maxW="sm" overflow="hidden" variant="elevated">
          <Image src={hairTools} alt="Blow dryer and hair brushes on a bed" />
          <Card.Body gap="2" textAlign="center">
            <Card.Title>Personalized Recommendations</Card.Title>
            <Card.Description fontSize="md">
              AI-driven advice tailored to your skin type and beauty goals.
            </Card.Description>
          </Card.Body>
        </Card.Root>
      </Box>
      <Box flex="1 1 calc(33.333% - 1rem)" maxW="sm">
        <Card.Root maxW="sm" overflow="hidden" variant="elevated">
          <Image src={product} alt="Unlabeled skin serum product" />
          <Card.Body gap="2" textAlign="center">
            <Card.Title>Ingredient Analysis</Card.Title>
            <Card.Description fontSize="md">
              Understand what’s in your products and how they work for you.
            </Card.Description>
          </Card.Body>
        </Card.Root>
      </Box>
      <Box flex="1 1 calc(33.333% - 1rem)" maxW="sm">
        <Card.Root maxW="sm" overflow="hidden" variant="elevated">
          <Image src={skincare} alt="Person's hand applying skincare product" />
          <Card.Body gap="2" textAlign="center">
            <Card.Title>Routine Builder</Card.Title>
            <Card.Description fontSize="md">
              Create a skincare or beauty routine that fits your lifestyle.
            </Card.Description>
          </Card.Body>
        </Card.Root>
      </Box>
    </Box>
  );
}

export default Features;
