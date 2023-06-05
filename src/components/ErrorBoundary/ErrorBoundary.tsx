import { Component, ErrorInfo } from 'react';

type State = {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
};
type Props = {
  children: React.ReactNode;
  fallback: React.ReactNode;
};

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch?(error: Error, errorInfo: ErrorInfo): void {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo,
    });
    console.error('Uncaught error: ', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}
