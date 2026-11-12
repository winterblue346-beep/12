"use strict";

/* ===== 文言(日本語 / English) ===== */
const I18N = {
  ja: {
    appName: "Table Link",
    cardTitle: "飢餓ゼロ ポイントカード",
    protoNote: "プロトタイプです。お金・ポイント・QRコードはすべて架空で、実際の決済や送金は行われません。データはこの端末のブラウザに保存されます。",
    tabGlobe: "地球儀",
    globeHint: "ドラッグで回転できます。赤い印をタップすると、現地の声が届きます。",
    tabActions: "アクション",
    tabPost: "投稿する",
    tabHistory: "履歴",
    tabExchange: "交換",
    cashOpt: "お金(金額を入力)",
    estPts: "獲得予定 +{n}pt(100円あたり{r}pt)",
    rateInfo: "寄付額が大きいほど、100円あたりのポイントが増えます:¥100〜 1pt / ¥500〜 2pt / ¥1,000〜 3pt / ¥5,000〜 4pt",
    amtLabel: "金額(円)",
    badAmount: "100円〜10,000円の間で、100円単位で入力してください",
    nextUpdate: "次の情報更新まで {t}",
    updated: "困っている地域の情報が更新されました",
    wallet: "仮想ウォレット(デモ用のお金)",
    charge: "¥5,000 チャージ",
    charged: "デモ用に¥5,000をチャージしました",
    noMoney: "残高が足りません。チャージしてください。",
    noPoints: "ポイントが足りません。",
    sentTotal: "あなたがここに届けた支援:合計 ¥{y}",
    replyHead: "{c}からの返信",
    exInfo: "ポイントを、架空の決済アプリ「ダミーPay」用のQRコードに交換できます(1pt = ¥1相当)。実在の決済サービスでは使えません。",
    exBtn: "QRコードに交換する",
    exWarn: "架空のコードです(使用不可)",
    exEmpty: "まだ交換していません。",
    ranks: ["たね", "め", "き", "もり"],
    next: "次のランクまであと {n} pt",
    maxRank: "最高ランクです",
    join: "参加する +10pt",
    joined: "参加済み",
    donate: "届ける",
    people: "{n}人が参加",
    perYen: "届けるものを選ぶ",
    fTitle: "タイトル",
    fCountry: "国・地域",
    fDesc: "内容(任意)",
    fSubmit: "投稿して +5pt",
    reset: "データをリセットする",
    resetConfirm: "ポイントと履歴をすべて消します。よろしいですか?",
    hist: { join: "参加", donate: "届けた", post: "投稿", exchange: "交換" },
    histEmpty: "まだ履歴がありません。アクションに参加してみましょう。",
    gotJoin: "参加しました! +{n}pt。現地から返信が届きました",
    gotDonate: "{c}に「{g}」を届けます(デモ)! +{n}pt。現地から返信が届きました",
    gotPost: "投稿しました! +{n}pt",
  },
  en: {
    appName: "Table Link",
    cardTitle: "Zero Hunger Point Card",
    protoNote: "This is a prototype. Money, points and QR codes are all fictional; no real payment or transfer happens. Data stays in this browser.",
    tabGlobe: "Globe",
    globeHint: "Drag to rotate. Tap a red marker to hear from that place.",
    tabActions: "Actions",
    tabPost: "Post",
    tabHistory: "History",
    tabExchange: "Exchange",
    cashOpt: "Money (enter amount)",
    estPts: "You’ll earn +{n} pt ({r} pt per ¥100)",
    rateInfo: "The more you give, the more points per ¥100: ¥100+ 1 pt / ¥500+ 2 pt / ¥1,000+ 3 pt / ¥5,000+ 4 pt",
    amtLabel: "Amount (yen)",
    badAmount: "Enter an amount from ¥100 to ¥10,000 in ¥100 steps",
    nextUpdate: "Next update in {t}",
    updated: "The regions in need have been updated",
    wallet: "Virtual wallet (demo money)",
    charge: "Add ¥5,000",
    charged: "Added ¥5,000 of demo money",
    noMoney: "Not enough balance. Add some demo money.",
    noPoints: "Not enough points.",
    sentTotal: "Total you have sent here: ¥{y}",
    replyHead: "Reply from {c}",
    exInfo: "Exchange points for a QR code for “Dummy Pay,” a fictional payment app (1 pt = ¥1). It does not work with any real payment service.",
    exBtn: "Exchange for QR code",
    exWarn: "Fictional code (cannot be used)",
    exEmpty: "No exchanges yet.",
    ranks: ["Seed", "Sprout", "Tree", "Forest"],
    next: "{n} pt to the next rank",
    maxRank: "Top rank reached",
    join: "Join +10pt",
    joined: "Joined",
    donate: "Send",
    people: "{n} joined",
    perYen: "Choose what to send",
    fTitle: "Title",
    fCountry: "Country / region",
    fDesc: "Details (optional)",
    fSubmit: "Post and earn 5 pt",
    reset: "Reset all data",
    resetConfirm: "This deletes all points and history. Continue?",
    hist: { join: "Joined", donate: "Sent", post: "Posted", exchange: "Exchanged" },
    histEmpty: "No history yet. Try joining an action.",
    gotJoin: "You joined! +{n} pt. A reply has arrived",
    gotDonate: "Sending “{g}” to {c} (demo)! +{n} pt. A reply has arrived",
    gotPost: "Posted! +{n} pt",
  },
};

/* ===== 最初から入っているアクション ===== */
const SEED = [
  { id: "s1", cc: "KE", base: 128, lat: 2.9, lon: 35.6, country: { ja: "ケニア", en: "Kenya" },
    title: { ja: "干ばつの村に食料を届ける", en: "Delivering food to a drought-hit village" },
    desc: { ja: "雨が降らず、トウモロコシの収穫が減っています。", en: "With no rain, the maize harvest has fallen." },
    say: { code: "sw", name: { ja: "スワヒリ語", en: "Swahili" }, text: "Ukame umeharibu mavuno yetu. Tunahitaji chakula kwa ajili ya watoto wetu.",
      ja: "干ばつで収穫がだめになりました。子どもたちのために食べ物が必要です。", en: "The drought has ruined our harvest. We need food for our children." } },
  { id: "s2", cc: "BD", base: 64, lat: 23.8, lon: 90.4, country: { ja: "バングラデシュ", en: "Bangladesh" },
    title: { ja: "洪水で被害を受けた村への食料支援", en: "Food aid for flood-hit villages" },
    desc: { ja: "田んぼが水につかり、今季の米が収穫できません。", en: "Flooded paddies mean no rice harvest this season." },
    say: { code: "bn", name: { ja: "ベンガル語", en: "Bengali" }, text: "বন্যায় আমাদের ফসল নষ্ট হয়ে গেছে। আমাদের খাবার দরকার।",
      ja: "洪水で作物がだめになりました。食べ物が必要です。", en: "The flood destroyed our crops. We need food." } },
  { id: "s3", cc: "SD", base: 212, lat: 15.5, lon: 32.5, country: { ja: "スーダン", en: "Sudan" },
    title: { ja: "子どもたちへの食事と飲み水", en: "Meals and clean water for children" },
    desc: { ja: "避難先で、食料と水が足りていません。", en: "Families who fled are short of food and water." },
    say: { code: "ar", rtl: true, name: { ja: "アラビア語", en: "Arabic" }, text: "نحتاج إلى الطعام والماء النظيف لأطفالنا.",
      ja: "子どもたちのために、食べ物ときれいな水が必要です。", en: "We need food and clean water for our children." } },
  { id: "s4", cc: "GT", base: 95, lat: 14.6, lon: -90.5, country: { ja: "グアテマラ", en: "Guatemala" },
    title: { ja: "農家に種と食料を", en: "Seeds and food for farming families" },
    desc: { ja: "大雨でトウモロコシ畑が流されました。", en: "Heavy rain washed away the corn fields." },
    say: { code: "es", name: { ja: "スペイン語", en: "Spanish" }, text: "Las lluvias arruinaron la cosecha de maíz. Necesitamos semillas y comida.",
      ja: "大雨でトウモロコシの収穫がだめになりました。種と食べ物が必要です。", en: "Heavy rains ruined the corn harvest. We need seeds and food." } },
  { id: "s5", cc: "NE", base: 47, lat: 13.5, lon: 2.1, country: { ja: "ニジェール", en: "Niger" },
    title: { ja: "栄養不足の子どもたちへの食料", en: "Food for undernourished children" },
    desc: { ja: "干ばつが続き、家族の食べ物が足りません。", en: "A long drought has left families short of food." },
    say: { code: "fr", name: { ja: "フランス語", en: "French" }, text: "La sécheresse a détruit nos récoltes. Nous avons besoin de vivres pour nos enfants.",
      ja: "干ばつで作物が枯れました。子どもたちのための食料が必要です。", en: "The drought destroyed our crops. We need food for our children." } },
  { id: "s6", cc: "IN", base: 83, lat: 26.8, lon: 80.9, country: { ja: "インド", en: "India" },
    title: { ja: "村の学校給食を支える", en: "Supporting school meals in a village" },
    desc: { ja: "給食があると、子どもが学校に通い続けられます。", en: "School meals help children keep attending class." },
    say: { code: "hi", name: { ja: "ヒンディー語", en: "Hindi" }, text: "हमारे गाँव के बच्चों को स्कूल में भोजन की ज़रूरत है।",
      ja: "村の子どもたちには、学校で食事が必要です。", en: "The children in our village need meals at school." } },
  { id: "s7", cc: "HT", base: 58, lat: 18.9, lon: -72.5, country: { ja: "ハイチ", en: "Haiti" },
    title: { ja: "ハリケーン被害の村に食料を", en: "Food for hurricane-hit villages" },
    desc: { ja: "畑が流され、市場にも食べ物がありません。", en: "Fields were washed away and the markets are empty." },
    say: { code: "ht", name: { ja: "ハイチ・クレオール語", en: "Haitian Creole" }, text: "Nou bezwen manje pou timoun yo.",
      ja: "子どもたちのために食べ物が必要です。", en: "We need food for the children." } },
  { id: "s8", cc: "MZ", base: 71, lat: -15.5, lon: 36.8, country: { ja: "モザンビーク", en: "Mozambique" },
    title: { ja: "干ばつの農家に食料と水を", en: "Food and water for drought-hit farmers" },
    desc: { ja: "雨が少なく、今年の作物が育ちませんでした。", en: "Little rain meant this year’s crops failed." },
    say: { code: "pt", name: { ja: "ポルトガル語", en: "Portuguese" }, text: "A seca destruiu as nossas colheitas. Precisamos de comida e água para as crianças.",
      ja: "干ばつで作物がだめになりました。子どもたちのために食べ物と水が必要です。", en: "The drought destroyed our crops. We need food and water for the children." } },
  { id: "s9", cc: "PH", base: 39, lat: 15.5, lon: 121.0, country: { ja: "フィリピン", en: "Philippines" },
    title: { ja: "台風で被災した家族への食料支援", en: "Food aid for typhoon-hit families" },
    desc: { ja: "田畑が水につかり、食べ物が足りません。", en: "Flooded farmland has left families short of food." },
    say: { code: "tl", name: { ja: "タガログ語", en: "Tagalog" }, text: "Sinira ng bagyo ang aming mga pananim. Kailangan namin ng pagkain.",
      ja: "台風で作物がだめになりました。食べ物が必要です。", en: "The typhoon destroyed our crops. We need food." } },
  { id: "s10", cc: "ID", base: 52, lat: -7.2, lon: 110.0, country: { ja: "インドネシア", en: "Indonesia" },
    title: { ja: "不作が続く農村への食料支援", en: "Food for farming villages after poor harvests" },
    desc: { ja: "少ない雨で、米の収穫が大きく減りました。", en: "Scarce rain cut the rice harvest sharply." },
    say: { code: "id", name: { ja: "インドネシア語", en: "Indonesian" }, text: "Kekeringan merusak panen kami. Kami butuh makanan untuk anak-anak.",
      ja: "干ばつで収穫がだめになりました。子どもたちのための食べ物が必要です。", en: "The drought ruined our harvest. We need food for the children." } },
  { id: "s11", cc: "AF", base: 76, lat: 34.5, lon: 69.2, country: { ja: "アフガニスタン", en: "Afghanistan" },
    title: { ja: "冬を前に、家族へ食料を", en: "Food for families before winter" },
    desc: { ja: "干ばつで小麦が育たず、冬の備えがありません。", en: "Drought stunted the wheat and winter stocks are low." },
    say: { code: "fa", rtl: true, name: { ja: "ペルシア語(ダリー語)", en: "Persian (Dari)" }, text: "خشکسالی محصولات ما را از بین برد. ما برای کودکانمان غذا می‌خواهیم.",
      ja: "干ばつで作物がだめになりました。子どもたちのために食べ物が必要です。", en: "The drought destroyed our crops. We need food for our children." } },
  { id: "s12", cc: "MG", base: 33, lat: -19.0, lon: 46.5, country: { ja: "マダガスカル", en: "Madagascar" },
    title: { ja: "南部の飢えに苦しむ家族へ", en: "Families facing hunger in the south" },
    desc: { ja: "何か月も雨が降らず、食べ物が尽きかけています。", en: "Months without rain have nearly emptied the food stores." },
    say: { code: "fr", name: { ja: "フランス語", en: "French" }, text: "Il n'a pas plu depuis des mois. Nous avons faim et nous avons besoin d'aide.",
      ja: "何か月も雨が降っていません。私たちはお腹をすかせていて、助けが必要です。", en: "It hasn’t rained for months. We are hungry and need help." } },
];

// ---- 国を増やす(簡易データ)。言語ごとのメッセージは上の6〜12件目のものを使い回す ----
const MSG = {};
SEED.forEach((a) => { MSG[a.say.code] = MSG[a.say.code] || a.say; });
Object.assign(MSG, {
  vi: { code: "vi", name: { ja: "ベトナム語", en: "Vietnamese" }, text: "Hạn hán đã phá hủy mùa màng của chúng tôi. Chúng tôi cần lương thực cho trẻ em.",
    ja: "干ばつで作物がだめになりました。子どもたちのための食べ物が必要です。", en: "The drought destroyed our crops. We need food for the children." },
  ur: { code: "ur", rtl: true, name: { ja: "ウルドゥー語", en: "Urdu" }, text: "خشک سالی نے ہماری فصلیں تباہ کر دیں۔ ہمیں اپنے بچوں کے لیے خوراک چاہیے۔",
    ja: "干ばつで作物がだめになりました。子どもたちのために食べ物が必要です。", en: "The drought destroyed our crops. We need food for our children." },
  th: { code: "th", name: { ja: "タイ語", en: "Thai" }, text: "ภัยแล้งทำให้พืชผลของเราเสียหาย เราต้องการอาหารสำหรับเด็ก ๆ",
    ja: "干ばつで作物がだめになりました。子どもたちのための食べ物が必要です。", en: "The drought destroyed our crops. We need food for the children." },
});
// [国コード, 緯度, 経度, 国名(日本語), 国名(英語), 言語コード]  ※先進国は入れない
[
  ["TZ", -6.5, 35.0, "タンザニア", "Tanzania", "sw"],
  ["CD", -4.3, 21.0, "コンゴ民主共和国", "DR Congo", "fr"],
  ["TD", 13.0, 19.0, "チャド", "Chad", "ar"],
  ["ML", 17.0, -4.0, "マリ", "Mali", "fr"],
  ["AO", -12.5, 17.5, "アンゴラ", "Angola", "pt"],
  ["YE", 15.5, 47.5, "イエメン", "Yemen", "ar"],
  ["VN", 21.0, 105.5, "ベトナム", "Vietnam", "vi"],
  ["BO", -16.5, -64.0, "ボリビア", "Bolivia", "es"],
  ["HN", 14.8, -87.0, "ホンジュラス", "Honduras", "es"],
  ["CO", 4.6, -74.0, "コロンビア", "Colombia", "es"],
  ["BR", -8.0, -40.0, "ブラジル", "Brazil", "pt"],
  ["PK", 30.0, 70.0, "パキスタン", "Pakistan", "ur"],
  ["TH", 16.5, 102.8, "タイ", "Thailand", "th"],
  ["PE", -10.0, -75.0, "ペルー", "Peru", "es"],
  ["GN", 10.5, -11.0, "ギニア", "Guinea", "fr"],
  ["BF", 12.3, -1.5, "ブルキナファソ", "Burkina Faso", "fr"],
  ["CM", 5.9, 12.4, "カメルーン", "Cameroon", "fr"],
  ["PY", -23.4, -58.4, "パラグアイ", "Paraguay", "es"],
].forEach(([cc, lat, lon, ja, en, code], i) => SEED.push({
  id: "s" + (13 + i), cc, base: 20 + ((i * 37) % 90), lat, lon,
  country: { ja, en },
  title: { ja: `${ja}の子どもたちに食料を`, en: `Food for children in ${en}` },
  desc: { ja: "食べ物が足りず、子どもたちが空腹で困っています。", en: "Children are going hungry because food is in short supply." },
  say: MSG[code],
}));

const RANKS = [0, 100, 300, 600];
const POINTS = { join: 10, post: 5 };
// 金額が大きいほど、100円あたりのポイントが増える
const RATES = [{ from: 5000, pt: 4 }, { from: 1000, pt: 3 }, { from: 500, pt: 2 }, { from: 100, pt: 1 }];
const rateFor = (yen) => (RATES.find((r) => yen >= r.from) || { pt: 0 }).pt;
const ptsFor = (yen) => Math.floor(yen / 100) * rateFor(yen);
const ROTATE_MS = 5 * 60 * 1000; // 入れ替わる間隔(動作確認では 10 * 1000 などに短くできます)
const SHOW = 20; // 同時に地球儀に表示する国の数
const T0 = Date.now(); // ページを開いた時刻から数える
// 先進国には支援募集を出さない(国コード。増やしたいときはここに追加)
const DEVELOPED = new Set(["JP", "US", "CA", "GB", "DE", "FR", "IT", "ES", "AU", "NZ", "KR", "SG", "CH", "SE", "NO", "DK", "FI", "NL", "BE", "AT", "IE", "IL"]);
const rotation = () => Math.floor((Date.now() - T0) / ROTATE_MS);
const activeSeed = () => {
  const pool = SEED.filter((a) => !DEVELOPED.has(a.cc));
  const start = (rotation() * 5) % pool.length;
  return Array.from({ length: Math.min(SHOW, pool.length) }, (_, i) => pool[(start + i) % pool.length]);
};
const AMT = { min: 100, max: 10000, step: 100, def: 500 }; // お金の寄付額(円)
const GIFTS = [
  { k: "cash", yen: 0, ja: "お金", en: "Money" }, // 金額は自分で入力
  { k: "food", yen: 500, ja: "食料パック", en: "Food pack" },
  { k: "water", yen: 300, ja: "きれいな水(20L)", en: "Clean water (20 L)" },
  { k: "seed", yen: 400, ja: "種と農具のセット", en: "Seed & tool kit" },
];
const giftLabel = (k, yen) => {
  const g = GIFTS.find((x) => x.k === (k.startsWith("cash") ? "cash" : k));
  if (!g) return "";
  return `${g[lang]}(¥${(g.k === "cash" ? yen || 0 : g.yen).toLocaleString()})`;
};
const giftSelect = () => `<select aria-label="${T().perYen}">${GIFTS.map((g) => `<option value="${g.k}">${esc(g.k === "cash" ? T().cashOpt : giftLabel(g.k))}</option>`).join("")}</select><span class="amt"><label>¥<input type="number" inputmode="numeric" min="${AMT.min}" max="${AMT.max}" step="${AMT.step}" value="${AMT.def}" aria-label="${T().amtLabel}"></label></span><span class="est"></span>`;

/* ===== 保存 ===== */
const load = (k, d) => {
  try { const v = localStorage.getItem("cl_" + k); return v ? JSON.parse(v) : d; } catch { return d; }
};
const save = (k, v) => { try { localStorage.setItem("cl_" + k, JSON.stringify(v)); } catch { /* 保存できなくても動かす */ } };

let lang = load("lang", "ja");
// 現地からの返信:言語コードごとに感謝の言葉を1つ(日本語と英語の訳は共通)
const THANKS = {
  sw: "Asante sana kwa msaada wako!",
  bn: "আপনার সহায়তার জন্য অনেক ধন্যবাদ!",
  ar: "شكرًا جزيلًا على دعمكم!",
  es: "¡Muchas gracias por tu apoyo!",
  fr: "Merci beaucoup pour votre soutien !",
  hi: "आपकी मदद के लिए बहुत-बहुत धन्यवाद!",
  ht: "Mèsi anpil pou sipò w!",
  pt: "Muito obrigado pelo seu apoio!",
  tl: "Maraming salamat sa iyong suporta!",
  id: "Terima kasih banyak atas dukungannya!",
  fa: "از حمایت شما بسیار سپاسگزاریم!",
  vi: "Cảm ơn bạn rất nhiều vì sự giúp đỡ!",
  ur: "آپ کی مدد کا بہت بہت شکریہ!",
  th: "ขอบคุณมากสำหรับความช่วยเหลือของคุณ!",
};
const THANKS_JA = "あなたの支援に心から感謝します!";
const THANKS_EN = "Thank you so much for your support!";
const replyHTML = (a) => {
  if (!a.say || !st.replies[a.id] || !THANKS[a.say.code]) return "";
  return `<div class="reply"><p class="reply-h">${fill(T().replyHead, { c: pick(a.country) })}</p>
    <p class="say" lang="${a.say.code}"${a.say.rtl ? ' dir="rtl"' : ""}>${esc(THANKS[a.say.code])}</p>
    <p class="tr"><b>日本語</b>${THANKS_JA}</p>
    <p class="tr"><b>English</b>${THANKS_EN}</p></div>`;
};
const freshState = () => ({ points: 0, total: 0, money: 10000, history: [], posts: [], joined: [], sent: {}, coupons: [], replies: {} });
let st = { ...freshState(), ...load("state", {}) };
if (!st.total) st.total = st.points;

/* ===== ヘルパー ===== */
const $ = (s, r = document) => r.querySelector(s);
const T = () => I18N[lang];
const fill = (s, o) => s.replace(/\{(\w+)\}/g, (_, k) => o[k]);
const pick = (v) => (typeof v === "string" ? v : v[lang]);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const allActions = () => [...st.posts, ...activeSeed()];

let toastTimer;
function toast(msg) {
  const el = $("#toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2600);
}

function addPoints(type, title, pts, extra = {}) {
  st.points += pts;
  if (pts > 0) st.total += pts;
  st.history.unshift({ type, title, pts, ts: Date.now(), ...extra });
  save("state", st);
  render();
}

/* ===== 描画 ===== */
function renderCard() {
  const p = st.points, tot = st.total;
  let idx = 0;
  RANKS.forEach((r, i) => { if (tot >= r) idx = i; });
  $("#pts").textContent = p.toLocaleString();
  $("#money").textContent = "¥" + st.money.toLocaleString();
  $("#rankName").textContent = T().ranks[idx];
  const next = RANKS[idx + 1];
  if (next === undefined) {
    $("#barFill").style.width = "100%";
    $("#nextInfo").textContent = T().maxRank;
  } else {
    const pct = ((tot - RANKS[idx]) / (next - RANKS[idx])) * 100;
    $("#barFill").style.width = pct + "%";
    $("#nextInfo").textContent = fill(T().next, { n: next - tot });
  }
}

function renderActions() {
  $("#actions").innerHTML = allActions().map((a) => {
    const joined = st.joined.includes(a.id);
    const count = (a.base || 0) + (joined ? 1 : 0) + (a.base === undefined ? 1 : 0);
    return `<article class="item" data-id="${a.id}">
      <p class="meta">${esc(pick(a.country))}</p>
      <h3>${esc(pick(a.title))}</h3>
      ${a.desc && pick(a.desc) ? `<p class="desc">${esc(pick(a.desc))}</p>` : ""}
      <div class="row">
        <button class="primary" data-join ${joined ? "disabled" : ""}>${joined ? T().joined : T().join}</button>
        ${giftSelect()}
        <button class="sub" data-donate>${T().donate}</button>
        <span class="count">${fill(T().people, { n: count })}</span>
      </div>
      ${replyHTML(a)}
    </article>`;
  }).join("");
}

function renderHistory() {
  const box = $("#history");
  if (!st.history.length) { box.innerHTML = `<p class="empty">${T().histEmpty}</p>`; return; }
  const loc = lang === "ja" ? "ja-JP" : "en-US";
  box.innerHTML = st.history.map((h) => `
    <div class="hist">
      <span>${new Date(h.ts).toLocaleDateString(loc)} ${esc(T().hist[h.type])}: ${esc(pick(h.title))}${h.gift ? `(${esc(giftLabel(h.gift, h.yen))})` : ""}</span>
      <b>${h.pts > 0 ? "+" : ""}${h.pts}pt</b>
    </div>`).join("");
}

function applyI18n() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = T()[el.dataset.i18n]; });
  document.querySelectorAll("[data-lang]").forEach((b) => b.classList.toggle("on", b.dataset.lang === lang));
}

function render() {
  applyI18n();
  renderCard();
  renderActions();
  renderHistory();
  renderCoupons();
  refreshGlobeUI();
  refreshEst();
  updateTimer();
}

/* ===== 操作 ===== */
document.querySelectorAll("[data-lang]").forEach((b) => {
  b.addEventListener("click", () => { lang = b.dataset.lang; save("lang", lang); render(); });
});

document.querySelectorAll("[data-tab]").forEach((b) => {
  b.addEventListener("click", () => {
    document.querySelectorAll("[data-tab]").forEach((x) => x.classList.toggle("on", x === b));
    document.querySelectorAll(".panel").forEach((p) => { p.hidden = p.id !== b.dataset.tab; });
  });
});

const onActionClick = (e) => {
  const card = e.target.closest(".item");
  if (!card) return;
  const a = allActions().find((x) => x.id === card.dataset.id);
  if (!a) return;

  if (e.target.closest("[data-join]")) {
    if (st.joined.includes(a.id)) return;
    st.joined.push(a.id);
    st.replies[a.id] = true;
    addPoints("join", a.title, POINTS.join);
    toast(fill(T().gotJoin, { n: POINTS.join }));
  }
  if (e.target.closest("[data-donate]")) {
    const g = GIFTS.find((x) => x.k === $("select", card).value);
    let yen = g.yen;
    if (g.k === "cash") {
      yen = Number($(".amt input", card).value);
      if (!Number.isInteger(yen) || yen < AMT.min || yen > AMT.max || yen % AMT.step) { toast(T().badAmount); return; }
    }
    if (st.money < yen) { toast(T().noMoney); return; }
    const pts = ptsFor(yen);
    st.money -= yen;
    st.sent[a.id] = (st.sent[a.id] || 0) + yen;
    st.replies[a.id] = true;
    addPoints("donate", a.title, pts, { gift: g.k, yen });
    toast(fill(T().gotDonate, { g: giftLabel(g.k, yen), c: pick(a.country), n: pts }));
  }
};
$("#actions").addEventListener("click", onActionClick);
const toggleAmt = (e) => {
  if (!e.target.matches("select")) return;
  const w = e.target.closest(".row").querySelector(".amt");
  if (w) w.hidden = e.target.value !== "cash";
};
function updateEst(row) {
  const sel = row.querySelector("select"), el = row.querySelector(".est");
  if (!sel || !el) return;
  const g = GIFTS.find((x) => x.k === sel.value);
  const yen = g.k === "cash" ? Number(row.querySelector(".amt input").value) : g.yen;
  const valid = g.k !== "cash" || (Number.isInteger(yen) && yen >= AMT.min && yen <= AMT.max && yen % AMT.step === 0);
  el.textContent = valid ? fill(T().estPts, { n: ptsFor(yen), r: rateFor(yen) }) : "";
}
const refreshEst = () => document.querySelectorAll(".row .est").forEach((el) => updateEst(el.closest(".row")));
const onFormChange = (e) => {
  toggleAmt(e);
  const row = e.target.closest(".row");
  if (row) updateEst(row);
};
["change", "input"].forEach((ev) => $("#actions").addEventListener(ev, onFormChange));

$("#postForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const title = $("#fTitle").value.trim();
  const country = $("#fCountry").value.trim();
  if (!title || !country) return;
  st.posts.unshift({ id: "p" + Date.now(), title, country, desc: $("#fDesc").value.trim() });
  e.target.reset();
  addPoints("post", title, POINTS.post);
  toast(fill(T().gotPost, { n: POINTS.post }));
  document.querySelector('[data-tab="actions"]').click();
});

$("#reset").addEventListener("click", () => {
  if (!confirm(T().resetConfirm)) return;
  st = freshState();
  save("state", st);
  render();
});


/* ===== 地球儀(海=青、陸=緑のシンプルな図) ===== */
const LAND = [
  // アフリカ
  [[-17,21],[-13,28],[-9,32],[-5,36],[10,37],[11,33],[20,31],[32,31],[34,28],[37,21],[43,12],[51,12],[48,5],[40,-3],[40,-15],[35,-24],[32,-29],[26,-34],[18,-34],[12,-17],[13,-6],[9,4],[-8,4],[-15,11]],
  // ユーラシア
  [[-9,37],[-9,43],[-2,43.5],[-4.5,48],[2,51],[5,53],[8,54],[8,58],[5,62],[14,68],[25,71],[40,68],[60,68],[70,73],[90,76],[110,77],[140,72],[170,70],[180,68],[180,65],[170,60],[163,58],[156,51],[142,54],[140,48],[132,43],[129,40],[129,36],[126,34.5],[126,38],[122,40],[119,37],[122,31],[119,25],[110,21],[108,21.5],[106,18],[109,12],[105,9],[100,13.5],[100,7],[103,1.5],[99,6],[98,10],[98,16],[94,17],[92,22],[88,22],[86,20],[80,15],[80,10],[77,8],[73,16],[72.5,21],[68,23.5],[66,25],[57,25.5],[59,22.5],[55,17],[52,16],[44,12.7],[43,15],[39,22],[35,28],[34.5,31],[36,36],[30,36.5],[27,37],[26,40],[29,41],[27,41],[24,40.5],[23,36.5],[21,38.5],[19.5,41],[18,40],[16,38],[15.5,40],[12,42],[10,44],[7,43.5],[3,43],[0,39],[-2,37],[-5,36]],
  // 北アメリカ
  [[-168,66],[-165,69],[-140,70],[-125,70],[-95,72],[-82,70],[-80,63],[-94,59],[-80,52],[-78,58],[-65,60],[-60,55],[-55,52],[-66,45],[-70,43],[-76,38],[-81,31],[-80,26],[-82,27],[-84,30],[-90,29],[-97,26],[-97,21],[-90,21],[-87,21],[-88,16],[-83,15],[-83,10],[-79,9],[-77.5,8.5],[-80,7.5],[-86,11],[-92,14],[-97,16],[-105,20],[-110,24],[-115,30],[-117,33],[-122,37],[-124,42],[-124,48],[-130,54],[-138,59],[-148,60],[-155,58],[-165,54],[-158,58],[-162,63]],
  // 南アメリカ
  [[-77,8],[-72,12],[-62,10.5],[-52,5],[-50,0],[-44,-2],[-35,-5],[-39,-14],[-41,-22],[-48,-26],[-53,-34],[-58,-38],[-65,-41],[-66,-47],[-69,-52],[-72,-54],[-74,-48],[-73,-37],[-71,-30],[-70,-18],[-76,-14],[-81,-5],[-80,0],[-78,3]],
  // オーストラリア
  [[114,-22],[122,-18],[130,-12],[136,-12],[137,-16],[142,-11],[146,-19],[153,-26],[150,-37],[141,-38],[131,-31],[115,-34]],
  // グリーンランド / イギリス / 日本 / マダガスカル / スマトラ / ボルネオ / ジャワ
  [[-73,78],[-20,82],[-18,76],[-22,70],[-43,60],[-52,66],[-58,75]],
  [[-5,50],[1,51],[2,53],[-2,57],[-5,58.5],[-6,56],[-3,54]],
  [[131,34],[135,33.5],[140,35],[141,38],[142,41],[140,41],[139.5,38],[136,36.5],[132,35.5]],
  [[44,-25],[47,-25],[50,-15],[49,-12],[44,-17]],
  [[95,5.5],[98,4],[104,-2],[106,-6],[102,-4],[96,2]],
  [[109,1],[117,7],[119,1],[116,-4],[110,-3]],
  [[105,-6],[114,-7.5],[114,-8.5],[106,-7]],
  [[120,18.5],[122,18.5],[122,14],[124,12.5],[121,13.5],[120,15]],
  [[122,11],[125,11],[126,7],[125,6],[122,7.5]],
  [[-74.4,18.4],[-72.8,19.9],[-69.8,19.7],[-68.4,18.6],[-71,17.7],[-73.9,18]],
];

const RAD = Math.PI / 180;
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const wrap = $("#globeWrap"), cv = $("#globe"), ctx = cv.getContext("2d"), bubble = $("#bubble");
const needs = () => activeSeed().filter((a) => a.say);
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
let size = 0, R = 0, dpr = 1, rotL = 0, rotP = 10, sel = "s1", dragging = false, drag = null, target = null;

function toXY(lon, lat) {
  const l = (lon - rotL) * RAD, p = lat * RAD, p0 = rotP * RAD, c = Math.cos(p);
  return {
    x: c * Math.sin(l),
    y: Math.cos(p0) * Math.sin(p) - Math.sin(p0) * c * Math.cos(l),
    v: Math.sin(p0) * Math.sin(p) + Math.cos(p0) * c * Math.cos(l) > 0,
  };
}
function scr(q, edge) {
  let { x, y } = q;
  if (edge && !q.v) { const h = Math.hypot(x, y) || 1; x /= h; y /= h; }
  return [size / 2 + x * R, size / 2 - y * R];
}

function drawRing(ring) {
  const pts = [];
  let any = false;
  for (let i = 0; i < ring.length; i++) {
    const a = ring[i], b = ring[(i + 1) % ring.length];
    const n = Math.max(1, Math.ceil(Math.max(Math.abs(b[0] - a[0]), Math.abs(b[1] - a[1])) / 4));
    for (let k = 0; k < n; k++) {
      const q = toXY(a[0] + ((b[0] - a[0]) * k) / n, a[1] + ((b[1] - a[1]) * k) / n);
      if (q.v) any = true;
      pts.push(scr(q, true));
    }
  }
  if (!any) return;
  ctx.beginPath();
  pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}

function gridLine(pts) {
  let pen = false;
  ctx.beginPath();
  for (const [lo, la] of pts) {
    const q = toXY(lo, la);
    if (!q.v) { pen = false; continue; }
    const [x, y] = scr(q);
    if (pen) ctx.lineTo(x, y); else ctx.moveTo(x, y);
    pen = true;
  }
  ctx.stroke();
}

function draw(now) {
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, size, size);
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, R, 0, 2 * Math.PI);
  ctx.fillStyle = "#3d8fd1";
  ctx.fill();

  ctx.strokeStyle = "rgba(255,255,255,.2)";
  ctx.lineWidth = 1;
  for (let la = -60; la <= 60; la += 30) gridLine(Array.from({ length: 73 }, (_, i) => [-180 + i * 5, la]));
  for (let lo = -180; lo < 180; lo += 30) gridLine(Array.from({ length: 37 }, (_, i) => [lo, -90 + i * 5]));

  ctx.fillStyle = "#62b35b";
  ctx.strokeStyle = "#4a9a47";
  LAND.forEach(drawRing);

  ctx.beginPath();
  ctx.arc(size / 2, size / 2, R, 0, 2 * Math.PI);
  ctx.strokeStyle = "#2a6aa3";
  ctx.lineWidth = 2;
  ctx.stroke();

  for (const a of needs()) {
    const q = toXY(a.lon, a.lat);
    if (!q.v) continue;
    const [x, y] = scr(q);
    const on = a.id === sel;
    if (!reduceMotion) {
      const t = ((((now / 1100) + a.lon / 90) % 1) + 1) % 1; // 負の経度でも 0〜1 に収める
      ctx.beginPath();
      ctx.arc(x, y, 6 + t * 14, 0, 2 * Math.PI);
      ctx.strokeStyle = `rgba(228,87,46,${1 - t})`;
      ctx.lineWidth = 2;
      ctx.stroke();
    }
    ctx.beginPath();
    ctx.arc(x, y, on ? 7.5 : 5.5, 0, 2 * Math.PI);
    ctx.fillStyle = "#e4572e";
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#fff";
    ctx.stroke();
  }
}

function placeBubble() {
  const a = needs().find((n) => n.id === sel);
  if (!a) return;
  const q = toXY(a.lon, a.lat);
  bubble.style.visibility = q.v ? "visible" : "hidden";
  if (!q.v) return;
  const [x, y] = scr(q);
  const w = bubble.offsetWidth, h = bubble.offsetHeight;
  const left = clamp(x - w / 2, 4, size - w - 4);
  const above = y - h - 14 >= 4;
  bubble.classList.toggle("below", !above);
  bubble.style.left = left + "px";
  bubble.style.top = (above ? y - h - 14 : y + 14) + "px";
  bubble.style.setProperty("--tx", clamp(x - left, 16, w - 16) + "px");
}

function frame(now) {
  const w = wrap.clientWidth;
  if (w) {
    if (w !== size) {
      size = w; dpr = window.devicePixelRatio || 1; R = size * 0.46;
      cv.width = cv.height = size * dpr;
      cv.style.width = cv.style.height = size + "px";
    }
    if (!dragging) {
      if (target) {
        const dL = ((target.L - rotL + 540) % 360) - 180;
        rotL += dL * 0.1;
        rotP += (target.P - rotP) * 0.1;
        if (Math.abs(dL) < 0.1 && Math.abs(target.P - rotP) < 0.1) target = null;
      } else if (!sel && !reduceMotion) rotL += 0.12;
    }
    rotL = ((rotL + 540) % 360) - 180;
    try { draw(now); placeBubble(); } catch (err) { console.error(err); } // 描画で失敗しても回転は止めない
  }
  requestAnimationFrame(frame);
}

function select(id) {
  sel = id;
  const a = needs().find((n) => n.id === id);
  if (a) {
    target = { L: a.lon, P: clamp(a.lat * 0.5, -30, 40) };
    if (reduceMotion) { rotL = target.L; rotP = target.P; target = null; }
  }
  refreshGlobeUI();
}

function refreshGlobeUI() {
  $("#chips").innerHTML = needs().map((a) =>
    `<button data-need="${a.id}" class="${a.id === sel ? "on" : ""}">${esc(pick(a.country))}</button>`).join("");
  const a = needs().find((n) => n.id === sel);
  bubble.hidden = !a;
  if (!a) return;
  const joined = st.joined.includes(a.id), s = a.say;
  bubble.innerHTML = `<button class="x" data-close aria-label="Close">×</button>
    <div class="item flat" data-id="${a.id}">
      <p class="meta">${esc(pick(a.country))} / ${esc(pick(s.name))}</p>
      <p class="say" lang="${s.code}"${s.rtl ? ' dir="rtl"' : ""}>${esc(s.text)}</p>
      <p class="tr"><b>日本語</b>${esc(s.ja)}</p>
      <p class="tr"><b>English</b>${esc(s.en)}</p>
      ${st.sent[a.id] ? `<p class="sent">${fill(T().sentTotal, { y: st.sent[a.id].toLocaleString() })}</p>` : ""}
      <div class="row">
        <button class="primary" data-join ${joined ? "disabled" : ""}>${joined ? T().joined : T().join}</button>
        ${giftSelect()}
        <button class="sub" data-donate>${T().donate}</button>
      </div>
      ${replyHTML(a)}
    </div>`;
  refreshEst();
}

cv.addEventListener("pointerdown", (e) => {
  drag = { sx: e.clientX, sy: e.clientY, x: e.clientX, y: e.clientY, moved: false };
  dragging = true; target = null;
  cv.setPointerCapture(e.pointerId);
});
cv.addEventListener("pointermove", (e) => {
  if (!drag) return;
  if (Math.abs(e.clientX - drag.sx) + Math.abs(e.clientY - drag.sy) > 5) drag.moved = true;
  rotL -= (e.clientX - drag.x) * 0.4;
  rotP = clamp(rotP + (e.clientY - drag.y) * 0.4, -60, 60);
  drag.x = e.clientX; drag.y = e.clientY;
});
const endDrag = (e) => {
  if (!drag) return;
  const tap = !drag.moved;
  drag = null; dragging = false;
  if (!tap || e.type === "pointercancel") return;
  const r = cv.getBoundingClientRect(), px = e.clientX - r.left, py = e.clientY - r.top;
  let best = null, bd = 22;
  for (const a of needs()) {
    const q = toXY(a.lon, a.lat);
    if (!q.v) continue;
    const [x, y] = scr(q), d = Math.hypot(x - px, y - py);
    if (d < bd) { bd = d; best = a.id; }
  }
  if (best) select(best);
};
cv.addEventListener("pointerup", endDrag);
cv.addEventListener("pointercancel", endDrag);

$("#chips").addEventListener("click", (e) => {
  const b = e.target.closest("[data-need]");
  if (b) select(b.dataset.need);
});
bubble.addEventListener("click", (e) => {
  if (e.target.closest("[data-close]")) { select(null); return; }
  onActionClick(e);
});
["change", "input"].forEach((ev) => bubble.addEventListener(ev, onFormChange));

select("s1");
requestAnimationFrame(frame);


/* ===== ポイント交換(架空のQRコード) ===== */
function fakeQR(code) {
  const N = 25;
  let x = 2166136261;
  for (const c of code) x = Math.imul(x ^ c.charCodeAt(0), 16777619);
  x = (x >>> 0) || 1;
  const rnd = () => { x ^= x << 13; x >>>= 0; x ^= x >>> 17; x ^= x << 5; x >>>= 0; return x / 4294967296; };
  let r = "";
  for (let y = 0; y < N; y++) {
    for (let c = 0; c < N; c++) {
      let on = rnd() < 0.5;
      for (const ox of [0, N - 7]) {
        const fx = c - ox;
        if (fx >= -1 && fx <= 7 && y >= -1 && y <= 7) {
          on = fx >= 0 && fx <= 6 && y <= 6 && (fx % 6 === 0 || y % 6 === 0 || (fx >= 2 && fx <= 4 && y >= 2 && y <= 4));
        }
      }
      if (on) r += `<rect x="${c}" y="${y}" width="1" height="1"/>`;
    }
  }
  // 左下の目印をわざと省き、SAMPLEの文字を重ねて、読み取れない見本にしている
  return `<svg viewBox="0 0 ${N} ${N}" shape-rendering="crispEdges" role="img" aria-label="Sample QR">${r}<text x="12.5" y="14.2" font-size="5.2" text-anchor="middle" transform="rotate(-25 12.5 12.5)" fill="#e4572e" stroke="#fff" stroke-width=".7" paint-order="stroke" font-weight="900" font-family="sans-serif">SAMPLE</text></svg>`;
}

function renderCoupons() {
  $("#coupons").innerHTML = st.coupons.length
    ? st.coupons.map((c) => `<div class="coupon"><div class="qr">${fakeQR(c.code)}</div><div><b>¥${c.yen.toLocaleString()}</b><p class="code">${c.code}</p><p class="warn">${T().exWarn}</p></div></div>`).join("")
    : `<p class="empty">${T().exEmpty}</p>`;
}

$("#exBtn").addEventListener("click", () => {
  const pts = Number($("#exAmt").value);
  if (st.points < pts) { toast(T().noPoints); return; }
  const code = "DEMO-" + Date.now().toString(36).toUpperCase().slice(-6) + "-" + Math.random().toString(36).slice(2, 6).toUpperCase();
  st.coupons.unshift({ code, yen: pts, ts: Date.now() });
  addPoints("exchange", { ja: `ダミーPay用QR(¥${pts})`, en: `Dummy Pay QR (¥${pts})` }, -pts);
});

$("#charge").addEventListener("click", () => {
  st.money += 5000;
  save("state", st);
  render();
  toast(T().charged);
});


/* ===== 時間経過での入れ替え ===== */
function updateTimer() {
  const left = ROTATE_MS - ((Date.now() - T0) % ROTATE_MS);
  const m = Math.floor(left / 60000), sec = String(Math.floor(left / 1000) % 60).padStart(2, "0");
  $("#timer").textContent = fill(T().nextUpdate, { t: `${m}:${sec}` });
}
let lastRot = rotation();
setInterval(() => {
  if (rotation() !== lastRot) {
    lastRot = rotation();
    const list = needs();
    if (sel && !list.some((a) => a.id === sel)) select(list.length ? list[0].id : null);
    render();
    toast(T().updated);
  }
  updateTimer();
}, 1000);

render();