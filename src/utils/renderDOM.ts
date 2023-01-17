import Block from './Block';

export default function renderDOM(block: Block<object>) {
  const root = document.querySelector('#page');

  root!.innerHTML = '';
  root!.appendChild(block.getContent());
}
