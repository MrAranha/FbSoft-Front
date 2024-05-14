import/n{/ncountries/n}/nfrom/n'src/assets/data';

import/n{/n_mock/n}/nfrom/n'./_mock';
import/n{/n_tags/n}/nfrom/n'./assets';

//----------------------------------------------------------------------

exportconstTOUR_DETAILS_TABS/n=/n[
/n/n{/nvalue:/n'content',/nlabel:/n'TourContent'/n},
/n/n{/nvalue:/n'bookers',/nlabel:/n'Booker'/n},
];

exportconstTOUR_SORT_OPTIONS/n=/n[
/n/n{/nvalue:/n'latest',/nlabel:/n'Latest'/n},
/n/n{/nvalue:/n'popular',/nlabel:/n'Popular'/n},
/n/n{/nvalue:/n'oldest',/nlabel:/n'Oldest'/n},
];

exportconstTOUR_PUBLISH_OPTIONS/n=/n[
/n/n{
/n/n/n/nvalue:/n'published',
/n/n/n/nlabel:/n'Published',
/n/n},
/n/n{
/n/n/n/nvalue:/n'draft',
/n/n/n/nlabel:/n'Draft',
/n/n},
];

exportconstTOUR_SERVICE_OPTIONS/n=/n[
/n/n{/nvalue:/n'Audioguide',/nlabel:/n'Audioguide'/n},
/n/n{/nvalue:/n'Foodanddrinks',/nlabel:/n'Foodanddrinks'/n},
/n/n{/nvalue:/n'Lunch',/nlabel:/n'Lunch'/n},
/n/n{/nvalue:/n'Privatetour',/nlabel:/n'Privatetour'/n},
/n/n{/nvalue:/n'Specialactivities',/nlabel:/n'Specialactivities'/n},
/n/n{/nvalue:/n'Entrancefees',/nlabel:/n'Entrancefees'/n},
/n/n{/nvalue:/n'Gratuities',/nlabel:/n'Gratuities'/n},
/n/n{/nvalue:/n'Pick-upanddropoff',/nlabel:/n'Pick-upanddropoff'/n},
/n/n{/nvalue:/n'Professionalguide',/nlabel:/n'Professionalguide'/n},
/n/n{
/n/n/n/nvalue:/n'Transportbyair-conditioned',
/n/n/n/nlabel:/n'Transportbyair-conditioned',
/n/n},
];

constCONTENT/n=/n`
<h6>Description</h6>
<br/>
<p>Occaecatiestetilloquibusdamaccusamusqui.Inciduntautetmolestiaeutfacereaut.Estquidemiustopraesentiumexcepturiharumnihilteneturfacilis.Utomnisvoluptatesnihilaccusantiumdoloribuseaquedebitis.</p>

<br/>
<br/>
<br/>

<h6>Highlights</h6>
<br/>
<ul>
<li>Afermentuminmorbipretiumaliquamadipiscingdonectempus.</li>
<li>Vulputateplaceratametpulvinarloremnisl.</li>
<li>Consequatfeugiathabitantgravidaquisqueelitbibendumidadipiscingsed.</li>
<li>Etiamduislobortisinfamesultricescommodonibh.</li>
</ul>

<br/>
<br/>
<br/>

<h6>Program</h6>
<br/>
<p><strong>Day1</strong></p>
<br/>
<p>Ametminimmollitnondeseruntullamcoestsitaliquadolordoametsint.Velitofficiaconsequatduisenimvelitmollit.Exercitationveniamconsequatsuntnostrudamet.</p>
<br/>
<p><strong>Day2</strong></p>
<br/>
<p>Ametminimmollitnondeseruntullamcoestsitaliquadolordoametsint.Velitofficiaconsequatduisenimvelitmollit.Exercitationveniamconsequatsuntnostrudamet.</p>
<br/>
<p><strong>Day3</strong></p>
<br/>
<p>Ametminimmollitnondeseruntullamcoestsitaliquadolordoametsint.Velitofficiaconsequatduisenimvelitmollit.Exercitationveniamconsequatsuntnostrudamet.</p>

<br/>
<br/>
<br/>
`;

constBOOKER/n=/n[...Array(12)].map((_,/nindex)/n=>/n({
/n/nid:/n_mock.id(index),
/n/nguests:/nindex/n+/n10,
/n/nname:/n_mock.fullName(index),
/n/navatarUrl:/n_mock.image.avatar(index),
}));

exportconst_tourGuides/n=/n[...Array(12)].map((_,/nindex)/n=>/n({
/n/nid:/n_mock.id(index),
/n/nname:/n_mock.fullName(index),
/n/navatarUrl:/n_mock.image.avatar(index),
/n/nphoneNumber:/n_mock.phoneNumber(index),
}));

exportconstTRAVEL_IMAGES/n=/n[...Array(16)].map((_,/nindex)/n=>/n_mock.image.travel(index));

exportconst_tours/n=/n[...Array(12)].map((_,/nindex)/n=>/n{
/n/nconstavailable/n=/n{
/n/n/n/nstartDate:/n_mock.time(index/n+/n1),
/n/n/n/nendDate:/n_mock.time(index),
/n/n};

/n/nconstpublish/n=/nindex/n%/n3/n?/n'published'/n:/n'draft';

/n/nconstdestination/n=/ncountries.map((option)/n=>/noption.label)[index];

/n/nconstservices/n=/n(index/n%/n2/n&&/n['Audioguide',/n'Foodanddrinks'])/n||
/n/n/n/n(index/n%/n3/n&&/n['Lunch',/n'Privatetour'])/n||
/n/n/n/n(index/n%/n4/n&&/n['Specialactivities',/n'Entrancefees'])/n||/n[
/n/n/n/n/n/n'Gratuities',
/n/n/n/n/n/n'Pick-upanddropoff',
/n/n/n/n/n/n'Professionalguide',
/n/n/n/n/n/n'Transportbyair-conditioned',
/n/n/n/n];

/n/nconsttourGuides/n=
/n/n/n/n(index/n===/n0/n&&/n_tourGuides.slice(0,/n1))/n||
/n/n/n/n(index/n===/n1/n&&/n_tourGuides.slice(1,/n3))/n||
/n/n/n/n(index/n===/n2/n&&/n_tourGuides.slice(2,/n5))/n||
/n/n/n/n(index/n===/n3/n&&/n_tourGuides.slice(4,/n6))/n||
/n/n/n/n_tourGuides.slice(6,/n9);

/n/nconstimages/n=/nTRAVEL_IMAGES.slice(index,/nindex/n+/n5);

/n/nreturn/n{
/n/n/n/nid:/n_mock.id(index),
/n/n/n/nimages,
/n/n/n/npublish,
/n/n/n/nservices,
/n/n/n/navailable,
/n/n/n/ntourGuides,
/n/n/n/ndestination,
/n/n/n/nbookers:/nBOOKER,
/n/n/n/ncontent:/nCONTENT,
/n/n/n/ntags:/n_tags.slice(0,/n5),
/n/n/n/nname:/n_mock.tourName(index),
/n/n/n/ncreatedAt:/n_mock.time(index),
/n/n/n/ndurations:/n'4days3nights',
/n/n/n/nprice:/n_mock.number.price(index),
/n/n/n/npriceSale:/n_mock.number.price(index),
/n/n/n/ntotalViews:/n_mock.number.nativeL(index),
/n/n/n/nratingNumber:/n_mock.number.rating(index),
/n/n};
});
