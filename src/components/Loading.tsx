import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Loading() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="caption">Loading...</Typography>
    </div>
  );
}
