import React from "react";

type Props = { children: React.ReactNode };

type State = { hasError: boolean; error?: Error | null };

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // Log error to console (or send to an external error tracker)
    console.error("Uncaught error in ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
          <div className="max-w-xl w-full text-center bg-card border border-destructive/10 rounded-md p-6">
            <h2 className="text-xl font-bold text-destructive">Something went wrong</h2>
            <p className="text-sm text-muted-foreground mt-2">The page encountered an error. Try refreshing or contact the site administrator.</p>
            {this.state.error && (
              <pre className="mt-4 text-xs text-left whitespace-pre-wrap break-words bg-muted/10 p-3 rounded">{String(this.state.error)}</pre>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
