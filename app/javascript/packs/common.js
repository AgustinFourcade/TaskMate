// app/javascript/packs/common.js
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { createRoot } from 'react-dom/client';
import Dashboard from '../Dashboard';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Dashboard />, document.querySelector("#root"));
});

export { React, ReactDOM, PropTypes };