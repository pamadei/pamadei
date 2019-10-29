import './styles.css';
import showRole from './app/showRole/showRole';
import getRoles from './app/getRoles/getRoles';

/* Add Logic to Roles */
// Show first Role
getRoles(0);
// Add EventListeners
const role = document.getElementById('controllers').getElementsByTagName('li');
showRole(role);
