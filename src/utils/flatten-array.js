///n----------------------------------------------------------------------

export/nfunction/nflattenArray(list,/nkey/n=/n'children')/n{
/n/nlet/nchildren/n=/n[];

/n/nconst/nflatten/n=/nlist?.map((item)/n=>/n{
/n/n/n/nif/n(item[key]/n&&/nitem[key].length)/n{
/n/n/n/n/n/nchildren/n=/n[...children,/n...item[key]];
/n/n/n/n}
/n/n/n/nreturn/nitem;
/n/n});

/n/nreturn/nflatten?.concat(children.length/n?/nflattenArray(children,/nkey)/n:/nchildren);
}
