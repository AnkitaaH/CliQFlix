
const users = [];

    const memberDiv = document.querySelector('.memberDiv');
    const addIcon = document.querySelector('.addIcon');

    const userIcons = () => {
      users.forEach((user) => {
        const { username, pin } = user;
        const userButton = document.createElement('button');
        userButton.classList.add('btn');
        userButton.innerHTML = `<span>${username}</span>`;
        userButton.addEventListener('click', () => {
          redirectToProfile(username);
        });
        memberDiv.appendChild(userButton);
      });
    };

    const redirectToProfile = (username) => {
      // Modify this line to specify the URL of the profile page
      window.location.href = `lock.html`;
    };

    const updateAddIconVisibility = () => {
      if (users.length >= 5) {
        addIcon.style.display = 'none';
        addIcon.removeEventListener('click', addProfile);
      } else {
        addIcon.style.display = 'block';
        addIcon.addEventListener('click', addProfile);
      }
    };

    const addProfile = () => {
      let userName = prompt('Please enter your name');
      let pin = prompt('Please enter a 4-digit PIN');

      if (
        userName !== null &&
        !users.some((user) => user.username === userName) &&
        /^\d{4}$/.test(pin)
      ) {
        users.push({ username: userName, pin: pin });
        console.log(users);

        const userButton = document.createElement('button');
        userButton.classList.add('btn');
        userButton.innerHTML = `<span>${userName}</span>`;
        userButton.addEventListener('click', () => {
          redirectToProfile(userName);
        });
        memberDiv.appendChild(userButton);

        updateAddIconVisibility();
      } else {
        alert('Invalid input or username already exists');
      }
    };

    addIcon.addEventListener('click', addProfile);

    userIcons();
    updateAddIconVisibility();

    