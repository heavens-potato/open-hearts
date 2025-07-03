"use client";

import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export default function Home() {
  const theme = useTheme();

  return (
    <div>
      <Typography
        variant="h1"
        gutterBottom
        sx={{
          backgroundImage: `linear-gradient(to right, ${theme.palette.primary.crimsonRed}, #E75F09)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          display: "inline-block",
        }}
      >
        OPEN HEARTS
      </Typography>
    </div>
  );
}
