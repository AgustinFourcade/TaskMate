// app/javascript/packs/common.js
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { createRoot } from 'react-dom/client';
import MaterialComponent from '../components/MaterialComponentList';

// Aquí puedes agregar configuraciones comunes o inicialización que necesites
// Por ejemplo:
// ReactDOM.render(<App />, document.getElementById('root'));

document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('root');
    if (rootElement) {
        const root = createRoot(rootElement);
        root.render(<MaterialComponent />);
    }
});

export { React, ReactDOM, PropTypes };