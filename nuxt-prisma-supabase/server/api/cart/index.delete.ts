export default defineEventHandler((event) => {
    return {
        statusCode: 204,
        message: 'DELETE request to /api/cart',
    }
})