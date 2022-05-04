import { Route, Routes } from 'react-router';
import './App.css';
import Calc from './Components/Calc';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Singledet from './Components/Singledet';
import Todo from './Components/Todo';
import Todos from './Components/Todos';
function App() {

return <div className='App'>
    <Nav/>
<Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/add' element={<Todo/>}/>
   <Route path='/calc' element={<Calc/>}/>
   <Route path='/list' element={<Todos/>}/>
   {/* <Route path='/list/:id' element={<Singledet/>}/> */}
</Routes>
    </div>
}


export default App;
