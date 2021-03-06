class Collapse extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement("template");

        template.innerHTML = `
            <style>
                :host {
                    border: 1px solid #dcdee2;
                    display: inline-block;
                    border-radius: 2px;
                    overflow: hidden;
                }
            </style>
            <slot></slot>
        `;
        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
    }
    static get observedAttributes() {
        return ["active"];
    }

    get active() {
        return this.getAttribute("active");
    }

    connectedCallback() {
        const active = this.active;
        const children = [...this.children];
        children.map((cur, i) => {
            const name = cur.getAttribute("name");
            if (name === null) {
                cur.setAttribute("name", `_collapse_${i}`);
            }
            if (active === name) cur.setAttribute("active", "");
        });
    }
}

if (!customElements.get("ivy-collapse")) {
    customElements.define("ivy-collapse", Collapse);
}

class CollapseItem extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement("template");

        template.innerHTML = `
            <style>
                :host {
                    font-size: 14px;
                }
                :host([active]) .ivy-collapse-item-body {
                    transition: all 0.3s;
                }
                .ivy-collapse-item-header {
                    background-color: #f7f7f7;
                    padding: 10px 20px;
                    cursor: pointer;
                    border-bottom: 1px solid #dcdee2;
                    line-height: 1em;
                    display: flex;
                    align-items: center;
                    align-content: center;
                }
                .ivy-collapse-item-body {
                    overflow: hidden;
                    transition: all 0.3s;
                    background-color: #fff;
                }
                .ivy-collapse-item-body-inner {
                    padding: 10px 20px;
                    box-sizing: border-box;
                }
                :host(:last-child) .ivy-collapse-item-header {
                    border-bottom: none;
                }
                :host([active]:last-child) .ivy-collapse-item-header {
                    border-bottom: 1px solid #dcdee2;
                }
                
            </style>
            <div class="ivy-collapse-item-header">
                <div>
                    <slot name="title">${this.title}</slot>
                </div>
            </div>
            <div class="ivy-collapse-item-body">
                <div class="ivy-collapse-item-body-inner">
                    <slot></slot>
                </div>
            </div>
        `;
        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        const title = this._shadowRoot.querySelector(".ivy-collapse-item-header");
        this.body = this._shadowRoot.querySelector(".ivy-collapse-item-body");
        this.bodyInner = this._shadowRoot.querySelector(".ivy-collapse-item-body-inner");

        this.height = getComputedStyle(this.bodyInner)["height"];
        title.addEventListener("click", () => {
            if (this.active !== null) {
                this.removeAttribute("active");
                this.body.style.height = 0;
            } else {
                this.setAttribute("active", "");
                this.body.style.height = this.height;
            }
        });
    }

    static get observedAttributes() {
        return ["title", "name", "active"];
    }

    get active() {
        return this.getAttribute("active");
    }
    get title() {
        return this.getAttribute("title") || "";
    }
    get name() {
        return this.getAttribute("name") || "";
    }

    set active(val) {
        this.setAttribute("active", val);
    }

    connectedCallback() {
        if (this.active === null) {
            this.body.style.height = 0;
        } else {
            this.body.style.height = getComputedStyle(this.bodyInner)["height"];
        }
    }
}

if (!customElements.get("ivy-collapse-item")) {
    customElements.define("ivy-collapse-item", CollapseItem);
}
