import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton, Menu, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from "@mui/material";
import { FaUser } from 'react-icons/fa';
import { FaThList } from 'react-icons/fa';
import { AiOutlineBook } from 'react-icons/ai';

const Navbar = () => {
    const navigate = useNavigate();
    const [statusMenuAnchor, setStatusMenuAnchor] = useState(null);
    const [openLoginDialog, setOpenLoginDialog] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleGenresClick = () => {
        navigate("/genres"); 
    };

    const handleProfileClick = () => {
        setOpenLoginDialog(true);
    };

    const handleLogin = () => {
            if (username === 'tanya' && password === '123') {
            navigate("/profile");
        } else {
            alert("Invalid credentials. Please try again.");
        }
        
        setUsername('');
        setPassword('');
        
        setOpenLoginDialog(false);
    };

    
    const handleMyLibraryClick = (event) => {
        setStatusMenuAnchor(event.currentTarget);
    };

    const handleStatusSelect = (status) => {
        navigate(`/${status}`);
        handleStatusMenuClose(); 
    };

   
    const handleStatusMenuClose = () => {
        setStatusMenuAnchor(null);
    };

    return (
        <>
            <nav className='px-5 z-50 py-[.8rem] bg-red-950 lg:px-20 flex justify-between'>
                <div className="lg:mr-10 cursor-pointer flex items-center space-x-4" onClick={()=>navigate("/")}>
                    <ul className="logo font-semibold text-gray-100 text-1xl">Ink&Paper</ul>
                </div>

                <div className="flex items-center space-x-2">

                    <IconButton onClick={handleGenresClick}> 
                        <FaThList size={20} style={{ color: 'white' }} /> 
                    </IconButton>

                    <IconButton onClick={handleMyLibraryClick}>
                        <AiOutlineBook size={20} style={{ color: 'white' }} /> 
                    </IconButton>

                    <IconButton onClick={handleProfileClick}> 
                        <FaUser size={20} style={{ color: 'white' }} /> 
                    </IconButton>

                    <Menu
                        anchorEl={statusMenuAnchor}
                        open={Boolean(statusMenuAnchor)}
                        onClose={handleStatusMenuClose}
                    >
                        <MenuItem onClick={() =>handleStatusSelect('currently_reading')}>
                            Currently Reading
                        </MenuItem>
                        <MenuItem onClick={() => handleStatusSelect('already_read')}>
                            Already Read
                        </MenuItem>
                        <MenuItem onClick={() => handleStatusSelect('want_to_read')}>
                            Want to Read
                        </MenuItem>
                    </Menu>
                </div>
            </nav>

            
            <Dialog open={openLoginDialog} onClose={() => setOpenLoginDialog(false)}>
                <DialogTitle>Admin Login</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Username"
                        type="text"
                        fullWidth
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        label="Password"
                        type="password"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleLogin}>Login</Button>
                    <Button onClick={() => setOpenLoginDialog(false)}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default Navbar;
