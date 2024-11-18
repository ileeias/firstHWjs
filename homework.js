/* one */
const firstNmae = "ileeias";
const lastName = "Omarov";
const age = 25;
console.log(`Меня зовут ${firstNmae} ${lastName} и мне ${age} лет`);

/* two */
const city = "Zhezkazgan";
console.log("Я родом из города", city + ", но проживаю в городе Астана");

/* three */
const password = "admin";
const hasAccess = Boolean(password);
console.log("hasAccess = " + hasAccess);

/* four */
const isMember = false;
const convIsString = isMember.toString();
console.log(convIsString, "является", typeof convIsString);

/* five */
const cartItems = 0
const cartNoEmpty = Boolean(cartItems);
console.log(cartNoEmpty, "Потому что 0 равен 'false', а всё остальные int будут равны 'true'");

/* six */
let averageScore = 89.75695;
averageScore = averageScore.toFixed(1);
console.log(averageScore);

/* seven */
const greetingMessage = "      Приветствуем вас в мире программирования!        ";
const deleteSpace = greetingMessage.trim();
const isCapsLk = greetingMessage.toUpperCase();
const isStart = greetingMessage.startsWith('программирования');
console.log(deleteSpace + "\n", isCapsLk + "\n", isStart);
