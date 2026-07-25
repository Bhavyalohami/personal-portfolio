import React, { Component } from 'react';

const initialState = { error: null };

function resetKeysChanged(previousKeys = [], nextKeys = []) {
  return (
    previousKeys.length !== nextKeys.length
    || previousKeys.some((key, index) => !Object.is(key, nextKeys[index]))
  );
}

function DefaultErrorFallback({ error, resetErrorBoundary }) {
  const showDetails = process.env.NODE_ENV === 'development' && error?.message;

  return (
    <section className="app-error-boundary" role="alert" aria-live="assertive">
      <p>Portfolio system interruption</p>
      <h1>Something went wrong.</h1>
      <p>The page could not finish rendering. Your browser data has not been submitted.</p>
      {showDetails ? <pre>{error.message}</pre> : null}
      <div>
        <button type="button" onClick={resetErrorBoundary}>Try again</button>
        <button type="button" onClick={() => window.location.reload()}>Reload page</button>
      </div>
    </section>
  );
}

export default class ErrorBoundary extends Component {
  state = initialState;

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    const { onError } = this.props;
    if (!onError) return;

    try {
      onError(error, errorInfo);
    } catch (reportingError) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('Error-boundary reporting failed.', reportingError);
      }
    }
  }

  componentDidUpdate(previousProps, previousState) {
    const { error } = this.state;
    if (
      error
      && previousState.error
      && resetKeysChanged(previousProps.resetKeys, this.props.resetKeys)
    ) {
      this.resetWithReason('keys', {
        previousKeys: previousProps.resetKeys || [],
        nextKeys: this.props.resetKeys || [],
      });
    }
  }

  resetWithReason = (reason, details = {}) => {
    const { error } = this.state;
    if (!error) return;

    this.setState(initialState, () => {
      const { onReset } = this.props;
      if (!onReset) return;

      try {
        onReset({ reason, error, ...details });
      } catch (resetError) {
        if (process.env.NODE_ENV !== 'production') {
          console.error('Error-boundary reset handler failed.', resetError);
        }
      }
    });
  };

  resetErrorBoundary = (...args) => {
    this.resetWithReason('imperative-api', { args });
  };

  render() {
    const { error } = this.state;
    const { children, fallback, fallbackRender } = this.props;

    if (!error) return children;

    const fallbackProps = {
      error,
      resetErrorBoundary: this.resetErrorBoundary,
    };

    if (typeof fallbackRender === 'function') return fallbackRender(fallbackProps);
    if (fallback !== undefined) return fallback;
    return <DefaultErrorFallback {...fallbackProps} />;
  }
}
