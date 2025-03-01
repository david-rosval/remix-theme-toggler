import { getHintUtils } from "@epic-web/client-hints"
import { clientHint as colourSchemeHint } from "@epic-web/client-hints/color-scheme"
import { useRequestInfo } from "./request-info"

const hintsUtils = getHintUtils({ theme: colourSchemeHint})

export const { getHints } = hintsUtils

export  function ClienHintCheck() {
  return (
    <script 
      dangerouslySetInnerHTML={{
        __html: hintsUtils.getClientHintCheckScript()
      }}
    />
  )
}

export function useHints() {
  const requestInfo = useRequestInfo()
  return requestInfo.hints
}