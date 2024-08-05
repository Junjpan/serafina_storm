This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server (node version need to be v18.7.0 and above):

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Heroku deploy

1. heroku login
2. git push heroku master

If this is a new app. make sure you run `heroku create` first. To change the app name, run `heroku apps:rename newName`.

## [Storybook](https://master--6689ca7199e333f9d3ccb71f.chromatic.com/)
This link is updated for every build.

## Storybook to Figma design workflow
1. Set up github workflows for chromatic update.
2. Whenever code is merged into the master branch, the Chromatic action will run. This action generates a new Storybook link and requests you to review any component changes before the build can be completed. If the review is not done, the build will remain pending.
3. There are two ways to render storybook components to Figma file:
##### Thru story.to.design Figma plugin
- Provide your Chromatic Storybook link to render the components into your Figma file. Whenever a Storybook component is updated, 
          use this plugin to re-sync, and the component in the Figma file will also be updated.
- This plugin also provide local mode for your local storybook, however, it requires to pay $200/month to be able to use this service.
- Here is the [example](https://www.figma.com/design/zK1G0p1eYw0V7HX7JWNdex/Prototyping-in-Figma?node-id=115-499&t=Wq5vf33JKiMXgTis-1ple)
           for using story.to.design plugin to create and update components       
##### Thru Storybook Connect Figma plugin
- This plugin only work if your component is hosting in chromatic. it's free to use.
    
   

  
