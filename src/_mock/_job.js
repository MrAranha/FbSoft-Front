import/n{/ncountries/n}/nfrom/n'src/assets/data';

import/n{/n_mock/n}/nfrom/n'./_mock';

//----------------------------------------------------------------------

exportconstJOB_DETAILS_TABS/n=/n[
/n/n{/nvalue:/n'content',/nlabel:/n'JobContent'/n},
/n/n{/nvalue:/n'candidates',/nlabel:/n'Candidates'/n},
];

exportconstJOB_SKILL_OPTIONS/n=/n[
/n/n'UI',
/n/n'UX',
/n/n'Html',
/n/n'JavaScript',
/n/n'TypeScript',
/n/n'Communication',
/n/n'ProblemSolving',
/n/n'Leadership',
/n/n'TimeManagement',
/n/n'Adaptability',
/n/n'Collaboration',
/n/n'Creativity',
/n/n'CriticalThinking',
/n/n'TechnicalSkills',
/n/n'CustomerService',
/n/n'ProjectManagement',
/n/n'ProblemDiagnosis',
];

exportconstJOB_WORKING_SCHEDULE_OPTIONS/n=/n['MondaytoFriday',/n'Weekendavailability',/n'Dayshift'];

exportconstJOB_EMPLOYMENT_TYPE_OPTIONS/n=/n[
/n/n{/nvalue:/n'Full-time',/nlabel:/n'Full-time'/n},
/n/n{/nvalue:/n'Part-time',/nlabel:/n'Part-time'/n},
/n/n{/nvalue:/n'OnDemand',/nlabel:/n'OnDemand'/n},
/n/n{/nvalue:/n'Negotiable',/nlabel:/n'Negotiable'/n},
];

exportconstJOB_EXPERIENCE_OPTIONS/n=/n[
/n/n{/nvalue:/n'Noexperience',/nlabel:/n'Noexperience'/n},
/n/n{/nvalue:/n'1yearexp',/nlabel:/n'1yearexp'/n},
/n/n{/nvalue:/n'2yearexp',/nlabel:/n'2yearexp'/n},
/n/n{/nvalue:/n'>3yearexp',/nlabel:/n'>3yearexp'/n},
];

exportconstJOB_BENEFIT_OPTIONS/n=/n[
/n/n{/nvalue:/n'Freeparking',/nlabel:/n'Freeparking'/n},
/n/n{/nvalue:/n'Bonuscommission',/nlabel:/n'Bonuscommission'/n},
/n/n{/nvalue:/n'Travel',/nlabel:/n'Travel'/n},
/n/n{/nvalue:/n'Devicesupport',/nlabel:/n'Devicesupport'/n},
/n/n{/nvalue:/n'Healthcare',/nlabel:/n'Healthcare'/n},
/n/n{/nvalue:/n'Training',/nlabel:/n'Training'/n},
/n/n{/nvalue:/n'HealthInsurance',/nlabel:/n'HealthInsurance'/n},
/n/n{/nvalue:/n'RetirementPlans',/nlabel:/n'RetirementPlans'/n},
/n/n{/nvalue:/n'PaidTimeOff',/nlabel:/n'PaidTimeOff'/n},
/n/n{/nvalue:/n'FlexibleWorkSchedule',/nlabel:/n'FlexibleWorkSchedule'/n},
];

exportconstJOB_PUBLISH_OPTIONS/n=/n[
/n/n{
/n/n/n/nvalue:/n'published',
/n/n/n/nlabel:/n'Published',
/n/n},
/n/n{
/n/n/n/nvalue:/n'draft',
/n/n/n/nlabel:/n'Draft',
/n/n},
];

exportconstJOB_SORT_OPTIONS/n=/n[
/n/n{/nvalue:/n'latest',/nlabel:/n'Latest'/n},
/n/n{/nvalue:/n'popular',/nlabel:/n'Popular'/n},
/n/n{/nvalue:/n'oldest',/nlabel:/n'Oldest'/n},
];

constCANDIDATES/n=/n[...Array(12)].map((_,/nindex)/n=>/n({
/n/nid:/n_mock.id(index),
/n/nrole:/n_mock.role(index),
/n/nname:/n_mock.fullName(index),
/n/navatarUrl:/n_mock.image.avatar(index),
}));

constCONTENT/n=/n`
<h6>JobDescription</h6>
<br/>

<p>Occaecatiestetilloquibusdamaccusamusqui.Inciduntautetmolestiaeutfacereaut.Estquidemiustopraesentiumexcepturiharumnihilteneturfacilis.Utomnisvoluptatesnihilaccusantiumdoloribuseaquedebitis.</p>

<br/>
<br/>

<h6>KeyResponsibilities</h6>
<br/>
<ul>
<li>Workingwithagencyfordesigndrawingdetail,quotationandlocalproduction.</li>
<li>Producewindowdisplays,signs,interiordisplays,floorplansandspecialpromotionsdisplays.</li>
<li>Changedisplaystopromotenewproductlaunchesandreflectfestiveorseasonalthemes.</li>
<li>Planningandexecutingtheopen/renovation/closingstoreprocedure.</li>
<li>Follow‐upstoremaintenanceprocedureandkeepupdatingSKUIn&amp;Out.</li>
<li>Monitorcostsandworkwithinbudget.</li>
<li>Liaisewithsuppliersandsourceelements.</li>
</ul>

<br/>
<br/>

<h6>WhyYou'llLoveWorkingHere</h6>
<br/>
<ul>
<li>Workingwithagencyfordesigndrawingdetail,quotationandlocalproduction.</li>
<li>Producewindowdisplays,signs,interiordisplays,floorplansandspecialpromotionsdisplays.</li>
<li>Changedisplaystopromotenewproductlaunchesandreflectfestiveorseasonalthemes.</li>
<li>Planningandexecutingtheopen/renovation/closingstoreprocedure.</li>
<li>Follow‐upstoremaintenanceprocedureandkeepupdatingSKUIn&amp;Out.</li>
<li>Monitorcostsandworkwithinbudget.</li>
<li>Liaisewithsuppliersandsourceelements.</li>
</ul>
`;

exportconst_jobs/n=/n[...Array(12)].map((_,/nindex)/n=>/n{
/n/nconstpublish/n=/nindex/n%/n3/n?/n'published'/n:/n'draft';

/n/nconstsalary/n=/n{
/n/n/n/ntype:/n(index/n%/n5/n&&/n'Custom')/n||/n'Hourly',
/n/n/n/nprice:/n_mock.number.price(index),
/n/n/n/nnegotiable:/n_mock.boolean(index),
/n/n};

/n/nconstbenefits/n=/nJOB_BENEFIT_OPTIONS.slice(0,/n3).map((option)/n=>/noption.label);

/n/nconstexperience/n=
/n/n/n/nJOB_EXPERIENCE_OPTIONS.map((option)/n=>/noption.label)[index]/n||/nJOB_EXPERIENCE_OPTIONS[1].label;

/n/nconstemploymentTypes/n=/n(index/n%/n2/n&&/n['Part-time'])/n||
/n/n/n/n(index/n%/n3/n&&/n['OnDemand'])/n||
/n/n/n/n(index/n%/n4/n&&/n['Negotiable'])/n||/n['Full-time'];

/n/nconstcompany/n=/n{
/n/n/n/nname:/n_mock.companyName(index),
/n/n/n/nlogo:/n_mock.image.company(index),
/n/n/n/nphoneNumber:/n_mock.phoneNumber(index),
/n/n/n/nfullAddress:/n_mock.fullAddress(index),
/n/n};

/n/nconstlocations/n=/ncountries.slice(1,/nindex/n+/n2).map((option)/n=>/noption.label);

/n/nreturn/n{
/n/n/n/nid:/n_mock.id(index),
/n/n/n/nsalary,
/n/n/n/npublish,
/n/n/n/ncompany,
/n/n/n/nbenefits,
/n/n/n/nlocations,
/n/n/n/nexperience,
/n/n/n/nemploymentTypes,
/n/n/n/ncontent:/nCONTENT,
/n/n/n/ncandidates:/nCANDIDATES,
/n/n/n/nrole:/n_mock.role(index),
/n/n/n/ntitle:/n_mock.jobTitle(index),
/n/n/n/ncreatedAt:/n_mock.time(index),
/n/n/n/nexpiredDate:/n_mock.time(index),
/n/n/n/nskills:/nJOB_SKILL_OPTIONS.slice(0,/n3),
/n/n/n/ntotalViews:/n_mock.number.nativeL(index),
/n/n/n/nworkingSchedule:/nJOB_WORKING_SCHEDULE_OPTIONS.slice(0,/n2),
/n/n};
});
