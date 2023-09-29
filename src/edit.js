import { useSelect } from '@wordpress/data';

import {useEffect} from 'react';
import { CheckboxControl, PanelBody ,RangeControl} from '@wordpress/components';


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps,InspectorControls } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({clientId,attributes,setAttributes,}) {

	const postPermaLink = useSelect(select => select("core/editor").getPermalink());
    setAttributes({ postPermalink: postPermaLink })
	setAttributes({clntId:clientId})
	return (
		<div {...useBlockProps()}>
			{attributes.socialOptions.map((x,i)=> <a style={{ marginLeft:'5px', width:`${attributes.fontSize}px`,height:`${attributes.fontSize}px`, textDecoration:'none', display:'inline-block', border:`1px solid ${x.color}`,borderRadius:`${attributes.borderRadius}%` , padding:"2px", fontSize:`${attributes.fontSize}px`,color:x.color}} className={`ctcl-sharing-icon dashicons ${x.icon}`} 
							  href={`${x.href}${attributes.postPermalink}`}
							  target= "_blank"
							  title= {`${__('Share this page on', 'ctcl-sharing')} ${x.name}`}
							>
                          </a>   )}



         <InspectorControls>

			<PanelBody>

			<RangeControl
					label={ __('Icon Size in px', 'ctcl-sharing')}
                    min= {10}
                    max= {50}
                    onChange = { val => setAttributes({fontSize: val })}
                    value = {attributes.fontSize}
                    resetFallbackValue= {20}
					/>


<RangeControl
					label={ __('Border radius in %', 'ctcl-sharing')}
                    min= {1}
                    max= {50}
                    onChange = { val => setAttributes({borderRadius: val })}
                    value = {attributes.borderRadius}
                    resetFallbackValue= {50}
					/>

				</PanelBody>


		 <PanelBody>
					<p>{__('Choose Social Icons','ctc-social-sharing')}</p>

					<ol>

					{

						attributes.socialOptionsInput.map((x,i)=>{


						
							return 	<><li style={{color:x.color}} className={`ctcSsEditLi dashicons-before ${x.icon}`} title={x.name} > <CheckboxControl
								key={i}
								name={x.name}
								checked={x.checked}
								id={`${x.name}-sbg-${attributes.clntId}`}
								rel="noopener"
								onChange={() => {

									setAttributes({ socialOptions: attributes.socialOptionsInput.filter(x => true === document.querySelector(`#${x.name}-sbg-${attributes.clntId}`).checked) });
									setAttributes({ socialOptionsInput: attributes.socialOptionsInput.map(x => { return { icon:x.icon, name: x.name, href: x.href,color:x.color, checked: document.querySelector(`#${x.name}-sbg-${attributes.clntId}`).checked }; }) });
								} } /></li></>
						})

					}
					</ol>

				  </PanelBody>


		 </InspectorControls>

		</div>
	);
}
