This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This project has been created to reproduce [issue 6559](https://github.com/nextauthjs/next-auth/issues/6559) in [next-auth](https://github.com/nextauthjs/next-auth) as minimally as possible.  It is using a [Sitecore JSS 20.x style setup](https://github.com/Sitecore/jss/tree/release/20.0.0/packages/sitecore-jss-nextjs), however all Sitecore functionality (with the exception of a few types) is mocked and included in the project.   It is making use of [component-level data fetching in JSS Next.JS apps](https://doc.sitecore.com/xp/en/developers/hd/210/sitecore-headless-development/component-level-data-fetching-in-jss-next-js-apps.html) and **next-auth** is used in the single component included on the page.

You can read more about Sitecore JSS for Next.JS [in the Sitecore documentation](https://doc.sitecore.com/xp/en/developers/hd/200/sitecore-headless-development/sitecore-javascript-rendering-sdk--jss--for-next-js.html) or at [the SDK repo in GitHub](https://github.com/Sitecore/jss).

# To reproduce the issue

Simply build the project

    npm run build

or start the project

    npm run dev

and browse to http://localhost:3000/

# To fix the issue 

Checkout branch *patch-fix* for pre-fixed version.

Perform the following steps in your local project:

    npm install --save-dev patch-package

Remove the 'if' block from [packages/next-auth/src/next/index.ts#L121-L139](https://github.com/nextauthjs/next-auth/blob/40261834111156b0df1318f5a9d8bd652387ff7f/packages/next-auth/src/next/index.ts#L121-L126) leaving just the 'else' lines [packages/next-auth/src/next/index.ts#L136-L138](https://github.com/nextauthjs/next-auth/blob/40261834111156b0df1318f5a9d8bd652387ff7f/packages/next-auth/src/next/index.ts#L136-L138).

    npx patch-package next-auth