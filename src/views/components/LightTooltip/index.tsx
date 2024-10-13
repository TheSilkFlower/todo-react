import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

export const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: 'rgba(219, 239, 233, 0)',
      color: 'rgba(255, 255, 255, 0.87)',
    //   boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));