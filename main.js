let companyName = 'SHTHappens, Inc.';
let anOffering = 'a revolutionary new platform';
let aTargetAudience = 'the universe';
let solveAProblem = 'create new businesses for dynamic markets';
let secretSauce = 'by building invite-only Internets';

// your code, here
let pitch = document.getElementById('main');
pitch.innerHTML = 'My company, '+ companyName +',\nis developing ' +
anOffering + '\nto help ' + aTargetAudience +'\n' +
solveAProblem + '\n' + secretSauce + '.';

console.log(pitch);
