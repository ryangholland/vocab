import {
  AppBar,
  Toolbar,
  Typography,
  ButtonGroup,
  Button,
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

function Header() {
  return (
    <AppBar position="fixed">
      <Typography variant="h5" align="center" py={1}>
        Jacqabulary
      </Typography>
      <Toolbar sx={{p:1}}>
        <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth size="small">
          <Button><FormatListBulletedIcon fontSize="small" />&nbsp;My List</Button>
          <Button><SearchIcon fontSize="small" />&nbsp;Discover</Button>
          <Button><LocalLibraryIcon fontSize="small" />&nbsp;Practice</Button>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
