import '../styles.css';
import showRole from './showRole/showRole';
import getRoles from './getRoles/getRoles';

/* Add Logic to Roles */
// Show first Role
getRoles(0);
// Add EventListeners
const role = document.getElementById('controllers').getElementsByTagName('li');
showRole(role);
