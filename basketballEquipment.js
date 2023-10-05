/*
Баскетболни кецове – цената им е 40% по-малка от таксата за една година

• Баскетболен екип – цената му е 20% по-евтина от тази на кецовете

• Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип

• Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка

*/


function basketballEquipment(index) {
    let annualPrice = Number(index[0]);

   let sneakers = annualPrice*0.6;
   let team = sneakers*0.8;
   let ball = team*0.25;
   let accessories = ball*0.2;

   let sum = annualPrice+sneakers+team+ball+accessories;
   console.log(sum);
    
}
basketballEquipment(["550 "])