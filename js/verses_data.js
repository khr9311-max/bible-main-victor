/**
 * 말씀 성경 통합 포털 - 오늘의 은혜의 말씀 데이터셋
 */
const BIBLE_VERSES = [
    {
        reference: "시편 119:105",
        text: "주의 말씀은 내 발에 등이요 내 길에 빛이니이다.",
        english: "Your word is a lamp to my feet and a light to my path. (Psalm 119:105)",
        category: "인도와 지혜",
        theme: "light"
    },
    {
        reference: "로마서 8:1-2",
        text: "그러므로 이제 그리스도 예수 안에 있는 자에게는 결코 정죄함이 없나니 이는 그리스도 예수 안에 있는 생명의 성령의 법이 죄와 사망의 법에서 너를 해방하였음이라.",
        english: "There is therefore now no condemnation for those who are in Christ Jesus. (Romans 8:1)",
        category: "구원과 확신",
        theme: "salvation"
    },
    {
        reference: "여호수아 1:9",
        text: "내가 네게 명령한 것이 아니냐 강하고 담대하라 두려워하지 말며 놀라지 말라 네가 어디로 가든지 네 하나님 여호와가 너와 함께 하느니라 하시니라.",
        english: "Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go. (Joshua 1:9)",
        category: "용기와 위로",
        theme: "courage"
    },
    {
        reference: "빌립보서 4:6-7",
        text: "아무 것도 염려하지 말고 다만 모든 일에 기도와 간구로, 너희 구할 것을 감사함으로 하나님께 아뢰라 그리하면 모든 지각에 뛰어난 하나님의 평강이 그리스도 예수 안에서 너희 마음과 생각을 지키시리라.",
        english: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. (Philippians 4:6)",
        category: "평안과 기도",
        theme: "peace"
    },
    {
        reference: "요한복음 3:16",
        text: "하나님이 세상을 이처럼 사랑하사 독생자를 주셨으니 이는 그를 믿는 자마다 멸망하지 않고 영생을 얻게 하려 하심이라.",
        english: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. (John 3:16)",
        category: "하나님의 사랑",
        theme: "love"
    },
    {
        reference: "이사야 41:10",
        text: "두려워하지 말라 내가 너와 함께 함이라 놀라지 말라 나는 네 하나님이 됨이라 내가 너를 굳세게 하리라 참으로 너를 도와 주리라 참으로 나의 의로운 오른손으로 너를 붙들리라.",
        english: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you. (Isaiah 41:10)",
        category: "동행과 보호",
        theme: "protection"
    },
    {
        reference: "잠언 3:5-6",
        text: "너는 마음을 다하여 여호와를 신뢰하고 네 명철을 의지하지 말라 너는 범사에 그를 인정하라 그리하면 네 길을 지도하시리라.",
        english: "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight. (Proverbs 3:5-6)",
        category: "신뢰와 순종",
        theme: "trust"
    },
    {
        reference: "마태복음 6:33",
        text: "그런즉 너희는 먼저 그의 나라와 그의 의를 구하라 그리하면 이 모든 것을 너희에게 더하시리라.",
        english: "But seek first his kingdom and his righteousness, and all these things will be given to you as well. (Matthew 6:33)",
        category: "우선순위와 섭리",
        theme: "kingdom"
    },
    {
        reference: "로마서 8:28",
        text: "우리가 알거니와 하나님을 사랑하는 자 곧 그의 뜻대로 부르심을 입은 자들에게는 모든 것이 합력하여 선을 이루느니라.",
        english: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose. (Romans 8:28)",
        category: "소망과 확신",
        theme: "hope"
    },
    {
        reference: "갈라디아서 2:20",
        text: "내가 그리스도와 함께 십자가에 못 박혔나니 그런즉 이제는 내가 사는 것이 아니요 오직 내 안에 그리스도께서 사시는 것이라 이제 내가 육체 가운데 사는 것은 나를 사랑하사 나를 위하여 자기 자신을 버리신 하나님의 아들을 믿는 믿음 안에서 사는 것이라.",
        english: "I have been crucified with Christ and I no longer live, but Christ lives in me. (Galatians 2:20)",
        category: "그리스도인의 삶",
        theme: "discipleship"
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { BIBLE_VERSES };
}
