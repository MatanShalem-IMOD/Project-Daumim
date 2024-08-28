import { Theme } from "@mui/material";
import { css } from "@emotion/css";

export const getClasses = (theme: Theme) => ({
  card: css({
    alignItems: "center",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "15px", // Rounded corners
    marginBottom: "10px",
    direction: "rtl",
    maxWidth: "345px", // Ensure maxWidth is specified with "px"
    cursor: "pointer",
    justifyContent: "center",
    ":hover": {
      backgroundColor: theme.palette.action.hover, // Use theme color for hover effect
    },
    flex: "0 0 25%",
    margin: theme.spacing(1),
    boxShadow: theme.shadows[3], // Add a shadow for better depth
  }),
  image: css({
    borderRadius: "15px 15px 0 0", // Rounded corners for image
    maxHeight: "140px",
    width: "100%", // Ensure the image takes full width
    objectFit: "cover", // Cover the area of the image
  }),
  details: css({
    paddingLeft: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  }),
  cardTitle: css({
    fontWeight: "bold",
    fontSize: "16px", // Adjust font size for better readability
    color: theme.palette.primary.dark,
    marginBottom: "8px", // Add some space below the title
  }),
  chipContainer: css({
    display: "flex",
    gap: "8px", // Space between chips
    marginBottom: "8px", // Space below the chips
  }),
  chip: css({
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
  }),
});
