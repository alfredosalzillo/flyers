import { IconButton, IconButtonProps, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import MuiAppBar from '@material-ui/core/AppBar';
import React from 'react';

export type AppBarProps = {
  onMenuClick?: IconButtonProps['onClick'],
}
const AppBar: React.FC<AppBarProps> = ({
 onMenuClick,
}) => (
  <MuiAppBar position="static">
    <Toolbar>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={onMenuClick}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6">
        ShopFully
      </Typography>
    </Toolbar>
  </MuiAppBar>
)

export default AppBar;
