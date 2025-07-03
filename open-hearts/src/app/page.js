"use client";

import { useTheme, darken } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function Home() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
      }}
    >
      {/* Top Line */}
      <Box
        sx={{
          width: "989px",
          height: "4px",
          backgroundColor: theme.palette.primary.crimsonRed,
        }}
      />

      {/* Title and Tagline */}
      <Box
        sx={{
          width: "989px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 1,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            backgroundImage: `linear-gradient(to right, ${theme.palette.primary.crimsonRed}, #E75F09)`, // orange - NOT IN THEME??
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
            fontSize: "114px",
            textAlign: "right",
          }}
        >
          OPEN HEARTS
        </Typography>

        <Typography
          sx={{
            fontFamily: theme.typography.fontFamily,
            fontWeight: 600,
            fontSize: "36px",
            color: "black",
            textAlign: "right",
          }}
        >
          Tagline tagline tagline tagline
        </Typography>
      </Box>

      {/* Bottom Line */}
      <Box
        sx={{
          width: "989px",
          height: "4px",
          backgroundColor: theme.palette.primary.crimsonRed,
        }}
      />

      {/* Enter Exhibit Button */}
      <Box sx={{ width: "989px", display: "flex", justifyContent: "center" }}>
        <Button
          fullWidth
          sx={{
            backgroundColor: "#8E2851", // mauve pink - NOT IN THEME??
            color: "white",
            fontFamily: theme.typography.fontFamily,
            fontWeight: 700,
            fontSize: "30px",
            letterSpacing: "10.5px",
            paddingY: "33px",
            borderRadius: "77px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: darken("#8E2851", 0.3), // mauve pink - NOT IN THEME??
            },
          }}
        >
          ENTER THE EXHIBIT
        </Button>
      </Box>
    </Box>
  );
}
