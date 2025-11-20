/* eslint-disable react/jsx-indent, @typescript-eslint/indent */

'use client';

// import { useSession } from 'next-auth/react';
// import { usePathname } from 'next/navigation';
import { Container, Nav, Navbar, /* , NavDropdown */
NavDropdown } from 'react-bootstrap';
import { PersonFill, PersonPlusFill } from 'react-bootstrap-icons';
// import { BoxArrowRight, Lock, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';

const NavBar: React.FC = () =>
  // const { data: session } = useSession();
  // const currentUser = session?.user?.email;
  // const userWithRole = session?.user as { email: string; randomKey: string };
  // const role = userWithRole?.randomKey;
  // const pathName = usePathname();
   // eslint-disable-next-line implicit-arrow-linebreak
   (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Rainbow Reclamation</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-start">
            <Nav.Link id="home" href="" key="">
              Homepage
            </Nav.Link>
            <Nav.Link id="create-listing" href="" key="">
              Create Listing
            </Nav.Link>
            <Nav.Link id="retrieval" href="" key="">
              Retrieval
            </Nav.Link>
            <Nav.Link id="about" href="" key="">
              About
            </Nav.Link>
            {/* {currentUser
              ? [
                  <Nav.Link id="add-stuff-nav" href="/add" key="add" active={pathName === '/add'}>
                    Add Stuff
                  </Nav.Link>,
                  <Nav.Link id="list-stuff-nav" href="/list" key="list" active={pathName === '/list'}>
                    List Stuff
                  </Nav.Link>,
                ]
              : ''}
            {currentUser && role === 'ADMIN' ? (
              <Nav.Link id="admin-home" href="/admin" key="admin" active={pathName === '/admin'}>
                Admin
              </Nav.Link>
            ) : (
              ''
            )} */}
          </Nav>
          <Nav>
            <NavDropdown id="login-dropdown" title="Login">
              <NavDropdown.Item id="login-dropdown-sign-in" href="">
                <PersonFill />
                Sign In
              </NavDropdown.Item>
              <NavDropdown.Item id="login-dropdown-sign-up" href="">
                <PersonPlusFill />
                Sign Up
              </NavDropdown.Item>
            </NavDropdown>
            {/* {session ? (
              <NavDropdown id="login-dropdown" title={currentUser}>
                <NavDropdown.Item id="login-dropdown-sign-out" href="/api/auth/signout">
                  <BoxArrowRight />
                  Sign Out
                </NavDropdown.Item>
                <NavDropdown.Item id="login-dropdown-change-password" href="/auth/change-password">
                  <Lock />
                  Change Password
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown id="login-dropdown" title="Login">
                <NavDropdown.Item id="login-dropdown-sign-in" href="/auth/signin">
                  <PersonFill />
                  Sign in
                </NavDropdown.Item>
                <NavDropdown.Item id="login-dropdown-sign-up" href="/auth/signup">
                  <PersonPlusFill />
                  Sign up
                </NavDropdown.Item>
              </NavDropdown>
            )} */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
export default NavBar;
