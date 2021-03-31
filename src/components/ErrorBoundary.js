import { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state= {
            hasError: false,
        }
    }
    componentDidCatch() {
        this.setState({hasError: true})
    }

    render () {
        const {hasError} = this.state;
        const {children} = this.props;
        if(hasError) {
            return <h1>There is something wrong!</h1>
        } else {
            return children
        }       
    }
}

export default ErrorBoundary;
