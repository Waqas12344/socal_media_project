import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material';

const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: "center",
    justifyContent: 'center'
})
const UserBox = styled(Box)({
    display: 'flex',
    alignItems: "center",
    gap: "10px",
    marginBottom: '15px'
})
const Add = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <Tooltip title="Delete" sx={{ position: 'fixed', bottom: 20, left: 20 }} onClick={e => setOpen(true)}>
                <Fab color='primary' aria-label='add'>
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width='50%' height=' 35%' bgcolor={'background.default'} color={'text.primary'} borderRadius={5} p={3}>
                    <Typography variant='h6' color='gray' textAlign="center">
                        Create Post
                    </Typography>
                    <UserBox>
                        <Avatar src='https://www.w3schools.com/howto/img_avatar.png' sx={{ width: 30, height: 30 }} />
                        <Typography fontWeight={500} variant='span'>Ali Usman</Typography>

                    </UserBox>
                    <TextField
                        sx={{ width: '100%' }}
                        id="standard-multiline-static"
                        label="Multiline"
                        multiline
                        rows={4}
                        placeholder="What's on your mind?..."
                        variant="standard"
                    />
                    <Stack direction="row" gap={1} mt={2} ml={1}>
                        <EmojiEmotions color='primary' />
                        <Image color='secondary' />
                        <VideoCameraBack color='success' />
                        <PersonAdd color='error' />
                    </Stack>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{ mt: '10px' }}>
                        <Button sx={{ width: '120px' }} >Post</Button>
                        <Button> <DateRange /> </Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </div>
    )
}

export default Add
