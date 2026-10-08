// --- DATASETS --- //

const hiraganaData = {
    basic: [
        { num: "a", jpText: "あ", romaji: "a" }, { num: "i", jpText: "い", romaji: "i" },
        { num: "u", jpText: "う", romaji: "u" }, { num: "e", jpText: "え", romaji: "e" },
        { num: "o", jpText: "お", romaji: "o" }, { num: "ka", jpText: "か", romaji: "ka" },
        { num: "ki", jpText: "き", romaji: "ki" }, { num: "ku", jpText: "く", romaji: "ku" },
        { num: "ke", jpText: "け", romaji: "ke" }, { num: "ko", jpText: "こ", romaji: "ko" },
        { num: "sa", jpText: "さ", romaji: "sa" }, { num: "shi", jpText: "し", romaji: "shi" },
        { num: "su", jpText: "す", romaji: "su" }, { num: "se", jpText: "せ", romaji: "se" },
        { num: "so", jpText: "そ", romaji: "so" }, { num: "ta", jpText: "た", romaji: "ta" },
        { num: "chi", jpText: "ち", romaji: "chi" }, { num: "tsu", jpText: "つ", romaji: "tsu" },
        { num: "te", jpText: "て", romaji: "te" }, { num: "to", jpText: "と", romaji: "to" },
        { num: "na", jpText: "な", romaji: "na" }, { num: "ni", jpText: "に", romaji: "ni" },
        { num: "nu", jpText: "ぬ", romaji: "nu" }, { num: "ne", jpText: "ね", romaji: "ne" },
        { num: "no", jpText: "の", romaji: "no" }, { num: "ha", jpText: "は", romaji: "ha" },
        { num: "hi", jpText: "ひ", romaji: "hi" }, { num: "fu", jpText: "ふ", romaji: "fu/hu" },
        { num: "he", jpText: "へ", romaji: "he" }, { num: "ho", jpText: "ほ", romaji: "ho" },
        { num: "ma", jpText: "ま", romaji: "ma" }, { num: "mi", jpText: "み", romaji: "mi" },
        { num: "mu", jpText: "む", romaji: "mu" }, { num: "me", jpText: "め", romaji: "me" },
        { num: "mo", jpText: "も", romaji: "mo" }, { num: "ya", jpText: "や", romaji: "ya" },
        { num: "yu", jpText: "ゆ", romaji: "yu" }, { num: "yo", jpText: "よ", romaji: "yo" },
        { num: "ra", jpText: "ら", romaji: "ra" }, { num: "ri", jpText: "り", romaji: "ri" },
        { num: "ru", jpText: "る", romaji: "ru" }, { num: "re", jpText: "れ", romaji: "re" },
        { num: "ro", jpText: "ろ", romaji: "ro" }, { num: "wa", jpText: "わ", romaji: "wa" },
        { num: "wo", jpText: "を", romaji: "wo/o" }, { num: "n", jpText: "ん", romaji: "n" }
    ],
    dakuten: [
        { num: "ga", jpText: "が", romaji: "ga" }, { num: "gi", jpText: "ぎ", romaji: "gi" },
        { num: "gu", jpText: "ぐ", romaji: "gu" }, { num: "ge", jpText: "げ", romaji: "ge" },
        { num: "go", jpText: "ご", romaji: "go" }, { num: "za", jpText: "ざ", romaji: "za" },
        { num: "ji", jpText: "じ", romaji: "ji/zi" }, { num: "zu", jpText: "ず", romaji: "zu" },
        { num: "ze", jpText: "ぜ", romaji: "ze" }, { num: "zo", jpText: "ぞ", romaji: "zo" },
        { num: "da", jpText: "だ", romaji: "da" }, { num: "ji", jpText: "ぢ", romaji: "ji/dji" },
        { num: "zu", jpText: "づ", romaji: "zu/dzu" }, { num: "de", jpText: "で", romaji: "de" },
        { num: "do", jpText: "ど", romaji: "do" }, { num: "ba", jpText: "ば", romaji: "ba" },
        { num: "bi", jpText: "び", romaji: "bi" }, { num: "bu", jpText: "ぶ", romaji: "bu" },
        { num: "be", jpText: "べ", romaji: "be" }, { num: "bo", jpText: "ぼ", romaji: "bo" },
        { num: "pa", jpText: "ぱ", romaji: "pa" }, { num: "pi", jpText: "ぴ", romaji: "pi" },
        { num: "pu", jpText: "ぷ", romaji: "pu" }, { num: "pe", jpText: "ぺ", romaji: "pe" },
        { num: "po", jpText: "ぽ", romaji: "po" }
    ],
    youon: [
        { num: "kya", jpText: "きゃ", romaji: "kya" }, { num: "kyu", jpText: "きゅ", romaji: "kyu" }, { num: "kyo", jpText: "きょ", romaji: "kyo" },
        { num: "sha", jpText: "しゃ", romaji: "sha" }, { num: "shu", jpText: "しゅ", romaji: "shu" }, { num: "sho", jpText: "しょ", romaji: "sho" },
        { num: "cha", jpText: "ちゃ", romaji: "cha" }, { num: "chu", jpText: "ちゅ", romaji: "chu" }, { num: "cho", jpText: "ちょ", romaji: "cho" },
        { num: "nya", jpText: "にゃ", romaji: "nya" }, { num: "nyu", jpText: "にゅ", romaji: "nyu" }, { num: "nyo", jpText: "にょ", romaji: "nyo" },
        { num: "hya", jpText: "ひゃ", romaji: "hya" }, { num: "hyu", jpText: "ひゅ", romaji: "hyu" }, { num: "hyo", jpText: "ひょ", romaji: "hyo" },
        { num: "mya", jpText: "みゃ", romaji: "mya" }, { num: "myu", jpText: "みゅ", romaji: "myu" }, { num: "myo", jpText: "みょ", romaji: "myo" },
        { num: "rya", jpText: "りゃ", romaji: "rya" }, { num: "ryu", jpText: "りゅ", romaji: "ryu" }, { num: "ryo", jpText: "りょ", romaji: "ryo" },
        { num: "gya", jpText: "ぎゃ", romaji: "gya" }, { num: "gyu", jpText: "ぎゅ", romaji: "gyu" }, { num: "gyo", jpText: "ぎょ", romaji: "gyo" },
        { num: "ja", jpText: "じゃ", romaji: "ja/zya" }, { num: "ju", jpText: "じゅ", romaji: "ju/zyu" }, { num: "jo", jpText: "じょ", romaji: "jo/zyo" },
        { num: "bya", jpText: "びゃ", romaji: "bya" }, { num: "byu", jpText: "びゅ", romaji: "byu" }, { num: "byo", jpText: "びょ", romaji: "byo" },
        { num: "pya", jpText: "ぴゃ", romaji: "pya" }, { num: "pyu", jpText: "ぴゅ", romaji: "pyu" }, { num: "pyo", jpText: "ぴょ", romaji: "pyo" }
    ]
};

const katakanaData = {
    basic: [
        { num: "a", jpText: "ア", romaji: "a" }, { num: "i", jpText: "イ", romaji: "i" },
        { num: "u", jpText: "ウ", romaji: "u" }, { num: "e", jpText: "エ", romaji: "e" },
        { num: "o", jpText: "オ", romaji: "o" }, { num: "ka", jpText: "カ", romaji: "ka" },
        { num: "ki", jpText: "キ", romaji: "ki" }, { num: "ku", jpText: "ク", romaji: "ku" },
        { num: "ke", jpText: "ケ", romaji: "ke" }, { num: "ko", jpText: "コ", romaji: "ko" },
        { num: "sa", jpText: "サ", romaji: "sa" }, { num: "shi", jpText: "シ", romaji: "shi" },
        { num: "su", jpText: "ス", romaji: "su" }, { num: "se", jpText: "セ", romaji: "se" },
        { num: "so", jpText: "ソ", romaji: "so" }, { num: "ta", jpText: "タ", romaji: "ta" },
        { num: "chi", jpText: "チ", romaji: "chi" }, { num: "tsu", jpText: "ツ", romaji: "tsu" },
        { num: "te", jpText: "テ", romaji: "te" }, { num: "to", jpText: "ト", romaji: "to" },
        { num: "na", jpText: "ナ", romaji: "na" }, { num: "ni", jpText: "ニ", romaji: "ni" },
        { num: "nu", jpText: "ヌ", romaji: "nu" }, { num: "ne", jpText: "ネ", romaji: "ne" },
        { num: "no", jpText: "ノ", romaji: "no" }, { num: "ha", jpText: "ハ", romaji: "ha" },
        { num: "hi", jpText: "ヒ", romaji: "hi" }, { num: "fu", jpText: "フ", romaji: "fu/hu" },
        { num: "he", jpText: "ヘ", romaji: "he" }, { num: "ho", jpText: "ホ", romaji: "ho" },
        { num: "ma", jpText: "マ", romaji: "ma" }, { num: "mi", jpText: "ミ", romaji: "mi" },
        { num: "mu", jpText: "ム", romaji: "mu" }, { num: "me", jpText: "メ", romaji: "me" },
        { num: "mo", jpText: "モ", romaji: "mo" }, { num: "ya", jpText: "ヤ", romaji: "ya" },
        { num: "yu", jpText: "ユ", romaji: "yu" }, { num: "yo", jpText: "ヨ", romaji: "yo" },
        { num: "ra", jpText: "ラ", romaji: "ra" }, { num: "ri", jpText: "リ", romaji: "ri" },
        { num: "ru", jpText: "ル", romaji: "ru" }, { num: "re", jpText: "レ", romaji: "re" },
        { num: "ro", jpText: "ロ", romaji: "ro" }, { num: "wa", jpText: "ワ", romaji: "wa" },
        { num: "wo", jpText: "ヲ", romaji: "wo/o" }, { num: "n", jpText: "ン", romaji: "n" }
    ],
    dakuten: [
        { num: "ga", jpText: "ガ", romaji: "ga" }, { num: "gi", jpText: "ギ", romaji: "gi" },
        { num: "gu", jpText: "グ", romaji: "gu" }, { num: "ge", jpText: "ゲ", romaji: "ge" },
        { num: "go", jpText: "ゴ", romaji: "ゴ" }, { num: "za", jpText: "ザ", romaji: "za" },
        { num: "ji", jpText: "ジ", romaji: "ji/zi" }, { num: "zu", jpText: "ズ", romaji: "zu" },
        { num: "ze", jpText: "ゼ", romaji: "ze" }, { num: "zo", jpText: "ゾ", romaji: "zo" },
        { num: "da", jpText: "ダ", romaji: "da" }, { num: "ji", jpText: "ヂ", romaji: "ji/dji" },
        { num: "zu", jpText: "ヅ", romaji: "zu/dzu" }, { num: "de", jpText: "デ", romaji: "de" },
        { num: "do", jpText: "ド", romaji: "do" }, { num: "ba", jpText: "バ", romaji: "ba" },
        { num: "bi", jpText: "ビ", romaji: "bi" }, { num: "bu", jpText: "ブ", romaji: "bu" },
        { num: "be", jpText: "ベ", romaji: "be" }, { num: "bo", jpText: "ボ", romaji: "bo" },
        { num: "pa", jpText: "パ", romaji: "pa" }, { num: "pi", jpText: "ピ", romaji: "pi" },
        { num: "pu", jpText: "プ", romaji: "pu" }, { num: "pe", jpText: "ペ", romaji: "pe" },
        { num: "po", jpText: "ポ", romaji: "po" }
    ],
    youon: [
        { num: "kya", jpText: "キャ", romaji: "kya" }, { num: "kyu", jpText: "キュ", romaji: "kyu" }, { num: "kyo", jpText: "キョ", romaji: "kyo" },
        { num: "sha", jpText: "シャ", romaji: "sha" }, { num: "shu", jpText: "シュ", romaji: "shu" }, { num: "sho", jpText: "ショ", romaji: "sho" },
        { num: "cha", jpText: "チャ", romaji: "cha" }, { num: "chu", jpText: "チュ", romaji: "chu" }, { num: "cho", jpText: "チョ", romaji: "cho" },
        { num: "she", jpText: "シェ", romaji: "she" }, { num: "je", jpText: "ジェ", romaji: "je" }, { num: "che", jpText: "チェ", romaji: "che" },
        { num: "tsa", jpText: "ツァ", romaji: "tsa" }, { num: "tsi", jpText: "ツィ", romaji: "tsi" }, { num: "tse", jpText: "ツェ", romaji: "tse" }, { num: "tso", jpText: "ツォ", romaji: "tso" },
        { num: "ti", jpText: "ティ", romaji: "ti" }, { num: "di", jpText: "ディ", romaji: "di" }, { num: "du", jpText: "ドゥ", romaji: "du" },
        { num: "fa", jpText: "ファ", romaji: "fa" }, { num: "fi", jpText: "フィ", romaji: "fi" }, { num: "fe", jpText: "フェ", romaji: "fe" }, { num: "fo", jpText: "フォ", romaji: "fo" },
        { num: "wi", jpText: "ウィ", romaji: "wi" }, { num: "we", jpText: "ウェ", romaji: "we" }, { num: "wo", jpText: "ウォ", romaji: "wo" },
        { num: "va", jpText: "ヴァ", romaji: "va" }, { num: "vi", jpText: "ヴィ", romaji: "vi" }, { num: "ve", jpText: "ヴェ", romaji: "ve" }, { num: "vo", jpText: "ヴォ", romaji: "vo" }
    ]
};

const pdfNumbersData = [
    { num: "0", jpText: "零", romaji: "zero/ree" }, { num: "1", jpText: "一", romaji: "ichi" },
    { num: "2", jpText: "二", romaji: "ni" }, { num: "3", jpText: "三", romaji: "san" },
    { num: "4", jpText: "四", romaji: "yon/shi" }, { num: "5", jpText: "五", romaji: "go" },
    { num: "6", jpText: "六", romaji: "roku" }, { num: "7", jpText: "七", romaji: "nana/shichi" },
    { num: "8", jpText: "八", romaji: "hachi" }, { num: "9", jpText: "九", romaji: "kyuu/ku" },
    { num: "10", jpText: "十", romaji: "juu" }, { num: "11", jpText: "十一", romaji: "juu-ichi" },
    { num: "20", jpText: "二十", romaji: "ni-juu" }, { num: "25", jpText: "二十五", romaji: "ni-juu-go" },
    { num: "30", jpText: "三十", romaji: "san-juu" }, { num: "40", jpText: "四十", romaji: "yon-juu" },
    { num: "50", jpText: "五十", romaji: "go-juu" }, { num: "99", jpText: "九十九", romaji: "kyuu-juu-kyuu" },
    { num: "100", jpText: "百", romaji: "hyaku" }, { num: "200", jpText: "二百", romaji: "ni-hyaku" },
    { num: "300", jpText: "三百", romaji: "sanbyaku" }, { num: "400", jpText: "四百", romaji: "yon-hyaku" },
    { num: "500", jpText: "五百", romaji: "go-hyaku" }, { num: "600", jpText: "六百", romaji: "roppyaku" },
    { num: "700", jpText: "七百", romaji: "nana-hyaku" }, { num: "800", jpText: "八百", romaji: "happyaku" },
    { num: "900", jpText: "九百", romaji: "kyuu-hyaku" }, { num: "1000", jpText: "千", romaji: "sen" },
    { num: "2000", jpText: "二千", romaji: "ni-sen" }, { num: "3000", jpText: "三千", romaji: "sanzen" },
    { num: "4000", jpText: "四千", romaji: "yon-sen" }, { num: "8000", jpText: "八千", romaji: "hassen" },
    { num: "10,000", jpText: "一万", romaji: "ichi-man" }, { num: "50,000", jpText: "五万", romaji: "go-man" },
    { num: "100,000", jpText: "十万", romaji: "juu-man" }
];

const pdfTimeData = [
    { num: "1:00 AM", jpText: "午前1時", romaji: "gozen ichi-ji" },
    { num: "4:00 PM", jpText: "午後4時", romaji: "gogo yo-ji" },
    { num: "7:00 AM", jpText: "午前7時", romaji: "gozen shichi-ji" },
    { num: "9:00 PM", jpText: "午後9時", romaji: "gogo ku-ji" },
    { num: "12:00 PM", jpText: "午後12時", romaji: "gogo juu-ni-ji" },
    { num: "1:30 PM", jpText: "午後1時半", romaji: "gogo ichi-ji-han/gogo ichi-ji san-juppun" },
    { num: "4:30 AM", jpText: "午前4時半", romaji: "gozen yo-ji-han/gozen yo-ji san-juppun" },
    { num: "8:30 PM", jpText: "午後8時半", romaji: "gogo hachi-ji-han/gogo hachi-ji san-juppun" },
    { num: "10:15 AM", jpText: "午前10時15分", romaji: "gozen juu-ji juu-gofun" },
    { num: "2:45 PM", jpText: "午後2時45分", romaji: "gogo ni-ji yon-juu-gofun" }
];

// --- APP STATE --- //
let activeKanaType = 'hiragana'; // 'hiragana' or 'katakana'
let activeKanaCategory = 'basic'; // 'basic', 'dakuten', 'youon', 'all'
let activeKanaMode = 'full'; // 'full' or '50'

let numbersType = 'pdf'; // 'pdf' or 'random'
let timeType = 'pdf'; // 'pdf' or 'random'

let currentKanaList = [];
let currentNumbersList = [];
let currentTimeList = [];

// --- NAVIGATION & SIDEBAR --- //
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
}

function switchView(viewName) {
    // Check if we are currently on index.html
    const isMainPage = window.location.pathname.endsWith('index.html') || 
                       window.location.pathname === '/' || 
                       window.location.pathname.endsWith('/');

    // If on a separate page (like numbers-resource.html), redirect to index.html with the target view
    if (!isMainPage) {
        window.location.href = `index.html?view=${viewName}`;
        return;
    }

    // --- Original Single-Page Toggle Logic for index.html ---
    // Hide all view sections
    document.querySelectorAll('.view-section').forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected view section
    const targetSection = document.getElementById(viewName);
    if (targetSection) {
        targetSection.style.display = 'block';
    }

    // Close the sidebar automatically after selection
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.classList.remove('active');
    }
}

// Automatically load the view from the URL query parameter when redirecting back to index.html
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const view = urlParams.get('view');
    if (view) {
        switchView(view);
    }
});

// --- KANA QUIZ LOGIC --- //
function setKanaCategory(cat) {
    activeKanaCategory = cat;
    ['basic', 'dakuten', 'youon', 'all'].forEach(c => {
        document.getElementById(`btn-kana-${c}`).classList.toggle('active', c === cat);
    });
    generateKanaQuiz();
}

function setKanaMode(mode) {
    activeKanaMode = mode;
    document.getElementById('btn-kana-mode-full').classList.toggle('active', mode === 'full');
    document.getElementById('btn-kana-mode-50').classList.toggle('active', mode === '50');
    generateKanaQuiz();
}

function getKanaPool() {
    const dataSource = activeKanaType === 'hiragana' ? hiraganaData : katakanaData;
    if (activeKanaCategory === 'all') {
        return [...dataSource.basic, ...dataSource.dakuten, ...dataSource.youon];
    }
    return [...dataSource[activeKanaCategory]];
}

function generateKanaQuiz() {
    let pool = getKanaPool();
    if (activeKanaMode === '50') {
        const shuffled = [...pool].sort(() => 0.5 - Math.random());
        currentKanaList = [];
        for (let i = 0; i < 50; i++) {
            currentKanaList.push(shuffled[i % shuffled.length]);
        }
    } else {
        currentKanaList = [...pool].sort(() => 0.5 - Math.random());
    }
    renderGrid('quiz-grid-kana', currentKanaList);
}

// --- NUMBERS QUIZ LOGIC --- //
function setNumbersType(type) {
    numbersType = type;
    document.getElementById('btn-num-pdf').classList.toggle('active', type === 'pdf');
    document.getElementById('btn-num-random').classList.toggle('active', type === 'random');
    generateNumbersQuiz();
}

function generateNumbersQuiz() {
    if (numbersType === 'pdf') {
        currentNumbersList = [...pdfNumbersData].sort(() => 0.5 - Math.random());
    } else {
        currentNumbersList = [];
        for (let i = 0; i < 50; i++) {
            let n = Math.random() < 0.3 ? Math.floor(Math.random() * 1000) : Math.floor(Math.random() * 91 + 10) * 100;
            let conv = convertNumberToJapanese(n);
            let numStr = n >= 1000 ? n.toLocaleString() : n.toString();
            currentNumbersList.push({ num: numStr, jpText: conv.jpText, romaji: conv.romaji });
        }
    }
    renderGrid('quiz-grid-numbers', currentNumbersList);
}

// --- CLOCK TIME QUIZ LOGIC --- //
function setTimeType(type) {
    timeType = type;
    document.getElementById('btn-time-pdf').classList.toggle('active', type === 'pdf');
    document.getElementById('btn-time-random').classList.toggle('active', type === 'random');
    generateTimeQuiz();
}

function generateTimeQuiz() {
    if (timeType === 'pdf') {
        currentTimeList = [...pdfTimeData].sort(() => 0.5 - Math.random());
    } else {
        currentTimeList = [];
        const minuteOptions = [0, 30, 0, 30, 15, 45, 10, 20, 5, 25, 35, 50, 55];
        for (let i = 0; i < 50; i++) {
            const hour = Math.floor(Math.random() * 12) + 1;
            const minute = minuteOptions[Math.floor(Math.random() * minuteOptions.length)];
            const period = Math.random() < 0.5 ? 'AM' : 'PM';
            currentTimeList.push(convertClockTimeToJapanese(hour, minute, period));
        }
    }
    renderGrid('quiz-grid-time', currentTimeList);
}

// --- CONVERTERS --- //
function convertNumberToJapanese(n) {
    if (n === 0) return { jpText: "零", romaji: "zero/ree" };
    if (n === 10000) return { jpText: "一万", romaji: "ichi-man" };

    const kDigits = ["", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
    const rDigits = ["", "ichi", "ni", "san", "yon", "go", "roku", "nana", "hachi", "kyuu"];

    let kT = "", rT = "", kH = "", rH = "", kTe = "", rTe = "", kO = "", rO = [];

    const th = Math.floor(n / 1000), hu = Math.floor((n % 1000) / 100), te = Math.floor((n % 100) / 10), on = n % 10;

    if (th > 0) {
        if (th === 1) { kT = "千"; rT = "sen"; }
        else if (th === 3) { kT = "三千"; rT = "sanzen"; }
        else if (th === 8) { kT = "八千"; rT = "hassen"; }
        else { kT = kDigits[th] + "千"; rT = rDigits[th] + "-sen"; }
    }
    if (hu > 0) {
        if (hu === 1) { kH = "百"; rH = "hyaku"; }
        else if (hu === 3) { kH = "三百"; rH = "sanbyaku"; }
        else if (hu === 4) { kH = "四百"; rH = "yon-hyaku"; }
        else if (hu === 6) { kH = "六百"; rH = "roppyaku"; }
        else if (hu === 8) { kH = "八百"; rH = "happyaku"; }
        else { kH = kDigits[hu] + "百"; rH = rDigits[hu] + "-hyaku"; }
    }
    if (te > 0) {
        if (te === 1) { kTe = "十"; rTe = "juu"; }
        else { kTe = kDigits[te] + "十"; rTe = rDigits[te] + "-juu"; }
    }
    if (on > 0) {
        kO = kDigits[on];
        if (on === 4) rO = ["yon", "shi"];
        else if (on === 7) rO = ["nana", "shichi"];
        else if (on === 9) rO = ["kyuu", "ku"];
        else rO = [rDigits[on]];
    } else { rO = [""]; }

    const jpText = kT + kH + kTe + kO;
    const baseR = [rT, rH, rTe].filter(x => x).join("-");
    let rList = [];
    if (rO[0] !== "") {
        rO.forEach(opt => rList.push(baseR ? `${baseR}-${opt}` : opt));
    } else { if (baseR) rList.push(baseR); }

    return { jpText: jpText, romaji: rList.join("/") };
}

function convertClockTimeToJapanese(hour, minute, period) {
    const pRom = period === 'AM' ? 'gozen' : 'gogo';
    const pJp = period === 'AM' ? '午前' : '午後';

    const hRom = { 1: "ichi-ji", 2: "ni-ji", 3: "san-ji", 4: "yo-ji", 5: "go-ji", 6: "roku-ji", 7: "shichi-ji", 8: "hachi-ji", 9: "ku-ji", 10: "juu-ji", 11: "juu-ichi-ji", 12: "juu-ni-ji" };
    const hJp = { 1: "1時", 2: "2時", 3: "3時", 4: "4時", 5: "5時", 6: "6時", 7: "7時", 8: "8時", 9: "9時", 10: "10時", 11: "11時", 12: "12時" };

    let mJp = "", mRom = [];
    if (minute === 0) {
        mJp = ""; mRom = [""];
    } else if (minute === 30) {
        mJp = "半"; mRom = ["han", "san-juppun"];
    } else {
        mJp = `${minute}分`;
        const tens = Math.floor(minute / 10), ones = minute % 10;
        let tPrefix = tens === 1 ? "juu" : tens === 2 ? "ni-juu" : tens === 3 ? "san-juu" : tens === 4 ? "yon-juu" : "go-juu";
        const onesRom = { 1: "ippun", 2: "nifun", 3: "sanpun", 4: "yonpun", 5: "gofun", 6: "roppun", 7: "nanafun", 8: "happun", 9: "kyuufun" };

        if (ones === 0) {
            let tenExact = tens === 1 ? "juppun" : `${tPrefix.replace("-juu", "")}-juppun`;
            mRom = [tenExact];
        } else if (tens === 0) {
            mRom = [onesRom[ones]];
        } else {
            mRom = [`${tPrefix}-${onesRom[ones]}`];
        }
    }

    const mStr = minute < 10 ? `0${minute}` : `${minute}`;
    const timeNum = `${hour}:${mStr} ${period}`;
    const timeJp = `${pJp}${hJp[hour]}${mJp}`;

    let romajiList = [];
    mRom.forEach(mR => {
        if (mR === "") {
            romajiList.push(`${pRom} ${hRom[hour]}`);
        } else {
            romajiList.push(`${pRom} ${hRom[hour]}-${mR}`);
            romajiList.push(`${pRom} ${hRom[hour]} ${mR}`);
        }
    });

    return { num: timeNum, jpText: timeJp, romaji: romajiList.join("/") };
}

// --- UI RENDER & CHECKER --- //
function renderGrid(containerId, items) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    items.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="prompt-text">${item.jpText}</div>
            <input type="text" placeholder="Romaji..." data-romaji="${item.romaji}" oninput="checkAnswer(this)">
            <div class="answer-hint">${item.romaji}</div>
        `;
        container.appendChild(card);
    });

    document.body.classList.remove('show-answers');
}

function checkAnswer(inputEl) {
    const validAnswersRaw = inputEl.getAttribute('data-romaji');
    const userInput = inputEl.value.toLowerCase().trim().replace(/[\s-]/g, '');
    const validAnswers = validAnswersRaw.split('/').map(a => a.toLowerCase().trim().replace(/[\s-]/g, ''));

    if (userInput === '') {
        inputEl.className = '';
    } else if (validAnswers.includes(userInput)) {
        inputEl.className = 'correct';
    } else {
        inputEl.className = 'incorrect';
    }
}

function toggleAnswers() {
    document.body.classList.toggle('show-answers');
}