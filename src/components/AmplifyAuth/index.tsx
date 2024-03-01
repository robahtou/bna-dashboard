'use client';

import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import awsExports from '../../aws-exports';
import '@aws-amplify/ui-react/styles.css';


Amplify.configure(awsExports, { ssr: true });

function AmplifyAuth({ children }: { children: React.ReactNode }) {
  return (
    <Authenticator.Provider>
      {children}
    </Authenticator.Provider>
  );
}


export default AmplifyAuth;
