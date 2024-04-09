import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
export default NextAuth(authConfig).auth;
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
//使用中间件执行此任务的优势在于，受保护的路由在中间件验证身份之前甚至不会开始渲染，从而增强了应用程序的安全性和性能。

