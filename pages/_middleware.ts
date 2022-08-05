import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const signedinPages = ['/', '/playlist', '/library']

export default function middleware(req: NextRequest) {
  const url = req.nextUrl.clone()
  if (signedinPages.find((p) => p === url.pathname)) {
    const token = req.cookies.TRAX_ACCESS_TOKEN

    const { origin } = req.nextUrl
    if (!token) {
      return NextResponse.redirect(`${origin}/signin`)
    }
  }
}
