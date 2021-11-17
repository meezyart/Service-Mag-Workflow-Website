import React from "react"
import { GlobalProvider } from "./src/context/globalContext"
import { AnimatePresence } from "framer-motion"

export const wrapRootElement = ({ element }) => {
  return <GlobalProvider><AnimatePresence exitBeforeEnter>{element}</AnimatePresence></GlobalProvider>
}
