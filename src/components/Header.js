import React from 'react'
import * as S from './Style'
import Perfil from '../images/perfilRoxo.png'

export default class Header extends React.Component {
    render() {
        return (
            <S.Header>
                <S.GlobalStyle />
                <S.TitleBox>
                    <h1>TODOFLIX</h1>
                    <nav>
                        <S.Navigation>
                            <li>Início</li>
                            <S.Select>
                                <option selected>Categorias</option>
                                <option>Todos</option>
                                <option>Favoritos</option>
                                <option>Já vistos</option>
                                <option>Adicionados</option>
                            </S.Select>
                            {/* <ul>
                                <li>Categorias</li>
                                <li>Todos</li>
                                <li>Favoritos</li>
                                <li>Já vistos</li>
                                <li>Adicionados</li>
                            </ul> */}
                        </S.Navigation>
                    </nav>
                </S.TitleBox>

                <S.SearchBox>
                    <S.Button>Adicionar filme</S.Button>
                    <S.Input placeholder='Pesquisar' />
                    <img src={Perfil}/>
                </S.SearchBox>

            </S.Header>
        )
    }
}
