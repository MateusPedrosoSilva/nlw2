import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

// function PageHeader() {
// Para adicionar as props coloca nesse formato.
// Criar uma interface para o componente

interface PageHeaderProps {
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar página" />
                </Link>

                <img src={logoImg} alt="Proffy logo" />
            </div>
            <div className="header-content">
                <strong> { props.title } </strong>

                {props.children}
            </div>
        </header>
    );
}

export default PageHeader;