import { Box, Typography, Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const ContactUs = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:noy@gmail.com";
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "#f5f5f5",
        padding: 2,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <FavoriteIcon
          sx={{
            color: "red",
            marginLeft: 1,
            marginRight: 1,
            fontSize: 50,
            transform: "translateY(-9px)",
          }}
        />
        <Typography variant="h3" gutterBottom>
          "משפחת "לתת ברגע
        </Typography>
      </Box>

      <Typography variant="h5" gutterBottom>
        צריכים עזרה? מעוניינים ליצור שיתוף פעולה? אנחנו כאן תמיד בשבילך
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleEmailClick}
      >
        שלח לנו אימייל
      </Button>
    </Box>
  );
};