// PaskalCase, snake-case, kebab case -> stilovi na pisuvanje na varijabli
const studenti = [
  { ime: "Bojan", prosek: 7.5, grad: "Skopje" },
  { ime: "Pero", prosek: 8.3, grad: "Bitola" },
  { ime: "Janko", prosek: 6.9, grad: "Bitola" },
  { ime: "Vesna", prosek: 9.2, grad: "Skopje" },
  { ime: "Elena", prosek: 9.9, grad: "Kumanovo" },
  { ime: "Vancho", prosek: 10, grad: "Tetovo" },
  { ime: "Elena", prosek: 9.9, grad: "Ohrid" },
  { ime: "Ivana", prosek: 6.9, grad: "Kumanovo" },
  { ime: "Natasha", prosek: 8.1, grad: "Skopje" },
  { ime: "Stanko", prosek: 7.2, grad: "Strumica" },
];

// const skopje = studenti.map((st) => {}); // gi imame site studenti od gradot skopje
// const prosekSkopje = skopje.reduce((acc, curr) => acc.prosek + curr.prosek, {});
// let prosekSkopje = 0;
// for (let i = 0; i < skopje.length; i++) {
//   prosekSkopje += skopje[i].prosek;
// }

// console.log("skopje", prosekSkopje);

// 1. Сите студенти од Скопје чие име завршува на а и имаат просек над 7, подредени по име (растечки).

// camelCase
const studentiSkopjeProsekNadSedum = studenti
  .filter(
    (student) =>
      student.grad === "Skopje" &&
      student.ime.endsWith("a") &&
      student.prosek > 7
  )
  .sort((a, b) => {
    if (a.ime < b.ime) return -1;
    else if (a.ime > b.ime) return 1;
    return 0;
  });

console.log(
  "studenti od skopje so prosek nad 7 i zavrsuvat na a",
  studentiSkopjeProsekNadSedum
);

// 2. Сите студенти кои имаат просек над 9 и не се од Скопје, подредени по просек опаѓачки.
const studentiDrugiGradoviProsekNadDevet = studenti
  .filter((student) => student.prosek > 9 && student.grad !== "Skopje")
  .sort((a, b) => b.prosek - a.prosek);

console.log(
  "studenti koi ne se od skopje so prosek nad 9",
  studentiDrugiGradoviProsekNadDevet
);

// 3. Првите 3 студенти кои имаат имиња од 5 карактери, подредени по просек.
const prviTriStudentiSoPetKarakteri = studenti
  .filter((student) => student.ime.length === 5)
  .sort((a, b) => a.prosek - b.prosek)
  .slice(0, 3);

console.log(
  "prvi tri studenti so pet karakteri",
  prviTriStudentiSoPetKarakteri
);

// 4. Градови подредени по групна висина на просек.

// 5. Вкупен просек на студенти чие име завршува на а наспроти сите останати.
const studentiKoiZavrsuvaatNaA = studenti.filter((st) => st.ime.endsWith("a"));

let prosekStudentiKoiZavrsuvaatNaA = 0;
for (const student of studentiKoiZavrsuvaatNaA) {
  prosekStudentiKoiZavrsuvaatNaA += student.prosek;
}

const studentiKoiNeZavrsuvaatNaA = studenti.filter(
  (st) => !st.ime.endsWith("a")
);

let prosekStudentiKoiNeZavrsuvaatNaA = 0;

for (const student of studentiKoiNeZavrsuvaatNaA) {
  prosekStudentiKoiNeZavrsuvaatNaA += student.prosek;
}

console.log(
  "Prosek studenti koi zavrsuvaat na a",
  prosekStudentiKoiZavrsuvaatNaA
);
console.log(
  "Prosek studenti koi ne zavrsuvaat na a",
  prosekStudentiKoiNeZavrsuvaatNaA
);
