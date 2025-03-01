import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";

import "./tailwind.css";
import { ClienHintCheck, getHints } from "./utils/client-hints";
import { useTheme } from "./routes/resources.theme-switch";
import { getTheme, type Theme } from "./utils/theme.server";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return {
    requestInfo: {
      hints: getHints(request),
      userPrefs: {
        theme: await getTheme(request)
      }
    }
  }
}

function Document({ children, theme = "light"  } : { children: React.ReactNode, theme?: Theme }) {
  return (
    <html lang="en" className={theme}>
      <head>
        <ClienHintCheck />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  const theme = useTheme()

  return (
    <Document theme={theme}>
      <Outlet />
    </Document>

  )
}

