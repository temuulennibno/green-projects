import { NavigateNext } from "@mui/icons-material";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const styles = {
  breadcrumbs: {
    bgcolor: "white",
    p: 2,
    borderRadius: 2,
    boxShadow: "0 0 5px rgba(0,0,0,.1)",
  },
  link: { display: "flex", alignItems: "center" },
};

export const BreadCrumbs = ({ items }) => {
  if (!items) {
    return null;
  }
  return (
    <Breadcrumbs
      sx={styles.breadcrumbs}
      separator={<NavigateNext fontSize="small" />}
    >
      {items.map((item, index) => {
        if (index !== items.length - 1) {
          return (
            <Link
              underline="hover"
              key={index}
              color="inherit"
              component={RouterLink}
              to={item.link}
              sx={styles.link}
            >
              {item.icon && item.icon}
              {item.label}
            </Link>
          );
        }
        return (
          <Typography key={index} color="text.primary">
            {item.label}
          </Typography>
        );
      })}
    </Breadcrumbs>
  );
};
