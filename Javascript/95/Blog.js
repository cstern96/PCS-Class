(function () {
    'use strict';
    document.addEventListener('DOMContentLoaded', () => {
        const userList = document.getElementById('users');
        const postList = document.getElementById('posts');
        const backButton = document.getElementById('goBack');

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }
                return response.json();
            })
            .then(users => {
                users.forEach(user => {
                    const li = document.createElement('li');
                    const button = document.createElement('button');
                    button.classList.add('user-button');
                    button.id = user.id;

                    button.innerHTML = `${user.name} | ${user.website} | ${user.company.name}`;
                    button.addEventListener('click', () => handleButtonClicked(user));
                    li.appendChild(button);
                    userList.appendChild(li);
                });

            });
        
        backButton.addEventListener('click', () => {

            const allButtons = userList.querySelectorAll('.user-button');
            allButtons.forEach(button => button.style.display = 'block');
            backButton.style.display = 'none';
            postList.innerHTML = '';
        });

    });
    function handleButtonClicked(user) {
        const userList = document.getElementById('users');
        const postList = document.getElementById('posts');
        const backButton = document.getElementById('goBack');

        const allButtons = userList.querySelectorAll('.user-button');
        allButtons.forEach(button => button.style.display = 'none');

        backButton.style.display = 'block';


        const clickedButton = document.getElementById(user.id);
        clickedButton.style.display = 'block';

        postList.innerHTML = '';

        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }
                return response.json();
            })
            .then(posts => {
                posts.forEach(post => {
                    const li = document.createElement('li');
                    li.innerHTML = `<div> 
                                <h2> ${post.title}</h2>
                                <p> ${post.body}</p>
                            </div>`;
                    postList.appendChild(li);
                });
            });
    }

}());