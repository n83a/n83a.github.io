const hour = new Date().getHours();

if(hour >= 3　&& hour < 11){
document.getElementById('t1').textContent ="おはようございます";
  
}else if(hour >=11 && hour <17){
document.getElementById('t1').textContent ="こんにちは";
  
}else{
document.getElementById('t1').textContent ="こんばんは";
  
}
