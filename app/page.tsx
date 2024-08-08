import Image from "next/image";
import Container from "./components/Container"

function Pin(props: JSX.IntrinsicAttributes & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      target="_blank"
      className="mr-0.5 ml-0.5 inline-flex items-center rounded border border-zinc-300 bg-white p-1 text-sm leading-4 text-zinc-800 no-underline dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
    />
  );
}

export default function Home() {
  return (
    <main className="flex flex-1 w-full flex-col items-center justify-center text-center">
      <Container>
        <div className="shadow-sm font-semibold mb-4 first-letter:shadow inline-flex rounded-full px-4 py-1 md:py-2 text-xs md:text-sm leading-6 text-zinc-500 dark:text-zinc-400 hover:ring-gray-900/20 bg-white dark:bg-zinc-800 ring-1 ring-zinc-900/10 backdrop-blur dark:ring-white/20 dark:hover:ring-white/30">
          Introducing TubeTitles.AI
        </div>
        <h1 className="text-balance md:text-6xl md:leading-[4.4rem] text-4xl font-bold text-zinc-900 dark:text-white tracking-tighter">
          Your AI-Powered Solution For Generating Unique & Captivating{' '}
          <span className="relative whitespace-nowrap text-red-500">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute left-0 top-2/3 h-[0.5em] w-full fill-red-300/70"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
            </svg>
            <span className="relative font-extrabold">YouTube Titles</span>
          </span>
        </h1>
        <p className="text-balance mt-8 text-center text-zinc-600 dark:text-zinc-300 md:text-lg">
          This is a{' '}
          <Pin href="https://nextjs.org">
            <Image
              alt="Next.js logomark"
              src="/next-logo.svg"
              className="!mr-1"
              width="14"
              height="14"
            />
            Next.js
          </Pin>
          {' '}and{' '}
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
          {' '}application that generates captivating YouTube titles. Just follow the 9 steps below to generate optimized, attention-grabbing titles to enhance your video's reach.
        </p>
      </Container>
    </main>
  );
}
