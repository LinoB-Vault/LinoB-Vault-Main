
import { Card, CardHeader, Box, CardContent, Typography, Grid } from '@mui/material';

import { Avatar } from '@mui/material';

import USDC from '../../../usdc.svg';


// ----------------------------------------------------------------------



export default function LinoVaultStatistics() {
  
  return (
    <Card>
      <CardHeader title="Statistics" subheader="About the Lino Vault" />
      <CardHeader avatar={<Avatar alt="USDC" src={USDC} />} title={<Typography sx={{fontWeight: 600, lineHeight: 1.555}}>Governance Token</Typography>}/>
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={8}>
            <Typography variant='subtitle1'>
              Marketcap
            </Typography>
          </Grid>
          <Grid item xs={4} display="flex" justifyContent="flex-end">
            <Typography variant='subtitle1'>
              $231,234.23
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant='subtitle1'>
              TVL
            </Typography>
          </Grid>
          <Grid item xs={4} display="flex" justifyContent="flex-end">
            <Typography variant='subtitle1'>
              $1,122,343.23
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant='subtitle1'>
              Totel Revenue
            </Typography>
          </Grid>
          <Grid item xs={4} display="flex" justifyContent="flex-end">
            <Typography variant='subtitle1'>
              $93,452.34
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant='subtitle1'>
              Ciculating Governance Token Supply
            </Typography>
          </Grid>
          <Grid item xs={4} display="flex" justifyContent="flex-end">
            <Typography variant='subtitle1'>
              24,242
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}