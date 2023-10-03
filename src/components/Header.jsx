import {
  AppBar,
  Toolbar,
  Typography,
  ButtonGroup,
  Button,
  Link,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import { Link as RouterLink } from "react-router-dom";

function Header() {
  return (
    <AppBar position="fixed">
      <Typography variant="h5" align="center" py={1}>
        Jacqabulary
      </Typography>
      <nav>
        <Toolbar sx={{ p: 1 }}>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            fullWidth
            size="small"
          >
            <Button>
              <Link
                component={RouterLink}
                to="/"
                href="#"
                color="inherit"
                underline="none"
                sx={{ display: "flex" }}
              >
                <FormatListBulletedIcon fontSize="small" />
                &nbsp;My List
              </Link>
            </Button>

            <Button>
              <Link
                component={RouterLink}
                to="/discover"
                href="#"
                color="inherit"
                underline="none"
                sx={{ display: "flex" }}
              >
                <SearchIcon fontSize="small" />
                &nbsp;Discover
              </Link>
            </Button>

            <Button>
              <LocalLibraryIcon fontSize="small" />
              &nbsp;Practice
            </Button>
          </ButtonGroup>
        </Toolbar>
      </nav>
    </AppBar>
  );
}

export default Header;
