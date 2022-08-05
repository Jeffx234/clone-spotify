import { Flex, Box, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import GradientLayout from '../components/gradientLayout'
import prisma from '../lib/prisma'
import { useMe } from '../lib/hooks'

const Home = ({artists}) => {
  const { user } = useMe()

  console.log(user)

  return (
    <GradientLayout
      roundImage
      image="./goku.png"
      color="gray"
      subTitle="profile"
      title={`${user?.firstName} ${user?.lastName}`}
      description={`${user?.playlistsCount} public playlists`}
    >
      <Box color="white" paddingX="40px">
        <Box mb="40px">
          <Text fontSize="2xl" fontWeight="bold"> Top artist this month</Text>
          <Text fontSize="md"> only visible to yo</Text>
        </Box>
        <Flex>
          {artists.map(artist => (
            <Box key={artist.id} paddingX="10px" width="20%">
              <Box bg="gray.900" borderRadius="4px" padding="15px" width="100%">
                <Image height="100%" w="100%" src="https://placekitten.com/300/300" />
                <Box mt="10px">
                  <Text fontSize="large">{artist.name}</Text>
                  <Text fontSize="small">Artist</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  )
}

export const getServerSideProps = async () => {
  const users = await prisma.user.findMany({})
  const playlists = await prisma.playlist.findMany({})
  const artists = await prisma.artist.findMany({})
  return {
    props: { artists, users, playlists},
  }
}

export default Home
