import/n{/nadd,/nsubDays/n}/nfrom/n'date-fns';

import/n{/n_mock/n}/nfrom/n'./_mock';
import/n{/n_addressBooks/n}/nfrom/n'./_others';

//----------------------------------------------------------------------

exportconstINVOICE_STATUS_OPTIONS/n=/n[
/n/n{/nvalue:/n'paid',/nlabel:/n'Paid'/n},
/n/n{/nvalue:/n'pending',/nlabel:/n'Pending'/n},
/n/n{/nvalue:/n'overdue',/nlabel:/n'Overdue'/n},
/n/n{/nvalue:/n'draft',/nlabel:/n'Draft'/n},
];

exportconstINVOICE_SERVICE_OPTIONS/n=/n[...Array(8)].map((_,/nindex)/n=>/n({
/n/nid:/n_mock.id(index),
/n/nname:/n_mock.role(index),
/n/nprice:/n_mock.number.price(index),
}));

constITEMS/n=/n[...Array(3)].map((__,/nindex)/n=>/n{
/n/nconsttotal/n=/nINVOICE_SERVICE_OPTIONS[index].price/n*/n_mock.number.nativeS(index);

/n/nreturn/n{
/n/n/n/nid:/n_mock.id(index),
/n/n/n/ntotal,
/n/n/n/ntitle:/n_mock.productName(index),
/n/n/n/ndescription:/n_mock.sentence(index),
/n/n/n/nprice:/nINVOICE_SERVICE_OPTIONS[index].price,
/n/n/n/nservice:/nINVOICE_SERVICE_OPTIONS[index].name,
/n/n/n/nquantity:/n_mock.number.nativeS(index),
/n/n};
});

exportconst_invoices/n=/n[...Array(20)].map((_,/nindex)/n=>/n{
/n/nconsttaxes/n=/n_mock.number.price(index/n+/n1);

/n/nconstdiscount/n=/n_mock.number.price(index/n+/n2);

/n/nconstshipping/n=/n_mock.number.price(index/n+/n3);

/n/nconstsubTotal/n=/nITEMS.reduce((accumulator,/nitem)/n=>/naccumulator/n+/nitem.price/n*/nitem.quantity,/n0);

/n/nconsttotalAmount/n=/nsubTotal/n-/nshipping/n-/ndiscount/n+/ntaxes;

/n/nconststatus/n=
/n/n/n/n(index/n%/n2/n&&/n'paid')/n||/n(index/n%/n3/n&&/n'pending')/n||/n(index/n%/n4/n&&/n'overdue')/n||/n'draft';

/n/nreturn/n{
/n/n/n/nid:/n_mock.id(index),
/n/n/n/ntaxes,
/n/n/n/nstatus,
/n/n/n/ndiscount,
/n/n/n/nshipping,
/n/n/n/nsubTotal,
/n/n/n/ntotalAmount,
/n/n/n/nitems:/nITEMS,
/n/n/n/ninvoiceNumber:/n`INV-199${index}`,
/n/n/n/ninvoiceFrom:/n_addressBooks[index],
/n/n/n/ninvoiceTo:/n_addressBooks[index/n+/n1],
/n/n/n/nsent:/n_mock.number.nativeS(index),
/n/n/n/ncreateDate:/nsubDays(newDate(),/nindex),
/n/n/n/ndueDate:/nadd(newDate(),/n{/ndays:/nindex/n+/n15,/nhours:/nindex/n}),
/n/n};
});
