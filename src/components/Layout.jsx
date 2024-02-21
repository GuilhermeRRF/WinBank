// src/components/Layout.jsx

import React from 'react';
import { useLocation } from 'react-router-dom';
import Headerprincipal from './header';
import Header2 from './header2';
import Footer from './footer';

const Layout = ({ children }) => {
  const location = useLocation();
  
  const useHeader2 = ['/novidades', '/ajuda'];
  const noHeaderFooter = ['/login'];

  const isHeader2 = useHeader2.includes(location.pathname);
  const isNoHeaderFooter = noHeaderFooter.includes(location.pathname);

  if (isNoHeaderFooter) {
    // Se a rota atual for '/login', não renderizar cabeçalho ou rodapé
    return <main>{children}</main>;
  }

  return (
    <div>
      {isHeader2 ? <Header2 /> : <Headerprincipal />}
      <main>{children}</main>
      {!isNoHeaderFooter && <Footer />}
    </div>
  );
};

export default Layout;
