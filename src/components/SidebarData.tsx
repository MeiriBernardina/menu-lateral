import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';

import IconCategoryPieChart from '../../src/icons/categoryPieChart';
import IconListCheck from '../icons/listCheck';
import IconListHeart from '../icons/listHeart';
import IconHome from '../icons/home';
import IconPlusCicle from '../icons/plusCicle';
import IconLogOut from '../icons/logOut';
import { SidebarItem } from '../models/SidebarItem';


export const SidebarData: SidebarItem[] = [
  {
    title: 'Home',
    path: '/home',
    icon: <IconHome />,
    iconClosed: <AiFillCaretDown />,
    iconOpened: <AiFillCaretUp />,
  },
  {
    title: 'Cadastro de produto',
    path: '/cadastroprodutos',
    icon: <IconPlusCicle />,
  },
  {
    title: 'Lista de compra',
    path: '/listacompras',
    icon: <IconListCheck />,
  },
  {
    title: 'Lista de favoritos',
    path: '/listafavoritos',
    icon: <IconListHeart />,
  },
  {
    title: 'Categorias',
    path: '/categorias',
    icon: <IconCategoryPieChart />,
  },
  {
    title: 'Sair',
    path: '/sair',
    icon: <IconLogOut />,
  },
];
