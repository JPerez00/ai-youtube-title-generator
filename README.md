# Introducing TubeTitles.AI

![Image](/public/project-banner.png)

## Your AI-Powered Solution For Generating Unique & Captivating YouTube Titles.

TubeTitles.AI is a [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/[) & [Tailwind CSS](https://tailwindcss.com/) application that uses the [Open AI](https://openai.com/) API to generate captivating YouTube titles. Just follow the 9 steps to generate optimized, attention-grabbing titles to enhance your video's reach.

## Live Demo:

[https://tube-titles-ai.vercel.app/](https://tube-titles-ai.vercel.app/)


## Main Features:

- AI Model Selection (Open AI API).
- User-friendly Interface.
- Customizable Inputs.
- Skeleton Loading Animation.
- Clipboard Functionality.
- Dialog Notification (Headless UI).
- [Next-Themes](https://github.com/pacocoursey/next-themes) Light & Dark Modes With Toggle.


## Open AI API:

This project needs an Open AI API key. Head over to [there](https://openai.com/) and create an API key id you don't have one already.

## Clone & Run Locally

First, execute create-next-app with npx to bootstrap the example:

```bash
npx create-next-app --example https://github.com/JPerez00/ai-youtube-title-generator your-project-name-here
```

Create a `.env.local` file in the root directory of your project and add your OpenAI API key:

```bash
OPENAI_API_KEY=your-openai-api-key-here
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Clone & Deploy

When deploying the project to Vercel, add the same environment variable to your Vercel project.

Navigate to your Vercel dashboard, select your project, go to the "Settings" tab, and then to "Environment Variables."

Add OPENAI_API_KEY as the key and your OpenAI API key as the value. This ensures the API key is securely accessible both locally and in the deployed environment.

```bash
OPENAI_API_KEY=your-openai-api-key-here
```

## Clone & Deploy

First, execute create-next-app with npm to bootstrap the example:

```bash
npx create-next-app --example https://github.com/JPerez00/ai-youtube-title-generator your-project-name-here
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Start Editing

- Edit the Main Home page by modifying `app/page.tsx`.
- Edit all the dropdown menus by modifiying `app/components/....tsx`,
- Edit API routes for OpenAI by modifiying `app/api/generate-titles/route.ts`

## Font

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!