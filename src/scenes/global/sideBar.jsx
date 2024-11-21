import {useState} from 'react'
import {ProSidebar,Menu,MenuItem } from 'react-pro-sidebar'
import {Box,IconButton,Typography,useTheme} from '@mui/material'
import "react-pro-sidebar/dist/css/styles.css";
import {Link} from 'react-router-dom'
import {tokens} from '../../theme'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

const Item = ({title,to,icon,selected,setSelected})=>{
    const theme= useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <MenuItem  active = {selected === title}
            style = {{color :colors.grey[100]}}
            onClick={()=>setSelected(title)}
            icon = {icon}
        >
            <Typography>{title}</Typography>
            <Link to = {to} />
        </MenuItem>
    );
};

const SideBar =()=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [collapsed,setCollapsed] = useState(false)
    const [selected,setSelected] = useState("Dashboard")
    return(
        <Box
            sx = {{
                "& .pro-side-bar-inner":{
                    backgroundColor:`${colors.primary[400]} !important`
                },
                "& .pro-icon-wrapper":{
                    backgroundColor:`transparent !important`
                },
                "& .pro-inner-item":{
                    padding:`5px,35px,5px,30px !important`
                }, 
                "& .pro-inner-item:hover":{
                    color:"#868dfb !important"
                },
                 "& .pro-inner-item.active":{
                    color:"#6870fa !important"
                },
            }}
        >
            <ProSidebar collapsed = {collapsed}>
                <Menu iconShape='square'>
                    <MenuItem onClick={()=>setCollapsed(!collapsed)}
                        icon = {collapsed? <MenuOutlinedIcon />:undefined}
                        style = {{margin:"10px 0 20px 0",color:colors.grey[100]}}
                    >
                    
                    {!collapsed && (
                        <Box display= "flex"
                         justifyContent = "space-between"  alignItems="center" ml={"15px"}>
                            <Typography variant = "h3" color= {colors.grey[100]}>Admin</Typography>
                            <IconButton oonClick={()=>setCollapsed(!collapsed)}>
                                <MenuOutlinedIcon />
                            </IconButton>
                        </Box>
                    )}
                    {/* USER_ ICONS */}
                    {!collapsed && (
                        <Box mb= "25px">
                            <Box display = "flex" justifyContent="center" alignItems="center">
                                <img
                                    alt = "profile-user"
                                    width = "100px"
                                    height = "100px"
                                    src = {`../../assets/user.png`}
                                    style = {{cursor:"pointer",borderRadius:"50%"}}
                                />
                            </Box>
                            <Box textAlign={"center"}>
                            <Typography variant = "h2" color = {colors.grey[100]} fontWeight = "bold" sx = {{m: "10px 0 0 0 "}}>USER</Typography>
                            <Typography variant = "h5" color = {colors.greenAccent[500]}>USER</Typography>
                            </Box>
                        </Box>
                    )}
                    </MenuItem>
                    {/* Menu Items */}
                    <Box paddingLeft={collapsed?undefined:"10%"}>
                    <Item 
                        title={"Dashboard"}
                        to = {"/"}
                        icon = { <HomeOutlinedIcon />}
                        selected = {selected}
                        setSelected={setSelected}
                    /> 
                    <Typography variant = "h6" color = {colors.grey[300]} sx ={{m:"15px 0 5px 20 px"}}>
                        Data
                    </Typography>
                    <Item 
                        title={"Team"}
                        to = {"/team"}
                        icon = {<PeopleOutlinedIcon />}
                        selected = {selected}
                        setSelected={setSelected}
                    />

                    <Item 
                        title={"Contact"}
                        to = {"/contact"}
                        icon = {<ContactsOutlinedIcon />}
                        selected = {selected}
                        setSelected={setSelected}
                    />   
                    <Typography variant = "h6" color = {colors.grey[300]} sx ={{m:"15px 0 5px 20 px"}}>
                        Pages
                    </Typography>
                    <Item 
                        title={"Incvoices"}
                        to = {"/invoices"}
                        icon = {<ReceiptOutlinedIcon />}
                        selected = {selected}
                        setSelected={setSelected}
                    />

                    <Item 
                        title={"Profile  Form"}
                        to = {"/form"}
                        icon = {<PersonOutlinedIcon />}
                        selected = {selected}
                        setSelected={setSelected}
                    />

                    <Item 
                        title={"Calendar"}
                        to = {"/calendar"}
                        icon = {<CalendarTodayOutlinedIcon />}
                        selected = {selected}
                        setSelected={setSelected}
                    />

                    <Item 
                        title={"FAQ"}
                        to = {"/faq"}
                        icon = {<HelpOutlinedIcon />}
                        selected = {selected}
                        setSelected={setSelected}
                    />
                    <Typography variant = "h6" color = {colors.grey[300]} sx ={{m:"15px 0 5px 20 px"}}>
                        Charts
                    </Typography>
                    <Item       
                        title={"Bar chart"}
                        to = {"/barChart"}
                        icon = {<BarChartOutlinedIcon />}
                        selected = {selected}
                        setSelected={setSelected}
                    />

                    <Item 
                        title={"Pie chart"}
                        to = {"/pieChart"}
                        icon = {<PieChartOutlineOutlinedIcon />}
                        selected = {selected}
                        setSelected={setSelected}
                    />

                    <Item 
                        title={"Line chart"}
                        to = {"/lineChart"}
                        icon = {<TimelineOutlinedIcon />}
                        selected = {selected}
                        setSelected={setSelected}
                    />

                    <Item 
                        title={"Geography"}
                        to = {"/geography"}
                        icon = {<MapOutlinedIcon />}
                        selected = {selected}
                        setSelected={setSelected}
                    />

                    </Box>

                </Menu>
                
            </ProSidebar>

        </Box>
    )
}

export default SideBar 