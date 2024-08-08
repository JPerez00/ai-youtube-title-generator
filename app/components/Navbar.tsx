'use client';

import Link from 'next/link';
import { ModeToggle } from './ModeToggle';
import { Button } from '@headlessui/react'
import Image from 'next/image';


export function Navbar() {
  return (
    <nav className="mb-16 relative z-50 flex justify-between px-2">
      <div className="flex items-center space-x-2 mt-1">
        <Link href="/" aria-label="Home">
          <Image src="tubetitle.svg" width={36} height={36} alt="TubeTitles logo" className='-mt-1 inline-flex items-center justify-center drop-shadow-sm' />
          <h2 className='items-center justify-center inline-flex text-lg font-semibold tracking-tighter text-zinc-700 dark:text-zinc-200'>TubeTitles.AI</h2>
        </Link>
      </div>
      <div className="flex items-center gap-x-2">
        <Link href="https://github.com/JPerez00/ai-youtube-title-generator" passHref>
          <Button className="inline-flex items-center gap-1 rounded-lg py-1.5 px-3 text-sm font-semibold bg-zinc-700 text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-zinc-600 data-[open]:bg-zinc-700 data-[focus]:outline-1 data-[focus]:outline-white transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
            </svg>
            GitHub <span className="hidden lg:inline">Repo</span>
          </Button>
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
}