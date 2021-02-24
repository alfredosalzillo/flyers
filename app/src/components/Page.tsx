import React, { useState } from 'react';
import AppBar from './AppBar';
import NavDrawer from './NavDrawer';
import { Container, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    paddingTop: theme.spacing(2),
  },
}))

const Page: React.FC = ({
  children,
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);
  return (
    <>
      <AppBar
        onMenuClick={openMenu}
      />
      <NavDrawer
        open={open}
        onOpen={openMenu}
        onClose={closeMenu}
      />
      <Container maxWidth="lg" className={classes.container}>
        <>{children}</>
      </Container>
    </>
  )
}

export default Page;
