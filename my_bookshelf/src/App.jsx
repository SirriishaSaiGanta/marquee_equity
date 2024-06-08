//// Import necessary components from react-router-dom
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Header from "./components/Header";
import MyBookShelf from "./components/MyBookShelf";

function App() {

  return (
    <>
      
      <Router>{/* Router component wraps the entire application to enable routing*/}
        <Routes> {/* Routes component is used to define routes */}
          <Route exact path="/" element={<Header/>}/> {/* Route for the home page, renders Header component */}
          <Route exact path="/MyBookShelf" element={<MyBookShelf/>}/>
        </Routes>
      </Router>
    </>
  );
}
export default App;
