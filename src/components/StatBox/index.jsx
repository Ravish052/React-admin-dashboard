import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../../theme'
import ProgressCircle from '../progressCircle'

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <Box width="100%" m="0 30px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box display="flex" flexDirection="column">
                    {icon}
                    <Typography
                        variant='h4'
                        fontWeight="bold"
                        sx={{ color: colors.grey[100] }}
                    >
                        {title}
                    </Typography>
                </Box>
                <ProgressCircle progress={progress} />
            </Box>

            <Box display="flex" justifyContent="space-between" mt={1}>
                <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
                    {subtitle}
                </Typography>
                <Typography
                    variant='h5'
                    fontWeight="italic"
                    sx={{ color: colors.greenAccent[100] }}
                >
                    {increase}
                </Typography>
            </Box>
        </Box>
    )
}

export default StatBox
