import React, { useEffect, useRef, useState } from 'react';

// Fades its content in the first time it enters the viewport.
const Reveal = ({ as: Tag = 'div', className = '', delay = 0, style, ...rest }) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px' }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal${shown ? ' is-in' : ''} ${className}`}
      style={{ ...style, '--delay': `${delay}ms` }}
      {...rest}
    />
  );
};

export default Reveal;
