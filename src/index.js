import { html, virtual, component, useState } from 'haunted';
import styles from './index.scss';

const list = n => Array(n).fill().map((_,i)=>i+1);
const List = virtual((n) => html`<ul>${ list(n).map(a => html`<li>${a}</li>`)}</ul>`);

function App () {
        const [count, setCount] = useState(1);
    return html`
        <style>${styles}</style>
        <h1>test</h1>
        <button @click=${()=>setCount(count+1)}>click</button>
        ${List(count)}
    `; 
}

customElements.define('custom-root', component(App));
    
