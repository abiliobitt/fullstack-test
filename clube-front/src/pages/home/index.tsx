import { useEffect, useState } from "react";
import {
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar
} from '@mui/material/';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

import Header from '../../components/ui/header';
import Modal from '../../components/ui/modal';
import CustomerList from '../../components/common/customerList';
import Logo from '../../assets/img/logo.jpg'
import CreateUserForm from "../../components/common/createCustomerForm";
import { CustomerType } from "../../types/CustomerType";
import { getCustomers } from "../../services/getCustomers";

const drawerWidth = 240;

interface Props {
}

const Home = (props: Props) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [customers, setCustomers] = useState<CustomerType[]|null>();
  const Toggle = () => setModal(!modal);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  useEffect(() => {
    getCustomers()
      .then(response => {
        console.log(response)
        setCustomers(response);
      })
  }, []);
  const drawer = (
    <div>
      <img src={Logo} alt="Logotipo" />
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={Toggle}>
            <ListItemIcon>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText primary={"Cadastrar Usuário"} />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header handleDrawerToggle={handleDrawerToggle} />
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
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
          {customers && <CustomerList customers={customers} />}
        </Box>
      </Box>
      <Modal show={modal} close={Toggle} title="Dynamic Title">
        <CreateUserForm />
      </Modal>
    </>
  );
}

export default Home