"use client";
import React from "react";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "../aws-exports";
import Admin from "../components/admin";

// Amplify.configure({
//   Auth: {
//     Cognito: {
//       // region: "us-west-2",
//       userPoolId: "us-west-2_NR1WheOtW",
//       userPoolClientId: "4jklli7010dqekcm52un5f5qq7",
//     },
//   },
// });

Amplify.configure(awsExports);

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <Admin signOut={signOut} user={user} />
        </main>
      )}
    </Authenticator>
  );
}
