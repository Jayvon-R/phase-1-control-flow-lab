function scuberGreetingForFeet(value){
  // Write your code here!
   if (400 >= value){
      return "This one is on me!";
   } else if (value <= 2000){
      return "That will be twenty bucks.";
   } else if (2001 >= value){
      return "I will gladly take your thirty bucks.";
   } else if (value >= 2500){
      return "No can do.";
   }
}

function ternaryCheckCity(isCity){
  // Write your code here!
  const city = "NYC";
  return (isCity === city ? "Ok, sounds good." : "No go.")

}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip){
    case "generous":
      return "Thank you so much."
      break;
    case "not as generous":
      return "Thank you."
      break;
    default:
      return "Bye."
  }
}