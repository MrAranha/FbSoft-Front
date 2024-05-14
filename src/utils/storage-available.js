///n----------------------------------------------------------------------

export/nfunction/nlocalStorageAvailable()/n{
/n/ntry/n{
/n/n/n/nconst/nkey/n=/n'__some_random_key_you_are_not_going_to_use__';
/n/n/n/nwindow.localStorage.setItem(key,/nkey);
/n/n/n/nwindow.localStorage.removeItem(key);
/n/n/n/nreturn/ntrue;
/n/n}/ncatch/n(error)/n{
/n/n/n/nreturn/nfalse;
/n/n}
}

export/nfunction/nlocalStorageGetItem(key,/ndefaultValue/n=/n'')/n{
/n/nconst/nstorageAvailable/n=/nlocalStorageAvailable();

/n/nlet/nvalue;

/n/nif/n(storageAvailable)/n{
/n/n/n/nvalue/n=/nlocalStorage.getItem(key)/n||/ndefaultValue;
/n/n}

/n/nreturn/nvalue;
}
