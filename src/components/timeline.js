class Timeline extends HTMLElement {
    constructor() {
        super();
        template.innerHTML = `
            <style>
                host{}
                host([reverse]){}
            </style>
            <div>
                <slot></slot>
            </div>
        `;
        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
    }
    static get observedAttributes() {
        return [];
    }
    connectedCallback() {}
    attributeChangedCallback(name, oldVal, newVal) {}
}

class TimelineItem extends HTMLElement {
    constructor() {
        super();
        template.innerHTML = ``;
        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
    }
    static get observedAttributes() {
        return [];
    }
    connectedCallback() {}
    attributeChangedCallback(name, oldVal, newVal) {}
}

if (!customElements.get("ivy-timeline")) {
    customElements.define("ivy-timeline", Timeline);
}
if (!customElements.get("ivy-timeline-item")) {
    customElements.define("ivy-timeline-item", TimelineItem);
}
