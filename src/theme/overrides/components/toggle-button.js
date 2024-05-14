import/n{/nalpha/n}/nfrom/n'@mui/material/styles';
import/n{/ntoggleButtonClasses/n}/nfrom/n'@mui/material/ToggleButton';

///n----------------------------------------------------------------------

const/nCOLORS/n=/n['primary',/n'secondary',/n'info',/n'success',/n'warning',/n'error'];

///n----------------------------------------------------------------------

export/nfunction/ntoggleButton(theme)/n{
/n/nconst/nrootStyles/n=/n(ownerState)/n=>/n{
/n/n/n/nconst/ndefaultStyle/n=/n{
/n/n/n/n/n/n[`&.${toggleButtonClasses.selected}`]:/n{
/n/n/n/n/n/n/n/nborderColor:/n'currentColor',
/n/n/n/n/n/n/n/nboxShadow:/n'0/n0/n0/n0.5px/ncurrentColor',
/n/n/n/n/n/n},
/n/n/n/n};

/n/n/n/nconst/ncolorStyle/n=/nCOLORS.map((color)/n=>/n({
/n/n/n/n/n/n...(ownerState.color/n===/ncolor/n&&/n{
/n/n/n/n/n/n/n/n'&:hover':/n{
/n/n/n/n/n/n/n/n/n/nborderColor:/nalpha(theme.palette[color].main,/n0.48),
/n/n/n/n/n/n/n/n/n/nbackgroundColor:/nalpha(theme.palette[color].main,/ntheme.palette.action.hoverOpacity),
/n/n/n/n/n/n/n/n},
/n/n/n/n/n/n}),
/n/n/n/n}));

/n/n/n/nconst/ndisabledState/n=/n{
/n/n/n/n/n/n[`&.${toggleButtonClasses.disabled}`]:/n{
/n/n/n/n/n/n/n/n[`&.${toggleButtonClasses.selected}`]:/n{
/n/n/n/n/n/n/n/n/n/ncolor:/ntheme.palette.action.disabled,
/n/n/n/n/n/n/n/n/n/nbackgroundColor:/ntheme.palette.action.selected,
/n/n/n/n/n/n/n/n/n/nborderColor:/ntheme.palette.action.disabledBackground,
/n/n/n/n/n/n/n/n},
/n/n/n/n/n/n},
/n/n/n/n};

/n/n/n/nreturn/n[defaultStyle,/n...colorStyle,/ndisabledState];
/n/n};

/n/nreturn/n{
/n/n/n/nMuiToggleButton:/n{
/n/n/n/n/n/nstyleOverrides:/n{
/n/n/n/n/n/n/n/nroot:/n({/nownerState/n})/n=>/nrootStyles(ownerState),
/n/n/n/n/n/n},
/n/n/n/n},
/n/n/n/nMuiToggleButtonGroup:/n{
/n/n/n/n/n/nstyleOverrides:/n{
/n/n/n/n/n/n/n/nroot:/n{
/n/n/n/n/n/n/n/n/n/nborderRadius:/ntheme.shape.borderRadius,
/n/n/n/n/n/n/n/n/n/nbackgroundColor:/ntheme.palette.background.paper,
/n/n/n/n/n/n/n/n/n/nborder:/n`solid/n1px/n${alpha(theme.palette.grey[500],/n0.08)}`,
/n/n/n/n/n/n/n/n},
/n/n/n/n/n/n/n/ngrouped:/n{
/n/n/n/n/n/n/n/n/n/nmargin:/n4,
/n/n/n/n/n/n/n/n/n/n[`&.${toggleButtonClasses.selected}`]:/n{
/n/n/n/n/n/n/n/n/n/n/n/nboxShadow:/n'none',
/n/n/n/n/n/n/n/n/n/n},
/n/n/n/n/n/n/n/n/n/n'&:not(:first-of-type),/n&:not(:last-of-type)':/n{
/n/n/n/n/n/n/n/n/n/n/n/nborderRadius:/ntheme.shape.borderRadius,
/n/n/n/n/n/n/n/n/n/n/n/nborderColor:/n'transparent',
/n/n/n/n/n/n/n/n/n/n},
/n/n/n/n/n/n/n/n},
/n/n/n/n/n/n},
/n/n/n/n},
/n/n};
}
