'use client';
import { useState, useActionState } from 'react';

import { authClient } from '@/lib/auth-client';

export default function AuthPage() {
  const { data: session, error: authError } = authClient.useSession();
  const [isLogin, setIsLogin] = useState(true);

  function toggleAuthMode() {
    setIsLogin((prevMode) => !prevMode);
  }

  async function onAuthSubmit(_prevState, fd) {
    const email = fd.get('email');
    const password = fd.get('password');
    if (isLogin) {
      const { data } = await authClient.signIn.email({
        email,
        password,
      });
      console.log(data);
      return;
    }

    const { data } = await authClient.signUp.email({
      email,
      password,
      name: email,
    });
    console.log(data);
  }

  async function onLogout() {
    await authClient.signOut();
  }

  const [, action, isPending] = useActionState(onAuthSubmit, null);

  return (
    <main className='min-h-screen w-full bg-stone-900 px-10 pb-10 pt-12 text-stone-100'>
      {authError && (
        <p className='w-full rounded-md bg-red-300 p-6 text-center'>
          {authError}
        </p>
      )}
      <form
        action={action}
        className='mx-auto max-w-[45rem] rounded-md bg-stone-600 p-4 shadow-md'
      >
        <header className='font-mono'>
          <h2 className='text-2xl font-bold'>
            {isLogin ? 'Login' : 'Sign Up'}
          </h2>
        </header>
        <div className='p-4'>
          <div className='mt-3'>
            <label htmlFor='email' className='block text-sm font-bold'>
              Email
            </label>
            <input
              className='input'
              type='email'
              name='email'
              placeholder='your@email.com'
              required
            />
          </div>
          <div className='mt-3'>
            <label htmlFor='password' className='block text-sm font-bold'>
              Password
            </label>
            <input
              className='input'
              type='password'
              name='password'
              placeholder='Enter a strong passsord...'
              required
            />
          </div>
          <div className='mt-4 flex items-center justify-end'>
            <button
              disabled={isPending}
              className='rounded-md bg-blue-500 px-7 py-2 text-lg font-bold uppercase drop-shadow-md duration-300 hover:bg-blue-600 hover:drop-shadow-sm disabled:bg-stone-300 disabled:text-stone-500'
            >
              {!isPending && (!isLogin ? 'Sign Up' : 'Login')}
              {isPending && 'Submitting...'}
            </button>
          </div>
        </div>
        <div className='text-center'>
          <button
            type='button'
            onClick={toggleAuthMode}
            disabled={isPending}
            className='text-lg duration-300 hover:text-stone-800'
          >
            {!isLogin
              ? 'Already registered? Switch to log in.'
              : 'Already a member? Switch to sign up.'}
          </button>
        </div>
      </form>
      <section className='mt-12 space-y-6 text-center'>
        <h1 className='text-3xl'>
          {session ? 'You are signed in!' : 'You are NOT signed in.'}
        </h1>
        {session && (
          <button
            onClick={onLogout}
            className='rounded-md border-2 border-stone-300 p-4 px-6 py-2 font-bold text-stone-300'
          >
            Logout
          </button>
        )}
      </section>
    </main>
  );
}
