 let calculation=localStorage.getItem('recentCalc')||'';
document.querySelector('.js-p').innerHTML=calculation;

        function mathmaticalExpression(v){
            
calculation+=v;
localStorage.setItem('recentCalc',calculation);
document.querySelector('.js-p').innerHTML=calculation;
console.log(calculation);
        }

        function calculate(){
calculation=eval(calculation);
localStorage.setItem('recentCalc',calculation);
document.querySelector('.js-p').innerHTML=`=${calculation}`;
console.log(calculation);
        }

        function clear(){
 
        }