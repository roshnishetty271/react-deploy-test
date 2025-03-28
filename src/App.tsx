import React from "react";
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React Website</h1>
        <p>This is a simple yet elegant React page.</p>
      </header>

      <section className="content">
        <div className="content-container">
          <h2>About This Project</h2>
          <p>
            This is a demonstration of a simple React application with clean and modern styling.
            The page includes a header, a main content section, and a footer. You can edit this
            template and use it for your own projects.
          </p>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 My React Project</p>
      </footer>
    </div>
  );
}

export default App;
