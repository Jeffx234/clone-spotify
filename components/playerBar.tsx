import { Box, Flex, Text } from '@chakra-ui/layout'
import Player from './player'

const PlayerBar = () => {
  return (
    <Box bg="gray.900" height="100px" padding="10px" w="100vw" bg="gray.900">
      <Flex align="center">
       <Box p="20px" color="white" w="30%">
          <Text fontSize="large"> Song Name </Text>
          <Text fontSize="sm">Artist Name</Text>
       </Box>
        <Box w="40%">
          <Player />
        </Box>
      </Flex>
    </Box>
  )
}

export default PlayerBar