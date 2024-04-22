import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import { Route, Routes } from "react-router-dom";
import QuestionRender from './component/QuestionRender';
import QuestionDetail from './component/QuestionDetail';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <div style={{ margin: "50px 0px" }}>
        <Routes>
          <Route path='/' element={<QuestionRender></QuestionRender>}></Route>
          <Route path='/question/:id' element={<QuestionDetail></QuestionDetail>}></Route>

        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
