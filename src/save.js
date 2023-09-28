/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({attributes}) {
	return (
		<div{...useBlockProps.save()}>
		{attributes.socialOptions.map((x,i)=> <a style={{ marginLeft:'5px', width:`${attributes.fontSize}px`,height:`${attributes.fontSize}px`, textDecoration:'none', display:'inline-block', border:`1px solid ${x.color}`,borderRadius:`${attributes.borderRadius}%` , padding:"2px", fontSize:`${attributes.fontSize}px`,color:x.color}} className={`ctcl-sharing-icon dashicons ${x.icon}`} 
		href={`${x.href}${attributes.postPermalink}`}
		target= "_blank"
		title= {`${__('Share this page on', 'ctcl-sharing')} ${x.name}`}
	  >
	</a>   )}

		</div>
	);
}
