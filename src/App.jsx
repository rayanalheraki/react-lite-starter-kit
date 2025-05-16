import React from 'react';

function App() {
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'ESBuild-loader makes builds 10-100x faster than traditional setups.',
    },
    {
      icon: '📦',
      title: 'Optimized Size',
      description: 'Minimal dependencies and optimized Webpack configuration.',
    },
    {
      icon: '🔄',
      title: 'Hot Reload',
      description: 'Changes instantly reflect in your browser during development.',
    },
    {
      icon: '🧩',
      title: 'Code Splitting',
      description: 'Automatically split your code for optimal loading.',
    },
    {
      icon: '🔍',
      title: 'ESLint Ready',
      description: 'Code quality tools configured with best practices.',
    },
    {
      icon: '🎛️',
      title: 'Full Control',
      description: 'Transparent configuration with no hidden magic.',
    },
  ];

  // State for hover effect
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  // Animation styles
  const keyframesStyle = `
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `;

  return (
    <div style={styles.container}>
      <style>{keyframesStyle}</style>
      <header style={styles.header}>
        <div style={styles.logoContainer}>
          <div style={{ ...styles.logo, animation: 'spin 10s linear infinite' }}>
            <div style={styles.logoInner}>RL</div>
          </div>
        </div>
        <div>
          <h1 style={styles.heading}>React Lite Starter kit</h1>
          <p style={styles.tagline}>A lightweight, blazing fast React starter kit</p>
        </div>
      </header>

      {/* Features grid */}
      <div style={styles.featuresGrid}>
        {features.map((feature, index) => (
          <div
            key={index}
            style={{
              ...styles.feature,
              ...(hoveredIndex === index ? styles.featureHover : {}),
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div style={styles.featureIcon}>{feature.icon}</div>
            <h3 style={styles.featureTitle}>{feature.title}</h3>
            <p style={styles.featureDesc}>{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Quick start section */}
      <div style={styles.docsSection}>
        <h2>Quick Start</h2>
        <p>
          Edit <code>src/App.jsx</code> and save to reload. Get started by exploring these files:
        </p>
        <div style={styles.codeBlock}>
          <span style={styles.command}>📂 src/</span>
          <span style={styles.command}>┣ 📂 components/</span>
          <span style={styles.command}>┃ ┗ 📄 Your components go here</span>
          <span style={styles.command}>┣ 📄 App.jsx # Main application component</span>
          <span style={styles.command}>┗ 📄 index.js # Application entry point</span>
        </div>

        <h3>Available Scripts</h3>
        <div style={styles.codeBlock}>
          <span style={styles.command}># Start development server</span>
          <span style={styles.command}>npm start</span>
          <span style={styles.command}></span>
          <span style={styles.command}># Build for production</span>
          <span style={styles.command}>npm run build</span>
          <span style={styles.command}></span>
          <span style={styles.command}># Lint your code</span>
          <span style={styles.command}>npm run lint</span>
        </div>
      </div>

      {/* Resource links */}
      <div style={styles.links}>
        <a
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...styles.link, ...styles.primaryLink }}
        >
          <span style={styles.linkIcon}>📚</span> React Docs
        </a>
        <a
          href="https://webpack.js.org"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          <span style={styles.linkIcon}>🔧</span> Webpack
        </a>
        <a
          href="https://esbuild.github.io"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          <span style={styles.linkIcon}>⚡</span> ESBuild
        </a>
        <a href="https://eslint.org" target="_blank" rel="noopener noreferrer" style={styles.link}>
          <span style={styles.linkIcon}>🔍</span> ESLint
        </a>
      </div>

      <footer style={styles.footer}>
        <p>Ready to build something amazing with React Lite App Startkit!</p>
      </footer>
    </div>
  );
}

export default App;

const styles = {
  container: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    color: '#213547',
    lineHeight: 1.6,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '40px',
  },
  logoContainer: {
    marginRight: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '70px',
    height: '70px',
    backgroundColor: '#61dafb',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    animation: 'spin 10s linear infinite',
    position: 'relative',
  },
  logoInner: {
    width: '60px',
    height: '60px',
    backgroundColor: 'white',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  heading: {
    fontSize: '32px',
    fontWeight: 'bold',
    margin: 0,
  },
  tagline: {
    fontSize: '18px',
    color: '#666',
    marginTop: '10px',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '20px',
    marginTop: '40px',
  },
  feature: {
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#f5f8fa',
    border: '1px solid #e4ebf0',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  featureHover: {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
  },
  featureIcon: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  featureTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  featureDesc: {
    color: '#444',
    fontSize: '14px',
  },
  docsSection: {
    marginTop: '40px',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    border: '1px solid #eaeaea',
  },
  codeBlock: {
    backgroundColor: '#2d333b',
    color: '#e6edf3',
    padding: '15px',
    borderRadius: '6px',
    overflow: 'auto',
    fontSize: '14px',
    fontFamily: 'SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace',
  },
  command: {
    display: 'block',
    marginBottom: '8px',
  },
  links: {
    marginTop: '30px',
    display: 'flex',
    gap: '15px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  link: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '8px 16px',
    backgroundColor: '#f0f0f0',
    color: '#333',
    borderRadius: '4px',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '14px',
    transition: 'background-color 0.2s',
  },
  primaryLink: {
    backgroundColor: '#61dafb',
    color: '#000',
  },
  linkIcon: {
    marginRight: '8px',
  },
  footer: {
    marginTop: '40px',
    textAlign: 'center',
    fontSize: '14px',
    color: '#888',
  },
  '@keyframes spin': {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
  },
};
