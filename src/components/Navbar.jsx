import { Code, NotificationAdd } from '@mui/icons-material';
import MailIcon from '@mui/icons-material/Mail';
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
});
const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    width: '35%'
}));
const Icons = styled(Box)(({ theme }) => ({
    // backgroundColor: "white"
    display: 'none',
    gap: '18px',
    alignContent: 'center',
    [theme.breakpoints.up('sm')]: {
        display: 'flex'
    }
}));
const UserBox = styled(Box)(({ theme }) => ({

    display: 'flex',
    gap: '10px',
    alignContent: 'center',
    [theme.breakpoints.up('sm')]: {
        display: 'none'
    }
}));


const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <AppBar position='sticky'>
            <StyledToolbar >
                <Typography variant='h5' sx={{ display: { xs: 'none', sm: "block" } }}>
                    developer
                </Typography>
                <Code sx={{ display: { xs: 'block', sm: "none" }, fontSize: '39px' }} />
                <Search > <InputBase placeholder='search...' /> </Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <NotificationAdd />
                    </Badge>
                    <Avatar sx={{ width: '25px', height: '25px', }} src='https://www.w3schools.com/howto/img_avatar.png' onClick={e => setOpen(true)} />
                </Icons>
                <UserBox>
                    <Avatar onClick={e => setOpen(true)} sx={{ width: '25px', height: '25px', }} src='https://www.w3schools.com/howto/img_avatar.png' />
                    <Typography variant='span' onClick={e => setOpen(true)}>developer</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e) => setOpen(false)}


                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>

        </AppBar>
    );
};

export default Navbar;
