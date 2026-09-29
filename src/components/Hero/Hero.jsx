import { Box, Typography } from '@mui/material'
import Title from '../Title/Title'

function Hero() {
  return (
    <Box component="header" sx={{ p: { xs: 2, md: 3 }, bgcolor: 'action.hover', borderRadius: 2, textAlign: { xs: 'center', md: 'left' } }}>
      <Title title="Grounded 2 Field Guide" />
      <Typography color="text.secondary" sx={{ mt: 2, maxWidth: '70ch' }}>
        A backyard-styled codex for armor, creatures, mutations, resources, and
        weapons inspired by the layered resource tables on the Grounded wiki.
      </Typography>
    </Box>
  )
}

export default Hero
