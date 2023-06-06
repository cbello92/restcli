import CircularProgress from '@mui/material/CircularProgress';

export default function Loading() {
  return (
    <div style={{display: 'grid', placeContent: 'center', height: '86vh'}}>
      <CircularProgress disableShrink />
    </div>
  );
}
