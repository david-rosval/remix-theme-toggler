import { createCookie } from "@remix-run/node"

export type Theme = "light" | "dark"

const cookieName = "en_theme"

const themeCookie = createCookie(cookieName, {
  path: "/",
  maxAge: 31_536_000
})

export async function setTheme(theme: "light" | "dark" | "system") {
  if (theme === "system") {
    return await themeCookie.serialize("", { maxAge: -1 })
  } else {
    return await themeCookie.serialize(theme)
  }
}

export async function getTheme(request: Request) {
  const cookieHeader = request.headers.get("Cookie")
  const theme = await themeCookie.parse(cookieHeader)
  console.log("from getTheme\n(Obtaining the theme from cookie):\n", theme)
  if (theme && (theme === "light" || theme === "dark") ) return theme
  return null
}