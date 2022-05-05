let a = document.querySelectorAll('link');
let tabA = Object.entries(a);

for(let a=0; a<tabA.length; a++){
  console.log(tabA[a]);
}

let dp = tabA[0]['1']["attributes"].href;
console.log(dp);