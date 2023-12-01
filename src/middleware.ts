import createMiddleware from 'next-intl/middleware';

export const Languages= ['en', 'hi']

export default createMiddleware({
  locales: Languages,
  defaultLocale: 'en'
});
 
export const config = {
  matcher: ['/', '/(hi|en)/:path*']
};