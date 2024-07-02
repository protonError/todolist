export function middleware(request) {
    const authToken = request.cookies.get('authToken');
    if (!authToken && request.nextUrl.pathname === '/') {
        return Response.redirect(new URL('/login', request.url))
    }

    if(authToken && request.nextUrl.pathname === '/login') {
        return Response.redirect(new URL('/', request.url))
    }
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)', "/"],
}