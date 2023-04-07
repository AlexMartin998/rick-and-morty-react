import { Box, Typography } from '@mui/material';
export interface NoCharacterFoundProps {}

const NoCharacterFound: React.FC<NoCharacterFoundProps> = () => {
  return (
    <Box
      display="flex"
      sx={{ flexDirection: { xs: 'column', sm: 'row' }, margin: '0 auto' }}
      justifyContent="center"
      alignItems="center"
      height="calc(100vh - 300px)"
    >
      <Typography variant="h1" component="h1" fontSize={81} fontWeight={200}>
        404 |
      </Typography>

      <Typography ml={2}>Character not found.</Typography>
    </Box>
  );
};

export default NoCharacterFound;
