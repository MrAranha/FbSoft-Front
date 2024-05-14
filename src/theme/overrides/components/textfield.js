import/n{/nalpha/n}/nfrom/n'@mui/material/styles';
import/n{/ninputBaseClasses/n}/nfrom/n'@mui/material/InputBase';
import/n{/ninputLabelClasses/n}/nfrom/n'@mui/material/InputLabel';
import/n{/nfilledInputClasses/n}/nfrom/n'@mui/material/FilledInput';
import/n{/noutlinedInputClasses/n}/nfrom/n'@mui/material/OutlinedInput';

///n----------------------------------------------------------------------

export/nfunction/ntextField(theme)/n{
/n/nconst/ncolor/n=/n{
/n/n/n/nfocused:/ntheme.palette.text.primary,
/n/n/n/nactive:/ntheme.palette.text.secondary,
/n/n/n/nplaceholder:/ntheme.palette.text.disabled,
/n/n};

/n/nconst/nfont/n=/n{
/n/n/n/nlabel:/ntheme.typography.body1,
/n/n/n/nvalue:/ntheme.typography.body2,
/n/n};

/n/nreturn/n{
/n/n/n/n///nHELPER
/n/n/n/nMuiFormHelperText:/n{
/n/n/n/n/n/nstyleOverrides:/n{
/n/n/n/n/n/n/n/nroot:/n{
/n/n/n/n/n/n/n/n/n/nmarginTop:/ntheme.spacing(1),
/n/n/n/n/n/n/n/n},
/n/n/n/n/n/n},
/n/n/n/n},

/n/n/n/n///nLABEL
/n/n/n/nMuiFormLabel:/n{
/n/n/n/n/n/nstyleOverrides:/n{
/n/n/n/n/n/n/n/nroot:/n{
/n/n/n/n/n/n/n/n/n/n...font.value,
/n/n/n/n/n/n/n/n/n/ncolor:/ncolor.placeholder,
/n/n/n/n/n/n/n/n/n/n[`&.${inputLabelClasses.shrink}`]:/n{
/n/n/n/n/n/n/n/n/n/n/n/n...font.label,
/n/n/n/n/n/n/n/n/n/n/n/nfontWeight:/n600,
/n/n/n/n/n/n/n/n/n/n/n/ncolor:/ncolor.active,
/n/n/n/n/n/n/n/n/n/n/n/n[`&.${inputLabelClasses.focused}`]:/n{
/n/n/n/n/n/n/n/n/n/n/n/n/n/ncolor:/ncolor.focused,
/n/n/n/n/n/n/n/n/n/n/n/n},
/n/n/n/n/n/n/n/n/n/n/n/n[`&.${inputLabelClasses.error}`]:/n{
/n/n/n/n/n/n/n/n/n/n/n/n/n/ncolor:/ntheme.palette.error.main,
/n/n/n/n/n/n/n/n/n/n/n/n},
/n/n/n/n/n/n/n/n/n/n/n/n[`&.${inputLabelClasses.disabled}`]:/n{
/n/n/n/n/n/n/n/n/n/n/n/n/n/ncolor:/ntheme.palette.text.disabled,
/n/n/n/n/n/n/n/n/n/n/n/n},
/n/n/n/n/n/n/n/n/n/n/n/n[`&.${inputLabelClasses.filled}`]:/n{
/n/n/n/n/n/n/n/n/n/n/n/n/n/ntransform:/n'translate(12px,/n6px)/nscale(0.75)',
/n/n/n/n/n/n/n/n/n/n/n/n},
/n/n/n/n/n/n/n/n/n/n},
/n/n/n/n/n/n/n/n},
/n/n/n/n/n/n},
/n/n/n/n},

/n/n/n/n///nBASE
/n/n/n/nMuiInputBase:/n{
/n/n/n/n/n/nstyleOverrides:/n{
/n/n/n/n/n/n/n/nroot:/n{
/n/n/n/n/n/n/n/n/n/n[`&.${inputBaseClasses.disabled}`]:/n{
/n/n/n/n/n/n/n/n/n/n/n/n'&/nsvg':/n{
/n/n/n/n/n/n/n/n/n/n/n/n/n/ncolor:/ntheme.palette.text.disabled,
/n/n/n/n/n/n/n/n/n/n/n/n},
/n/n/n/n/n/n/n/n/n/n},
/n/n/n/n/n/n/n/n},
/n/n/n/n/n/n/n/ninput:/n{
/n/n/n/n/n/n/n/n/n/n...font.value,
/n/n/n/n/n/n/n/n/n/n'&::placeholder':/n{
/n/n/n/n/n/n/n/n/n/n/n/nopacity:/n1,
/n/n/n/n/n/n/n/n/n/n  color: color.placeholder,
          },
        },
      },
    },

    // STANDARD
    MuiInput: {
      styleOverrides: {
        underline: {
          '&:before': {
            borderBottomColor: alpha(theme.palette.grey[500], 0.32),
          },
          '&:after': {
            borderBottomColor: color.focused,
          },
        },
      },
    },

    // OUTLINED
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          [`&.${outlinedInputClasses.focused}`]: {
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: color.focused,
            },
          },
          [`&.${outlinedInputClasses.error}`]: {
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: theme.palette.error.main,
            },
          },
          [`&.${outlinedInputClasses.disabled}`]: {
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: theme.palette.action.disabledBackground,
            },
          },
        },
        notchedOutline: {
          borderColor: alpha(theme.palette.grey[500], 0.2),
          transition: theme.transitions.create(['border-color'], {
            duration: theme.transitions.duration.shortest,
          }),
        },
      },
    },

    // FILLED
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderRadius: theme.shape.borderRadius,
          backgroundColor: alpha(theme.palette.grey[500], 0.08),
          '&:hover': {
            backgroundColor: alpha(theme.palette.grey[500], 0.16),
          },
          [`&.${filledInputClasses.focused}`]: {
            backgroundColor: alpha(theme.palette.grey[500], 0.16),
          },
          [`&.${filledInputClasses.error}`]: {
            backgroundColor: alpha(theme.palette.error.main, 0.08),
            [`&.${filledInputClasses.focused}`]: {
              backgroundColor: alpha(theme.palette.error.main, 0.16),
            },
          },
          [`&.${filledInputClasses.disabled}`]: {
            backgroundColor: theme.palette.action.disabledBackground,
          },
        },
      },
    },
  };
}
