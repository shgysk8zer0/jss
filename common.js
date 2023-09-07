import { primary, light, dark, success, danger, blue, red, green, gray } from './palette/bootstrap.js';

export const hostStyles = new CSSStyleSheet().replace(`
	:host {
		background-color: ${light};
		color: ${dark};
		box-sizing: border-box;
		color-scheme: light dark;
		display: block;
	}

	:host([theme="light"]) {
		background-color: ${light};
		color: ${dark};
		color-scheme: light;
	}

	:host([theme="dark"]) {
		background-color: ${dark};
		color: ${light};
		color-scheme:dark;
	}

	@media (prefers-color-scheme: dark) {
		:host(:not([theme="light"])) {
			background-color: ${dark};
			color: ${light};
		}
	}
`);

export const commonStyles = new CSSStyleSheet().replace(`
	.clearfix::after {
		clear: both;
		content: '';
		display: block;
	}

	.no-border {
		border: none;
	}

	.shadow {
		box-shadow: var(--shadow-x, 0) var(--shadow-y, 2px) var(--shadow-blur, 10px) var(--shadow-spread, 0) var(--shadow-color, rgba(0,0,0,.2));
	}

	.shadow-dark {
		box-shadow: var(--shadow-x, 0) var(--shadow-y, 2px) var(--shadow-blur, 10px) var(--shadow-spread, 0) var(--shadow-dark-color, rgba(0,0,0,.6));
	}

	.icon, .icon * {
		color: inherit;
		max-width: 100%;
		max-height: 100%;
		width: var(--icon-size, 1em);
		height: var(--icon-size, 1em);
		vertical-align: middle;
	}

	.round {
		border-radius: 50%;
	}

	.card {
		border: var(--card-border, 1px solid #ccc);
		border-radius: var(--card-radius, 2px);
		background: var(--card-bg, var(--primary-color, white));
		padding: var(--card-padding, 0.7em);
	}

	.custom-element:not(:defined) .if-defined[slot], .custom-element.if-defined:not(:defined) {
		display: none;
	}
`);

export const formStyles = new CSSStyleSheet().replace(`
	.form-group {
		border: 1px solid transparent;
		padding: var(--form-group-padding, 0.4em 0.8em);
		margin-bottom: 0.4em;
		border-radius: 6px;
		transition: border-color 200ms ease-in-out;
	}

	.form-group:focus-within {
		border-color: var(--form-group-border, #cacaca);
	}

	.form-group .input-label {
		display: block;
		margin: 0.4em 0;
	}

	.form-group .input-label.required::after {
		content: ' *';
		display: inline;
		font-size: 0.8em;
		font-weight: 800;
	}

	.form-group .input, .form-group .input:required:invalid:placeholder-shown {
		display: block;
		width: var(--input-width, 100%);
		max-width: 100%;
		color: currentColor;
		border-style: solid;
		border-color: var(--input-border, #cacaca);
		border-width: 0 0 1px 0;
		background: transparent;
		padding: var(--form-group-padding, 0.5em 0.3em);
		transition: color 300ms ease-in-out, background-color 300ms ease-in-out;
	}

	.form-group textarea.input {
		resize: vertical;
	}

	.form-group .input:invalid {
		box-shadow: none;
	}

	.form-group .input:invalid:not(:focus) {
		color: var(--invalid-color, #-871717);
		border-color: currentColor;
		background-color: var(--invalid-background, #F7C1C1);
	}

	.form-group input[hidden] + label[for].btn-toggle {
		background-color: var(--button-disabled-background);
		margin: var(--form-group-margin, 0.3rem);
		transition: background-color 300ms ease-in-out;
	}

	.form-group input[hidden]:checked + label[for].btn-toggle {
		background-color: var(--button-background);
	}

	.form-group input[hidden]:not(:checked) + label[for].btn-toggle .when-checked {
		display: none;
	}

	.form-group input[hidden]:checked + label[for].btn-toggle .when-unchecked {
		display: none;
	}
`);

export const btnStyles = new  CSSStyleSheet().replace(`
	.btn:not([hidden]) {
		appearance: button;
		display: inline-block;
		padding: var(--button-padding, 0.3em);
		font-family: var(--button-font, inherit);
		border-radius: var(--button-border-radius, initial);
		box-sizing: border-box;
		cursor: pointer;
	}

	.btn.btn-primary {
		background-color: ${primary};
		border: none;
		color: ${light};
	}

	.btn.btn-primary:hover {
		background-color: ${blue[4]};
	}

	.btn.btn-primary:disabled, .btn.btn-primary.__state-disabled, .btn.btn-primary.disabled {
		background-color: ${blue[7]};
	}

	.btn.btn-primary:active, .btn.btn-primary.__state-active, .btn.btn-primary.active {
		background-color: ${blue[6]};
	}

	.btn.btn-default {
		background-color: ${gray[3]};
		border: none;
		color: ${gray[8]};
	}

	.btn.btn-default:hover {
		background-color: ${gray[3]};
	}

	.btn.btn-default:active, .btn.btn-default.active {
		background-color: ${gray[5]};
	}

	.btn.btn-accept {
		background-color: ${success};
		border: none;
		color: ${light};
	}

	.btn.btn-accept:hover {
		background-color: ${green[4]};
	}

	.btn.btn-accept:disabled, .btn.btn-accept._state--disabled, .btn.btn-accept.disabled {
		background-color: ${green[7]};
	}

	.btn.btn-accept:active, .btn.btn-accept.active {
		background-color: ${green[6]};
	}

	.btn.btn-reject {
		background-color: ${danger};
		border: none;
		color: ${light};
	}

	.btn.btn-reject:hover {
		background-color: ${red[4]};
	}

	.btn.btn-reject:disabled, .btn.btn-reject._state--disabled, .btn.btn-reject.disabled, .btn.btn-reject[disabled] {
		background-color: ${red[7]};
	}

	.btn.btn-reject:active, .btn.btn-reject.active {
		background-color:${red[6]};
	}
`);

export const fonts = new CSSStyleSheet().replace(`
	.system-ui {
		font-family: system-ui, sans-serif;
	}

	.ui-sans-serif {
		font-family: ui-sans-serif, sans-serif;
	}

	.ui-serif {
		font-family: ui-serif, serif;
	}

	.ui-monospace {
		font-family: ui-monospace, monospace;
	}
`);

export const floatStyles = new CSSStyleSheet().replace(`
	.float-left {
		float: left;
	}

	.float-right {
		float: right;
	}

	.float-none {
		float: none;
	}

	.clear-left {
		clear: left;
	}

	.clear-right {
		clear: right;
	}

	.clear-both {
		clear: both;
	}
`);

export const positionStyles = new CSSStyleSheet().replace(`
	.fixed {
		position: fixed;
	}

	.relative {
		position: relative;
	}

	.absolute {
		position: absolute;
	}

	.sticky {
		position: sticky;
		margin-top: 0;
	}

	@media screen and (min-width: 800px) {
		.sticky-desktop {
			position: sticky;
			margin-top: 0;
		}
	}

	@media screen and (max-width: 800px) {
		.sticky-mobile {
			position: sticky;
			margin-top: 0;
		}
	}

	.z-0 {
		z-index: 0;
	}

	.z-1 {
		z-index: 1;
	}

	.z-2 {
		z-index: 2;
	}

	.z-3 {
		z-index: 3;
	}

	.z-4 {
		z-index: 4;
	}

	.z-top {
		z-index: var(--z-top, 9999);
	}

	.z-max {
		z-index: 2147483647;
	}

	.top {
		top: 0;
	}

	.top-titlebar {
		top: 0;
		top: env(titlebar-area-height, 0);
	}

	.sticky.top {
		top: -1px;
	}

	.bottom {
		bottom: 0;
	}

	.left {
		left: 0;
	}

	.right {
		right: 0;
	}
`);

export const displayRules =  new CSSStyleSheet().replace(`
	.block:not([hidden]) {
		display: block;
	}

	.inline:not([hidden]) {
		display: inline;
	}

	.inline-block:not([hidden]) {
		display: inline-block;
	}

	.flex:not([hidden]) {
		display: flex;
	}

	.inline-flex:not([hidden]) {
		display: inline-flex;
	}

	.grid:not([hidden]) {
		display: grid;
	}

	.inline-grid:not([hidden]) {
		display: inline-grid;
	}
`);

export const flexStyles = new CSSStyleSheet().replace(`
	.flex.row, .inline-flex.row {
		flex-direction: row;
	}

	.flex.column, .inline-flex.column {
		flex-direction: column;
	}

	.flex.wrap, .inline-flex.wrap {
		flex-wrap: wrap;
	}

	.flex.no-wrap, .inline-flex.no-wrap {
		flex-wrap: nowrap;
	}

	.flex.wrap-reverse, .inline-flex.wrap-reverse {
		flex-wrap: wrap-reverse;
	}

	.flex .center {
		align-self: center;
	}

	.flex.justify-space-around, .flex.space-around, .inline-flex.justify-space-around, .inline-flex.space-around {
		justify-content: space-around;
	}

	.flex.justify-space-between, .flex.space-between, .inline-flex.justify-space-between, .inline-flex.space-between {
		justify-content: space-between;
	}

	.flex.justify-space-evenly, .flex.space-evenly, .inline-flex.justify-space-evenly, .inline-flex.space-evenly {
		justify-content: space-evenly;
	}

	.flex.justify-center, .inline-flex.justify-center {
		justify-content: center;
	}

	.flex .grow-0, .inline-flex .grow-0 {
		flex-grow: 0;
	}

	.flex .grow-1, .inline-flex .grow-1 {
		flex-grow: 1;
	}

	.flex .grow-2, , .inline-flex .grow-2 {
		flex-grow: 2;
	}

	.flex .grow-3, .inline-flex .grow-3 {
		flex-grow: 3;
	}

	.flex .grow-4, .inline-flex .grow-4 {
		flex-grow: 4;
	}

	.flex .grow-5, , .inline-flex .grow-5 {
		flex-grow: 5;
	}

	.flex .shrink-0, .inline-flex .shrink-0 {
		flex-shrink: 0;
	}

	.flex .shrink-1, .inline-flex .shrink-1 {
		flex-shrink: 1;
	}

	.flex .shrink-2, .inline-flex .shrink-2 {
		flex-shrink: 2;
	}

	.flex .shrink-3, .inline-flex .shrink-3 {
		flex-shrink: 3;
	}

	.flex .shrink-4, .inline-flex .shrink-4 {
		flex-shrink: 4;
	}

	.flex .shrink-5, .inline-flex .shrink-5 {
		flex-shrink: 5;
	}

	.order-0 {
		order: 0;
	}

	.order-1 {
		order: 1;
	}

	.order-2 {
		order: 2;
	}

	.order-3 {
		order: 3;
	}

	.order-4 {
		order: 4;
	}

	.order-5 {
		order: 5;
	}

	.order-6 {
		order: 6;
	}
`);

export const gridStyles = new CSSStyleSheet().replace(`
	.grid-span-rows-2 {
		grid-row: span 2;
	}

	.grid-span-rows-3 {
		grid-row: span 3;
	}

	.grid-span-rows-4 {
		grid-row: span 4;
	}

	.grid-span-rows-5 {
		grid-row: span 5;
	}

	.grid-span-rows-6 {
		grid-row: span 6;
	}

	.grid-span-cols-2 {
		grid-column: span 2;
	}

	.grid-span-cols-3 {
		grid-column: span 3;
	}

	.grid-span-cols-4 {
		grid-column: span 4;
	}

	.grid-span-cols-5 {
		grid-column: span 5;
	}

	.grid-span-cols-6 {
		grid-column: span 6;
	}

	.grid-cols-2 {
		grid-template-columns: repeat(2, var(--grid-col-size, 1fr));
	}

	.grid-cols-3 {
		grid-template-columns: repeat(3, var(--grid-col-size, 1fr));
	}

	.grid-cols-4 {
		grid-template-columns: repeat(4, var(--grid-col-size, 1fr));
	}

	.grid-cols-5 {
		grid-template-columns: repeat(5, var(--grid-col-size, 1fr));
	}

	.grid-cols-6 {
		grid-template-columns: repeat(6, var(--grid-col-size, 1fr));
	}

	.grid-rows-2 {
		grid-template-rows: repeat(2, var(--grid-row-size, 1fr));
	}

	.grid-rows-3 {
		grid-template-rows: repeat(3, var(--grid-row-size, 1fr));
	}

	.grid-rows-4 {
		grid-template-rows: repeat(4, var(--grid-row-size, 1fr));
	}

	.grid-rows-5 {
		grid-template-rows: repeat(5, var(--grid-row-size, 1fr));
	}

	.grid-rows-6 {
		grid-template-rows: repeat(6, var(--grid-row-size, 1fr));
	}

	.grid-flow-row {
		grid-auto-flow: row;
	}

	.grid-flow-col {
		grid-auto-flow: column;
	}

	.grid-flow-dense {
		grid-auto-flow: dense;
	}

	.grid-flow-row-dense {
		grid-auto-flow: row dense;
	}

	.grid-flow-col-dense {
		grid-auto-flow: column dense;
	}
`);

export const multiColumnStyles = new CSSStyleSheet().replace(`
	.cols-auto {
		column-count: auto;
	}

	.cols-1 {
		column-count: 1;
	}

	.cols-2 {
		column-count: 2;
	}

	.cols-3 {
		column-count: 3;
	}

	.cols-4 {
		column-count: 4;
	}

	.cols-5 {
		column-count: 5;
	}

	.cols-6 {
		column-count: 6;
	}
`);

export const cursorStyles = new CSSStyleSheet().replace(`
	.no-pointer-events {
		pointer-events: none;
	}

	.cursor-auto {
		cursor: auto;
	}

	.cursor-default {
		cursor: var(--default-cursor, default);
	}

	.cursor-none {
		cursor: none;
	}

	.cursor-context-menu {
		cursor: context-menu;
	}

	.cursor-help {
		cursor: help;
	}

	.cursor-pointer {
		cursor: var(--pointer-cursor, pointer);
	}

	.cursor-progress {
		cursor: var(--progress-cursor, progress);
	}

	.cursor-wait {
		cursor: var(--wait-cursor, wait);
	}

	.cursor-cell {
		cursor: cell;
	}

	.cursor-crosshair {
		cursor: crosshair;
	}

	.cursor-text {
		cursor: text;
	}

	.cursor-vertical-text, .cursor-text-vertical {
		cursor: vertical-text;
	}

	.cursor-alias {
		cursor: alias;
	}

	.cursor-copy {
		cursor: copy;
	}

	.cursor-move {
		cursor: move;
	}

	.cursor-no-drop {
		cursor: no-drop;
	}

	.cursor-not-allowed {
		cursor: not-allowed;
	}

	.cursor-all-scroll {
		cursor: all-scroll;
	}

	.cursor-col-resize {
		cursor: col-resize;
	}

	.cursor-row-resize {
		cursor: row-resize;
	}

	.cursor-n-resize {
		cursor: n-resize;
	}

	.cursor-e-resize {
		cursor: e-resize;
	}

	.cursor-s-resize {
		cursor: s-resize;
	}

	.cursor-w-resize {
		cursor: w-resize;
	}

	.cursor-ne-resize {
		cursor: ne-resize;
	}

	.cursor-nw-resize {
		cursor: nw-resize;
	}

	.cursor-se-resize {
		cursor: se-resize;
	}

	.cursor-sw-resize {
		cursor: sw-resize;
	}

	.cursor-zoom-in {
		cursor: zoom-in;
	}

	.cursor-zoom-out {
		cursor: zoom-out;
	}

	.cursor-grab {
		cursor: grab;
	}

	.cursor-grabbing {
		cursor: grabbing;
	}
`);

export const containmentStyles = new CSSStyleSheet().replace(`
	.contain-none {
		contain: none;
	}

	.contain-strict {
		contain: strict;
	}

	.contain-content {
		contain: content;
	}

	.contain-size {
		contain: size;
	}

	.contain-layout {
		contain: layout;
	}

	.contain-style {
		contain: style;
	}

	.contain-paint {
		contain: paint;
	}
`);

export const colorStyles = new CSSStyleSheet().replace(`
	.current-color {
		fill: currentColor;
	}

	.color-default {
		color: var(--default-color);
	}

	.color-highlight {
		color: var(--highlight-color);
	}

	.color-primary {
		color: var(--primary-color);
	}

	.color-accent {
		color: var(--accent-color);
	}

	.color-compliment {
		color: var(--compliment-color);
	}

	.color-alt {
		color: var(--alt-color);
	}

	.color-initial {
		color: initial;
	}

	.color-inherit {
		color: inherit;
	}
`);

export const backgroundStyles = new CSSStyleSheet().replace(`
	.background-scroll {
		background-attachment: scroll;
	}

	.background-fixed {
		background-attachment: fixed;
	}

	.background-local {
		background-attachment: local;
	}

	.background-repeat {
		background-repeat: repeat;
	}

	.background-repeat-x {
		background-repeat: repeat-x;
	}

	.background-repeat-y {
		background-repeat: repeat-y;
	}

	.background-no-repeat {
		background-repeat: no-repeat;
	}

	.background-contain {
		background-size: contain;
	}

	.background-cover {
		background-size: cover;
	}

	.background-none {
		background: none;
	}

	.background-inherit {
		background: inherit;
	}

	.background-center {
		background-position: center;
	}

	.background-top {
		background-position: top;
	}

	.background-bottom {
		background-position: bottom;
	}

	.background-left {
		background-position: left;
	}

	.background-right {
		background-position: right;
	}

	.background-top-left {
		background-position: top left;
	}

	.background-top-right {
		background-position: top right;
	}

	.background-bottom-left {
		background-position: bottom left;
	}

	.background-bottom-right {
		background-position: bottom right;
	}

	.background-primary {
		background-color: var(--primary-color);
	}

	.background-highlight {
		background-color: var(--highlight-color);
	}

	.background-alt {
		background-color: var(--alt-color);
	}

	.background-accent {
		background-color: var(--accent-color);
	}

	.background-contrast {
		background-color: var(--contrast-color);
	}

	.background-compliment {
		background-color: var(--compliment-color);
	}
`);
