import GradientLayout from '../components/gradientLayout'
import prisma from '../lib/prisma'

const Home = ({ artists }) => {
  return (
    <GradientLayout
      roundImage
      image="./goku.png"
      color="blue"
      subTitle="profile"
      title="Jeferson Luis"
      description="15 listas de reprodução pública"
    >
      <div>home page</div>
    </GradientLayout>
  )
}

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({})
  console.log(artists)
  return {
    props: { artists },
  }
}

export default Home
