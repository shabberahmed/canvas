import React from 'react';

function ShareButton() {
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Shared from My React App',
          text: 'Check out this cool app!\n\n *Hello*'
        });
      } else {
        // Fallback for browsers that don't support Web Share API
        console.log('Web Share API not supported');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <button className='btn btn-primary' onClick={handleShare}>
      Share this
    </button>
  );
}

export default ShareButton;
