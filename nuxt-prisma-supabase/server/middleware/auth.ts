export default defineEventHandler((event) => {
    event.context.auth = {
        user: 'John',
        role: 'admin',
        permissions: ['read', 'write']
    }

    console.log(event.context.auth)
})