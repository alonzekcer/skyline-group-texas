
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// --- DEBUGGING START ---
// Catch global errors (script failures, etc)
window.onerror = function (message, source, lineno, colno, error) {
  const errDiv = document.createElement('div');
  errDiv.style.cssText = "position:fixed; top:0; left:0; width:100%; z-index:10000; background: #ffebee; color: #b71c1c; padding: 20px; font-family: monospace; border-bottom: 2px solid #b71c1c;";
  errDiv.innerHTML = `<strong>Global Error:</strong><br/>${message}<br/><small>${source}:${lineno}:${colno}</small>`;
  document.body.appendChild(errDiv);
  return false;
};

// Catch promise rejections (lazy loading failures)
window.onunhandledrejection = function (event) {
  const errDiv = document.createElement('div');
  errDiv.style.cssText = "position:fixed; bottom:0; left:0; width:100%; z-index:10000; background: #FFF3E0; color: #E65100; padding: 20px; font-family: monospace; border-top: 2px solid #E65100;";
  errDiv.innerHTML = `<strong>Unhandled Promise Rejection:</strong><br/>${event.reason}`;
  document.body.appendChild(errDiv);
};

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean, error: Error | null }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("React Error Boundary Caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', fontFamily: 'system-ui', color: '#1a1a1a' }}>
          <h1 style={{ color: '#E11D48' }}>Something went wrong.</h1>
          <p>The application crashed. Here is the error:</p>
          <pre style={{ background: '#f1f5f9', padding: '20px', borderRadius: '8px', overflow: 'auto' }}>
            {this.state.error?.toString()}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}
// --- DEBUGGING END ---

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
