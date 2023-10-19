
import {Box, Typography, Menu, MenuItem, styled} from '@mui/material'
import { useState } from 'react'
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
const Component = styled(Menu)`
  margin-top: 5px,
  
`
const Logout = styled(Typography)`
  
  margin-left: 20px
`

const Profile = ({account, setAccount}) =>{
    const [open, setOpen] = useState(false)
    const handleClick = (event)=>{
        setOpen(event.currentTarget);
    }
    const handleClose = ()=>{
        setOpen(false)  
    }
    const logout = ()=>{
      setAccount('')
    }
    return (
      <>
        <Box onClick={handleClick}>
          <Typography
            style={{
              marginTop: 2,
              position: "absolute",
              right: "270px",
              top: "-12px",
              color: "white",
              letterSpacing: "1px",
              cursor:'pointer',
            }}
          >
            {account}
          </Typography>
        </Box>
        <Component i anchorEl={open} open={Boolean(open)} onClose={handleClose}>
          <MenuItem
            onClick={()=>{handleClose(); logout();}}
            
          >
            <PowerSettingsNewIcon color='primary' fontSize='small' cusror/>
            <Logout>Logout</Logout>
          </MenuItem>{" "}
        </Component>
      </>
    );
}

export default Profile;