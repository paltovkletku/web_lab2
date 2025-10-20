const container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);

const card = document.createElement('section');
card.className = 'card';
container.appendChild(card);

const header = document.createElement('header');
header.className = 'header';
card.appendChild(header);

const title = document.createElement('h1');
title.className = 'title';
title.textContent = 'Мой ToDo-лист';
header.appendChild(title);

const form = document.createElement('form');
form.className = 'form-row';
card.appendChild(form);

const inputTitle = document.createElement('input');
inputTitle.className = 'input';
inputTitle.type = 'text';
inputTitle.placeholder = 'Что нужно сделать?';
form.appendChild(inputTitle);

const inputDate = document.createElement('input');
inputDate.className = 'input';
inputDate.type = 'date';
form.appendChild(inputDate);

const btnAdd = document.createElement('button');
btnAdd.className = 'button';
btnAdd.type = 'submit';
btnAdd.textContent = 'Добавить';
form.appendChild(btnAdd);

const list = document.createElement('ul');
list.className = 'list';
card.appendChild(list);
