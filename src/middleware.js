

export function middleware(request) {
    const authToken = request.cookies.get('authtoken');

    if (authToken && !request.nextUrl.pathname.startsWith('/')) {
        return Response.redirect(new URL('/', request.url))
    }

    if (!authToken && !request.nextUrl.pathname.startsWith('/login')) {
        return Response.redirect(new URL('/login', request.url))
    }
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}