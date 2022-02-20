const quotes = [
  {
    quote: "Rule 1. Stand up straight with your shoulders straight.",
  },
  {
    quote: "Rule 2. Treat yourself like someone you are responsible for helping.",
  },
  {
    quote: "Rule 3. Befriend people who want the best for you.",
  },
  {
    quote:
      "Rule 4. Compare yourself to who you were yesterday, not the useless person you are today.",
  },
  {
    quote: "Rule 5. Do not let your children do anything that makes you dislike them",
  },
  {
    quote: "Rule 6. Set your house in order before you criticise the world.",
  },
  {
    quote: "Rule 7. Pursue what is meaningful, not what is expedient.",
  },
  {
    quote: "Rule 8. Tell the truth. Or at least don’t lie.",
  },
  {
    quote: "Rule 9. Assume the person you are listening to knows something you don’t.",
  },
  {
    quote: "Rule 10. Be precise in your speech.",
  },
  {
    quote: "Rule 11. Do not bother children while they are skateboarding.",
  },
  {
    quote: "Rule 12. Pet a cat when you encounter one in the street.",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

quote.innerText = quotes[parseInt(Math.random() * quotes.length)].quote;
author.innerText = "- Jordan B. Peterson";
//math.random 랜덤한 수생성, parseInt 정수변환 (math.floor는 음수일때 반내림)
