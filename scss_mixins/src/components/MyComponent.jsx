import React from 'react';
import './MyComponent.scss';

const MyComponent = () => {
  return (
    <div className="container">
      <header className="header">
        <h1 className="main-title">Título Principal Responsivo</h1>
        <h2 className="sub-title">Subtítulo Responsivo</h2>
      </header>

      <section className="section">
        <h3 className="section-title">Seção 1</h3>
        <p className="section-text">
          Este é um parágrafo de exemplo. Ele deve se adaptar ao tamanho da tela.
        </p>
        <img className="section-image" src="https://via.placeholder.com/600x400" alt="Imagem Responsiva" />
      </section>

      <section className="section">
        <h3 className="section-title">Seção 2</h3>
        <p className="section-text">
          Outro exemplo de parágrafo. Imagens e textos devem se ajustar conforme a tela.
        </p>
        <img className="section-image" src="https://via.placeholder.com/600x400" alt="Imagem Responsiva" />
      </section>

      <section className="section">
        <h3 className="section-title">Seção 3</h3>
        <p className="section-text">
          Última seção de exemplo. Vamos ajustar o layout para diferentes tamanhos de tela.
        </p>
        <img className="section-image" src="https://via.placeholder.com/600x400" alt="Imagem Responsiva" />
      </section>

      <footer className="footer">
        <a href="." className="footer-link">Link 1</a>
        <a href="." className="footer-link">Link 2</a>
        <a href="." className="footer-link">Link 3</a>
      </footer>
    </div>
  );
};

export default MyComponent;
