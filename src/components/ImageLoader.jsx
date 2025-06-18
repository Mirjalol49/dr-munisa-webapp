import React, { useState, useEffect } from 'react';

const ImageLoader = ({ src, alt, className, style }) => {
  const [loading, setLoading] = useState(true);
  const [, setError] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);

  // Pre-load the image to check if it exists
  useEffect(() => {
    if (!src) {
      setLoading(false);
      setError(true);
      return;
    }

    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setImgSrc(src);
      setLoading(false);
      setError(false);
    };
    
    img.onerror = () => {
      console.error('Failed to load image:', src);
      setLoading(false);
      setError(true);
      // Set fallback image
      setImgSrc('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2VlZWVlZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM5OTk5OTkiPkltYWdlIEVycm9yPC90ZXh0Pjwvc3ZnPg==');
    };

    // Clean up
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return (
    <div className={`image-loader ${className || ''}`} style={style}>
      {loading && (
        <div className="image-loader__placeholder" style={{
          backgroundColor: '#f0f0f0',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#666',
          position: 'absolute',
          top: 0,
          left: 0
        }}>
          <span>Loading...</span>
        </div>
      )}
      
      <img 
        src={imgSrc} 
        alt={alt || 'Image'} 
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          opacity: loading ? 0 : 1,
          transition: 'opacity 0.3s ease'
        }}
      />
    </div>
  );
};

export default ImageLoader;
