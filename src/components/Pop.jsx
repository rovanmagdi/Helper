import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import WarningIcon from '@mui/icons-material/Warning';
import { StyledButton } from '../styled/Button';
export function FormDialog({ title }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Typography variant="outlined" onClick={handleClickOpen}>
                {title}
            </Typography>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Order Now</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export function FormDialogError({ title }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const nagivate = useNavigate()
    const handleClose = () => {
        setOpen(false);
        nagivate('/log_in')
    };

    return (
        <div >
            <Typography variant="outlined" onClick={handleClickOpen}>
                {title}
            </Typography>
            <Dialog open={open} onClose={handleClose} sx={{ width: "100%",textAlign:"center" }}>

                <DialogContent>
                    <DialogContentText>
                        <WarningIcon sx={{ m: 8, fontSize: "7rem", color: "#FE445B" }} />
                        <Typography sx={{ fontSize: "1.2rem",fontWeight:"bold"}}>
                            You must login first!
                        </Typography>
                    </DialogContentText>

                </DialogContent>
                <DialogActions>
                    <StyledButton onClick={handleClose}>Login</StyledButton>
                    <Button onClick={() => setOpen(false)} sx={{ color: "red", border: "1px solid red", m: 3 }}>Cancel</Button>


                </DialogActions>
            </Dialog>
        </div>
    );
}