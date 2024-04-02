import React from 'react';
import './Page.css';

function Error() {
  return (
    <div className="error-container">
      <div className="error-code">404</div>
      <div className="error-message">Page Not Found</div>
      <div className="error-description">
        We can't seem to find the page you're looking for.
      </div>
    </div>
  );
}

export default Error;
