import prisma from './prisma'

export const validadeRoute = (handler) => {
  return async (req:NextApiRequest, res: NextApiResponse) => {
    const token = req.cookies.TRAX_ACESS_TOKEN

    if(token) {
      let user;

      try {
        const { id } = jwt.verify(token, 'hello')
        user = await prisma.user.findUnique({
          where: { id },
        })

        if( !user ) {
          throw new Error('Not real user')
        }
      } catch (error) {
        res.status(401)
        res.json({ error: 'Not Authorized' })
      }

      return handler(req, res, user)
    }

    res.status(401)
    res.json({error: 'Not Authorized'})
  }
}