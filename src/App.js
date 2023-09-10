import React from 'react';
import { About, Footer, Header, Skills, Work } from './container';
// Testimonial,
import { SocialMedia, Navbar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    {/* <Testimonial /> */}
    <Footer />
    <SocialMedia />
  </div>
);

export default App;
