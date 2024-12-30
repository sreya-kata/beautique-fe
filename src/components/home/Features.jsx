import { Card, Image, Box, Grid } from "@chakra-ui/react";
import skincare from "../../assets/skincare.jpg";
import hairTools from "../../assets/hair-tools.jpg";
import product from "../../assets/product.jpg";

function Features() {
  return (
    <Box as="section" p={20}>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} // Single column for small screens, 3 for medium and up
        gap={6} // Spacing between grid items
        justifyItems="center" // Centers items horizontally within the grid
        alignItems="center" // Ensures cards align vertically
      >
        <Card.Root maxW="sm" overflow="hidden">
          <Image src={hairTools} alt="Blow dryer and hair brushes on a bed" />
          <Card.Body gap="2">
            <Card.Title>Personalized Recommendations</Card.Title>
            <Card.Description>
              AI-driven advice tailored to your skin type and beauty goals.
            </Card.Description>
          </Card.Body>
        </Card.Root>
        <Card.Root maxW="sm" overflow="hidden">
          <Image src={product} alt="Unlabeled skin serum product" />
          <Card.Body gap="2">
            <Card.Title>Ingredient Analysis</Card.Title>
            <Card.Description>
              Understand what’s in your products and how they work for you.
            </Card.Description>
          </Card.Body>
        </Card.Root>
        <Card.Root maxW="sm" overflow="hidden">
          <Image src={skincare} alt="Person's hand applying skincare product" />
          <Card.Body gap="2">
            <Card.Title>Routine Builder</Card.Title>
            <Card.Description>
              Create a skincare or beauty routine that fits your lifestyle.
            </Card.Description>
          </Card.Body>
        </Card.Root>
      </Grid>
    </Box>
  );
}

export default Features;
