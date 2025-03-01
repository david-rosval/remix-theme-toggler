import { useRouteLoaderData } from "@remix-run/react";
import { loader } from "../root";
import { invariant } from "@epic-web/invariant"

export function useRequestInfo() {
  const data = useRouteLoaderData<typeof loader>('root')
  invariant(data?.requestInfo, "No requestInfo found in root loader")
  console.log("from useRequestInfo\n", data.requestInfo)
  return data.requestInfo
}