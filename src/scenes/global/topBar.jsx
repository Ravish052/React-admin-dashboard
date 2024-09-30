import {Box,IconButton,InputBase,useTheme} from '@mui/material'
import {useContext} from 'react'
import { ColorModeContext,tokens } from '../../theme'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


const TopBar =()=>{
    const theme  = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext)
    return(
        <Box display = "flex" justifyContent = "space-between" p = {2}>
            {/* SEARCH_BAR */}
            <Box display = "flex" 
                backgroundColor = {colors.primary[400]}
                borderRadius = "3px"
            >
                
                <InputBase sx = {{ml:2,flex:1}} placeholder='Search'>
                </InputBase>
                <IconButton type ="button" sx={{p:1 }}>
                        <SearchOutlinedIcon />
                    </IconButton>   
            </Box>
            <Box display = "flex">
                    <IconButton onClick = {colorMode.toggleColorMode}>
                        {theme.palette.mode !== "dark"? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon /> }
                    </IconButton>
                    
                    <IconButton>
                        <NotificationsActiveOutlinedIcon />
                    </IconButton>
                        
                    <IconButton>
                        <SettingsOutlinedIcon />
                    </IconButton>

                    <IconButton>
                        <PersonOutlineOutlinedIcon />
                    </IconButton>

                    
                </Box>
        </Box>
    )
}

export default TopBar 