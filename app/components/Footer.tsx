import { AnchorHTMLAttributes, ClassAttributes, JSX } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Pin(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLAnchorElement> & AnchorHTMLAttributes<HTMLAnchorElement>) {
    return (
      <a
        {...props}
        target="_blank"
        className="mr-0.5 ml-0.5 inline-flex items-center rounded-md border border-zinc-300 bg-white p-1 text-sm leading-4 text-zinc-800 no-underline dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
      />
    );
  }

export function Footer() {
  return (
    <footer className="">
      <div className="flex flex-col items-center border-t border-zinc-400/20 py-10 sm:flex-row-reverse sm:justify-between">
        <p className="text-sm text-zinc-500 dark:text-zinc-400 sm:mt-0">
          Developed by <Link href="https://www.jorge-perez.dev/" className="hover:text-zinc-600 hover:dark:text-zinc-300 hover:underline">Jorge Perez</Link>
        </p>
        <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-400 sm:mt-0">
            Powered by{' '}
        <Pin href="https://vercel.com/home">
        <svg
          width="13"
          height="11"
          role="img"
          aria-label="Vercel logo"
          className="mr-1 inline-flex"
        >
          <use href="/sprite.svg#vercel" />
        </svg>
          Vercel
        </Pin>
          {' '}&{' '}
          <Pin href="https://openai.com/">
          <Image
              alt="Open AI logomark"
              src="/openai-logomark.svg"
              className="!mr-1"
              width="14"
              height="14"
          />
          Open AI
          </Pin>      
        </p>
      </div>
    </footer>
  )
}
