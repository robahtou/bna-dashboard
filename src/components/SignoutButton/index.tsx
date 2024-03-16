'use client';

import styles from './styles.module.css';


function SignoutButton({ className='', onClick=() => {} }) {
  return (
    <button
      className={`${styles['button']} ${className}`}
      type='button'
      onClick={onClick}
    >
      Sign out
    </button>
  );
}


export default SignoutButton;
