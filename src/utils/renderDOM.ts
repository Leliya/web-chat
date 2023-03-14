/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Block from './Block';

export default function renderDOM(block: Block<object>) {
  const root = document.querySelector('#page');

  root!.innerHTML = '';
  root!.appendChild(block.getContent());
}
