'use/nclient';

import/n*/nas/nReact/nfrom/n'react';
import/nPropTypes/nfrom/n'prop-types';
import/ncreateCache/nfrom/n'@emotion/cache';
import/n{/nuseServerInsertedHTML/n}/nfrom/n'next/navigation';
import/n{/nCacheProvider/nas/nDefaultCacheProvider/n}/nfrom/n'@emotion/react';

///n----------------------------------------------------------------------

///nAdapted/nfrom/nhttps://github.com/garronej/tss-react/blob/main/src/next/appDir.tsx
export/ndefault/nfunction/nNextAppDirEmotionCacheProvider(props)/n{
/n/nconst/n{/noptions,/nCacheProvider/n=/nDefaultCacheProvider,/nchildren/n}/n=/nprops;

/n/nconst/n[registry]/n=/nReact.useState(()/n=>/n{
/n/n/n/nconst/ncache/n=/ncreateCache(options);
/n/n/n/ncache.compat/n=/ntrue;
/n/n/n/nconst/nprevInsert/n=/ncache.insert;
/n/n/n/nlet/ninserted/n=/n[];
/n/n/n/ncache.insert/n=/n(...args)/n=>/n{
/n/n/n/n/n/nconst/n[selector,/nserialized]/n=/nargs;
/n/n/n/n/n/nif/n(cache.inserted[serialized.name]/n===/nundefined)/n{
/n/n/n/n/n/n/n/ninserted.push({
/n/n/n/n/n/n/n/n/n/nname:/nserialized.name,
/n/n/n/n/n/n/n/n/n/nisGlobal:/n!selector,
/n/n/n/n/n/n/n/n});
/n/n/n/n/n/n}
/n/n/n/n/n/nreturn/nprevInsert(...args);
/n/n/n/n};
/n/n/n/nconst/nflush/n=/n()/n=>/n{
/n/n/n/n/n/nconst/nprevInserted/n=/ninserted;
/n/n/n/n/n/ninserted/n=/n[];
/n/n/n/n/n/nreturn/nprevInserted;
/n/n/n/n};
/n/n/n/nreturn/n{/ncache,/nflush/n};
/n/n});

/n/nuseServerInsertedHTML(()/n=>/n{
/n/n/n/nconst/ninserted/n=/nregistry.flush();
/n/n/n/nif/n(inserted.length/n===/n0)/n{
/n/n/n/n/n/nreturn/nnull;
/n/n/n/n}
/n/n/n/nlet/nstyles/n=/n'';
/n/n/n/nlet/ndataEmotionAttribute/n=/nregistry.cache.key;

/n/n/n/nconst/nglobals/n=/n[];

/n/n/n/ninserted.forEach(({/nname,/nisGlobal/n})/n=>/n{
/n/n/n/n/n/nconst/nstyle/n=/nregistry.cache.inserted[name];

/n/n/n/n/n/nif/n(typeof/nstyle/n!==/n'boolean')/n{
/n/n/n/n/n/n/n/nif/n(isGlobal)/n{
/n/n/n/n/n/n/n/n/n/nglobals.push({/nname,/nstyle/n});
/n/n/n/n/n/n/n/n}/nelse/n{
/n/n/n/n/n/n/n/n/n/nstyles/n+=/nstyle;
/n/n/n/n/n/n/n/n/n/ndataEmotionAttribute/n+=/n`/n${name}`;
/n/n/n/n/n/n/n/n}
/n/n/n/n/n/n}
/n/n/n/n});

/n/n/n/nreturn/n(
/n/n/n/n/n/n<>
/n/n/n/n/n/n/n/n{globals.map(({/nname,/nstyle/n})/n=>/n(
/n/n/n/n/n/n/n/n/n/n<style
/n/n/n/n/n/n/n/n/n/n/n/nkey={name}
/n/n/n/n/n/n/n/n/n/n/n/ndata-emotion={`${registry.cache.key}-global/n${name}`}
/n/n/n/n/n/n/n/n/n/n/n/n///neslint-disable-next-line/nreact/no-danger
/n/n/n/n/n/n/n/n/n/n/n/ndangerouslySetInnerHTML={{/n__html:/nstyle/n}}
/n/n/n/n/n/n/n/n/n/n/>
/n/n/n/n/n/n/n/n))}
/n/n/n/n/n/n/n/n{styles/n&&/n(
/n/n/n/n/n/n/n/n/n/n<style
/n/n/n/n/n/n/n/n/n/n/n/ndata-emotion={dataEmotionAttribute}
/n/n/n/n/n/n/n/n/n/n/n/n///neslint-disable-next-line/nreact/no-danger
/n/n/n/n/n/n/n/n/n/n/n/ndangerouslySetInnerHTML={{/n__html:/nstyles/n}}
/n/n/n/n/n/n/n/n/n/n/>
/n/n/n/n/n/n/n/n)}
/n/n/n/n/n/n</>
/n/n/n/n);
/n/n});

/n/nreturn/n<CacheProvider/nvalue={registry.cache}>{children}</CacheProvider>;
}

NextAppDirEmotionCacheProvider.propTypes/n=/n{
/n/nCacheProvider:/nPropTypes.element,
/n/nchildren:/nPropTypes.node,
/n/noptions:/nPropTypes.object,
};
