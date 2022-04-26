import { Box, Flex, Input, Button, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { FC, FormEvent, useState } from 'react'
import NextImage from 'next/image'
import { useSWRConfig } from ' swr'
import { auth } from '../lib/mutations'

const AuthForm: FC<{ mode: 'signin' | 'signup' }> = ({ mode }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await auth(mode, { email, password })
      setIsLoading(false)
      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Box height="100vh" width="100vw" bg="black" color="#fff">
      <Flex
        justify="center"
        align="center"
        height="100px"
        borderBottom="1px solid white"
      >
        <NextImage src="/logo.svg" height={60} width={120} />
      </Flex>
      <Flex justify="center" align="center" height="calc(100vh - 100px)">
        <Box padding="50px" bg="gray.900" borderRadius="6px">
          <Text
            textAlign="center"
            fontWeight="bold"
            fontSize="20"
            marginBottom="8"
          >
            Faça seu login
          </Text>

          <form onSubmit={handleSubmit}>
            <Input
              placeholder="email"
              type="email"
              marginBottom="8"
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              bg="green.500"
              sx={{
                '&:hover': {
                  bg: 'green.400',
                },
              }}
              width="100%"
              marginTop="8"
              isLoading={isLoading}
            >
              {mode}
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  )
}

export default AuthForm
