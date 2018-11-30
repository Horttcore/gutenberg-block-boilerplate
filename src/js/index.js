/**
 * Import block dependencies
 */
import classnames from 'classnames';
import icon from './icon';

/**
 * Import block libraries
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { registerBlockType } = wp.blocks;
const {
    RichText
} = wp.editor;
const { TextControl } = wp.components;

/**
 * Register Block
 */
registerBlockType('horttcore/gutenberg-block-boilerplate', {
    title: 'Gutenberg Block Boilerplate',
    icon: icon,
    category: 'common',
    keywords: [ __('Gutenberg Block Boilerplate', 'gutenberg-block-boilerplate') ],
    attributes: {

    },


    /**
     *
     * Backend
     *
     */
    edit: props => {

        const {
            attributes: {

            },
            className,
            setAttributes,
            isSelected
        } = props;

        return (
            <Fragment>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </Fragment>
        );
    },


    /**
     *
     * Frontend
     *
     */
    save: props => {

        const {

        } = props.attributes;

        return (
            <Fragment>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </Fragment>
        );
    }
});
