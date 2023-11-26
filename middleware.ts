import { authMiddleware, redirectToSignIn } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  publicRoutes: ['/'],

  afterAuth(authMiddle, req) {
    if (authMiddle.userId && authMiddle.isPublicRoute) {
      let path = '/select-org';

      if (authMiddle.orgId) {
        path = `/organization/${authMiddle.orgId}`;
      }

      const orgSelection = new URL(path, req.url);

      return NextResponse.redirect(orgSelection);
    }

    if (!authMiddle.userId && !authMiddle.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }

    if (
      authMiddle.userId &&
      !authMiddle.orgId &&
      req.nextUrl.pathname !== '/select-org'
    ) {
      const orgSelection = new URL('/select-org', req.url);

      return NextResponse.redirect(orgSelection);
    }
  },
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
