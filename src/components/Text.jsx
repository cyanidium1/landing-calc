import React from 'react';
import './Text.css'; // Подключаем файл стилей

const Text = ({ text, size }) => {
    return (
        <p style={{ fontSize: size + 'px' }} className="fancy-text">{text}</p>
    );
}

export default Text;
