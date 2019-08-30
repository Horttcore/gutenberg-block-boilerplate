const {
    Component,
    Fragment
} = wp.element;

export default class Edit extends Component {

    constructor(props) {
        super(...arguments);
    }

    render() {
        const {
            attributes: {

            },
            className,
            setAttributes,
            isSelected
        } = this.props;

        return (
            <Fragment className={className}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </Fragment>
        );
    }
}