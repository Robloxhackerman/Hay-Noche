import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './components/Index';
import Categories from './components/Categories';
import Restaurantes from './components/Restaurantes';
import Bares from './components/Bares';
import Teatro from './components/Teatro';
import Musica from './components/Musica';
import Eventos from './components/Eventos';
import Todo from './components/Todo';
import BusinessPage from './components/BusinessPage';
import Promos from './components/Promos';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  }
});

function App () {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Index />} />
          <Route path='Categories' element={<Categories />} />
          <Route path='/Restaurantes' element={<Restaurantes />} />
          <Route path='/Bares' element={<Bares />} />
          <Route path='/Teatro' element={<Teatro />} />
          <Route path='/Musica' element={<Musica />} />
          <Route path='/Eventos' element={<Eventos />} />
          <Route path='/Todo' element={<Todo />} />
          <Route path='/Promos' element={<Promos />} />
          <Route path='/BusinessPage' element={<BusinessPage />} />
          <Route path='/business/:id' component={BusinessPage} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
