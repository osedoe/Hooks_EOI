import React from '../../../Library/Caches/typescript/3.5/node_modules/@types/react';

interface TooltipProps {
    title: string;
    children: any;
    hideOnHover?: boolean;
    onChange?: (name: string, value: string) => void
}

interface TooltipState {
    value: string;
    visible: boolean;
}

export class ToolTip extends React.Component<TooltipProps, TooltipState> {
    spanRef: React.RefObject<HTMLSpanElement> = React.createRef<HTMLSpanElement>();

    static defaultProps: Partial<TooltipProps> = {
        hideOnHover: false
    };

    constructor(props: TooltipProps) {
        super(props);
        this.state = {
            value: props.title,
            visible: !props.hideOnHover
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
    }

    componentDidMount() {
        this.spanRef.current.addEventListener('mouseenter', this.handleMouseEnter);
    }

    componentWillUnmount() {
        this.spanRef.current.removeEventListener('mouseenter', this.handleMouseEnter);
    }

    handleMouseEnter() {
        this.setState({
            visible: true
        });
    };

    handleChange(event) {
        const newValue = event.target.value;
        this.setState({ value: newValue });
        if (this.props.onChange) {
            this.props.onChange(event.target.name, newValue);
        }
    };

    children = this.props;
    render() {
        return <span ref={this.spanRef} onMouseEnter={this.handleMouseEnter} onChange={this.handleChange}>
            {this.children}
        </span>;
    }
}
