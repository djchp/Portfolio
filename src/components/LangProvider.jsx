import { createContext, useState } from "react"

export const LangContext = createContext(null)
const LangProvider = ({children}) => {
    
    const [lang, setLang] = useState("eng")

    const changeLang = () => {
        setLang(lang ==="eng" ? "pl" : "eng")
    }
  return (
    <LangContext.Provider value={{lang, changeLang}}>
        {children}
    </LangContext.Provider>
  )
}

export default LangProvider