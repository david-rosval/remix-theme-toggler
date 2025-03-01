import { data, useFetcher } from "@remix-run/react";
import { useHints } from "../utils/client-hints"
import { ActionFunctionArgs } from "@remix-run/node";
import { setTheme } from "~/utils/theme.server";
import { useRequestInfo } from "~/utils/request-info";

export function useTheme() {
  const hints = useHints();
  const requestInfo = useRequestInfo()
  return requestInfo.userPrefs.theme as "light" | "dark" ?? hints.theme
}

// ACTION
export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData()
  const theme = formData.get("theme") as "light" | "dark" | "system"
  console.log("formData:",theme)

  const cookie = await setTheme(theme)
  console.log(cookie)

  return data(
    { result: theme },
    { headers: { "Set-Cookie": cookie }}
  )

}

export function ThemeSwitch({ 
  userPreference 
}: { userPreference?: "light" | "dark" | null }) {
  const fetcher = useFetcher()
  const mode = userPreference ?? "system"

  const nextMode = 
  mode === "system" 
    ? "light" 
    : mode === "light" 
      ? "dark" 
      : "system"

  const modeLabel = {
    light: (
      <p>Light</p>
    ),
    dark: (
      <p>Dark</p>
    ),
    system: (
      <p>System</p>
    )
  }

  return (
    <fetcher.Form method="post" action="/resources/theme-switch">
      <input type="hidden" name="theme" value={nextMode} />
      <div>
        <button type="submit" className="border rounded-lg p-4">
          {modeLabel[mode]}
        </button>
      </div>
    </fetcher.Form>
  )
}