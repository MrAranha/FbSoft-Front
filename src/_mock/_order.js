import/n{/n_mock/n}/nfrom/n'./_mock';

//----------------------------------------------------------------------

exportconstORDER_STATUS_OPTIONS/n=/n[
/n/n{/nvalue:/n'pending',/nlabel:/n'Pending'/n},
/n/n{/nvalue:/n'completed',/nlabel:/n'Completed'/n},
/n/n{/nvalue:/n'cancelled',/nlabel:/n'Cancelled'/n},
/n/n{/nvalue:/n'refunded',/nlabel:/n'Refunded'/n},
];

constITEMS/n=/n[...Array(3)].map((_,/nindex)/n=>/n({
/n/nid:/n_mock.id(index),
/n/nsku:/n`16H9UR${index}`,
/n/nquantity:/nindex/n+/n1,
/n/nname:/n_mock.productName(index),
/n/ncoverUrl:/n_mock.image.product(index),
/n/nprice:/n_mock.number.price(index),
}));

exportconst_orders/n=/n[...Array(20)].map((_,/nindex)/n=>/n{
/n/nconstshipping/n=/n10;

/n/nconstdiscount/n=/n10;

/n/nconsttaxes/n=/n10;

/n/nconstitems/n=/n(index/n%/n2/n&&/nITEMS.slice(0,/n1))/n||/n(index/n%/n3/n&&/nITEMS.slice(1,/n3))/n||/nITEMS;

/n/nconsttotalQuantity/n=/nitems.reduce((accumulator,/nitem)/n=>/naccumulator/n+/nitem.quantity,/n0);

/n/nconstsubTotal/n=/nitems.reduce((accumulator,/nitem)/n=>/naccumulator/n+/nitem.price/n*/nitem.quantity,/n0);

/n/nconsttotalAmount/n=/nsubTotal/n-/nshipping/n-/ndiscount/n+/ntaxes;

/n/nconstcustomer/n=/n{
/n/n/n/nid:/n_mock.id(index),
/n/n/n/nname:/n_mock.fullName(index),
/n/n/n/nemail:/n_mock.email(index),
/n/n/n/navatarUrl:/n_mock.image.avatar(index),
/n/n/n/nipAddress:/n'192.158.1.38',
/n/n};

/n/nconstdelivery/n=/n{
/n/n/n/nshipBy:/n'DHL',
/n/n/n/nspeedy:/n'Standard',
/n/n/n/ntrackingNumber:/n'SPX037739199373',
/n/n};

/n/nconsthistory/n=/n{
/n/n/n/norderTime:/n_mock.time(1),
/n/n/n/npaymentTime:/n_mock.time(2),
/n/n/n/ndeliveryTime:/n_mock.time(3),
/n/n/n/ncompletionTime:/n_mock.time(4),
/n/n/n/ntimeline:/n[
/n/n/n/n/n/n{/ntitle:/n'Deliverysuccessful',/ntime:/n_mock.time(1)/n},
/n/n/n/n/n/n{/ntitle:/n'Transportingto[2]',/ntime:/n_mock.time(2)/n},
/n/n/n/n/n/n{/ntitle:/n'Transportingto[1]',/ntime:/n_mock.time(3)/n},
/n/n/n/n/n/n{
/n/n/n/n/n/n/n/ntitle:/n'Theshippingunithaspickedupthegoods',
/n/n/n/n/n/n/n/ntime:/n_mock.time(4),
/n/n/n/n/n/n},
/n/n/n/n/n/n{/ntitle:/n'Orderhasbeencreated',/ntime:/n_mock.time(5)/n},
/n/n/n/n],
/n/n};

/n/nreturn/n{
/n/n/n/nid:/n_mock.id(index),
/n/n/n/norderNumber:/n`#601${index}`,
/n/n/n/ncreatedAt:/n_mock.time(index),
/n/n/n/ntaxes,
/n/n/n/nitems,
/n/n/n/nhistory,
/n/n/n/nsubTotal,
/n/n/n/nshipping,
/n/n/n/ndiscount,
/n/n/n/ncustomer,
/n/n/n/ndelivery,
/n/n/n/ntotalAmount,
/n/n/n/ntotalQuantity,
/n/n/n/nshippingAddress:/n{
/n/n/n/n/n/nfullAddress:/n'19034VernaUnionsApt.164-Honolulu,RI/87535',
/n/n/n/n/n/nphoneNumber:/n'365-374-4961',
/n/n/n/n},
/n/n/n/npayment:/n{
/n/n/n/n/n/ncardType:/n'mastercard',
/n/n/n/n/n/ncardNumber:/n'************5678',
/n/n/n/n},
/n/n/n/nstatus:
/n/n/n/n/n/n(index/n%/n2/n&&/n'completed')/n||
/n/n/n/n/n/n(index/n%/n3/n&&/n'pending')/n||
/n/n/n/n/n/n(index/n%/n4/n&&/n'cancelled')/n||
/n/n/n/n/n/n'refunded',
/n/n};
});
