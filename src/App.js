import React from "react";
import Header from "./components/Header";
import Article from "./components/Article";
import Footer from "./components/Footer";
import pic1 from './images/lab image 1.jpg';
import pic2 from './images/lab image 2.jpg';

import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <Article 
          date="11/12/20" 
          title="On the Street in Brooklyn" 
          imageSrc={pic1}
          altText="Fashionable person on the street in Brooklyn" 
          content="Cray ipsum dolor sit amet consectetur adipisicing elit. Repellat quidem deserunt nemo dignissimos fuga veniam inventore eligendi magnam aperiam odit mollitia cupiditate eveniet velit officiis magni aliquid, laborum dolor?" 
        />
        <Article 
          date="11/11/20" 
          title="Vintage in Vogue" 
          imageSrc={pic2} 
          altText="Vintage style group photo" 
          content="Selfies sunt, dolor sit amet consectetur adipisicing elit. Repellat quidem deserunt nemo dignissimos fuga veniam inventore eligendi magnam aperiam odit mollitia cupiditate eveniet velit officiis magni aliquid, laborum dolor?" 
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;



