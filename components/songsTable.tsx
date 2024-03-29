import { Box } from '@chakra-ui/layout'
import { Table, Thead, Td, Tr, Th, Tbody, IconButton } from '@chakra-ui/react'
import { BsFillPlayFill } from 'react-icons/bs'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { formatDate, formatTime } from '../lib/formatters'
import { useStoreActions } from 'easy-peasy'

const SongTable = ({ songs }) => {
  const playSongs = useStoreActions((store: any) => store.changeActiveSongs)
  const setActiveSong = useStoreActions((store: any) => store.changeActiveSong)

  const handlePlay = (activeSong?) => {
    setActiveSong(activeSong || songs[0])
    playSongs(songs)
  }

  return (
    <Box bg="transparent" color="white">
      <Box padding="10px" mb="20px">
        <IconButton
          icon={<BsFillPlayFill fontSize="30px" />}
          aria-label="Play"
          colorScheme="green"
          size="lg"
          isRound
          onClick={() => handlePlay()}
        />
      </Box>

      <Table variant="unstyled">
        <Thead borderBottom="1px solid" borderColor="rgba{255, 255, 255, 0.2}">
          <Tr color="gray.100">
            <Th>#</Th>
            <Th>Title </Th>
            <Th>Date added </Th>
            <Th>
              {' '}
              <AiOutlineClockCircle />{' '}
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {songs.map((song, index) => (
            <Tr
              sx={{
                transition: 'all 0.2s ease-in-out',
                '&:hover': { background: 'rgba(255, 255, 255, 0.1)' },
              }}
              key={song.id}
              cursor="pointer"
              onClick={() => handlePlay(song)}
            >
              <Td>{index + 1}</Td>
              <Td>{song.name}</Td>
              <Td>{formatDate(song.createdAt)}</Td>
              <Td>{formatTime(song.duration)}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  )
}

export default SongTable
