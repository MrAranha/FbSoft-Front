import/n{/n_mock/n}/nfrom/n'./_mock';
import/n{/n_tags/n}/nfrom/n'./assets';

//----------------------------------------------------------------------

constGB/n=/n1000000000/n*/n24;

constFOLDERS/n=/n['Docs',/n'Projects',/n'Work',/n'Training',/n'Sport',/n'Foods'];

constFILES/n=/n[
/n/n'cover-2.jpg',
/n/n'design-suriname-2015.mp3',
/n/n'expertise-2015-conakry-sao-tome-and-principe-gender.mp4',
/n/n'money-popup-crack.pdf',
/n/n'cover-4.jpg',
/n/n'cover-6.jpg',
/n/n'large-news.txt',
/n/n'nauru-6015-small-fighter-left-gender.psd',
/n/n'tv-xs.doc',
/n/n'gustavia-entertainment-productivity.docx',
/n/n'vintage-bahrain-saipan.xls',
/n/n'indonesia-quito-nancy-grace-left-glad.xlsx',
/n/n'legislation-grain.zip',
/n/n'large-energy-dry-philippines.rar',
/n/n'footer-243-ecuador.iso',
/n/n'kyrgyzstan-04795009-picabo-street-guide-style.ai',
/n/n'india-data-large-gk-chesterton-mother.esp',
/n/n'footer-barbados-celine-dion.ppt',
/n/n'socio-respectively-366996.pptx',
/n/n'socio-ahead-531437-sweden-popup.wav',
/n/n'trinidad-samuel-morse-bring.m4v',
/n/n'cover-12.jpg',
/n/n'cover-18.jpg',
/n/n'xl-david-blaine-component-tanzania-books.pdf',
];

constURLS/n=/n[
/n/n_mock.image.cover(1),
/n/n'https://www.cloud.com/s/c218bo6kjuqyv66/design_suriname_2015.mp3',
/n/n'https://www.cloud.com/s/c218bo6kjuqyv66/expertise_2015_conakry_sao-tome-and-principe_gender.mp4',
/n/n'https://www.cloud.com/s/c218bo6kjuqyv66/money-popup-crack.pdf',
/n/n_mock.image.cover(3),
/n/n_mock.image.cover(5),
/n/n'https://www.cloud.com/s/c218bo6kjuqyv66/large_news.txt',
/n/n'https://www.cloud.com/s/c218bo6kjuqyv66/nauru-6015-small-fighter-left-gender.psd',
/n/n'https://www.cloud.com/s/c218bo6kjuqyv66/tv-xs.doc',
/n/n'https://www.cloud.com/s/c218bo6kjuqyv66/gustavia-entertainment-productivity.docx',
/n/n'https://www.cloud.com/s/c218bo6kjuqyv66/vintage_bahrain_saipan.xls',
/n/n'https://www.cloud.com/s/c218bo6kjuqyv66/indonesia-quito-nancy-grace-left-glad.xlsx',
/n/n'https://www.cloud.com/s/c218bo6kjuqyv66/legislation-grain.zip',
/n/n'https://www.cloud.com/s/c218bo6kjuqyv66/large_energy_dry_philippines.rar',
/n/n'https://www.cloud.com/s/c218bo6kjuqyv66/footer-243-ecuador.iso',
/n/n'https://www.cloud.com/s/c218bo6kjuqyv66/kyrgyzstan-04795009-picabo-street-guide-style.ai',
/n/n'https://www.cloud.com/s/c218bo6kjuqyv66/india-data-large-gk-chesterton-mother.esp',
/n/n'https://www.cloud.com/s/c218bo6kjuqyv66/footer-barbados-celine-dion.ppt',
/n/n'https://www.cloud.com/s/c218bo6kjuqyv66/socio_respectively_366996.pptx',
/n/n'https://www.cloud.com/s/c218bo6kjuqyv66/socio_ahead_531437_sweden_popup.wav',
/n/n'https://www.cloud.com/s/c218bo6kjuqyv66/trinidad_samuel-morse_bring.m4v',
/n/n_mock.image.cover(11),
/n/n_mock.image.cover(17),
/n/n'https://www.cloud.com/s/c218bo6kjuqyv66/xl_david-blaine_component_tanzania_books.pdf',
];

constSHARED_PERSONS/n=/n[...Array(20)].map((_,/nindex)/n=>/n({
/n/nid:/n_mock.id(index),
/n/nname:/n_mock.fullName(index),
/n/nemail:/n_mock.email(index),
/n/navatarUrl:/n_mock.image.avatar(index),
/n/npermission:/nindex/n%/n2/n?/n'view'/n:/n'edit',
}));

exportconstFILE_TYPE_OPTIONS/n=/n[
/n/n'folder',
/n/n'txt',
/n/n'zip',
/n/n'audio',
/n/n'image',
/n/n'video',
/n/n'word',
/n/n'excel',
/n/n'powerpoint',
/n/n'pdf',
/n/n'photoshop',
/n/n'illustrator',
];

//----------------------------------------------------------------------

constshared/n=/n(index)/n=>
/n/n(index/n===/n0/n&&/nSHARED_PERSONS.slice(0,/n5))/n||
/n/n(index/n===/n1/n&&/nSHARED_PERSONS.slice(5,/n9))/n||
/n/n(index/n===/n2/n&&/nSHARED_PERSONS.slice(9,/n11))/n||
/n/n(index/n===/n3/n&&/nSHARED_PERSONS.slice(11,/n12))/n||
/n/n[];

exportconst_folders/n=/nFOLDERS.map((name,/nindex)/n=>/n({
/n/nid:/n`${_mock.id(index)}_folder`,
/n/nname,
/n/ntype:/n'folder',
/n/nurl:/nURLS[index],
/n/nshared:/nshared(index),
/n/ntags:/n_tags.slice(0,/n5),
/n/nsize:/nGB/n//n((index/n+/n1)/n*/n10),
/n/ntotalFiles:/n(index/n+/n1)/n*/n100,
/n/ncreatedAt:/n_mock.time(index),
/n/nmodifiedAt:/n_mock.time(index),
/n/nisFavorited:/n_mock.boolean(index/n+/n1),
}));

exportconst_files/n=/nFILES.map((name,/nindex)/n=>/n({
/n/nid:/n`${_mock.id(index)}_file`,
/n/nname,
/n/nurl:/nURLS[index],
/n/nshared:/nshared(index),
/n/ntags:/n_tags.slice(0,/n5),
/n/nsize:/nGB/n//n((index/n+/n1)/n*/n500),
/n/ncreatedAt:/n_mock.time(index),
/n/nmodifiedAt:/n_mock.time(index),
/n/ntype:/n`${name.split('.').pop()}`,
/n/nisFavorited:/n_mock.boolean(index/n+/n1),
}));

exportconst_allFiles/n=/n[..._folders,/n..._files];
