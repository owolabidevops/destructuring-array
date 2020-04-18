const details=['wes bos',123,'wesbos.com'];
const [name,id,website]=details;
console.log(name,id,website);

const data='basketball,sports,90210,23';
const [itemname,category,sku,inventory]=data.split(',');
console.log(itemname,category,sku,inventory);

const team= ['wes','harry','sarah','keegan','riker'];
const [captain,assistant,...players]=team;
console.log(captain,assistant,...players);

//the rest operator ...