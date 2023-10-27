//Rearrange Letters: Capitals First, Lowercase Last

function capToFront(str) {
            let cap= "";
            let nocap = "";
            for (let i = 0; i < str.length; i++) {

                 if (str[i] == str[i].toUpperCase()) {
                  cap += str[i];
                }
                else {
                  nocap += str[i];
                }
              }
              return cap+nocap;
            }

   

console.log(capToFront("shOrtCAKE"));
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"));
