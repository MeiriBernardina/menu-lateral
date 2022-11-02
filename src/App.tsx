import React, { FC } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, CadastroProduto, ListaCompras, ListaFavoritos, Promocoes, Sair } from './pages/paginas';

const App: FC = () => {
    return (
        <Router>
            <Sidebar />
            <Routes>
                <Route path="/home" element={<Home/>} />
                <Route path="/cadastroprodutos" element={<CadastroProduto/>} />
                <Route path="/listacompra" element={<ListaCompras/>} />
                <Route path="/listafavoritos" element={<ListaFavoritos/>} />
                <Route path="/promocoes" element={<Promocoes/>} />
                <Route path="/sair" element={<Sair/>} />
            </Routes>
        </Router>
    );
};

export default App;
