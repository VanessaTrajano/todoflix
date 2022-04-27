import React from 'react'
import Main from './components/Main'
import Todos from './components/Todos'
import * as S from './components/Style'
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route
} from 'react-router-dom'

import Perfil from './images/perfilRoxo.png'
import Seta from './images/setinha.png'
import Shrek from './images/shrek.png'
import QueHrElaVolta from './images/que-horas-ela-volta.png'
import SonhoLiberdade from './images/sonho-liberdade.png'
import Spider from './images/spider-man.png'
import VoltarSozinho from './images/voltar-sozinho.png'
import Rocketman from './images/rocketman.jpeg'
import AmarElo from './images/amarElo.jpeg'
import FugaGalinhas from './images/fugaDasGalinhas.jpeg'

export default class Header extends React.Component {

  state = {
    list: false,
    busca: [],
    catalogo: [
      {
        titulo: 'Shrek',
        poster: Shrek,
        sinopse: 'Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão.',
      },
      {
        titulo: 'Hoje Eu Quero Voltar Sozinho',
        poster: VoltarSozinho,
        sinopse: 'Um novo colega de sala transforma a vida do estudante Leonardo, que também é cego, e complica sua amizade com sua melhor amiga.',
      },
      {
        titulo: 'Spider-man',
        poster: Spider,
        sinopse: 'Após ser picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lançar teias com seus parceiros de um universo alternativo.',
      },
      {
        titulo: 'Um Sonho de Liberdade',
        poster: SonhoLiberdade,
        sinopse: 'Condenado pelo assassinato da esposa e do amante dela, um banqueiro se apega à esperança e à amizade com um detento chamado Red para sobreviver à prisão.',
      },
      {
        titulo: 'Que Horas Ela Volta?',
        poster: QueHrElaVolta,
        sinopse: 'Val é a fiel empregada domestica de uma família rica. Mas a chegada de sua filha gera tensão na casa e faz com que ela comece a questionar esse papel.',
      },
      {
        titulo: 'Rocketman',
        poster: Rocketman,
        sinopse: 'Em reabilitação, Elton John relembra suas origens humildes, as músicas atemporais e os momentos de inspiração e excesso. Baseado em sua verdadeira história.',
      },
      {
        titulo: 'A Fuga das Galinhas',
        poster: FugaGalinhas,
        sinopse: 'O galo Rocky e a galinha Ginger querem ajudar todas as outras galinhas a fugirem da granja onde vivem em cativeiro.',
      },
      {
        titulo: 'AmarElo',
        poster: AmarElo,
        sinopse: 'Nos bastidores do show no Theatro Municipal de São Paulo, o rapper e ativista Emicida celebra o grande legado da cultura negra brasileira.',
      },
    ],
  }

  handleList = () => {
    this.setState({
      list: !this.state.list,
    })
  }

  handleChange = (e) => {
    if (e.target.value !== '') {
      this.setState({
        busca: this.state.catalogo.filter((item) => {
          if (item.titulo.toLowerCase().includes(e.target.value.toLowerCase())) {
            return true;
          }
        })
      })
    } else {
      this.setState({
        busca: [],
      })
    }
  }

  render() {
    return (
      <div>
        <S.Header>
          <S.GlobalStyle />
          <S.TitleBox>
            <h1>TODOFLIX</h1>
            <Router>
              <nav>
                <S.Navigation>
                  <S.Item><Link to='/'>Início</Link></S.Item>
                  <S.Item onClick={this.handleList}>Categorias</S.Item>
                  <S.Seta src={Seta} onClick={this.handleList} />
                  {this.state.list && (
                    <S.Categorias>
                      <li><Link to='todos'>Todos</Link></li>
                      <li>Favoritos</li>
                      <li>Já vistos</li>
                      <li>Adicionados</li>
                    </S.Categorias>
                  )}
                </S.Navigation>
              </nav>

              <Routes>
                <Route path='/' element={<Main/>} />
                <Route path='todos' element={<Todos/>} />
              </Routes>
            </Router>
          </S.TitleBox>

          <S.SearchBox>
            <S.Button>Adicionar filme</S.Button>
            <S.Input placeholder='Pesquisar' onChange={this.handleChange} />
            <div>
              <img src={Perfil} />
              <S.Seta src={Seta} />
            </div>
          </S.SearchBox>

        </S.Header>
        {this.state.busca.map((item) => (
          <S.Movie>
            <S.Img src={item.poster} />
            <h2>{item.titulo}</h2>
            <p>{item.sinopse}</p>
          </S.Movie>
        ))}


      </div>
    )
  }
}
