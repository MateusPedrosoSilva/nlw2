import React from 'react';

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://scontent.fbel7-1.fna.fbcdn.net/v/t1.0-1/p200x200/34963589_2138960036131980_1618834836707868672_o.jpg?_nc_cat=109&_nc_sid=7206a8&_nc_ohc=V0vnNwubB1QAX9nSSxc&_nc_ht=scontent.fbel7-1.fna&_nc_tp=6&oh=2cc3f702d9bb3725eff8e60c39560917&oe=5F4F6037" alt="Mateus Pedroso" />
                <div>
                    <strong>Mateus Pedroso</strong>
                    <span>História</span>
                </div>
            </header>

            <p>
                Entusiasta pela historia da humanidade.
                <br /><br />
                Super focado em conduzir escavações em varios lugares do mundo com o objetivo de descobrir alguns dos maiores segredos de nossa historia.
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$: 450,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;