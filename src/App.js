import { useContext } from "react"
import Header from "../src/components/Header.js"
import Main from "../src/components/Main.js"
import ThemeContext from "./context/theme.context.js"
import './styles/components/App.scss'
import "bootstrap-icons/font/bootstrap-icons.css"

function App() {
  const {dark}=useContext(ThemeContext);

  return (
    <div className={`App-${dark?'dark':'light'}`}>
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
