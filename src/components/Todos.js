import React from 'react'
import * as S from './Style'

import Shrek from '../images/shrek.png'
import CapFantastico from '../images/capitao-fantastico.png'
import QueHrElaVolta from '../images/que-horas-ela-volta.png'
import SonhoLiberdade from '../images/sonho-liberdade.png'
import Spider from '../images/spider-man.png'
import VoltarSozinho from '../images/voltar-sozinho.png'
import Rocketman from '../images/rocketman.jpeg'
import AmarElo from '../images/amarElo.jpeg'
import FugaGalinhas from '../images/fugaDasGalinhas.jpeg'

export default class Todos extends React.Component {

    state = {
        catalogo: [
            {
                titulo: 'Capitão Fantástico',
                poster: CapFantastico,
                sinopse: 'Nas florestas do estado de Washington, um pai cria seus seis filhos longe da civilização, em uma rígida rotina de aventuras. Ele é forçado a deixar o isolamento e leva sua família para encarar o mundo, desafiando sua ideia do que significa ser pai.',
            },
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
        busca: [],
    }

    componentDidMount(){
        this.setState({
            busca: this.state.catalogo,
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
            busca: this.state.catalogo,
          })
        }
      }


    render() {
        return (
            <div>
                <S.InputTodos placeholder='Pesquisar' onChange={this.handleChange} />
                <S.All>
                    <h2>Todos</h2>
                    <S.todosFilmes>
                        {this.state.busca.map((item) => (
                            <S.Filme>
                                <S.Img src={item.poster} />
                                <h2>{item.titulo}</h2>
                                <p>{item.sinopse}</p>
                            </S.Filme>
                        ))}
                    </S.todosFilmes>
                </S.All>
            </div>
        )
    }
}