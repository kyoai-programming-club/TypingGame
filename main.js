'use strict';

{
  function check() {
    countdown = endTime - new Date().getTime();
    if (countdown < 0) {
      clearInterval(intervalId);
      const result = document.getElementById('result');
      result.textContent = `終了!! あなたが打った単語数は${uttakazu}です！`;
      countdown = 0;
      target.textContent = '';
      stop = true;
    }

    const totalSeconds = Math.floor(countdown / 1000);

    timer.textContent = totalSeconds;
  }

  function setWord() {
    word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
    target.textContent = word;
    loc = 0;
  }

  const words = [
    'maguro',
    'sanma',
    'ika',
    'tako',
    'si-rakansu',
    'hamati',
    'ayu',
    'ainame',
    'unagi',
    'utubo',
    'anago',
    'itou',
    'inuzame',
    'iwana',
    'ugui',
    'ei',
    'oikawa',
    'oniokoze',
    'katuo',
    'kamasu',
    'kisu',
    'kingyo',
    'kinmedai',
    'kahada',
    'kue',
    'guppi-',
    'kumanomi',
    'koi',
    'sabahugu',
    'sawara',
    'siira',
    'sirokaziki',
    'sifogisu',
    'sirozame',
    'zinbeizame',
    'suzuki',
    'zenitanago',
    'zezera',
    'sougyo',
    'tai',
    'datu',
    'tatunootosigo',
    'tanago',
    'tara',
    'takanohadai',
    'tyouzame',
    'tinnanago',
    'tyoutinnankou',
    'tuna',
    'tetora',
    'tobiuo',
    'torahugu',
    'naiyoubudai',
    'namazu',
    'nigoi',
    'nigisu',
    'nisinn',
    'nizimasu',
    'nutaunagi',
    'nokogiriei',
    'nokogirizame',
    'haigyo',
    'paiku',
    'hanazame',
    'haya',
    'hasu',
    'haze',
    'hirame',
    'himeokoze',
    'huna',
    'burakkubasu',
    'buri',
    'budai',
    'bera',
    'benizake',
    'hokke',
    'houbou',
    'hosizame',
    'masaba',
    'masu',
    'manbou',
    'madai',
    'minokasago',
    'mutu',
    'mutugorou',
    'mezina',
    'medaka',
    'mebati',
    'motugo',
    'yamame',
    'yugou',
    'yoroizame',
  ];

  let stop = false;
  let word;
  let countdown;
  let loc = 0;
  const utta = document.getElementById('utta');
  let uttakazu = 0;


  const target = document.getElementById('target');

  const start = document.getElementById('start');
  const text = document.getElementById('text');
  const turizao = document.getElementById('turizao');
  const wordBox = document.getElementById('word-box');
  const timer = document.getElementById('timer');

  let endTime;
  let intervalId;

  start.addEventListener('click', () => {
    setWord();
    endTime = new Date().getTime() + 120 * 1000;
    intervalId = setInterval(check, 100);

    turizao.classList.add('active');
    text.classList.add('remove');
    wordBox.classList.add('active');
    document.addEventListener('keydown', (e) => {
      if (stop === true) {
        target.textContent = '';
        return;
      }
      if (word[loc] !== e.key) {
        return;
      }
      loc++;
      target.textContent = '_'.repeat(loc) + word.substring(loc);

      if (loc === word.length) {
      
        uttakazu++;
        utta.textContent = uttakazu;
        if (words.length === 0 || stop === true) {
          clearInterval(intervalId);
          const result = document.getElementById('result');
          result.textContent = `終了!! あなたが打った単語数は${uttakazu}です！`;
          return;
        }
        setWord();
      }
    })
  });
}