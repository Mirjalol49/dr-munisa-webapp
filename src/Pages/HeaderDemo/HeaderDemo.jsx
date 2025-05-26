import React from 'react';
import ResponsiveHeader from '../../assets/Components/ResponsiveHeader/ResponsiveHeader';
import './HeaderDemo.css';

const HeaderDemo = () => {
  return (
    <div className="header-demo">
      <ResponsiveHeader />
      
      <main className="demo-content">
        <section className="hero-section">
          <div className="container">
            <h1>Responsive Header Demo</h1>
            <p>A clean, modern and fully responsive header component built with React and pure CSS.</p>
          </div>
        </section>
        
        <section className="features-section">
          <div className="container">
            <h2>Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h3>Fully Responsive</h3>
                <p>Adapts seamlessly to all screen sizes from mobile to desktop.</p>
              </div>
              <div className="feature-card">
                <h3>Mobile Menu</h3>
                <p>Hamburger menu with smooth transitions for mobile devices.</p>
              </div>
              <div className="feature-card">
                <h3>Sticky Header</h3>
                <p>Header stays fixed at the top as you scroll down the page.</p>
              </div>
              <div className="feature-card">
                <h3>Accessibility</h3>
                <p>Keyboard navigation, ARIA attributes, and focus management.</p>
              </div>
              <div className="feature-card">
                <h3>Smooth Animations</h3>
                <p>Clean transitions and hover effects for a polished experience.</p>
              </div>
              <div className="feature-card">
                <h3>Pure CSS</h3>
                <p>No external libraries or dependencies required.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="scroll-section">
          <div className="container">
            <h2>Scroll Down</h2>
            <p>Notice how the header changes as you scroll down the page.</p>
          </div>
        </section>
        
        <section className="long-content">
          <div className="container">
            <h2>Try It Out</h2>
            <p>Resize your browser window to see how the header adapts to different screen sizes.</p>
            <p>On mobile devices, the navigation links collapse into a hamburger menu that can be toggled open and closed.</p>
            <div className="placeholder-content">
              <div className="placeholder-block"></div>
              <div className="placeholder-block"></div>
              <div className="placeholder-block"></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HeaderDemo;
