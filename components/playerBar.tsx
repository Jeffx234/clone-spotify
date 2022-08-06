import { Box, Flex, Text } from '@chakra-ui/layout'
import Player from './player'
import { useStoreState } from 'easy-peasy'

const PlayerBar = () => {
  const songs = useStoreState((state: any) => state.activeSongs)
  const activeSong = useStoreState((state: any) => state.activeSong)

  return (
    <Box bg="gray.900" height="100px" padding="10px" w="100vw" bg="gray.900">
      <Flex align="center">
        {activeSong ? (
          <Box p="20px" color="white" w="30%">
            <Text fontSize="large"> {activeSong.name} </Text>
            <Text fontSize="sm">{activeSong.artist.name}</Text>
          </Box>
        ) : null}
        <Box w="40%">
          {activeSong ? <Player songs={songs} activeSong={activeSong} /> : null}
        </Box>
      </Flex>
    </Box>
  )
}

export default PlayerBar
