import getRoles from '../getRoles/getRoles';

const showRole = (n) => {
  for (let i = 0; i < n.length; i += 1) {
    const roleId = document.getElementById(`role${i}`);
    roleId.addEventListener('click', () => getRoles(i));
  }
};

export default showRole;
