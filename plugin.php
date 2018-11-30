<?php
/**
 * Plugin Name:     Gutenberg Block Boilerplate
 * Plugin URI:      https://horttcore.de
 * Description:     A WordPress Gutenberg Block Boilerplate
 * Author:          Ralf Hortt
 * Author URI:      https://horttcore.de
 * Text Domain:     gutenberg-block-boilerplate
 * Domain Path:     /languages
 * Version:         0.1.0
 *
 * @package         Horttcore/Gutenberg-Block-Boilerplate
 */

namespace Horttcore\GutenbergBlockBoilerplate;

//  Exit if accessed directly.
defined('ABSPATH') || exit;

/**
 * Enqueue block script and backend stylesheet.
 */
add_action( 'enqueue_block_editor_assets', function() {
	wp_enqueue_script( 'gutenberg-block-boilerplate', plugins_url( '/dist/js/block.js', __FILE__ ), [], filemtime( plugin_dir_path( __FILE__ ) . 'dist/js/block.js' ), TRUE );
	wp_enqueue_style( 'gutenberg-block-boilerplate-editor', plugins_url( 'dist/css/editor.css', __FILE__ ) );
} );


/**
 * Enqueue styles for backend and frontend.
 */
add_action( 'enqueue_block_assets', function() {
	wp_enqueue_style( 'gutenberg-block-boilerplate-style', plugins_url( '/dist/css/style.css', __FILE__ ), [], filemtime( plugin_dir_path( __FILE__ ) . 'dist/css/style.css' ) );
} );


/**
 * Load translation
 */
add_action( 'plugins_loaded', function(){
	load_plugin_textdomain( 'gutenberg-block-boilerplate', false, plugin_dir_path( __FILE__ ) . 'languages' );
});
