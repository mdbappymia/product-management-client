import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
  Switch,
  Route,
  Link,
  useRouteMatch,

} from "react-router-dom";

import useFirebase from '../../hooks/useFirebase';
import Payment from './Payment/Payment';
import MakeAdmin from './MakeAdmin/MakeAdmin';

import AddProducts from '../../pages/AddProducts/AddProducts';
import ShowProduct from '../ShowProduct/ShowProduct';



const drawerWidth = 240;

function Dashboard(props) {

  const { window } = props;
  const { user, logOut } = useFirebase()
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className='text-center'>
      <Toolbar />
      <Divider />
      <Link className='bg-teal-400 px-10 py-2 rounded text-white my-10' to="/">Go to Home</Link><br /> <br />
      {
        user && <div className='text-center'><Box>
          <Link className='bg-teal-400 px-10 py-2 rounded text-white' to={`${url}/showproduct`}>View products</Link><br /> <br />
          <Link className='bg-teal-400 px-10 py-2 rounded text-white' to={`${url}/addProducts`}>Add a Product</Link><br /> <br />
          <Link className='bg-teal-400 px-10 py-2 rounded text-white' to={`${url}/makeAdmin`}>Make an Admin</Link><br /> <br />
          <Link className='bg-teal-400 px-10 py-2 rounded text-white my-10' to={`${url}/payment`}>Make Payment</Link><br /> <br />
          <button className='bg-red-500 px-10 py-2 rounded text-white my-10' variant="text" onClick={logOut} color="inherit">LogOut</button>

        </Box></div>
      }

    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Product Inventory Management System
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >

        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />

        <Switch>



          <Route path={`${path}/payment`}>
            <Payment></Payment>
          </Route>



          <Route path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </Route>

          <Route path={`${path}/addProducts`}>
            <AddProducts></AddProducts>
          </Route>




          <Route path={`${path}/showproduct`}>
            <ShowProduct></ShowProduct>
          </Route>


        </Switch>
        <Typography paragraph>

        </Typography>
        <Typography paragraph>

        </Typography>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {

  window: PropTypes.func,
};

export default Dashboard;
