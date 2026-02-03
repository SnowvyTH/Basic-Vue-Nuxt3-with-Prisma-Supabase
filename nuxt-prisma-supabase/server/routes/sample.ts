export default defineEventHandler((event) => {

    if(event.context.auth.role !== 'admin') {
        throw createError(
            {
                statusCode: 403,
                message: 'Unauthorized'
            }
        )
        
    }

    return {
        message: `Welcome user ${event.context.auth.user}, Your have permission to ${event.context.auth.permissions}`
    }
})