import { createSheet } from '@shgysk8zer0/jswaggersheets/swagger.js';
import { createElement } from '@shgysk8zer0/kazoo/elements.js';
import { getText } from '@shgysk8zer0/kazoo/http.js';
import { systemFonts } from '@shgysk8zer0/jss/system-fonts.js';
import * as gnome from '@shgysk8zer0/jss/palette/gnome.js';
import * as bootstrap from '@shgysk8zer0/jss/palette/bootstrap.js';
import { gnomeStyles } from '@shgysk8zer0/jss/gnome.js';
import { utility } from '@shgysk8zer0/jss/utility.js';
import { base } from '@shgysk8zer0/jss/base.js';
import '@shgysk8zer0/components/github/user.js';

const slugify = str => str.toLowerCase().replaceAll(/[^a-z\d]/g ,'-');

Promise.all([
	createSheet(base),
	createSheet(systemFonts),
	createSheet(gnomeStyles),
	createSheet(utility),
	getText('./index.css', {
		headers: new Headers({ Accept: 'text/css' }),
	}).then(css => new CSSStyleSheet().replace(css)),
]).then(sheets => document.adoptedStyleSheets = sheets);

function createPalettePreview(palette, name) {
	return createElement('div', {
		id: slugify(name),
		classList: ['palette', 'container', 'flex', 'row', 'wrap'],
		children: [
			createElement('h2', { text: name, classList: ['palette-name' ,'center', 'capitalize', 'cursive', 'italic'] }),
			createElement('div', {
				classList: ['palette-lists', 'flex', 'row', 'wrap' ,'system-ui'],
				children: Object.entries(palette)
					.filter(([, items]) => Array.isArray(items))
					.map(([color, items]) => createElement('div', {
						children: [
							createElement('h2', {
								classList: ['palette-color-name', 'center', 'capitalize', 'serif'],
								text: color,
							}),
							createElement('ul', {
								classList: ['palette-list'],
								children: items.map(item => createElement('li', {
									classList: ['palette-color', 'block', 'monospace'],
									dataset: { color: item },
									title: item,
									styles: { 'background-color': item },
									text: item,
									events: {
										click: async ({ currentTarget }) => {
											await navigator.clipboard.writeText(currentTarget.dataset.color);
											const el = createElement('div', {
												classList: ['fixed', 'center', 'bg-dark-4', 'light-2', 'border-dark-1'],
												text: 'Copied to Clipboard',
												styles: {
													bottom: '0',
													left: 'max(8px, calc(50vw - 200px))',
													right: 'max(8px, calc(50vw - 200px))',
													height: '5rem',
													'border-radius': '0.8em 0.8em 0 0',
													'border-style': 'solid',
													'border-width': '1px',
													padding: '1.2rem',
												}
											});

											const anim = el.animate([
												{ transform: 'translatey(5rem)' },
												{ transform: 'translatey(3px)' },
											], {
												duration: 600,
												easing: 'ease-out',
												fill: 'both',
											});

											document.body.append(el);
											await anim.finished;

											setTimeout(async () => {
												await el.animate([
													{ transform: 'translatey(3px)' },
													{ transform: 'translatey(5rem)' },
												], {
													duration: 600,
													easing: 'ease-in',
													fill: 'both',
												}).finished;

												el.remove();
											}, 3000);
										},
									}
								}))
							})
						]
					})),
			}),
		],
	});
}

document.getElementById('palettes').append(
	createPalettePreview(gnome, 'Gnome Palette'),
	createPalettePreview(bootstrap, 'Bootstrap Palette'),
);

document.getElementById('nav').append(
	createElement('a', {
		href: new URL('#gnome-palette', location.href),
		text: 'Gnome Palette',
		classList: ['light-1', 'bold'],
	}),
	createElement('a', {
		href: new URL('#bootstrap-palette', location.href),
		text: 'Boostrap Palette',
		classList: ['light-1', 'bold'],
	}),
);
