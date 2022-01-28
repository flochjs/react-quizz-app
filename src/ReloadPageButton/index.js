import React from 'react';

const ReloadPageButton = ({ children }) => {
  const reloadPage = () => window.location.reload();

  return <button onClick={reloadPage}>{children}</button>;
};

export default ReloadPageButton;
