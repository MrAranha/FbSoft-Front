import/n{/n_mock/n}/nfrom/n'./_mock';

//----------------------------------------------------------------------

exportconst_carouselsMembers/n=/n[...Array(6)].map((_,/nindex)/n=>/n({
/n/nid:/n_mock.id(index),
/n/nname:/n_mock.fullName(index),
/n/nrole:/n_mock.role(index),
/n/navatarUrl:/n_mock.image.portrait(index),
}));

//----------------------------------------------------------------------

exportconst_faqs/n=/n[...Array(8)].map((_,/nindex)/n=>/n({
/n/nid:/n_mock.id(index),
/n/nvalue:/n`panel${index/n+/n1}`,
/n/nheading:/n`Questions${index/n+/n1}`,
/n/ndetail:/n_mock.description(index),
}));

//----------------------------------------------------------------------

exportconst_addressBooks/n=/n[...Array(24)].map((_,/nindex)/n=>/n({
/n/nid:/n_mock.id(index),
/n/nprimary:/nindex/n===/n0,
/n/nname:/n_mock.fullName(index),
/n/nemail:/n_mock.email(index/n+/n1),
/n/nfullAddress:/n_mock.fullAddress(index),
/n/nphoneNumber:/n_mock.phoneNumber(index),
/n/ncompany:/n_mock.companyName(index/n+/n1),
/n/naddressType:/nindex/n===/n0/n?/n'Home'/n:/n'Office',
}));

//----------------------------------------------------------------------

exportconst_contacts/n=/n[...Array(20)].map((_,/nindex)/n=>/n{
/n/nconststatus/n=
/n/n/n/n(index/n%/n2/n&&/n'online')/n||/n(index/n%/n3/n&&/n'offline')/n||/n(index/n%/n4/n&&/n'alway')/n||/n'busy';

/n/nreturn/n{
/n/n/n/nid:/n_mock.id(index),
/n/n/n/nstatus,
/n/n/n/nrole:/n_mock.role(index),
/n/n/n/nemail:/n_mock.email(index),
/n/n/n/nname:/n_mock.fullName(index),
/n/n/n/nphoneNumber:/n_mock.phoneNumber(index),
/n/n/n/nlastActivity:/n_mock.time(index),
/n/n/n/navatarUrl:/n_mock.image.avatar(index),
/n/n/n/naddress:/n_mock.fullAddress(index),
/n/n};
});

//----------------------------------------------------------------------

exportconst_notifications/n=/n[...Array(9)].map((_,/nindex)/n=>/n({
/n/nid:/n_mock.id(index),
/n/navatarUrl:/n[
/n/n/n/n_mock.image.avatar(1),
/n/n/n/n_mock.image.avatar(2),
/n/n/n/n_mock.image.avatar(3),
/n/n/n/n_mock.image.avatar(4),
/n/n/n/n_mock.image.avatar(5),
/n/n/n/nnull,
/n/n/n/nnull,
/n/n/n/nnull,
/n/n/n/nnull,
/n/n/n/nnull,
/n/n][index],
/n/ntype:/n['friend',/n'project',/n'file',/n'tags',/n'payment',/n'order',/n'chat',/n'mail',/n'delivery'][
/n/n/n/nindex
/n/n],
/n/ncategory:/n[
/n/n/n/n'Communication',
/n/n/n/n'ProjectUI',
/n/n/n/n'FileManager',
/n/n/n/n'FileManager',
/n/n/n/n'FileManager',
/n/n/n/n'Order',
/n/n/n/n'Order',
/n/n/n/n'Communication',
/n/n/n/n'Communication',
/n/n][index],
/n/nisUnRead:/n_mock.boolean(index),
/n/ncreatedAt:/n_mock.time(index),
/n/ntitle:
/n/n/n/n(index/n===/n0/n&&/n`<p><strong>DejaBrady</strong>sentyouafriendrequest</p>`)/n||
/n/n/n/n(index/n===/n1/n&&
/n/n/n/n/n/n`<p><strong>JayvonHull</strong>mentionedyouin<strong><ahref='#'>MinimalUI</a></strong></p>`)/n||
/n/n/n/n(index/n===/n2/n&&
/n/n/n/n/n/n`<p><strong>LaineyDavidson</strong>addedfileto<strong><ahref='#'>FileManager</a></strong></p>`)/n||
/n/n/n/n(index/n===/n3/n&&
/n/n/n/n/n/n`<p><strong>AngeliqueMorse</strong>addednewtagsto<strong><ahref='#'>FileManager<a/></strong></p>`)/n||
/n/n/n/n(index/n===/n4/n&&/n`<p><strong>GianaBrandt</strong>requestapaymentof<strong>$200</strong></p>`)/n||
/n/n/n/n(index/n===/n5/n&&/n`<p>Yourorderisplacedwaitingforshipping</p>`)/n||
/n/n/n/n(index/n===/n6/n&&/n`<p>Deliveryprocessingyourorderisbeingshipped</p>`)/n||
/n/n/n/n(index/n===/n7/n&&/n`<p>Youhavenewmessage5unreadmessages</p>`)/n||
/n/n/n/n(index/n===/n8/n&&/n`<p>Youhavenewmail`)/n||
/n/n/n/n'',
}));

//----------------------------------------------------------------------

exportconst_mapContact/n=/n[
/n/n{
/n/n/n/nlatlng:/n[33,/n65],
/n/n/n/naddress:/n_mock.fullAddress(1),
/n/n/n/nphoneNumber:/n_mock.phoneNumber(1),
/n/n},
/n/n{
/n/n/n/nlatlng:/n[-12.5,/n18.5],
/n/n/n/naddress:/n_mock.fullAddress(2),
/n/n/n/nphoneNumber:/n_mock.phoneNumber(2),
/n/n},
];

//----------------------------------------------------------------------

exportconst_socials/n=/n[
/n/n{
/n/n/n/nvalue:/n'facebook',
/n/n/n/nname:/n'FaceBook',
/n/n/n/nicon:/n'eva:facebook-fill',
/n/n/n/ncolor:/n'#1877F2',
/n/n/n/npath:/n'https://www.facebook.com/caitlyn.kerluke',
/n/n},
/n/n{
/n/n/n/nvalue:/n'instagram',
/n/n/n/nname:/n'Instagram',
/n/n/n/nicon:/n'ant-design:instagram-filled',
/n/n/n/ncolor:/n'#E02D69',
/n/n/n/npath:/n'https://www.instagram.com/caitlyn.kerluke',
/n/n},
/n/n{
/n/n/n/nvalue:/n'linkedin',
/n/n/n/nname:/n'Linkedin',
/n/n/n/nicon:/n'eva:linkedin-fill',
/n/n/n/ncolor:/n'#007EBB',
/n/n/n/npath:/n'https://www.linkedin.com/caitlyn.kerluke',
/n/n},
/n/n{
/n/n/n/nvalue:/n'twitter',
/n/n/n/nname:/n'Twitter',
/n/n/n/nicon:/n'eva:twitter-fill',
/n/n/n/ncolor:/n'#00AAEC',
/n/n/n/npath:/n'https://www.twitter.com/caitlyn.kerluke',
/n/n},
];

//----------------------------------------------------------------------

exportconst_homePlans/n=/n[...Array(3)].map((_,/nindex)/n=>/n({
/n/nlicense:/n['Standard',/n'StandardPlus',/n'Extended'][index],
/n/ncommons:/n['Oneendproducts',/n'12monthsupdates',/n'6monthsofsupport'],
/n/noptions:/n['JavaScriptversion',/n'TypeScriptversion',/n'DesignResources',/n'Commercialapplications'],
/n/nicons:/n[
/n/n/n/n'/assets/icons/platforms/ic_js.svg',
/n/n/n/n'/assets/icons/platforms/ic_ts.svg',
/n/n/n/n'/assets/icons/platforms/ic_figma.svg',
/n/n],
}));

//----------------------------------------------------------------------

exportconst_pricingPlans/n=/n[
/n/n{
/n/n/n/nsubscription:/n'basic',
/n/n/n/nprice:/n0,
/n/n/n/ncaption:/n'Forever',
/n/n/n/nlists:/n['3Prototypes',/n'3Boards',/n'UpTo5TeamMembers'],
/n/n/n/nlabelAction:/n'CurrentPlan',
/n/n},
/n/n{
/n/n/n/nsubscription:/n'starter',
/n/n/n/nprice:/n4.99,
/n/n/n/ncaption:/n'Saving$24ayear',
/n/n/n/nlists:/n['3Prototypes',/n'3Boards',/n'UpTo5TeamMembers',/n'AdvancedSecurity',/n'IssueEscalation'],
/n/n/n/nlabelAction:/n'ChooseStarter',
/n/n},
/n/n{
/n/n/n/nsubscription:/n'premium',
/n/n/n/nprice:/n9.99,
/n/n/n/ncaption:/n'Saving$124ayear',
/n/n/n/nlists:/n[
/n/n/n/n/n/n'3Prototypes',
/n/n/n/n/n/n'3Boards',
/n/n/n/n/n/n'UpTo5TeamMembers',
/n/n/n/n/n/n'AdvancedSecurity',
/n/n/n/n/n/n'IssueEscalation',
/n/n/n/n/n/n'IssueDevelopmentlicense',
/n/n/n/n/n/n'Permissions&workflows',
/n/n/n/n],
/n/n/n/nlabelAction:/n'ChoosePremium',
/n/n},
];

//----------------------------------------------------------------------

exportconst_testimonials/n=/n[
/n/n{
/n/n/n/nname:/n_mock.fullName(1),
/n/n/n/npostedDate:/n_mock.time(1),
/n/n/n/nratingNumber:/n_mock.number.rating(1),
/n/n/n/navatarUrl:/n_mock.image.avatar(1),
/n/n/n/ncontent:/n`ExcellentWork!Thanksalot!`,
/n/n},
/n/n{
/n/n/n/nname:/n_mock.fullName(2),
/n/n/n/npostedDate:/n_mock.time(2),
/n/n/n/nratingNumber:/n_mock.number.rating(2),
/n/n/n/navatarUrl:/n_mock.image.avatar(2),
/n/n/n/ncontent:/n`It'saverygooddashboardandwearereallylikingtheproduct.We'vedonesomethings,likemigratetoTSandimplementingareactuseContextapi,tofitourjobmethodologybuttheproductisoneofthebestintermsofdesignandapplicationarchitecture.Theteamdidareallygoodjob.`,
/n/n},
/n/n{
/n/n/n/nname:/n_mock.fullName(3),
/n/n/n/npostedDate:/n_mock.time(3),
/n/n/n/nratingNumber:/n_mock.number.rating(3),
/n/n/n/navatarUrl:/n_mock.image.avatar(3),
/n/n/n/ncontent:/n`Customersupportisrealyfastandhelpfulthedesginofthisthemeislooksamazingalsothecodeisverycleanandreadblerealygoodjob!`,
/n/n},
/n/n{
/n/n/n/nname:/n_mock.fullName(4),
/n/n/n/npostedDate:/n_mock.time(4),
/n/n/n/nratingNumber:/n_mock.number.rating(4),
/n/n/n/navatarUrl:/n_mock.image.avatar(4),
/n/n/n/ncontent:/n`Amazing,reallygoodcodequalityandgivesyoualotofexamplesforimplementations.`,
/n/n},
/n/n{
/n/n/n/nname:/n_mock.fullName(5),
/n/n/n/npostedDate:/n_mock.time(5),
/n/n/n/nratingNumber:/n_mock.number.rating(5),
/n/n/n/navatarUrl:/n_mock.image.avatar(5),
/n/n/n/ncontent:/n`Gotafewquestionsafterpurchasingtheproduct.Theownerrespondedveryfastandveryhelpfull.Overallthecodeisexcellentandworksverygood.5/5stars!`,
/n/n},
/n/n{
/n/n/n/nname:/n_mock.fullName(6),
/n/n/n/npostedDate:/n_mock.time(6),
/n/n/n/nratingNumber:/n_mock.number.rating(6),
/n/n/n/navatarUrl:/n_mock.image.avatar(6),
/n/n/n/ncontent:/n`CEOofCodealy.iohere.We’vebuiltadeveloperassessmentplatformthatmakessense-tasksarebasedongitrepositoriesandruninvirtualmachines.Weautomatethepainpoints-storingcandidatescode,runningitandsharingtestresultswiththewholeteam,remotely.Boughtthistemplateasweneedtoprovideanawesomedashboardforourearlycustomers.Iamsuperhappywithpurchase.Thecodeisjustasgoodasthedesign.Thanks!`,
/n/n},
];
