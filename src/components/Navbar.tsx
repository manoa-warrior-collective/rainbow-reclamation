/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent, @typescript-eslint/indent */

'use client';

import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {
  BoxArrowRight,
  Lock,
  PersonFill,
  PersonPlusFill,
  Trophy,
  Speedometer2,
  Grid3x3Gap,
  ShieldCheck,
} from 'react-bootstrap-icons';

// Test NavBar component
const NavBar: React.FC = () => {
  const { data: session } = useSession();
  const currentUser = session?.user?.email;
  const userWithRole = session?.user as { email: string; randomKey: string };
  const role = userWithRole?.randomKey;
  const pathName = usePathname();
  // eslint-disable-next-line implicit-arrow-linebreak
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="/">Rainbow Reclamation</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-start">{/* Empty - all links moved to dropdown */}</Nav>
          <Nav>
            {session ? (
              <NavDropdown id="login-dropdown" title={currentUser}>
                <NavDropdown.Item id="bounty-board-nav" href="/bounty-board" active={pathName === '/bounty-board'}>
                  <Trophy /> Bounty Board
                </NavDropdown.Item>
                <NavDropdown.Item id="dashboard-nav" href="/dashboard" active={pathName === '/dashboard'}>
                  <Speedometer2 /> My Dashboard
                </NavDropdown.Item>
                <NavDropdown.Item id="browse-items-nav" href="/browse-items" active={pathName === '/browse-items'}>
                  <Grid3x3Gap /> Browse Items
                </NavDropdown.Item>
                {role === 'ADMIN' && (
                  <NavDropdown.Item id="admin-nav" href="/admin" active={pathName === '/admin'}>
                    <ShieldCheck /> Admin
                  </NavDropdown.Item>
                )}
                <NavDropdown.Divider />
                <NavDropdown.Item
                  id="login-dropdown-change-password"
                  href="/auth/change-password"
                  active={pathName === '/auth/change-password'}
                >
                  <Lock /> Change Password
                </NavDropdown.Item>
                <NavDropdown.Item id="login-dropdown-sign-out" href="/api/auth/signout">
                  <BoxArrowRight /> Sign Out
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown id="login-dropdown" title="Login">
                <NavDropdown.Item id="bounty-board-nav" href="/bounty-board" active={pathName === '/bounty-board'}>
                  <Trophy /> Bounty Board
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item id="login-dropdown-sign-in" href="/auth/signin" active={pathName === '/auth/signin'}>
                  <PersonFill /> Sign in
                </NavDropdown.Item>
                <NavDropdown.Item id="login-dropdown-sign-up" href="/auth/signup" active={pathName === '/auth/signup'}>
                  <PersonPlusFill /> Sign up
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
