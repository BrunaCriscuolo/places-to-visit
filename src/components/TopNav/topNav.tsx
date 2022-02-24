import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { Header } from './styles';
import { Images } from 'variables';

export const TopNav = () => {
  const { Logo } = Images;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={12}>
          <Header>
            <img src={Logo} alt='Logo' />
          </Header>
        </Grid>
      </Grid>
    </Box>
  );
};
