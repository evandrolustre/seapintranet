import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/Home';
import { ProcessosPage, ServidoresPage, CapacitacaoPage } from './pages/dgrh';
import { FrotaPage, ManutencaoPage, DocumentacaoPage } from './pages/deto';
import { ImoveisPage, InventarioPage, CessaoPage } from './pages/deap';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'dgrh/processos', element: <ProcessosPage /> },
      { path: 'dgrh/servidores', element: <ServidoresPage /> },
      { path: 'dgrh/capacitacao', element: <CapacitacaoPage /> },
      { path: 'deto/frota', element: <FrotaPage /> },
      { path: 'deto/manutencao', element: <ManutencaoPage /> },
      { path: 'deto/documentacao', element: <DocumentacaoPage /> },
      { path: 'deap/imoveis', element: <ImoveisPage /> },
      { path: 'deap/inventario', element: <InventarioPage /> },
      { path: 'deap/cessao', element: <CessaoPage /> },
    ],
  },
]);