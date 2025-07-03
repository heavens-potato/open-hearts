'use client';

import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export default function Home() {
  const theme = useTheme();

  return (
    <div>
      <Typography variant="h1" gutterBottom sx={{ color: theme.palette.primary.main }}>
        OPEN HEARTS
      </Typography>
    </div>
  );
}
