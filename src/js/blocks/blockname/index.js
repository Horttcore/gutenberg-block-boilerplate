import icon from './components/icon';
import attributes from './components/attributes';
import edit from './components/edit';
import save from './components/save';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Register Block
 */
registerBlockType('horttcore/gutenberg-block-boilerplate', {
    title: 'Gutenberg Block Boilerplate',
    icon,
    category: 'common',
    keywords: [__('Gutenberg Block Boilerplate', 'gutenberg-block-boilerplate')],
    attributes,
    edit,
    save
});
