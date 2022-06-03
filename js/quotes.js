const quotes = [
    {
        quote:"체력이 약하면 빨리 편안함을 찾게되고 그러면 인내심이 떨어지고 그리고 그 피로감을 견디지 못하면 승부따위는 상관없는 지경에 이르지",
        author:"미생 中, 작가 : 윤태호",
    },
    {
        quote:"기회에도 자격이 있는거다.",
        author:"미생 中, 작가 : 윤태호",
    },
    {
        quote:"순간의 선택이 모여 삶과 인생이된다",
        author:"미생 中, 작가 : 윤태호",
    },
    {
        quote:"기초 없이 이룬 성취는 단계를 오르는 것이 아니라, 성취 후 다시 바닥으로 돌아오게 된다",
        author:"미생 中, 작가 : 윤태호",
    },
    {
        quote:"길이란 걷는 것이 아니다. 걸으면서 나아가기 위한 것이다. 나아가지 못하는 길은 길이 아니다. 길은 모두에게 열려있지만 모두가 그 길을가질 수 있는 것은 아니다.",
        author:"미생 中, 작가 : 윤태호",
    },
    {
        quote:"잊지 말자. 나는 어머니의 자부심이다.",
        author:"미생 中, 작가 : 윤태호",
    },
    {
        quote:"추구할 수 있는 용기가 있다면 우리의 모든 꿈은 이뤄질 수 있다. ",
        author:"월트 디즈니",
    },
    {
        quote:"성공한 사람이 되려고 노력하기보다 가치있는 사람이 되려고 노력하라.",
        author:"알버트 아인슈타인",
    },
    {
        quote:"당신의 인생을 스스로 설계하지 않으면 다른 사람의 계획에 빠져들 가능성이 크다. 남들이 당신을 위해 계획해 놓은 것? 많지 않다.",
        author:"짐 론",
    },
    {
        quote:"모방해서 성공하는 것보다 독창적으로 실패하는 게 더 낫다.",
        author:"허먼 멜빌",
    },
    {
        quote:"나는 학생이 아니라고 생각한적이 없다",
        author:"I",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const toDaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = toDaysQuote.quote;
author.innerText = toDaysQuote.author;

