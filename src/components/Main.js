import React from 'react'
import * as S from './Style'

import Shrek from '../images/shrek.png'
import CapFantastico from '../images/capitao-fantastico.png'
import QueHrElaVolta from '../images/que-horas-ela-volta.png'
import SonhoLiberdade from '../images/sonho-liberdade.png'
import Spider from '../images/spider-man.png'
import VoltarSozinho from '../images/voltar-sozinho.png'

export default class Main extends React.Component{
    state = {
        catalogo: [
            {
                titulo: 'Shrek',
                poster: Shrek,
                sinopse: 'Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão.',
            },
            {
                titulo:'Hoje Eu Quero Voltar Sozinho',
                poster:VoltarSozinho,
                sinopse:'Um novo colega de sala transforma a vida do estudante Leonardo, que também é cego, e complica sua amizade com sua melhor amiga.',
            },
            {
                titulo:'Spider-man',
                poster:Spider,
                sinopse:'Após ser picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lançar teias com seus parceiros de um universo alternativo.',
            },
            {
                titulo:'Um Sonho de Liberdade',
                poster:SonhoLiberdade,
                sinopse:'Condenado pelo assassinato da esposa e do amante dela, um banqueiro se apega à esperança e à amizade com um detento chamado Red para sobreviver à prisão.',
            },
            {
                titulo:'Que Horas Ela Volta?',
                poster:QueHrElaVolta,
                sinopse:'Val é a fiel empregada domestica de uma família rica. Mas a chegada de sua filha gera tensão na casa e faz com que ela comece a questionar esse papel.',
            },
            {
                titulo:'Capitão Fantástico',
                poster:CapFantastico,
                sinopse:'Nas florestas do estado de Washington, um pai cria seus seis filhos longe da civilização, em uma rígida rotina de aventuras. Ele é forçado a deixar o isolamento e leva sua família para encarar o mundo, desafiando sua ideia do que significa ser pai.',
            },
        ],
    }

    render(){
        return(
            <S.Main>
                {this.state.catalogo.map((item) => (
                    <p>{item.titulo}</p>
                ))}
            </S.Main>
        )
    }
}