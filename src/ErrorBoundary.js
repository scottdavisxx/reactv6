import { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    // Log this to Sentry, Azure Monitor, NewRelic, TrackJS
    console.error("ErrorBoundary caught an error", error, info);
    setTimeout(() => this.setState({ redirect: true }), 5000);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h2>
          This listing has an error.{" "}
          <Link to="/">
            Click here to go back to the Homepage. Or you will be automatically
            redirected.
          </Link>
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
