import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  fallbackComponent?: React.ReactNode;
}

export default function ImageWithFallback({ 
  src, 
  alt, 
  className,
  fallbackSrc = 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  fallbackComponent,
  ...props 
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (error) {
    if (fallbackComponent) {
      return <>{fallbackComponent}</>;
    }
    return (
      <img
        src={fallbackSrc}
        alt={alt || "Fallback image"}
        className={className}
        {...props}
      />
    );
  }

  return (
    <div className={`relative ${className || ''}`} style={{ overflow: 'hidden' }}>
      {/* Optional skeleton loader or background color while loading */}
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
           <ImageIcon className="h-8 w-8 text-gray-400 opacity-50" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className || ''} ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 w-full h-full object-cover`}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        {...props}
      />
    </div>
  );
}
