import React from 'react'
import {AppBar, Box, Container, IconButton, Toolbar, Typography, Menu, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {BaseLink} from "./BaseLink";
import {routerService} from "../services/routerService";
import {SearchProducts} from "./SearchProducts";

const pages = [
  { label: 'Главная', route: routerService.home()},
  { label: 'Каталог', route: routerService.catalog()},
  { label: 'Компании', route: routerService.companies()},
];

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={BaseLink}
            to={routerService.home()}
            sx={{
              mr: 2,
              fontWeight: 500,
            }}
          >
            E-Stroi.kz
          </Typography>

          <Box sx={{ ml: 'auto', display: { xs: 'flex', sm: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={!!anchorElNav}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page.route} onClick={handleCloseNavMenu}>
                  <BaseLink to={page.route}>{page.label}</BaseLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
            {pages.map((page) => (
              <BaseLink
                key={page.route}
                to={page.route}
              >
                <Box sx={{ mx: 2, color: 'white' }}>
                  {page.label}
                </Box>
              </BaseLink>
            ))}
          </Box>
          <Box width="300px">
            <SearchProducts />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
