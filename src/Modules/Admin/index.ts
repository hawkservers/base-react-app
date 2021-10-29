import RouterService from '../../Services/RouterService';
import Admin from './Pages/Admin';

RouterService.addRoute({
  path: '/admin',
  component: Admin,
  middleware: ['AuthGuardExample'],
});
