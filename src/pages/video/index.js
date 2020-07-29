import React from 'react';
import PageDefault from '../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroVideo() {
    return (
        <PageDefault>
            <h1>Pagina Cadastro de Video</h1>

            <Link to='/categoria'>
                Cadastrar Categoria
            </Link>
        </PageDefault>
    )
}

export default CadastroVideo;