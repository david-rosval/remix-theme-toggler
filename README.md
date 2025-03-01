# Remix Dark Mode with Cookies

This repository contains an implementation of dark mode in a Remix application, based on the tutorial by [Matt Stobbs](https://www.mattstobbs.com/remix-dark-mode-2024/). However, instead of manually handling cookies, this version leverages Remix's built-in modules for cookie management.

## Features
- Dark mode support with user preferences saved in cookies.
- Server-side and client-side handling of theme state.
- Uses Remix's `createCookie` and `getSession` utilities for cleaner cookie management.

# This project was developed using Remix

- 📖 [Remix docs](https://remix.run/docs)

## Development

Run the dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.

## Credits
- [Matt Stobbs' Original Tutorial](https://www.mattstobbs.com/remix-dark-mode-2024/)
- Remix Documentation: [https://remix.run/docs](https://remix.run/docs)

## License
This project is licensed under the MIT License.