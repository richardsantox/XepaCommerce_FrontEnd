import React from 'react';
import './Carrossel.css'
import alface from '../../assets/img/alface.png'
import tomate from '../../assets/img/tomate.png'
function Carrossel() {

    return(
        <>
        <section id='carousel'>
            <article><img src={alface} alt="alface po"/></article>
            <article><img src={tomate} alt="tomate po"/></article>
            <article><img src="" alt=""/></article>
            <article><img src="" alt=""/></article>
            <article><img src="" alt=""/></article>
            <article><img src="" alt=""/></article>
            <article><img src="" alt=""/></article>
            <article><img src="" alt=""/></article>
            <article><img src="" alt=""/></article>
            <article><img src="" alt=""/></article>
        </section>
        </>
    );
}

export default Carrossel;