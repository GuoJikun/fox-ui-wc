/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/button.js":
/*!**********************************!*\
  !*** ./src/components/button.js ***!
  \**********************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_var_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/var.js */ "./src/utils/var.js");


class Button extends HTMLElement {
    constructor() {
        super();

        const template = document.createElement("template");

        template.innerHTML = `
            <style>
                :host {
                    margin-left: 12px;
                    line-height: 32px;
                    display: inline-flex;
                }
                :host(:first-child){
                    margin-left: 0;
                }


                .ivy-button {
                    display: block;
                    overflow: hidden;
                    outline: none;
                    height: 34px;
                    line-height: 32px;
                    border: ${_utils_var_js__WEBPACK_IMPORTED_MODULE_0__.$_border_base};
                    border-radius: var(--border-radius, ${_utils_var_js__WEBPACK_IMPORTED_MODULE_0__.$_border_radius});
                    box-sizing: border-box;
                    padding: 0 20px;
                    background: white;
                    cursor: pointer;
                }

                .ivy-button:not([disabled]):hover,
                .ivy-button:not([disabled]):focus{
                    opacity: 0.8;
                }

                :host([disabled]) .ivy-button {
                    opacity: 0.7;
                    cursor: not-allowed;
                }

                .ivy-button-primary {
                    border: 1px solid var(--color-primary, ${_utils_var_js__WEBPACK_IMPORTED_MODULE_0__.$_color_primary});
                    background-color: var(--color-primary, ${_utils_var_js__WEBPACK_IMPORTED_MODULE_0__.$_color_primary});
                    color: white;
                }
                .ivy-button-success {
                    border: 1px solid var(--color-success, ${_utils_var_js__WEBPACK_IMPORTED_MODULE_0__.$_color_success});;
                    background-color: var(--color-success, ${_utils_var_js__WEBPACK_IMPORTED_MODULE_0__.$_color_success});;
                    color: white;
                }
                .ivy-button-warn {
                    border: 1px solid var(--color-warn, ${_utils_var_js__WEBPACK_IMPORTED_MODULE_0__.$_color_warn});;
                    background-color: var(--color-warn, ${_utils_var_js__WEBPACK_IMPORTED_MODULE_0__.$_color_warn});;
                    color: white;
                }
                .ivy-button-danger {
                    border: 1px solid var(--color-danger, ${_utils_var_js__WEBPACK_IMPORTED_MODULE_0__.$_color_error});;
                    background-color: var(--color-danger, ${_utils_var_js__WEBPACK_IMPORTED_MODULE_0__.$_color_error});;
                    color: white;
                }
                .ivy-button-info {
                    border: 1px solid var(--color-info, ${_utils_var_js__WEBPACK_IMPORTED_MODULE_0__.$_color_info});;
                    background-color: var(--color-info, ${_utils_var_js__WEBPACK_IMPORTED_MODULE_0__.$_color_info});;
                    color: white;
                }
                #ivy-loading {
                    width: 1em;
                    height: 1em;
                    vertical-align: -0.15em;
                    fill: currentColor;
                    overflow: hidden;
                    animation: rotate 1.4s linear infinite;
                    display: none;
                }
                @keyframes rotate{
                    to{
                        transform: rotate(360deg); 
                    }
                }
            </style>
            <svg aria-hidden="true" style="position: absolute; width: 0px; height: 0px; overflow: hidden;">
                <symbol id="ivy-icon-loading" viewBox="0 0 1024 1024">
                    <path
                        d="M512 64q14.016 0 23.008 8.992T544 96v192q0 14.016-8.992 23.008T512 320t-23.008-8.992T480 288V96q0-14.016 8.992-23.008T512 64z m0 640q14.016 0 23.008 8.992T544 736v192q0 14.016-8.992 23.008T512 960t-23.008-8.992T480 928v-192q0-14.016 8.992-23.008T512 704z m448-192q0 14.016-8.992 23.008T928 544h-192q-14.016 0-23.008-8.992T704 512t8.992-23.008T736 480h192q14.016 0 23.008 8.992T960 512z m-640 0q0 14.016-8.992 23.008T288 544H96q-14.016 0-23.008-8.992T64 512t8.992-23.008T96 480h192q14.016 0 23.008 8.992T320 512zM195.008 195.008q10.016-8.992 23.008-8.992t22.016 8.992l136 136q8.992 10.016 8.992 22.496t-9.504 22.016-22.016 9.504-22.496-8.992l-136-136q-8.992-8.992-8.992-22.016t8.992-23.008zM648 648q10.016-10.016 22.496-10.016t22.496 10.016l136 136q8.992 8.992 8.992 22.016t-9.504 22.496-22.496 9.504-22.016-8.992l-136-136q-10.016-10.016-10.016-22.496t10.016-22.496z m180.992-452.992q8.992 10.016 8.992 23.008t-8.992 22.016l-136 136q-10.016 8.992-22.496 8.992t-22.016-9.504-9.504-22.016 8.992-22.496l136-136q8.992-8.992 22.016-8.992t23.008 8.992zM376 648q10.016 10.016 10.016 22.496t-10.016 22.496l-136 136q-8.992 8.992-22.016 8.992t-22.496-9.504-9.504-22.496 8.992-22.016l136-136q10.016-10.016 22.496-10.016t22.496 10.016z"
                    ></path>
                </symbol>
            </svg>
            
            <button class="ivy-button">
                <svg view="0 0 1024 1024" class="ivy-icon" xmlns="http://www.w3.org/2000/svg" version="1.1" aria-hidden="true" id="ivy-loading">
                    <use href="#ivy-icon-loading"></use>
                </svg>
                <span class="ivy-button-inner"><slot></slot></span>
            </button>
        `;

        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        this.$button = this._shadowRoot.querySelector("button");
        this.$loading = this._shadowRoot.querySelector("#ivy-loading");
        this.$buttonInner = this._shadowRoot.querySelector(".ivy-button-inner");

        this.addEventListener("click", e => {});
    }
    connectedCallback() {
        if (this.type && this.$button) {
            this.$button.setAttribute("class", `${this.class} ivy-button-${this.type}`);
        }
    }

    get type() {
        return this.getAttribute("type");
    }

    set type(value) {
        this.setAttribute("type", value);
    }

    get loading() {
        return this.getAttribute("loading");
    }

    set loading(value) {
        this.setAttribute("loading", value);
    }

    get round() {
        return this.getAttribute("round");
    }

    set round(value) {
        this.setAttribute("round", value);
    }

    get disabled() {
        return this.getAttribute("disabled");
    }

    set disabled(value) {
        this.setAttribute("disabled", value);
    }

    static get observedAttributes() {
        return ["type", "round", "disabled", "loading"];
    }

    get class() {
        return this.$button.classList;
    }

    attributeChangedCallback(name, oldVal, newVal) {
        this.render(name);
    }
    render(name) {
        if (name === "round") {
            this.$button.style.borderRadius = "17px";
        }
        /* if (name === "disabled") {
            this.$button.style.cursor = "not-allowed";
            this.$button.style.opacity = "0.5";
        } */
        if (name === "loading") {
            this.$loading.style.display = "initial";
            this.$buttonInner.style.marginLeft = "4px";
            this.$button.style.cursor = "not-allowed";
            this.$button.style.opacity = "0.5";
        }
    }
}
if (!customElements.get("ivy-button")) {
    customElements.define("ivy-button", Button);
}


/***/ }),

/***/ "./src/components/card.js":
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_var_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/var.js */ "./src/utils/var.js");


class Card extends HTMLElement {
    constructor() {
        super();

        const template = document.createElement("template");

        template.innerHTML = `
            <style>
                :host {
                    display: inline-block;
                }
                :host([shadow]) .ins-card {
                    box-shadow: var(--box-shadow, ${_utils_var_js__WEBPACK_IMPORTED_MODULE_0__.$_shadow_base});
                    border-color: #eee;
                }
                .ins-card {
                    border: ${_utils_var_js__WEBPACK_IMPORTED_MODULE_0__.$_border_base};
                    border-radius: var(--border-radius, ${_utils_var_js__WEBPACK_IMPORTED_MODULE_0__.$_border_radius});
                }
                .ins-card-header {
                    border-bottom: ${_utils_var_js__WEBPACK_IMPORTED_MODULE_0__.$_border_base};
                    padding: 12px 16px;
                }
                .ins-card-body {
                    padding: 16px;
                }
            </style>
            <div class="ins-card">
                <div class="ins-card-header">
                    <slot name="header" id="header">${this.header}</slot>
                </div>
                <div class="ins-card-body">
                    <slot></slot>
                </div>
            </div>
        `;

        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        this.$el = this._shadowRoot.querySelector(".ins-card");
        this.$header = this._shadowRoot.querySelector(".ins-card-header").children[0];
        console.log(this.$header);
    }

    static get observedAttributes() {
        return ["shadow", "header"];
    }

    get shadow() {
        return this.getAttribute("shadow");
    }

    get header() {
        return this.getAttribute("header") || "";
    }

    set header(value) {
        this.setAttribute("header", value);
    }

    connectedCallback() {
        /* console.log(this.firstChild, "this.firstChild");
        const flag = this.firstElementChild.slot === "header";
        if (!flag) {
            this.$el.children[0].children[0].innerHTML = this.header;
        } */
        // this.header = this.haeder;
    }

    attributeChangedCallback(name, oldVal, val) {
        if (name === "header" && this.firstElementChild.slot !== "header") {
            const header = val ? val : oldVal;
            this.$header.innerHTML = header;
        }
    }
}

if (!customElements.get("ins-card")) {
    customElements.define("ins-card", Card);
}


/***/ }),

/***/ "./src/components/input.js":
/*!*********************************!*\
  !*** ./src/components/input.js ***!
  \*********************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_var_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/var.js */ "./src/utils/var.js");


class Input extends HTMLElement {
    constructor() {
        super();

        const template = document.createElement("template");

        template.innerHTML = `
            <style>
                :host {
                    display: inline-flex;
                    width: 260px;
                    height: 34px;
                }
                :host([disabled="true"]) .ivy-input__inner {
                    cursor: not-allowed;
                }
                .ivy-input {
                    display: flex;
                    height: 34px;
                    line-height: 34px;
                    border-radius: 4px;
                    transition: border-color .3s, background-color .3s;
                    cursor: pointer;
                }
                .ivy-input__append,
                .ivy-input__prepend {
                    background-color: #f5f7fa;
                    color: #909399;
                    vertical-align: middle;
                    position: relative;
                    border: 1px solid #dcdfe6;
                    padding: 0 16px;
                    white-space: nowrap;
                    line-height: 34px;
                    border-radius: 4px 0 0 4px;
                }
                .ivy-input__prepend {
                    border-right: 0;
                }
                .ivy-input__append {
                    border-radius: 0 4px 4px 0;
                    border-left: 0;
                }
                .ivy-input__inner {
                    padding: 0 10px;
                    border: ${_utils_var_js__WEBPACK_IMPORTED_MODULE_0__.$_border_base};
                    border-radius: 0;
                    box-sizing: border-box;
                    outline-color: ${_utils_var_js__WEBPACK_IMPORTED_MODULE_0__.$_color_primary};
                    outline: none;
                }
                .ivy-input__inner:focus {
                    border-color: ${_utils_var_js__WEBPACK_IMPORTED_MODULE_0__.$_color_primary};
                }
            </style>
            <div class="ivy-input">
                <div class="ivy-input__prepend">
                    <slot name="prepend"></slot>
                </div>
                <input class="ivy-input__inner" type="${this.type}" value="${this.value}" />
                <div class="ivy-input__append">
                    <slot name="append"></slot>
                </div>
            </div>
        `;

        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        this.$root = this._shadowRoot.querySelector(".ivy-input");
        this.input = this._shadowRoot.querySelector(".ivy-input__inner");
        this.input.addEventListener("input", ev => {
            this.value = ev.target.value;
        });
        new CustomEvent("input", ev => {
            ev.detail = this.value;
        });

        new CustomEvent("blur", ev => {
            ev.detail = this.value;
        });
    }

    static get observedAttributes() {
        return ["type", "value", "disabled"];
    }

    get type() {
        return this.getAttribute("value") || "text";
    }

    get value() {
        return this.getAttribute("value");
    }

    set value(value) {
        this.setAttribute("value", value);
    }

    get disabled() {
        return this.getAttribute("disabled");
    }

    set disabled(value) {
        this.setAttribute("disabled", value);
    }

    connectedCallback() {}

    attributeChangedCallback(name, oldVal, newVal) {
        if (name === "disabled" && oldVal !== newVal) {
            if (newVal === "true") {
                this.input.setAttribute("disabled", "disabled");
            } else {
                this.input.removeAttribute("disabled");
            }
        }
    }
}
if (!customElements.get("ivy-input")) {
    customElements.define("ivy-input", Input);
}


/***/ }),

/***/ "./src/components/switch.js":
/*!**********************************!*\
  !*** ./src/components/switch.js ***!
  \**********************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_var_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/var.js */ "./src/utils/var.js");


class Switch extends HTMLElement {
    constructor() {
        super();

        const template = document.createElement("template");

        template.innerHTML = `
            <style>
                :host {
                    display: inline-flex;
                }


                .ivy-switch {
                    display: inline-block;
                    position: relative;
                    width: 40px;
                    height: 20px;
                    background: #ccc;
                    border-radius: 10px;
                    transition: border-color .3s, background-color .3s;
                    cursor: pointer;
                }
                .ivy-switch::after{
                    content: '';
                    display: inline-block;
                    width: 1rem;
                    height:1rem;
                    border-radius: 50%;
                    background: #fff;
                    box-shadow: 0, 0, 2px, #999;
                    transition:.4s;
                    top: 2px;
                    position: absolute;
                    left: 2px;
                }
                .ivy-switch.is-checked{
                    background: var(--color-primary, ${_utils_var_js__WEBPACK_IMPORTED_MODULE_0__.$_color_primary});
                }
                .ivy-switch.is-checked::after{
                    content: '';
                    position: absolute;
                    left: 55%;
                    top: 2px;
                }
            </style>
            <span class="ivy-switch"></span>
        `;

        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        this.$switch = this._shadowRoot.querySelector(".ivy-switch");

        this.addEventListener("click", e => {
            this.$switch.classList.toggle("is-checked");
        });
    }

    static get observedAttributes() {
        return ["checked", "disabled"];
    }

    get checked() {
        return this.getAttribute("checked");
    }

    set checked(value) {
        this.setAttribute("checked", value);
    }

    get disabled() {
        return this.getAttribute("disabled");
    }

    set disabled(value) {
        this.setAttribute("disabled", value);
    }

    //   connectedCallback() {
    //     console.log(this.checked, this.checked === "true");
    //     if (this.$switch && (this.checked === "" || this.checked === "true")) {
    //       console.log(this.$switch, "this.$switch");
    //       this.$switch.classList.toggle("is-checked");
    //     }
    //   }

    attributeChangedCallback(name, oldVal, newVal) {
        if (name === "checked") {
            this.$switch.classList.toggle("is-checked");
        }
    }
}
if (!customElements.get("ivy-switch")) {
    customElements.define("ivy-switch", Switch);
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/button.js */ "./src/components/button.js");
/* harmony import */ var _components_switch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/switch.js */ "./src/components/switch.js");
/* harmony import */ var _components_card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/card.js */ "./src/components/card.js");
/* harmony import */ var _components_input_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/input.js */ "./src/components/input.js");






/***/ }),

/***/ "./src/utils/var.js":
/*!**************************!*\
  !*** ./src/utils/var.js ***!
  \**************************/
/*! namespace exports */
/*! export $_border_base [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $_border_color_base [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $_border_radius [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $_button_border_base [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $_color_black [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $_color_error [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $_color_info [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $_color_primary [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $_color_success [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $_color_warn [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $_color_white [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $_shadow_base [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$_color_white": () => /* binding */ $_color_white,
/* harmony export */   "$_color_black": () => /* binding */ $_color_black,
/* harmony export */   "$_color_primary": () => /* binding */ $_color_primary,
/* harmony export */   "$_color_success": () => /* binding */ $_color_success,
/* harmony export */   "$_color_warn": () => /* binding */ $_color_warn,
/* harmony export */   "$_color_error": () => /* binding */ $_color_error,
/* harmony export */   "$_color_info": () => /* binding */ $_color_info,
/* harmony export */   "$_border_color_base": () => /* binding */ $_border_color_base,
/* harmony export */   "$_border_radius": () => /* binding */ $_border_radius,
/* harmony export */   "$_shadow_base": () => /* binding */ $_shadow_base,
/* harmony export */   "$_border_base": () => /* binding */ $_border_base,
/* harmony export */   "$_button_border_base": () => /* binding */ $_button_border_base
/* harmony export */ });
/* 公共颜色变量 */

const $_color_white = "#ffffff";
const $_color_black = "#000000";
const $_color_primary = "#409EFF";
const $_color_success = "#67C23A";
const $_color_warn = "#E6A23C";
const $_color_error = "#F56C6C";
const $_color_info = "#909399";

/****边框颜色 */
const $_border_color_base = "#DCDFE6";

/***圆角 */
const $_border_radius = "4px";

/*****阴影 */
const $_shadow_base = "0 1px 6px rgba(0,0,0, 0.2)";

/*****边框 */
const $_border_base = `1px solid ${$_border_color_base}`;

/*****button组件 */
const $_button_border_base = $_border_base;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=ivy-ui.js.map