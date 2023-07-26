export const utility = {
	/* Positioning */
	'.relative': {
		position: 'relative'
	},
	'.absolute': {
		position: 'absolute',
	},
	'.fixed': {
		position: 'fixed',
	},
	'.sticky': {
		position: 'sticky',
	},
	'.top': {
		top: 0,
	},

	/* Text Stuff */
	'.capitalize': {
		'text-transform': 'capitalize',
	},
	'.uppercase': {
		'text-transform': 'uppercase',
	},
	'.lowercase': {
		'text-transform': 'lowercase',
	},
	'.italic': {
		'font-style': 'italic',
	},
	'.underline': {
		'text-decoration': 'underline',
	},
	'.bold': {
		'font-weight': 'bold',
	},
	'.bolder': {
		'font-weight': 'bolder',
	},
	'.center': {
		'text-align': 'center',
	},

	/* Display */
	'.block:not([hidden])': {
		display: 'block',
	},
	'.flex:not([hidden])': {
		display: 'flex',
	},
	'.flex.wrap': {
		'flex-wrap': 'wrap',
	},
	'.grid:not([hidden])': {
		display: 'grid',
	},

	/* Floats */

	'.float-left': {
		float: 'left',
	},
	'.float-right': {
		float: 'right',
	},
	'.clearfix::after': {
		clear: 'both',
	},

	/* Other */
	'.no-border': {
		border: 'none',
	},
};
