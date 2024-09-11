
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import List from './components/ProductList/productList';
import Add from './components/ProductAdd/productAdd';
function App() {
return (

  <Router>
        <Routes>
        <Route path="*" exact element={<List/>}/>
        <Route path="add-product" element={<Add/>} />
        </Routes>
        </Router>
)

}

export default App
