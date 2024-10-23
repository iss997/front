import {BrowserRouter as Router,  Routes,Route} from 'react-router-dom';
import Listarticles from './articles/Listarticles';
import Insertarticle from './articles/Insertarticle';
import Viewarticle from './articles/Viewarticle';
import Listcategorie from './categories/Listcategorie';
import Insertscategorie from './scategories/Insertscategorie';
import Editcategorie from './categories/Editcategorie';
import Viewcategorie from './categories/Viewcategorie';
import Insertcategories from './categories/Insertcategories';
import Editscategorie from './scategories/Editscategorie';
import Viewscategories from './scategories/Viewscategories';
import Listscategories from './scategories/Listscategories';
import Editarticle from './articles/Editarticle';
import Menu from './components/Menu';
function App() {
  

  return (
    <>
    <Router>
      <Menu/>
      <Routes>
        <Route path="/articles" element={<Listarticles />} />
        <Route path="/articles/add" element={<Insertarticle />}/>
        <Rout path="/articles/edit/:id" element={<Editarticle />}/>
        <Route path="/articles/view/:id" element={<Viewarticle />}/>

        <Route path="/categories" element={<Listcategorie />} />
        <Route path="/categories/add" element={<Insertcategories />}/>
        <Route path="/categories/edit/:id" element={<Editcategorie />}/>
        <Route path="/categories/view/:id" element={<Viewcategorie />}/>


        <Route path="/scategories" element={<Listscategories />} />
        <Route path="/scategories/add" element={<Insertscategorie />}/>
        <Route path="/scategories/edit/:id" element={<Editscategorie />}/>
        <Route path="/scategories/view/:id" element={<Viewscategories />}/>

        

      </Routes>
      
    </Router>
    <h1>bienvenu</h1>
    </>
      )}

export default App
