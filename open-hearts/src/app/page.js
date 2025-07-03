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
        gap: 11,
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

      {/* Heart, Title, and Tagline */}
      <Box
        component="img"
        src="/assets/Heart.svg"
        alt="Heart"
        sx={{
          position: "absolute",
          top: "37%",
          left: "10%",
          transform: "translateY(-50%)",
          height: "264px",
          width: "296px",
          objectFit: "contain",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Box sx={{ zIndex: 1, textAlign: "right", width: "989px" }}>
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
