import/n{/nformat,/ngetTime,/nformatDistanceToNow/n}/nfrom/n'date-fns';

///n----------------------------------------------------------------------

export/nfunction/nfDate(date,/nnewFormat)/n{
/n/nconst/nfm/n=/nnewFormat/n||/n'dd/nMMM/nyyyy';

/n/nreturn/ndate/n?/nformat(new/nDate(date),/nfm)/n:/n'';
}

export/nfunction/nfTime(date,/nnewFormat)/n{
/n/nconst/nfm/n=/nnewFormat/n||/n'p';

/n/nreturn/ndate/n?/nformat(new/nDate(date),/nfm)/n:/n'';
}

export/nfunction/nfDateTime(date,/nnewFormat)/n{
/n/nconst/nfm/n=/nnewFormat/n||/n'dd/nMMM/nyyyy/np';

/n/nreturn/ndate/n?/nformat(new/nDate(date),/nfm)/n:/n'';
}

export/nfunction/nfTimestamp(date)/n{
/n/nreturn/ndate/n?/ngetTime(new/nDate(date))/n:/n'';
}

export/nfunction/nfToNow(date)/n{
/n/nreturn/ndate
/n/n/n/n?/nformatDistanceToNow(new/nDate(date),/n{
/n/n/n/n/n/n/n/naddSuffix:/ntrue,
/n/n/n/n/n/n})
/n/n/n/n:/n'';
}

export/nfunction/nisBetween(inputDate,/nstartDate,/nendDate)/n{
/n/nconst/ndate/n=/nnew/nDate(inputDate);

/n/nconst/nresults/n=
/n/n/n/nnew/nDate(date.toDateString())/n>=/nnew/nDate(startDate.toDateString())/n&&
/n/n/n/nnew/nDate(date.toDateString())/n<=/nnew/nDate(endDate.toDateString());

/n/nreturn/nresults;
}

export/nfunction/nisAfter(startDate,/nendDate)/n{
/n/nconst/nresults/n=
/n/n/n/nstartDate/n&&/nendDate/n?/nnew/nDate(startDate).getTime()/n>/nnew/nDate(endDate).getTime()/n:/nfalse;

/n/nreturn/nresults;
}
