import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
    return (
        <Box flex={3} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
            <Box position='fixed' width={230}>
                <Typography varient="h6" fontWeight={100} >Online Friends</Typography>
                <AvatarGroup max={4}>
                    <Avatar alt="Remy Sharp" src="https://www.w3schools.com/howto/img_avatar.png" />
                    <Avatar alt="Travis Howard" src="https://www.w3schools.com/howto/img_avatar.png" />
                    <Avatar alt="Cindy Baker" src="https://www.w3schools.com/howto/img_avatar.png" />
                    <Avatar alt="Agnes Walker" src="https://www.w3schools.com/howto/img_avatar.png" />
                    <Avatar alt="Trevor Henderson" src="https://www.w3schools.com/howto/img_avatar.png" />
                </AvatarGroup>
                <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
                    Latest Photes
                </Typography>
                <ImageList cols={3} rowHeight={80} gap={5} >
                    <ImageListItem>
                        <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" alt="" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d" alt="" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" alt="" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src="https://images.unsplash.com/photo-1522770179533-24471fcdba45" alt="" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" alt="" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c" alt="" />
                    </ImageListItem>
                </ImageList>
                <Typography variant='h6' fontWeight={100} mt={2} >
                    Latest Converstion
                </Typography>

                <List sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Trevor Henderson" src="https://www.w3schools.com/howto/img_avatar.png" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Trevor Henderson" src="https://www.w3schools.com/howto/img_avatar.png" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        to Scott, Alex, Jennifer
                                    </Typography>
                                    {" — Wish I could come, but I'm out of town this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Trevor Henderson" src="https://www.w3schools.com/howto/img_avatar.png" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Sandra Adams
                                    </Typography>
                                    {' — Do you have Paris recommendations? Have you ever…'}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>
            </Box>

        </Box>
    )
}

export default Rightbar
