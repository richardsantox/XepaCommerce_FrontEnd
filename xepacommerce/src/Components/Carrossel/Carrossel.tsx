import React from 'react';
import './Carrossel.css'
import banana from '../../assets/img/cachobanana.png'
import tomate from '../../assets/img/tomate.png'
import maca from '../../assets/img/maca.png'
import brocolis from '../../assets/img/brocolis.png'
import laranja from '../../assets/img/laranja.png'
import batata from '../../assets/img/batata.png'
import cenoura from '../../assets/img/cenoura.png'
import limao from '../../assets/img/limao.png'
import rucula from '../../assets/img/rucula.png'

function Carrossel() {

    return (
        <>
            <section id='carousel'>
                <article><img src={banana} alt="banana po" className='imgCarrossel' /></article>
                <article><img src={tomate} alt="tomate po" className='imgCarrossel' /></article>
                <article><img src={maca} alt="maçã po" className='imgCarrossel' /></article>
                <article><img src={brocolis} alt="brócolis po" className='imgCarrossel' /></article>
                <article><img src={laranja} alt="laranja po" className='imgCarrossel' /></article>
                <article><img src={batata} alt="batata po" className='imgCarrossel' /></article>
                <article><img src={cenoura} alt="cenoura po" className='imgCarrossel' /></article>
                <article><img src={limao} alt="limão po" className='imgCarrossel' /></article>
                <article><img src={rucula} alt="rúcula po" className='imgCarrossel' /></article>
            </section>
        </>
    );
}

export default Carrossel;