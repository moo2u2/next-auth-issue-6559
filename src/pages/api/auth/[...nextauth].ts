import NextAuth from "next-auth";
// import { Session } from "next-auth";
// import { JWT } from "next-auth/jwt";
import SalesforceProvider from "next-auth/providers/salesforce";

interface TokenUser {
  id: string;
  sub?: string;
  name?: string;
  email?: string;
  image?: string;
}

export const authOptions = {
  providers: [
    SalesforceProvider({
      clientId: process.env.SALESFORCE_CLIENT_ID!,
      clientSecret: process.env.SALESFORCE_CLIENT_SECRET!,
      idToken: false,
      issuer: process.env.SALESFORCE_CLIENT_URL,
      authorization: {
        params: {
          scope: "api id web refresh_token profile",
        },
      },
    }),
  ],
  callbacks: {
    // async jwt({ token, profile }: { token: JWT; profile: TokenUser }) {
    //   // Persist data in the token for future access
    //   if (profile) {
    //     token.id = profile.id;
    //     token.user = profile;
    //   }
    //   return token;
    // },
    // async session({ session, token }: { session: Session; token: JWT }) {
    //   // Send desired properties to the client as part of the session
    //   session.user = {
    //     name: (token.user as TokenUser).name,
    //   };
    //   return session;
    // },
  },
};

export default NextAuth(authOptions);
