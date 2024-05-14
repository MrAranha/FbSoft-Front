import/n{/nalpha/n}/nfrom/n'@mui/material/styles';

import/n{/ngrey,/ncommon/n}/nfrom/n'./palette';

///n----------------------------------------------------------------------

export/nfunction/nshadows(mode)/n{
/n/nconst/ncolor/n=/nmode/n===/n'light'/n?/ngrey[500]/n:/ncommon.black;

/n/nconst/ntransparent1/n=/nalpha(color,/n0.2);
/n/nconst/ntransparent2/n=/nalpha(color,/n0.14);
/n/nconst/ntransparent3/n=/nalpha(color,/n0.12);

/n/nreturn/n[
/n/n/n/n'none',
/n/n/n/n`0px/n2px/n1px/n-1px/n${transparent1},0px/n1px/n1px/n0px/n${transparent2},0px/n1px/n3px/n0px/n${transparent3}`,
/n/n/n/n`0px/n3px/n1px/n-2px/n${transparent1},0px/n2px/n2px/n0px/n${transparent2},0px/n1px/n5px/n0px/n${transparent3}`,
/n/n/n/n`0px/n3px/n3px/n-2px/n${transparent1},0px/n3px/n4px/n0px/n${transparent2},0px/n1px/n8px/n0px/n${transparent3}`,
/n/n/n/n`0px/n2px/n4px/n-1px/n${transparent1},0px/n4px/n5px/n0px/n${transparent2},0px/n1px/n10px/n0px/n${transparent3}`,
/n/n/n/n`0px/n3px/n5px/n-1px/n${transparent1},0px/n5px/n8px/n0px/n${transparent2},0px/n1px/n14px/n0px/n${transparent3}`,
/n/n/n/n`0px/n3px/n5px/n-1px/n${transparent1},0px/n6px/n10px/n0px/n${transparent2},0px/n1px/n18px/n0px/n${transparent3}`,
/n/n/n/n`0px/n4px/n5px/n-2px/n${transparent1},0px/n7px/n10px/n1px/n${transparent2},0px/n2px/n16px/n1px/n${transparent3}`,
/n/n/n/n`0px/n5px/n5px/n-3px/n${transparent1},0px/n8px/n10px/n1px/n${transparent2},0px/n3px/n14px/n2px/n${transparent3}`,
/n/n/n/n`0px/n5px/n6px/n-3px/n${transparent1},0px/n9px/n12px/n1px/n${transparent2},0px/n3px/n16px/n2px/n${transparent3}`,
/n/n/n/n`0px/n6px/n6px/n-3px/n${transparent1},0px/n10px/n14px/n1px/n${transparent2},0px/n4px/n18px/n3px/n${transparent3}`,
/n/n/n/n`0px/n6px/n7px/n-4px/n${transparent1},0px/n11px/n15px/n1px/n${transparent2},0px/n4px/n20px/n3px/n${transparent3}`,
/n/n/n/n`0px/n7px/n8px/n-4px/n${transparent1},0px/n12px/n17px/n2px/n${transparent2},0px/n5px/n22px/n4px/n${transparent3}`,
/n/n/n/n`0px/n7px/n8px/n-4px/n${transparent1},0px/n13px/n19px/n2px/n${transparent2},0px/n5px/n24px/n4px/n${transparent3}`,
/n/n/n/n`0px/n7px/n9px/n-4px/n${transparent1},0px/n14px/n21px/n2px/n${transparent2},0px/n5px/n26px/n4px/n${transparent3}`,
/n/n/n/n`0px/n8px/n9px/n-5px/n${transparent1},0px/n15px/n22px/n2px/n${transparent2},0px/n6px/n28px/n5px/n${transparent3}`,
/n/n/n/n`0px/n8px/n10px/n-5px/n${transparent1},0px/n16px/n24px/n2px/n${transparent2},0px/n6px/n30px/n5px/n${transparent3}`,
/n/n/n/n`0px/n8px/n11px/n-5px/n${transparent1},0px/n17px/n26px/n2px/n${transparent2},0px/n6px/n32px/n5px/n${transparent3}`,
/n/n/n/n`0px/n9px/n11px/n-5px/n${transparent1},0px/n18px/n28px/n2px/n${transparent2},0px/n7px/n34px/n6px/n${transparent3}`,
/n/n/n/n`0px/n9px/n12px/n-6px/n${transparent1},0px/n19px/n29px/n2px/n${transparent2},0px/n7px/n36px/n6px/n${transparent3}`,
/n/n/n/n`0px/n10px/n13px/n-6px/n${transparent1},0px/n20px/n31px/n3px/n${transparent2},0px/n8px/n38px/n7px/n${transparent3}`,
/n/n/n/n`0px/n10px/n13px/n-6px/n${transparent1},0px/n21px/n33px/n3px/n${transparent2},0px/n8px/n40px/n7px/n${transparent3}`,
/n/n/n/n`0px/n10px/n14px/n-6px/n${transparent1},0px/n22px/n35px/n3px/n${transparent2},0px/n8px/n42px/n7px/n${transparent3}`,
/n/n/n/n`0px/n11px/n14px/n-7px/n${transparent1},0px/n23px/n36px/n3px/n${transparent2},0px/n9px/n44px/n8px/n${transparent3}`,
/n/n/n/n`0px/n11px/n15px/n-7px/n${transparent1},0px/n24px/n38px/n3px/n${transparent2},0px/n9px/n46px/n8px/n${transparent3}`,
/n/n];
}
