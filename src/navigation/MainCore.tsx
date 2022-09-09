import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageOne from '../pages/PageOne';
import PageTwo from '../pages/PageTwo';
import PageThree from '../pages/PageThree';
import HomePage from '../pages/HomePage';

const MainCore = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/page-one" element={<PageOne />}/>
        <Route path="/page-two" element={<PageTwo />}/>
        <Route path="/page-three" element={<PageThree />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default MainCore