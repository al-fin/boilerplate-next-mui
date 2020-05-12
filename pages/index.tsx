import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default function Index() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h1" data-testid="title">
        <Link href="https://github.com/al-fin/boilerplate-next-mui" target="_blank" rel="noopener">
          Boilerplate <b>Next MUI</b>
        </Link>
      </Typography>
    </div>
  );
}
