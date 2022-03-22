import { Box } from "@chakra-ui/layout";

const PlayerLayout = ({ childreen }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box position="absolute" top="0" width="250px" left="0">
        sidebar
      </Box>
      <Box marginLeft="250px" marginBottom="100px">
        {childreen}
      </Box>
      <Box position="absolute" left="0" bottom="0">
        player
      </Box>
    </Box>
  );
};

export default PlayerLayout;
