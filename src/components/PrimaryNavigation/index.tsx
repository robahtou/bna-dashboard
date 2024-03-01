import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useAuthenticator } from '@aws-amplify/ui-react';

import SignoutButton from '../SignoutButton';
import styles from './styles.module.css';


function PrimaryNavigation() {
  const { authStatus, user, signOut } = useAuthenticator(context => [context.user]);

  if (authStatus !== 'authenticated') {
    return redirect('/login');
  }

  return (
    <nav aria-labelledby="primary-navigation" className={styles['nav']}>
      <ul id="primary-navigation">
        <li className={styles['nav-item']}>
          <Link href="/submission">Submissions</Link>
        </li>
        <li className={styles['nav-item']}>
          <Link href="/new-analysis">New Analysis</Link>
        </li>
        <li className={styles['nav-item']}>
          <Link href="/results">Results</Link>
        </li>
      </ul>

      <SignoutButton onClick={signOut}></SignoutButton>
    </nav>
  );
}


export default PrimaryNavigation;
