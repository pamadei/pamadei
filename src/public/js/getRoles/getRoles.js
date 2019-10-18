const getRoles = (n) => {
  const roles = document.getElementsByClassName('Role');
  for (let i = 0; i < roles.length; i += 1) {
    roles[i].style.display = 'none';
  }
  roles[n].style.display = 'block';
};

export default getRoles;
