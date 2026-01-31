export default defineEventHandler((event) => {
    const cookies = parseCookies(event)
    console.log('Cookies:', cookies)

    setCookie(event, 'myCookie', 'myCookieValue', {
        httpOnly: true,
        maxAge: 60 * 60 * 24,
        secure: false
    })

    return {
        message: 'Cookie has been set',
        cookies
    }
})