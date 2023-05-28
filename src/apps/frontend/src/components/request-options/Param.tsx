import {Checkbox, Grid} from '@mui/material';
import Input from '@mui/material/Input';

const ariaLabel = {'aria-label': 'description'};

export default function Param() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={1.5} md={1.5}>
        <Checkbox inputProps={{'aria-label': 'Checkbox demo'}} />
      </Grid>
      <Grid item xs={5} md={5}>
        <Input
          placeholder="name"
          inputProps={ariaLabel}
          style={{borderBottom: 0, borderColor: 'transparent', border: 0}}
        />
      </Grid>
      <Grid item xs={5} md={5}>
        <Input placeholder="value" inputProps={ariaLabel} />
      </Grid>
    </Grid>
  );
}
