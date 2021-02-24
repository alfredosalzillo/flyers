import React, { useState } from 'react';
import AppBar from './AppBar';
import NavDrawer from './NavDrawer';
import { Container } from '@material-ui/core';

const Page: React.FC = ({
  children,
}) => {
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
      <Container maxWidth="lg">
        <>{children}</>
      </Container>
    </>
  )
}

export default Page;
