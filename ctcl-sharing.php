<?php
/**
 * Plugin Name:       CTCL Sharing
 * Description:      Social sharing for CT Commerce Lite Products
 * Requires at least: 6.5
 * Requires PHP:      7.0
 * Version:           0.1.1
 * Author:            UjW0L
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ctcl-sharing
 *
 * @package           create-block
 */


 if ( ! defined( 'ABSPATH' ) ) exit; 

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

if(class_exists('ctcLite')){ 
	function ctcl_create_block_ctcl_sharing_block_init() {
		register_block_type( __DIR__ . '/build' );
	}
	add_action( 'init', 'ctcl_create_block_ctcl_sharing_block_init' );
	
	
	 }else{
	
		add_thickbox();
		/**
		 * If main plugin CTC lite is not installed
		 */
		 add_action( 'admin_notices', function(){
			 echo '<div class="notice notice-error is-dismissible"><p>';
			 esc_html_e( 'CTCL Sharing plugin requires CTC Lite plugin installed and activated to work, please do so first.', 'ctcl-sharing' );
			  echo esc_html('<a href="'.admin_url('plugin-install.php').'?tab=plugin-information&plugin=ctc-lite&TB_iframe=true&width=640&height=500" class="thickbox">'.__('Click Here to install it','ctcl-sharing')).' </a>'; 
			 echo '</p></div>';
		 } );
	 }