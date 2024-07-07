import React from 'react';
import { useEffect, useState } from 'react';

const quotes = [
  "It's computer science, anything is possible",
  "You're not doing anything that thousands of others who came before you haven't already done",
  "Don't waste your time being frustrated. You made it this far because you know you can go further",
  "A stagnant life would be boring for us. Why not get a field that's constantly growing ... constantly challenging you?",
  "What's the point without a goal",
  "Can't is a coward's way in computer science. Everything is possible, everything you struggle with has already been done. So hold yourself higher. Doubt is pointless in the grand scheme of inevitability - we are inevitable",
  "Don't be afraid to ask for help - no one is perfect but that doesn't mean we should stop trying. Forge ahead. Conquer what's before you.",
  'Every lesson you learned - every trick you picked up',
  "It's not going to work the first time, if it did we wouldn't try as hard as we do. This was never meant to be easy.",
  "You are more than capable of doing what thousands of others have already done before you. So don't stress it out. Like everything else in life, it will bend to your whim. So step up and control it.",
];

export const QuoteChanger = () => {
  const [greeting, setGreeting] = useState('');
  const [quote, setQuote] = useState('');
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    changeText(); // Initialize greeting based on current time
    const interval = setInterval(changeQuote, 10000); // Change quote every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const changeText = () => {
    const date = new Date();
    const hour = date.getHours();
    let greetings;

    if (hour > 18) {
      greetings = 'Good Evening';
    } else if (hour > 12) {
      greetings = 'Good Afternoon';
    } else if (hour > 0) {
      greetings = 'Good Morning';
    } else {
      greetings = 'Welcome';
    }

    setGreeting(greetings + ' ' + date.toDateString());
    setFadeIn(true);
    setTimeout(() => setFadeIn(false), 10000); // Fade out after 2 seconds
  };

  const changeQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
    setFadeIn(true);
    setTimeout(() => setFadeIn(false), 10000); // Fade out after 2 seconds
  };

  return (
    <div className="App">
      <div id="Slider_Container">
        <div className="slider"></div>
        <div id="cuties" className={fadeIn ? 'fadeIn' : 'fadeOut'}>
          {fadeIn ? greeting : quote}
        </div>
      </div>
    </div>
  );
};
