/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType(metadata.name, {



	keywords: [__('Social Bar', 'ctc-social-sharing'), __('Social Sharing', 'ctc-social-sharing')],

	attributes: {
        socialOptions: {
            type: 'array',
            default: [
                { name: 'Facebook', href: 'https://www.facebook.com/sharer/sharer.php?u=', icon: 'dashicons-facebook-alt', color:'rgba(0, 84, 159, 1)' },
                { name: "Twitter", href: 'http://twitter.com/share?url=',icon:'dashicons-twitter', color:'rgba(56, 205, 255, 1)' },
                { name: 'Linkedin', href: 'http://www.linkedin.com/cws/share?url=', icon:'dashicons-linkedin',color:'rgba(0, 150, 193, 1)'  },
                { name: "Pinterest", href: "http://pinterest.com/pin/create/link/?url=",icon:'dashicons-pinterest',color:'rgba(189, 8, 28, 1)'  },
                { name: "Reddit", href: "http://www.reddit.com/submit?url=", icon:'dashicons-reddit',color:'rgba(236, 84, 40, 1)'  },
				{name:"Whatsapp",href:"https://api.whatsapp.com/send?text=", icon: 'dashicons-whatsapp',color:'rgba(101, 208, 114, 1)' }
            ]
        },
        socialOptionsInput: {
            type: 'array',
            default: [
                { name: 'Facebook', href: 'https://www.facebook.com/sharer/sharer.php?u=', checked: true, icon: 'dashicons-facebook-alt', color:'rgba(0, 84, 159, 1)' },
                { name: "Twitter", href: 'http://twitter.com/share?url=', checked: true, icon:'dashicons-twitter',color:'rgba(56, 205, 255, 1)' },
                { name: 'Linkedin', href: 'http://www.linkedin.com/cws/share?url=', checked: true, icon:'dashicons-linkedin',color:'rgba(0, 150, 193, 1)'  },
                { name: "Pinterest", href: "http://pinterest.com/pin/create/link/?url=", checked: true ,icon:'dashicons-pinterest',color:'rgba(189, 8, 28, 1)'},
                { name: "Reddit", href: "http://www.reddit.com/submit?url=", checked: true, icon:'dashicons-reddit',color:'rgba(236, 84, 40, 1)' },
				{name:"Whatsapp",href:"https://api.whatsapp.com/send?text=",checked:true , icon: 'dashicons-whatsapp',color:'rgba(101, 208, 114, 1)'}
            ]
        },

		postPermalink: {
            type: 'string',
            default: ''
        },
        clntId: { type: 'String', default: '' },
        fontSize:{type:"Number", default:20},
		borderRadius:{type:"Number", default:20},

	},


	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
});
