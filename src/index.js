import { html, virtual, component, useState } from 'haunted';
import styles from './index.scss';


function App ({loading}) {
        const [count, setCount] = useState(1);
    return html`
        <style>${styles}</style>

        <div><slot></slot></div>
        <div class="loading" style="display: ${loading ? "block" : "none"}"></div>
        
        
    `; 
}

customElements.define('custom-root', component(App, { observedAttributes: ['loading'] }));
    
