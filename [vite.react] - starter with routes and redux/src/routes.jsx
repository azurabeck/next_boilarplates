import Home from './GLOBAL/TEMPLATES/Home'
import { GlobalStyle } from './ASSETS/style'

import {
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
      <>          
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </>
  )
}

export default App
