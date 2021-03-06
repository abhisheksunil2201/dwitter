import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import Button from '../components/Button';
import SignUpForm from '../components/SignUpForm';
import useDwitter from '../hooks/useDwitter';

const Home: NextPage = () => {
  const { connect, account, createUser, user, postDweet, dweets } =
    useDwitter();
  const [dweetContent, setDweetContent] = useState<string>('');

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black py-2">
      <Head>
        <title>Dwitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20">
        <h1 className="mb-8 text-6xl font-bold text-white">
          Welcome to <span className="text-blue-500">Dwitter</span>
        </h1>
        {!account ? (
          <Button label="Connect with Ethereum" onClick={connect} />
        ) : account.toUpperCase() !== user?.wallet.toUpperCase() ? (
          <SignUpForm createUser={createUser} />
        ) : (
          <>
            <div className="flex w-80 items-center">
              <img src={user?.avatar} className="mr-4 h-16 w-16 rounded-full" />
              <textarea
                className="ml-4 w-64 rounded-xl"
                placeholder="What's happening?"
                value={dweetContent}
                onChange={(e) => setDweetContent(e.target.value)}
              />
            </div>
            <div className="mt-2 flex w-72 justify-end">
              <Button
                label="Dweet"
                onClick={() => {
                  postDweet(dweetContent);
                }}
              />
            </div>
          </>
        )}
        {dweets.map((dweet) => (
          <span className="w-64 py-2 px-4 text-white">{dweet.content}</span>
        ))}
      </main>

      <footer className="flex h-24 w-full items-center justify-center text-white">
        Powered by Ethereum
      </footer>
    </div>
  );
};

export default Home;
