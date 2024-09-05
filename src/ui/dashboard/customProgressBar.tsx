import React from 'react';
import { LinearProgress, LinearProgressProps, styled } from '@mui/material';

// Define the custom styled component
const CustomLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${LinearProgress}`]: {
    backgroundColor: theme.palette.grey[300],
  },
  [`& .${LinearProgress}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.primary.main,
  },
}));

// Create the CustomProgressBar component with TypeScript
interface CustomProgressBarProps extends LinearProgressProps {
  // Additional custom props if needed
}

const CustomProgressBar: React.FC<CustomProgressBarProps> = (props) => {
  return <CustomLinearProgress {...props} />;
};

export default CustomProgressBar;
