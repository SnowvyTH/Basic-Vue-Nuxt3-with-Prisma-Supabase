export default defineEventHandler((event) => {
    const config = useRuntimeConfig();
    const WP_SECRET = config.wpsecret;
    return {
        message: 'This is a demo API endpoint',
        secret: WP_SECRET
    }
})