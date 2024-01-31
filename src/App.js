import {Link,NavLink,Route, Routes}from "react-router-dom"
import {Home} from "./pages/Home"
import { About } from "./pages/About";
import { Book } from "./pages/Book";
import { Booklist } from "./pages/Booklist";
import { Newbook } from "./pages/Newbook";
import { Notfoundpage } from "./pages/Notfoundpage";
import { Booklayout } from "./pages/Booklayout";
import "./styles.css"

function App() {
  return (
  <>  
  <nav>
    <ul>
      <li><NavLink to="/" >Home</NavLink></li>
      <li><NavLink end to="/books">Book</NavLink></li>
     
    </ul>
  </nav>
  <Routes>
    
    <Route path="/" element={<Home />} />
    <Route path="/books" element={<Booklayout/>}>
      <Route index element={<Booklist/>}/>
      <Route path=":id" element={<Book/>}/>
      <Route path="new" element={<Newbook/>}/>
      <Route path="new/:newid" element={<Newbook/>}/>
    </Route>
    <Route path="*" element={<Notfoundpage />} />
    
  </Routes>
  </>

  )
}

export default App;
