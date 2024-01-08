/* eslint-disable react/prop-types */

import { useRef, useEffect } from "react";

const TextScrambler = (el, chars = "!<>-_\\/[]{}—=+*^?#_") => {
  let queue = [];
  let frameRequest = null;
  let frame = 0;

  const update = () => {
    let output = "", complete = 0;
    queue.forEach((item, i) => {
      let { from, to, start, end, char } = item;
      if (frame >= end) {
        complete++;
        output += to;
      } else if (frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = chars[Math.floor(Math.random() * chars.length)];
          queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    });

    el.innerHTML = output;
    if (complete !== queue.length) {
      frameRequest = requestAnimationFrame(update);
      frame++;
    }
  };

  const setText = (newText) => {
    return new Promise((resolve) => {
      const oldText = el.innerText;
      queue = Array(Math.max(oldText.length, newText.length)).fill().map((_, i) => ({
        from: oldText[i] || "",
        to: newText[i] || "",
        start: Math.floor(Math.random() * 40),
        end: Math.floor(Math.random() * 40) + 40,
      }));

      cancelAnimationFrame(frameRequest);
      frame = 0;
      update();
      resolve(); // Resolve the promise when the update is done
    });
  };

  return { setText };
};

const TextScramble = ({ words }) => {
  const elRef = useRef();
  const fxRef = useRef();

  useEffect(() => {
    fxRef.current = TextScrambler(elRef.current);
    let counter = 0;
    const next = () => {
      fxRef.current.setText(words[counter]).then(() => {
        setTimeout(next, 3500);
      });
      counter = (counter + 1) % words.length;
    };
    next();
    return () => cancelAnimationFrame(fxRef.current.frameRequest);
  }, [words]);

  return <span ref={elRef} />;
};

export default TextScramble;
