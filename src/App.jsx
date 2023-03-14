import React from 'react'
import './App.css'

import Mega from './components/mega/Mega'
import Contador from './components/contador/Contador'
import Input from './components/formulario/input'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from './components/comunicacao/DiretaPai'
import Usuarioinfo from './components/condicional/Usuarioinfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import TabelaProdutos from'./components/repeticao/TabelaProdutos'
import ListaAlunos from'./components/repeticao/ListaAlunos'
import FamiliaMembro from'./components/basicos/FamiliaMembro'
import Aleatorio from './components/basicos/Aleatorio'
import Comparametro from './components/basicos/ComParametro'
import Familia from './components/basicos/Familia'
import Fragmento from './components/basicos/Fragmento'
import Primeiro from './components/basicos/Primeiro'
import Card from './components/layout/Card'


export default _ =>

    <div className='App'>
        <h1>Fundamentos react</h1>
       
        <div className='Cards'>

            <Card titulo='#13 Mega' color='#6959CD'>
          <Mega qtde={6}></Mega>
            </Card>

            <Card titulo='#12 Contador' color='#424242'>
            <Contador numeroInicial={10}></Contador>
            </Card>

            <Card titulo='#11 Componente Controlado (Input)' color='#E45F56'>
            <Input></Input>
            </Card>

            <Card titulo='#10  Comunicação Indireta' color='#8BAD39'>
            <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo='#09  Comunicação Direta' color='#59323C'>
            <DiretaPai></DiretaPai>
            </Card>

            <Card titulo='#08  Renderização condicional' color='#F08080'>
        <ParOuImpar numero={23}> </ParOuImpar>
        <Usuarioinfo usuario={{ nome: 'Fernando'}}/>
        <Usuarioinfo usuario={{ email: 'fer@nando.com'}}/>
            </Card>

            <Card titulo='#07 Desafio Repetição' color='#3A9AD9'>
        <TabelaProdutos></TabelaProdutos>
            </Card>
            
            <Card titulo='#06 Repetição' color='#'>
        <ListaAlunos></ListaAlunos>
            </Card>
            <Card titulo='#05 Componente com Filhos' color='#00C8F8'>
                <Familia sobrenome='Silva'>
                <FamiliaMembro nome='Pedro '/>
                <FamiliaMembro nome='José ' />
                <FamiliaMembro nome='Ana '/>
                    </Familia>
            </Card>
            
            <Card titulo='#04 Desafio Aleatório' color='#FA6900'>
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo='#03 Fragmento' color='#E94c6F'>
                <Fragmento />
            </Card>

            <Card titulo='#02 Comparametro'color='#E8B71A'>
                <Comparametro
                    titulo='Situação do aluno'
                    aluno='Pedro Silva'
                    nota={9.3}
                />
            </Card>
            <Card titulo='#01 Promeiro Componente' color='#588C73'>
                <Primeiro />
            </Card>
        </div>

    </div>
