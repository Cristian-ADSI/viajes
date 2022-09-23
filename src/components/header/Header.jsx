import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <nav className="content">
        <article className="utilities">
          <button type="button">
            <span class="material-symbols-outlined">public</span>
            Español
          </button>
          <span>Iniciar sesion</span>
        </article>
      </nav>
    </header>
  );
};

export default Header;
