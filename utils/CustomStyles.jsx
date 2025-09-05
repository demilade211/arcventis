import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'; 
import Switch from '@mui/material/Switch';

export const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(12px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: 'rgba(52, 168, 83, 1)',
          ...theme.applyStyles('dark', {
            backgroundColor: 'rgba(52, 168, 83, 1)',
          }),
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
      ...theme.applyStyles('dark', {
        backgroundColor: 'rgba(255,255,255,.35)',
      }),
    },
  }));

export const StyledMenu = styled((props) => (
    <Menu
        sx={{
            padding: "20px"
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        fontSize: "4px",
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        '& .MuiMenu-list': {
            padding: '10px 0',
            '& li': {
                marginBottom: "10px",
                fontFamily: "'Poppins', sans-serif",
            }
        },
        '& .MuiMenuItem-root': {
            '&:hover': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));

export const BlueTabs1 = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    borderBottom: '1px solid #E2E2E2',
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        height:"4px",
        

    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth:"60%",
        width: '100%',
        backgroundColor: '#1A73E8', 
    },
});

export const BlueTab1 = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: 'none',
        fontWeight: "300",
        fontSize: "14px",
        fontFamily: ' Poppins',
        color: '#666',
        '@media (max-width: 511px)': { 
            fontSize: '12px'
        },
        '&.Mui-selected': {
            color: '#222',
            fontWeight: "300",
        },
        '&.Mui-focusVisible': {
            backgroundColor: 'none',
        },
    }),
);

export const BlueTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        height:"6px",
        

    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth:"80%",
        width: '100%',
        backgroundColor: '#1A73E8',
        borderRadius:"5px 5px 0px 0px",
    },
});

export const BlueTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: 'none',
        fontWeight: "500",
        fontSize: "14px",
        fontFamily: ' Poppins',
        color: '#666',
        '@media (max-width: 511px)': { 
            fontSize: '12px'
        },
        '&.Mui-selected': {
            color: '#222',
            fontWeight: "600",
        },
        '&.Mui-focusVisible': {
            backgroundColor: 'none',
        },
    }),
);


export const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        width: '100%',
        backgroundColor: '#F24810',
    },
});

export const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: 'none',
        fontWeight: "700",
        fontSize: "16px",
        fontFamily: 'Epilogue',
        color: '#A0A0A0',
        '&.Mui-selected': {
            color: '#F24810',
        },
        '&.Mui-focusVisible': {
            backgroundColor: 'rgba(100, 95, 228, 0.32)',
        },
    }),
);

export const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 8,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: { 
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#34A853' : '#308fe8',
    },
}));

export const selectStyle = {
    control: (base) => ({
        ...base,
        height: "50px",
        borderRadius: "10px", 
        border: "none",
        background: "rgba(158, 158, 158, 0.20)",
        boxShadow: "none",
        '&:hover': {
            border: "1px solid black",
        },
        outline: "none",
        fontFamily: "Manrope",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "14px",
        color: "#FFF",
    }),
    indicatorSeparator: (styles) => ({ ...styles, display: "none" }),
    placeholder: (base) => ({
        ...base,
        color: "var(--grey-400, #6B6C74)",
        whiteSpace: "nowrap"
    }),
    input: (base) => ({
        ...base,
        color: "var(--grey-400, #6B6C74)",
    }),
    singleValue: (base) => ({
        ...base,
        color: "var(--grey-400, #6B6C74)",
    }),
};

export const selectStyle2 = {
    control: (base) => ({
        ...base,
        height: "47px",
        borderRadius: "10px",
        border: "1px solid #E0E0E0",
        background: "#FFF",
        boxShadow: "none",
        '&:hover': {
            border: "1px solid #1A73E8",
        },
        outline: "none",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "14px",
        color: "#FFF",
    }),
    indicatorSeparator: (styles) => ({ ...styles, display: "none" }),
    placeholder: (base) => ({
        ...base,
        color: "var(--grey-400, #6B6C74)",
        whiteSpace: "nowrap"
    }),
    input: (base) => ({
        ...base,
        color: "black",
    }),
    singleValue: (base) => ({
        ...base,
        color: "black",
    }),
};