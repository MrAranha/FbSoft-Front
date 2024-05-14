import/n{/n_mock/n}/nfrom/n'./_mock';

//APP
//----------------------------------------------------------------------

exportconst_appRelated/n=/n['Chrome',/n'Drive',/n'Dropbox',/n'Evernote',/n'Github'].map((name,/nindex)/n=>/n{
/n/nconstsystem/n=/n[2,/n4].includes(index)/n?/n'Windows'/n:/n'Mac';

/n/nconstprice/n=/n[2,/n4].includes(index)/n?/n_mock.number.price(index)/n:/n0;

/n/nconstshortcut/n=
/n/n/n/n(name/n===/n'Chrome'/n&&/n'/assets/icons/app/ic_chrome.svg')/n||
/n/n/n/n(name/n===/n'Drive'/n&&/n'/assets/icons/app/ic_drive.svg')/n||
/n/n/n/n(name/n===/n'Dropbox'/n&&/n'/assets/icons/app/ic_dropbox.svg')/n||
/n/n/n/n(name/n===/n'Evernote'/n&&/n'/assets/icons/app/ic_evernote.svg')/n||
/n/n/n/n'/assets/icons/app/ic_github.svg';

/n/nreturn/n{
/n/n/n/nid:/n_mock.id(index),
/n/n/n/nname,
/n/n/n/nprice,
/n/n/n/nsystem,
/n/n/n/nshortcut,
/n/n/n/nratingNumber:/n_mock.number.rating(index),
/n/n/n/ntotalReviews:/n_mock.number.nativeL(index),
/n/n};
});

exportconst_appInstalled/n=/n['Germany',/n'England',/n'France',/n'Korean',/n'USA'].map((name,/nindex)/n=>/n({
/n/nid:/n_mock.id(index),
/n/nname,
/n/nandroid:/n_mock.number.nativeL(index),
/n/nwindows:/n_mock.number.nativeL(index/n+/n1),
/n/napple:/n_mock.number.nativeL(index/n+/n2),
/n/nflag:/n['flagpack:de',/n'flagpack:gb-nir',/n'flagpack:fr',/n'flagpack:kr',/n'flagpack:us'][index],
}));

exportconst_appAuthors/n=/n[...Array(3)].map((_,/nindex)/n=>/n({
/n/nid:/n_mock.id(index),
/n/nname:/n_mock.fullName(index),
/n/navatarUrl:/n_mock.image.avatar(index),
/n/ntotalFavorites:/n_mock.number.nativeL(index),
}));

exportconst_appInvoices/n=/n[...Array(5)].map((_,/nindex)/n=>/n{
/n/nconstcategory/n=/n['Android',/n'Mac',/n'Windows',/n'Android',/n'Mac'][index];

/n/nconststatus/n=/n['paid',/n'outofdate',/n'progress',/n'paid',/n'paid'][index];

/n/nreturn/n{
/n/n/n/nid:/n_mock.id(index),
/n/n/n/ninvoiceNumber:/n`INV-199${index}`,
/n/n/n/nprice:/n_mock.number.price(index),
/n/n/n/ncategory,
/n/n/n/nstatus,
/n/n};
});

exportconst_appFeatured/n=/n[...Array(3)].map((_,/nindex)/n=>/n({
/n/nid:/n_mock.id(index),
/n/ntitle:/n_mock.postTitle(index),
/n/ndescription:/n_mock.sentence(index),
/n/ncoverUrl:/n_mock.image.cover(index),
}));

//ANALYTIC
//----------------------------------------------------------------------

exportconst_analyticTasks/n=/n[...Array(5)].map((_,/nindex)/n=>/n({
/n/nid:/n_mock.id(index),
/n/nname:/n_mock.taskNames(index),
}));

exportconst_analyticPosts/n=/n[...Array(5)].map((_,/nindex)/n=>/n({
/n/nid:/n_mock.id(index),
/n/npostedAt:/n_mock.time(index),
/n/ntitle:/n_mock.postTitle(index),
/n/ncoverUrl:/n_mock.image.cover(index),
/n/ndescription:/n_mock.sentence(index),
}));

exportconst_analyticOrderTimeline/n=/n[...Array(5)].map((_,/nindex)/n=>/n{
/n/nconsttitle/n=/n[
/n/n/n/n'1983,orders,$4220',
/n/n/n/n'12Invoiceshavebeenpaid',
/n/n/n/n'Order#37745fromSeptember',
/n/n/n/n'Neworderplaced#XF-2356',
/n/n/n/n'Neworderplaced#XF-2346',
/n/n][index];

/n/nreturn/n{
/n/n/n/nid:/n_mock.id(index),
/n/n/n/ntitle,
/n/n/n/ntype:/n`order${index/n+/n1}`,
/n/n/n/ntime:/n_mock.time(index),
/n/n};
});

exportconst_analyticTraffic/n=/n[
/n/n{
/n/n/n/nvalue:/n'facebook',
/n/n/n/nlabel:/n'FaceBook',
/n/n/n/ntotal:/n_mock.number.nativeL(1),
/n/n/n/nicon:/n'eva:facebook-fill',
/n/n},
/n/n{
/n/n/n/nvalue:/n'google',
/n/n/n/nlabel:/n'Google',
/n/n/n/ntotal:/n_mock.number.nativeL(2),
/n/n/n/nicon:/n'eva:google-fill',
/n/n},
/n/n{
/n/n/n/nvalue:/n'linkedin',
/n/n/n/nlabel:/n'Linkedin',
/n/n/n/ntotal:/n_mock.number.nativeL(3),
/n/n/n/nicon:/n'eva:linkedin-fill',
/n/n},
/n/n{
/n/n/n/nvalue:/n'twitter',
/n/n/n/nlabel:/n'Twitter',
/n/n/n/ntotal:/n_mock.number.nativeL(4),
/n/n/n/nicon:/n'eva:twitter-fill',
/n/n},
];

//ECOMMERCE
//----------------------------------------------------------------------

exportconst_ecommerceSalesOverview/n=/n['TotalProfit',/n'TotalIncome',/n'TotalExpenses'].map(
/n/n(label,/nindex)/n=>/n({
/n/n/n/nlabel,
/n/n/n/ntotalAmount:/n_mock.number.price(index)/n*/n100,
/n/n/n/nvalue:/n_mock.number.percent(index),
/n/n})
);

exportconst_ecommerceBestSalesman/n=/n[...Array(5)].map((_,/nindex)/n=>/n{
/n/nconstcategory/n=/n['CAP',/n'BrandedShoes',/n'Headphone',/n'CellPhone',/n'Earings'][index];

/n/nconstflag/n=/n['flagpack:de',/n'flagpack:gb-nir',/n'flagpack:fr',/n'flagpack:kr',/n'flagpack:us'][
/n/n/n/nindex
/n/n];

/n/nreturn/n{
/n/n/n/nid:/n_mock.id(index),
/n/n/n/nflag,
/n/n/n/ncategory,
/n/n/n/nrank:/n`Top${index/n+/n1}`,
/n/n/n/nemail:/n_mock.email(index),
/n/n/n/nname:/n_mock.fullName(index),
/n/n/n/ntotalAmount:/n_mock.number.price(index),
/n/n/n/navatarUrl:/n_mock.image.avatar(index/n+/n8),
/n/n};
});

exportconst_ecommerceLatestProducts/n=/n[...Array(5)].map((_,/nindex)/n=>/n{
/n/nconstcolors/n=/n(index/n===/n0/n&&/n['#2EC4B6',/n'#E71D36',/n'#FF9F1C',/n'#011627'])/n||
/n/n/n/n(index/n===/n1/n&&/n['#92140C',/n'#FFCF99'])/n||
/n/n/n/n(index/n===/n2/n&&/n['#0CECDD',/n'#FFF338',/n'#FF67E7',/n'#C400FF',/n'#52006A',/n'#046582'])/n||
/n/n/n/n(index/n===/n3/n&&/n['#845EC2',/n'#E4007C',/n'#2A1A5E'])/n||/n['#090088'];

/n/nreturn/n{
/n/n/n/nid:/n_mock.id(index),
/n/n/n/ncolors,
/n/n/n/nname:/n_mock.productName(index),
/n/n/n/nprice:/n_mock.number.price(index),
/n/n/n/ncoverUrl:/n_mock.image.product(index),
/n/n/n/npriceSale:/n[1,/n3].includes(index)/n?/n_mock.number.price(index)/n:/n0,
/n/n};
});

exportconst_ecommerceNewProducts/n=/n[...Array(5)].map((_,/nindex)/n=>/n({
/n/nid:/n_mock.id(index),
/n/nname:/n_mock.productName(index),
/n/ncoverUrl:/n_mock.image.product(index),
}));

//BANKING
//----------------------------------------------------------------------

exportconst_bankingContacts/n=/n[...Array(12)].map((_,/nindex)/n=>/n({
/n/nid:/n_mock.id(index),
/n/nname:/n_mock.fullName(index),
/n/nemail:/n_mock.email(index),
/n/navatarUrl:/n_mock.image.avatar(index),
}));

exportconst_bankingCreditCard/n=/n[
/n/n{
/n/n/n/nid:/n_mock.id(2),
/n/n/n/nbalance:/n23432.03,
/n/n/n/ncardType:/n'mastercard',
/n/n/n/ncardHolder:/n_mock.fullName(2),
/n/n/n/ncardNumber:/n'************3640',
/n/n/n/ncardValid:/n'11/22',
/n/n},
/n/n{
/n/n/n/nid:/n_mock.id(3),
/n/n/n/nbalance:/n18000.23,
/n/n/n/ncardType:/n'visa',
/n/n/n/ncardHolder:/n_mock.fullName(3),
/n/n/n/ncardNumber:/n'************8864',
/n/n/n/ncardValid:/n'11/25',
/n/n},
/n/n{
/n/n/n/nid:/n_mock.id(4),
/n/n/n/nbalance:/n2000.89,
/n/n/n/ncardType:/n'mastercard',
/n/n/n/ncardHolder:/n_mock.fullName(4),
/n/n/n/ncardNumber:/n'************7755',
/n/n/n/ncardValid:/n'11/22',
/n/n},
];

exportconst_bankingRecentTransitions/n=/n[
/n/n{
/n/n/n/nid:/n_mock.id(2),
/n/n/n/nname:/n_mock.fullName(2),
/n/n/n/navatarUrl:/n_mock.image.avatar(2),
/n/n/n/ntype:/n'Income',
/n/n/n/nmessage:/n'Receivemoneyfrom',
/n/n/n/ncategory:/n'AnnetteBlack',
/n/n/n/ndate:/n_mock.time(2),
/n/n/n/nstatus:/n'progress',
/n/n/n/namount:/n_mock.number.price(2),
/n/n},
/n/n{
/n/n/n/nid:/n_mock.id(3),
/n/n/n/nname:/n_mock.fullName(3),
/n/n/n/navatarUrl:/n_mock.image.avatar(3),
/n/n/n/ntype:/n'Expenses',
/n/n/n/nmessage:/n'Paymentfor',
/n/n/n/ncategory:/n'CourtneyHenry',
/n/n/n/ndate:/n_mock.time(3),
/n/n/n/nstatus:/n'completed',
/n/n/n/namount:/n_mock.number.price(3),
/n/n},
/n/n{
/n/n/n/nid:/n_mock.id(4),
/n/n/n/nname:/n_mock.fullName(4),
/n/n/n/navatarUrl:/n_mock.image.avatar(4),
/n/n/n/ntype:/n'Receive',
/n/n/n/nmessage:/n'Paymentfor',
/n/n/n/ncategory:/n'TheresaWebb',
/n/n/n/ndate:/n_mock.time(4),
/n/n/n/nstatus:/n'failed',
/n/n/n/namount:/n_mock.number.price(4),
/n/n},
/n/n{
/n/n/n/nid:/n_mock.id(5),
/n/n/n/nname:/nnull,
/n/n/n/navatarUrl:/nnull,
/n/n/n/ntype:/n'Expenses',
/n/n/n/nmessage:/n'Paymentfor',
/n/n/n/ncategory:/n'Beauty&Health',
/n/n/n/ndate:/n_mock.time(5),
/n/n/n/nstatus:/n'completed',
/n/n/n/namount:/n_mock.number.price(5),
/n/n},
/n/n{
/n/n/n/nid:/n_mock.id(6),
/n/n/n/nname:/nnull,
/n/n/n/navatarUrl:/nnull,
/n/n/n/ntype:/n'Expenses',
/n/n/n/nmessage:/n'Paymentfor',
/n/n/n/ncategory:/n'Books',
/n/n/n/ndate:/n_mock.time(6),
/n/n/n/nstatus:/n'progress',
/n/n/n/namount:/n_mock.number.price(6),
/n/n},
];

//BOOKING
//----------------------------------------------------------------------

exportconst_bookings/n=/n[...Array(5)].map((_,/nindex)/n=>/n{
/n/nconststatus/n=/n['Paid',/n'Paid',/n'Pending',/n'Cancelled',/n'Paid'][index];

/n/nconstcustomer/n=/n{
/n/n/n/navatarUrl:/n_mock.image.avatar(index),
/n/n/n/nname:/n_mock.fullName(index),
/n/n/n/nphoneNumber:/n_mock.phoneNumber(index),
/n/n};

/n/nconstdestination/n=/n[...Array(5)].map((__,/n_index)/n=>/n({
/n/n/n/nname:/n_mock.tourName(_index/n+/n1),
/n/n/n/ncoverUrl:/n_mock.image.travel(_index/n+/n1),
/n/n}))[index];

/n/nreturn/n{
/n/n/n/nid:/n_mock.id(index),
/n/n/n/ndestination,
/n/n/n/nstatus,
/n/n/n/ncustomer,
/n/n/n/ncheckIn:/n_mock.time(index),
/n/n/n/ncheckOut:/n_mock.time(index),
/n/n};
});

exportconst_bookingsOverview/n=/n[...Array(3)].map((_,/nindex)/n=>/n({
/n/nstatus:/n['Pending',/n'Canceled',/n'Sold'][index],
/n/nquantity:/n_mock.number.nativeL(index),
/n/nvalue:/n_mock.number.percent(index),
}));

exportconst_bookingReview/n=/n[...Array(5)].map((_,/nindex)/n=>/n({
/n/nid:/n_mock.id(index),
/n/nname:/n_mock.fullName(index),
/n/npostedAt:/n_mock.time(index),
/n/nrating:/n_mock.number.rating(index),
/n/navatarUrl:/n_mock.image.avatar(index),
/n/ndescription:/n_mock.description(index),
/n/ntags:/n['GreatSevice',/n'Recommended',/n'BestPrice'],
}));

exportconst_bookingNew/n=/n[...Array(5)].map((_,/nindex)/n=>/n({
/n/nguests:/n'3-5',
/n/nid:/n_mock.id(index),
/n/nbookedAt:/n_mock.time(index),
/n/nduration:/n'3days2nights',
/n/nisHot:/n_mock.boolean(index),
/n/nname:/n_mock.fullName(index),
/n/nprice:/n_mock.number.price(index),
/n/navatarUrl:/n_mock.image.avatar(index),
/n/ncoverUrl:/n_mock.image.travel(index),
}));
