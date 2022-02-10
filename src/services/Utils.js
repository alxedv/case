import Ambiental from '../assets/icons/ambiental.png';
import Cadastro from '../assets/icons/cadastro.png';
import Financeiro from '../assets/icons/financeiro.png';
import Imoveis from '../assets/icons/imoveis.png';
import Juridico from '../assets/icons/juridico.png';
import Midia from '../assets/icons/midia.png';
import Profissionalismo from '../assets/icons/Profissionalismo.png';
import Reguladores from '../assets/icons/reguladores.png';
import Restritivo from '../assets/icons/restritivo.png';
import Todos from '../assets/icons/todos.png';

export const icons = [Todos, Profissionalismo, Reguladores, Ambiental, Juridico, Restritivo, Midia, Imoveis, Cadastro, Financeiro];

export const newIcons = [...icons.slice(1), Financeiro, Ambiental, Juridico ]

export const filterNames = ['Todos', 'Profissional', 'Reguladores', 'Sócio Ambiental', 'Jurídico', 'Listas Restritivas', 'Mídia / Internet', 'Bens e Imóveis', 'Cadastro', 'Financeiro']

export const arrayCards = [
  {
    icon:Profissionalismo,
    name:'Profissional',
    value: 29,
  },
  {
    icon: Reguladores,
    name:'Reguladores',
    value: 14,
  },
  {
    icon: Ambiental,
    name:'Sócio Ambiental',
    value: 34,
  },
  {
    icon: Juridico,
    name:'Jurídico',
    value: 27,
  },
  {
    icon:Restritivo,
    name:'Listas Restritivas',
    value: 45,
  },
  {
    icon: Midia,
    name:'Mídia / Internet',
    value: 56,
  },
  {
    icon: Imoveis,
    name:'Bens e Imóveis',
    value: 65,
  },
  {
    icon: Cadastro,
    name:'Cadastro',
    value: 32,
  },
  {
    icon: Financeiro,
    name:'Financeiro',
    value: 43,
  },
  {
    icon: Financeiro,
    name:'Financeiro',
    value: 43,
  },
  {
    icon: Ambiental,
    name:'Sócio Ambiental',
    value: 34,
  },
  {
    icon: Juridico,
    name:'Jurídico',
    value: 27,
  },
]
