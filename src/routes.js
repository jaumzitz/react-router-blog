import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Menu from './components/Menu';
import Footer from 'components/Footer';
import DefaultPage from 'components/DefaultPage';
import Post from 'pages/Post';
import NotFound from 'pages/NotFound';
import ScrollToTop from 'components/ScrollToTop';



function AppRoutes() {
  return (
    <BrowserRouter>
      
      <ScrollToTop/>

      <Menu></Menu>

      <Routes>
        <Route path='/' element={<DefaultPage />}>
          <Route path='/' element={<Home />} />
          <Route path='sobremim' element={<AboutMe />} />
        </Route>

        <Route path='posts/:id/*' element={<Post />} />
        <Route path='*' element={<NotFound />} />
        {/* 
        
        ROTAS ANINHADAS (Nested Routes) E USO DE <OUTLET/>
        Na rota "/" a estrutura a ser renderizada é:

        <DefaultPage>
          <Home/>
        </DefaultPage>

        ===================

        Na rota "/sobremim" a estrutura a ser renderizada é:

        <DefaultPage>
          <Sobre mim/>
        </DefaultPage>

        */}
      </Routes>

      <Footer></Footer>
    </BrowserRouter>
  );
}

export default AppRoutes;
