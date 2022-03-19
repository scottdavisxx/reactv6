import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    // Log this to Sentry, Azure Monitor, NewRelic, TrackJS
    console.error("ErrorBoundary caught an error", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <h1>
          This listing has an error.{" "}
          <Link to="/">Click here to go back to the Homepage.</Link>
        </h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
