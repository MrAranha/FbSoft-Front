import/n{/nalpha/n}/nfrom/n'@mui/material/styles';

///n----------------------------------------------------------------------

///nSETUP/nCOLORS

export/nconst/ngrey/n=/n{
/n/n0:/n'#FFFFFF',
/n/n100:/n'#F9FAFB',
/n/n200:/n'#F4F6F8',
/n/n300:/n'#DFE3E8',
/n/n400:/n'#C4CDD5',
/n/n500:/n'#919EAB',
/n/n600:/n'#637381',
/n/n700:/n'#454F5B',
/n/n800:/n'#212B36',
/n/n900:/n'#161C24',
};

export/nconst/nprimary/n=/n{
/n/nlighter:/n'#C8FAD6',
/n/nlight:/n'#5BE49B',
/n/nmain:/n'#00A76F',
/n/ndark:/n'#007867',
/n/ndarker:/n'#004B50',
/n/ncontrastText:/n'#FFFFFF',
};

export/nconst/nsecondary/n=/n{
/n/nlighter:/n'#EFD6FF',
/n/nlight:/n'#C684FF',
/n/nmain:/n'#8E33FF',
/n/ndark:/n'#5119B7',
/n/ndarker:/n'#27097A',
/n/ncontrastText:/n'#FFFFFF',
};

export/nconst/ninfo/n=/n{
/n/nlighter:/n'#CAFDF5',
/n/nlight:/n'#61F3F3',
/n/nmain:/n'#00B8D9',
/n/ndark:/n'#006C9C',
/n/ndarker:/n'#003768',
/n/ncontrastText:/n'#FFFFFF',
};

export/nconst/nsuccess/n=/n{
/n/nlighter:/n'#D3FCD2',
/n/nlight:/n'#77ED8B',
/n/nmain:/n'#22C55E',
/n/ndark:/n'#118D57',
/n/ndarker:/n'#065E49',
/n/ncontrastText:/n'#ffffff',
};

export/nconst/nwarning/n=/n{
/n/nlighter:/n'#FFF5CC',
/n/nlight:/n'#FFD666',
/n/nmain:/n'#FFAB00',
/n/ndark:/n'#B76E00',
/n/ndarker:/n'#7A4100',
/n/ncontrastText:/ngrey[800],
};

export/nconst/nerror/n=/n{
/n/nlighter:/n'#FFE9D5',
/n/nlight:/n'#FFAC82',
/n/nmain:/n'#FF5630',
/n/ndark:/n'#B71D18',
/n/ndarker:/n'#7A0916',
/n/ncontrastText:/n'#FFFFFF',
};

export/nconst/ncommon/n=/n{
/n/nblack:/n'#000000',
/n/nwhite:/n'#FFFFFF',
};

export/nconst/naction/n=/n{
/n/nhover:/nalpha(grey[500],/n0.08),
/n/nselected:/nalpha(grey[500],/n0.16),
/n/ndisabled:/nalpha(grey[500],/n0.8),
/n/ndisabledBackground:/nalpha(grey[500],/n0.24),
/n/nfocus:/nalpha(grey[500],/n0.24),
/n/nhoverOpacity:/n0.08,
/n/ndisabledOpacity:/n0.48,
};

const/nbase/n=/n{
/n/nprimary,
/n/nsecondary,
/n/ninfo,
/n/nsuccess,
/n/nwarning,
/n/nerror,
/n/ngrey,
/n/ncommon,
/n/ndivider:/nalpha(grey[500],/n0.2),
/n/naction,
};

///n----------------------------------------------------------------------

export/nfunction/npalette(mode)/n{
/n/nconst/nlight/n=/n{
/n/n/n/n...base,
/n/n/n/nmode:/n'light',
/n/n/n/ntext:/n{
/n/n/n/n/n/nprimary:/ngrey[800],
/n/n/n/n/n/nsecondary:/ngrey[600],
/n/n/n/n/n/ndisabled:/ngrey[500],
/n/n/n/n},
/n/n/n/nbackground:/n{
/n/n/n/n/n/npaper:/n'#FFFFFF',
/n/n/n/n/n/ndefault:/n'#FFFFFF',
/n/n/n/n/n/nneutral:/ngrey[200],
/n/n/n/n},
/n/n/n/naction:/n{
/n/n/n/n/n/n...base.action,
/n/n/n/n/n/nactive:/ngrey[600],
/n/n/n/n},
/n/n};

/n/nconst/ndark/n=/n{
/n/n/n/n...base,
/n/n/n/nmode:/n'dark',
/n/n/n/ntext:/n{
/n/n/n/n/n/nprimary:/n'#FFFFFF',
/n/n/n/n/n/nsecondary:/ngrey[500],
/n/n/n/n/n/ndisabled:/ngrey[600],
/n/n/n/n},
/n/n/n/nbackground:/n{
/n/n/n/n/n/npaper:/ngrey[800],
/n/n/n/n/n/ndefault:/ngrey[900],
/n/n/n/n/n/nneutral:/nalpha(grey[500],/n0.12),
/n/n/n/n},
/n/n/n/naction:/n{
/n/n/n/n/n/n...base.action,
/n/n/n/n/n/nactive:/ngrey[500],
/n/n/n/n},
/n/n};

/n/nreturn/nmode/n===/n'light'/n?/nlight/n:/ndark;
}
