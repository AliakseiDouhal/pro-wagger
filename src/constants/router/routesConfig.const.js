import Board from '../../views/Board';
import { routerPath } from './path.const';

const routesConfig = [
  {
    path: routerPath.BOARD,
    component: Board,
    exact: true
  },

];
 /* .map(({ component, ...rest }): any => ({
    // Adding wrapper
    component: (props) => <PageTemplate component={component}/>,
    ...rest
  }));*/

export default routesConfig;
