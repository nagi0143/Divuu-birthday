// ==========================================
// DIVUU'S 20TH BIRTHDAY
// PART 1 - STARS
// ==========================================
function preloadImage(src) {
  const img = new Image();
  img.src = src;
}

const starsLayer = document.getElementById("stars");

function createStars(){

for(let i=0;i<250;i++){

const star=document.createElement("div");

const size=Math.random()*3+1;

star.className="star";

star.style.width=size+"px";

star.style.height=size+"px";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=(Math.random()*5)+"s";

star.style.animationDuration=(2+Math.random()*4)+"s";

starsLayer.appendChild(star);

}

}

createStars();

//=========================================
// FIREFLIES
//=========================================

const firefliesLayer = document.getElementById("fireflies");

function createFireflies(){

for(let i=0;i<25;i++){

const firefly=document.createElement("div");

firefly.className="firefly";

firefly.style.left=Math.random()*100+"vw";

firefly.style.top=Math.random()*100+"vh";

firefly.style.animationDelay=Math.random()*10+"s";

firefly.style.animationDuration=(8+Math.random()*10)+"s";

firefly.style.setProperty("--x",(Math.random()*300-150)+"px");

firefly.style.setProperty("--y",(Math.random()*300-150)+"px");

firefliesLayer.appendChild(firefly);

}

}

createFireflies();

//=========================================
// FOUR LEAF CLOVERS
//=========================================

const cloverLayer=document.getElementById("clovers");

function createClovers(){

for(let i=0;i<12;i++){

const clover=document.createElement("div");

clover.className="clover";

clover.innerHTML="🍀";

clover.style.left=Math.random()*100+"vw";

clover.style.top=(Math.random()*120+100)+"vh";

clover.style.fontSize=(18+Math.random()*16)+"px";

clover.style.animationDuration=(18+Math.random()*12)+"s";

clover.style.animationDelay=Math.random()*8+"s";

clover.style.opacity=.15+Math.random()*.25;

clover.style.transform=`rotate(${Math.random()*360}deg)`;

cloverLayer.appendChild(clover);

}

}

createClovers();

//=========================================
// FLOATING HEARTS
//=========================================

const heartsLayer=document.getElementById("hearts");

function createHearts(){

for(let i=0;i<5;i++){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="💖";

heart.style.left=Math.random()*100+"vw";

heart.style.top=(100+Math.random()*40)+"vh";

heart.style.fontSize=(12+Math.random()*18)+"px";

heart.style.animationDuration=(15+Math.random()*12)+"s";

heart.style.animationDelay=Math.random()*8+"s";

heart.style.opacity=.05+Math.random()*.10;

heart.style.transform=`rotate(${Math.random()*25-12}deg)`;

heartsLayer.appendChild(heart);

}

}

createHearts();

//=========================================
// MAGIC SPARKLES
//=========================================

const sparklesLayer=document.getElementById("sparkles");

function createSparkles(){

for(let i=0;i<40;i++){

const sparkle=document.createElement("div");

sparkle.className="sparkle";

sparkle.style.left=Math.random()*100+"vw";

sparkle.style.top=Math.random()*100+"vh";

sparkle.style.animationDelay=Math.random()*8+"s";

sparkle.style.animationDuration=(6+Math.random()*6)+"s";

sparkle.style.width=(2+Math.random()*3)+"px";

sparkle.style.height=sparkle.style.width;

sparklesLayer.appendChild(sparkle);

}

}

createSparkles();

//=========================================
// PAGE TRANSITION
//=========================================

// ==========================================
// PAGE 1 TO PAGE 2
// ==========================================

const enterBtn = document.getElementById("enterBtn");

const app = document.getElementById("app");

const birthdayPage = document.getElementById("birthdayPage");


enterBtn.addEventListener("click",()=>{

app.style.display="none";

birthdayPage.style.display="flex";


setTimeout(()=>{

const video = document.getElementById("birthdayVideo");

video.play();

},500);

});



// ==========================================
// PAGE 2 TO CAKE PAGE
// ==========================================

const birthdayNextBtn =
document.getElementById("birthdayNextBtn");


const cakePage =
document.getElementById("cakePage");


birthdayNextBtn.addEventListener("click",()=>{
  const video = document.getElementById("birthdayVideo");
  video.pause();
  birthdayPage.style.display="none";
  cakePage.style.display="flex";
});

// ==========================================
// PAGE 3: MAGICAL CAKE FUNCTIONS
// ==========================================

// Birthday song audio
let birthdaySong = null;

// Initialize birthday song
function initBirthdaySong() {
    birthdaySong = new Audio('birthday.mp3');
    birthdaySong.volume = 0.07;
}

// Blow candles function
function blowTheCandles() {
    const flames = document.querySelectorAll('.flame-real');
    const blowBtn = document.getElementById('blowBtn');
    const wishesSection = document.getElementById('wishesSection');
    const celebrationMsg = document.getElementById('celebrationMsg');
    const nextBtn = document.getElementById('cakeNextBtn');
    const cakeAura = document.getElementById('cakeAura');
    
    // Disable button
    blowBtn.disabled = true;
    blowBtn.innerHTML = '<span>✨</span><span>Candles Blown!</span><span>✨</span>';
    
    // Blow out flames one by one
    flames.forEach((flame, index) => {
        setTimeout(() => {
            flame.classList.add('out');
        }, index * 300);
    });
    
    // After all candles blown
    setTimeout(() => {
        // Initialize and play birthday song
        if (!birthdaySong) {
            initBirthdaySong();
        }
        birthdaySong.play().catch(e => console.log("Audio play failed:", e));
        
        // Show cake aura
        cakeAura.classList.add('active');
        
        // Hide wishes, show celebration
        wishesSection.style.display = 'none';
        celebrationMsg.style.display = 'block';
        
        // Fireworks
        startCakeFireworks();
        
        // Show next button after delay
        setTimeout(() => {
            nextBtn.style.display = 'flex';
        }, 3000);
        
    }, 1500);
}

// Fireworks effect
function startCakeFireworks() {
    const container = document.getElementById('fireworksBox');
    const colors = ['#FFD700', '#FF69B4', '#00CED1', '#FF6347', '#7B68EE', '#32CD32', '#FF1493'];
    
    // Create multiple fireworks
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            createCakeFirework(container, colors);
        }, i * 400);
    }
    
    // Continue fireworks
    let count = 0;
    const interval = setInterval(() => {
        createCakeFirework(container, colors);
        count++;
        if (count > 12) clearInterval(interval);
    }, 600);
}

function createCakeFirework(container, colors) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * (window.innerHeight * 0.6);
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    // Create explosion particles
    for (let i = 0; i < 16; i++) {
        const particle = document.createElement('div');
        particle.className = 'firework-particle';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.background = color;
        particle.style.boxShadow = `0 0 10px ${color}`;
        
        const angle = (Math.PI * 2 * i) / 16;
        const velocity = 80 + Math.random() * 80;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        particle.style.setProperty('--x', vx + 'px');
        particle.style.setProperty('--y', vy + 'px');
        
        container.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
}

// Stop birthday song when leaving page
function stopBirthdaySong() {
    if (birthdaySong) {
        birthdaySong.pause();
        birthdaySong.currentTime = 0;
    }
}

// Update existing navigation to handle cake page
// Add this to your existing page navigation logic

// ==========================================
// PAGE 4: QUIZ INFO FUNCTIONS
// ==========================================

// Quiz page pe jaane ke liye - Cake page se
// Yeh function already hai tumhare paas, bas check kar lo

// Agar cake page se quiz page pe jaana hai toh:
// cakeNextBtn pe click se goToPage(4) call hota hai

// Quiz start hone ke baad - Question 1 dikhao
function startQuiz() {
    console.log("Quiz started!");
    // Yahan question 1 load hoga
    // Next step mein banayenge
}

// ==========================================
// NAVIGATION UPDATE - Cake se Quiz
// ==========================================

// ==========================================
// CAKE PAGE → STORY INTRO PAGE
// ==========================================
const storyIntroPage = document.getElementById('storyIntroPage');
const storyIntroNextBtn = document.getElementById('storyIntroNextBtn');

document.getElementById('cakeNextBtn').addEventListener('click', () => {
  cakePage.style.display = 'none';
  storyIntroPage.style.display = 'flex';
  stopBirthdaySong();
  startBgMusic();
});

storyIntroNextBtn.addEventListener('click', () => {
  storyIntroPage.style.display = 'none';
  storyGalleryPage.style.display = 'flex';
  storyIndex = 0;
  renderStorySlide();
});

// ==========================================
// STORY GALLERY — 33 BUBU + CELEBRATION + 4 CAKE PICS
// ==========================================
const storyGalleryPage = document.getElementById('storyGalleryPage');

const storyItems = [];
for (let i = 1; i <= 33; i++) {
  let ext = 'jpeg';
  if (i === 1) ext = 'jpg';
  if (i === 31) ext = 'gif';
  storyItems.push({ type: 'photo', src: `bubu${i}.${ext}`, caption: 'Hamari zindagi, kuch aisi khoobsurat hai 🍀' });
}
storyItems.push({ type: 'celebration' });
['cake1', 'cake2', 'cake4', 'cake5'].forEach((name) => {
  storyItems.push({ type: 'photo', src: `${name}.jpeg`, caption: 'Happy Birthday ka pyara sa pal 🎂🍀' });
});

const totalPhotos = storyItems.filter(i => i.type === 'photo').length; // 37
let storyIndex = 0;

const galleryFrame = document.getElementById('galleryFrame');
const galleryImg = document.getElementById('galleryImg');
const galleryPhotoSlide = document.getElementById('galleryPhotoSlide');
const galleryCelebrationSlide = document.getElementById('galleryCelebrationSlide');
const galleryCaption = document.getElementById('galleryCaption');
const galleryCounter = document.getElementById('galleryCounter');
const galleryBackBtn = document.getElementById('galleryBackBtn');
const galleryNextBtn = document.getElementById('galleryNextBtn');

function renderStorySlide() {
  const item = storyItems[storyIndex];

  if (item.type === 'photo') {
    galleryPhotoSlide.style.display = 'flex';
    galleryCelebrationSlide.style.display = 'none';
    galleryImg.src = item.src;
    galleryCaption.textContent = item.caption;
    const photoNumber = storyItems.slice(0, storyIndex + 1).filter(i => i.type === 'photo').length;
    galleryCounter.textContent = `${photoNumber} / ${totalPhotos}`;
  } else {
    galleryPhotoSlide.style.display = 'none';
    galleryCelebrationSlide.style.display = 'flex';
    galleryCaption.textContent = '';
    galleryCounter.textContent = '✨';
  }

  galleryBackBtn.disabled = storyIndex === 0;
  galleryNextBtn.textContent = storyIndex === storyItems.length - 1 ? 'Yehi Tak ✨' : 'Aage →';

  galleryFrame.classList.remove('slide-anim');
  void galleryFrame.offsetWidth;
  galleryFrame.classList.add('slide-anim');

if (storyIndex < storyItems.length - 1) {
    const nextItem = storyItems[storyIndex + 1];
    if (nextItem.type === 'photo') preloadImage(nextItem.src);
}
  

galleryBackBtn.addEventListener('click', () => {
  if (storyIndex > 0) { storyIndex--; renderStorySlide(); }
});
const quizIntroPage = document.getElementById('quizIntroPage');
const quizIntroNextBtn = document.getElementById('quizIntroNextBtn');

galleryNextBtn.addEventListener('click', () => {
  if (storyIndex < storyItems.length - 1) {
    storyIndex++;
    renderStorySlide();
  } else {
    storyGalleryPage.style.display = 'none';
    quizIntroPage.style.display = 'flex';
  }
});

// Placeholder — Question 1 agle part mein connect hoga
quizIntroNextBtn.addEventListener('click', () => {
  quizIntroPage.style.display = 'none';
  quizPage.style.display = 'flex';
  currentQuestionIndex = 0;
  quizAnswers = [];
  renderQuizQuestion();
});

// ==========================================
// QUIZ - 20 ROMANTIC FANTASY QUESTIONS
// ==========================================
const quizPage = document.getElementById('quizPage');
const quizQuestionEl = document.getElementById('quizQuestion');
const quizOptionsEl = document.getElementById('quizOptions');
const quizCounterEl = document.getElementById('quizCounter');
const quizProgressBar = document.getElementById('quizProgressBar');

const quizQuestions = [
  { q: "Agar hum ek fairytale kingdom mein hote, tum kya banti?", options: ["Ek shararati princess", "Duniya jeetne wali queen", "Jaadu jaanne wali witch (sirf tumhare liye)", "Raaton ko udaan bharne wali pari", "Dragon ko bhi pet bana le wali warrior"] },
  { q: "Sabse pehli baar jab maine tumhe dekha, mere dil ne kya socha hoga?", options: ["Yeh meri kahani ki heroine hai", "Bas ek nazar mein hi kaam tamam ho gaya", "Ab toh yehi 'happily ever after' hai", "Isi se shaadi karni hai", "Seedha crush ho gaya"] },
  { q: "Agar main tumhara Disney prince hota, sabse pehle kya karta?", options: ["Tumhe dragon se bacha leta", "Ek magical dance pe le jaata", "Poori duniya tumhare pair mein daal deta", "Chup ke se love letter chhod jaata", "Seedha propose kar deta"] },
  { q: "Hamari love story ka genre kya hoga?", options: ["Fantasy Romance ✨", "Comedy jisme dono pagal hain 😂", "Epic jisme dragon aur destiny dono hain", "Fairytale jisme koi villain hi nahi", "Sabse cutest rom-com ever"] },
  { q: "Meri sabse pyari aadat kaunsi hai (tumhare hisaab se)?", options: ["Har baat pe hasana", "Chhoti cheezon mein bhi surprise dena", "Tumhare liye kuch bhi karna", "Tumhe teasing karna 😏", "Bas pyaar karte rehna"] },
  { q: "Agar hum jaadui jungle mein kho jaate, tum sabse pehle kya karti?", options: ["Haath pakad ke bolti 'raasta dhoondhte hain'", "Mujhe hi blame karti 😂", "Ek magical creature dhoondh leti", "Bolti 'yahin ruk jaate hain, romantic hai'", "Seedha meri godi mein baith jaati"] },
  { q: "Tumhe sabse zyada kis waqt pyaar aata hai mujhpe?", options: ["Jab main bewakoofi karta hoon", "Jab main surprise deta hoon", "Jab tumhari baat dhyan se sunta hoon", "Jab main tumhe hasata hoon", "Hamesha hi toh aata hai 🍀"] },
  { q: "Agar main jaadui lamp ka genie hota, tumhari pehli wish kya hoti?", options: ["Hamesha saath rehna", "Duniya ki saari khushiyan tumhare liye", "Ek permanent 'no fighting' spell", "Har roz ek naya surprise", "Bas mujhe hamesha apna banana"] },
  { q: "Sabse romantic date jo hum kar sakte hain?", options: ["Stars ke neeche candlelight dinner", "Ek magical castle tour", "Beach pe sunset walk", "Ghar pe movie + tumhare favorite snacks", "Jahan bhi ho, bas saath ho"] },
  { q: "Agar duniya ka sabse bada dragon hamla kar de, tum kya karogi?", options: ["Mujhe bachane bhaagogi", "Dragon ko hi dost bana logi", "Mere peeche chup jaogi 😂", "Khud dragon se ladne nikal jaogi", "Haath pakad ke bologi 'saath denge'"] },
  { q: "Meri sabse pyaari quality kya hai jo prince jaisa lagta hai?", options: ["Tumhe hamesha pehle rakhna", "Meri caring nature", "Tumhe hasana", "Loyal hona", "Sab kuch — tum biased ho 😉"] },
  { q: "Agar hum masquerade ball mein hote, tum mujhe kaise pehchanti?", options: ["Aankhon se, mask ke peeche bhi", "Style dekhke", "Hasi sunke", "Dil se pata chal jaata", "Main pehle hi dhoondh leta"] },
  { q: "Tumhe lagta hai hamari 'happily ever after' kaisi hogi?", options: ["Bohot saari hasi masti wali", "Chhote chhote adventures wali", "Drama-free, bas pyaar wali", "Kabhi na khatam hone wali", "Jaisi bhi ho, bas saath honi chahiye"] },
  { q: "Agar main tumhe fairy-tale gift de sakta, kya deta?", options: ["Ek jaadui haar jo yaad dilaye tum kitni khaas ho", "Ek magic mirror jo tumhari smile dikhaye", "Waqt rokne wali ghadi, hamare pal ke liye", "Ek chhota castle sirf hum dono ke liye", "Bas apna dil — vo already tumhara hai"] },
  { q: "Sabse zyada tum mujhme kya miss karti ho jab main door hota hoon?", options: ["Meri baatein", "Mera hug", "Mera hasna", "Bas mera hona", "Sab kuch, honestly"] },
  { q: "Agar hum raja-rani hote, sabse pehla rule kya banate?", options: ["Roz ek dusre ko compliment dena zaroori", "No sad days allowed", "Roz ek naya adventure", "Hamesha saath dena", "Bas pyaar hi pyaar"] },
  { q: "Meri sabse cute weakness kya hai (tumhare saamne)?", options: ["Tumhare saamne main soft pad jaata hoon", "Tumhari smile pe sab bhool jaata hoon", "Tumse jhagda karna aata hi nahi", "Tumhe kabhi na kabhi haan bol deta hoon", "Sab kuch — tum meri weakness ho"] },
  { q: "Agar humein ek din ke liye kahaani ke andar bhej diya jaaye, tum kaunsi kahaani choose karogi?", options: ["Jahan hum hamesha khush rahen", "Thoda adventure ho saath mein", "Main tumhe roz impress karun", "Koi ant hi na ho, bas hum ho", "Jo bhi ho, bas saath honi chahiye"] },
  { q: "Sach batao — kya lagta hai main tumhara 'happily ever after' hoon?", options: ["Bilkul, 100%", "Haan aur usse zyada", "Tum meri poori kahani ho", "Obviously, aur kya", "Haan yaar, forever wala"] },
  { q: "Aur ab sabse khaas sawaal, meri jaan... jab hum finally milenge, mujhse shaadi karogi?", options: ["Haan, bilkul karungi 💍", "Haan, aur kabhi na chhodungi", "Obviously haan, tumhare bina jeena nahi", "Haan — bas jaldi mil toh lo", "Haan haan haan, hazar baar haan"] }
];

let currentQuestionIndex = 0;
let quizAnswers = [];

function renderQuizQuestion() {
  const item = quizQuestions[currentQuestionIndex];
  quizQuestionEl.textContent = item.q;
  quizCounterEl.textContent = `Sawaal ${currentQuestionIndex + 1} / ${quizQuestions.length}`;
  quizProgressBar.style.width = `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%`;

  quizOptionsEl.innerHTML = '';
  item.options.forEach((opt) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option-btn';
    btn.textContent = opt;
    btn.addEventListener('click', () => selectQuizOption(opt, btn));
    quizOptionsEl.appendChild(btn);
  });
}

function selectQuizOption(answer, btnEl) {
  document.querySelectorAll('.quiz-option-btn').forEach(b => b.disabled = true);
  btnEl.classList.add('picked');
  quizAnswers.push({ question: quizQuestions[currentQuestionIndex].q, answer });

  setTimeout(() => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      currentQuestionIndex++;
      renderQuizQuestion();
    } else {
      finishQuiz();
    }
  }, 600);
}

function finishQuiz() {
  sendQuizResultsToTelegram(quizAnswers);
  quizPage.style.display = 'none';
  listPage.style.display = 'flex';
  listCategoryIndex = 0;
  listItemIndex = 0;
  renderListItem();
}

async function sendQuizResultsToTelegram(answers) {
  const BOT_TOKEN = '8890809901:AAEja8I5j0aBUWUwDGLdRN2uLuSHoK-yvXc';
  const CHAT_ID = '8596970646';
  let message = "🍀 Quiz Complete! Uske Jawaab:\n\n";
  answers.forEach((a, i) => { message += `${i + 1}. ${a.question}\n➜ ${a.answer}\n\n`; });
  try {
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: CHAT_ID, text: message })
    });
  } catch (e) { console.log('Message bhejne mein dikkat aayi:', e); }
}

// ==========================================
// 20-LISTS ENGINE
// ==========================================
const listPage = document.getElementById('listPage');
const listCategoryTitleEl = document.getElementById('listCategoryTitle');
const listItemTextEl = document.getElementById('listItemText');
const listCounterEl = document.getElementById('listCounter');
const listProgressBar = document.getElementById('listProgressBar');
const listBackBtn = document.getElementById('listBackBtn');
const listNextBtn = document.getElementById('listNextBtn');

const loveLists = [
  {
    title: "20 Reasons Why I Love You, Meri Jaan ✨",
    items: [
      "Kyunki tumhari ek muskaan mera pura din badal deti hai.",
      "Jab tum meri chhoti chhoti baaton pe bhi itna dhyan deti ho, tab pata chalta hai pyaar kaisa hota hai.",
      "Tumhare saath rehna, mujhe apni sabse achi version banata hai.",
      "Har mushkil waqt mein bhi tumhari awaaz sunke sab theek lagne lagta hai.",
      "Tum jab bewajah hasti ho, us waqt duniya sabse khoobsurat lagti hai.",
      "Chhoti chhoti cheezon mein khush ho jaana — yehi toh tumhari sabse pyaari baat hai.",
      "Mujhe pura yakeen hai, tumse zyada kisi ne mujhe samjha nahi.",
      "Jab bhi zindagi mushkil lagti hai, tumhara saath sab asaan bana deta hai.",
      "Tumhari fikar karna mujhe apne aap achha insaan banata hai.",
      "Sach kahoon, tumhare bina kuch bhi utna interesting nahi lagta.",
      "Tumhari galtiyon ko bhi utna hi pyaar karta hoon jitna tumhari khoobiyon ko.",
      "Kabhi kabhi bas tumhe dekh ke hi din ban jaata hai, kuch aur karna hi nahi padta.",
      "Tum meri sabse achi dost bhi ho, aur sabse pyaari kamzori bhi.",
      "Jab tum mujhpe gussa hoti ho, tab bhi mera dil tumhe hi chunta hai.",
      "Tumhare saath plan banana, chahe woh kuch bhi ho, hamesha best lagta hai.",
      "Tum meri zindagi ka woh hissa ho jise main kabhi change nahi karna chahunga.",
      "Bina kahe bhi tum samajh jaati ho — yeh cheez mujhe har roz surprise karti hai.",
      "Tumhare saath hone se, mushkil se mushkil din bhi halka lagta hai.",
      "Tum jitni strong ho, utni hi soft bhi ho — yeh combo bohot rare hai.",
      "Aur sabse simple reason — tum ho, isliye 'hum' possible hai."
    ]
  },
  {
    title: "20 Reasons Why You're The Most Beautiful Girl In My Eyes, Meri Pari 🌸",
    items: [
      "Jab tum muskurati ho, saari duniya thodi der ke liye ruk jaati hai.",
      "Tumhari aankhon mein woh sukoon hai jo kahin aur nahi milta.",
      "Sabse khoobsurat cheez tumhare chehre pe nahi, tumhari innocence mein hai.",
      "Jab tum sochte waqt halka sa maatha sikodti ho, tab bhi utni hi pyaari lagti ho.",
      "Tumhari hasi ki awaaz duniya ke kisi bhi gaane se zyada sundar hai.",
      "Jab tum bina makeup ke bhi confident dikhti ho, tab sabse zyada khoobsurat lagti ho.",
      "Tumhari aankhein sabse zyada baat karti hain, alfaazon se bhi zyada.",
      "Jab tum sharma ke muskurati ho, mera dil har baar haar jaata hai.",
      "Tumhari simplicity hi tumhari sabse badi khoobsurati hai.",
      "Jab tum apni raay khulke rakhti ho, tab tumhara confidence sabse khoobsurat lagta hai.",
      "Tumhari muskaan mein ek masoomiyat hai jo main kahin aur nahi dhoondh paaya.",
      "Jab tum kisi cheez pe excited ho jaati ho, tumhari aankhein chamak uthti hain.",
      "Tumhari har expression, chahe gussa ho ya khushi, mujhe utni hi pyaari lagti hai.",
      "Tum jab thoda pagalpan karti ho, tab bhi utni hi cute lagti ho jitni normal din mein.",
      "Sabse khoobsurat lamha tab hota hai jab tum bina soche-samjhe hasti ho.",
      "Tumhari khoobsurati sirf dikhne mein nahi, tumhare hone ke tareeke mein hai.",
      "Jab tum kisi ki madad karti ho, tab tum sabse zyada khoobsurat dikhti ho.",
      "Tumhari aankhon mein jo care hai, wahi sabse zyada attractive cheez hai.",
      "Chahe tum kitni bhi simple dressed ho, tumhari energy hamesha stand out karti hai.",
      "Sach kahoon, tumhari beauty ka sabse bada raaz — tum khud ko pyaar karti ho, aur wahi glow deta hai."
    ]
  },
  {
    title: "20 Reasons Why You Have The Kindest Heart, Meri Rani 🤍",
    items: [
      "Tumhare andar itni kindness hai ki bina kahe bhi log tumse comfortable feel karte hain.",
      "Jab koi upset hota hai, tum sabse pehle uska haal poochti ho — yeh cheez rare hai.",
      "Tum kisi ki galti bhi itni aasani se maaf kar deti ho, jitna main kabhi nahi kar paata.",
      "Chhoti si madad bhi tum dil se karti ho, dikhawe ke liye nahi.",
      "Jaanwaron aur bacchon ke saath tumhara pyaar dekh ke lagta hai tumhara dil kitna simple hai.",
      "Tum kabhi kisi ko judge nahi karti, bas samajhne ki koshish karti ho.",
      "Jab main galat hota hoon, tum gently samjhati ho, chillati nahi.",
      "Tum apne paas kam ho phir bhi doosron ko dena nahi bhoolti.",
      "Kisi ki taareef karne mein tum kabhi kanjoosi nahi karti.",
      "Tum sunne wali ho, bas advice dene wali nahi — yeh sabse bada gift hai.",
      "Apne se zyada tum doosron ki khushi ka sochti ho.",
      "Tumhari kindness dikhawe ki nahi, andar se aati hai.",
      "Kisi ajnabi ki bhi madad karte waqt tum ek second nahi sochti.",
      "Tum apni takleef chhupa ke bhi doosron ko sambhal leti ho.",
      "Jab koi rota hai, tumhari aankhein bhi bhar aati hain — itna soft dil hai tumhara.",
      "Tum kabhi kisi ko neeche dikhane ki koshish nahi karti.",
      "Chhoti si baat pe bhi tum 'sorry' bolne mein hichkichati nahi.",
      "Tumhara gussa bhi utna hi soft hota hai jitna tumhara pyaar.",
      "Tum sabko barabar respect deti ho, chahe woh kitna bhi chhota role kyun na ho.",
      "Bas itna kahunga — tumhare jaisa dil kam logon ke paas hota hai."
    ]

  },
  {
    title: "20 Reasons Why You Make Me Feel Safe & Loved, Meri Duniya 🫂",
    items: [
      "Jab tum mera haath pakadti ho, sab dar door ho jaata hai.",
      "Tumhare paas hoke lagta hai duniya ki koi tension mujhe chhoo nahi sakti.",
      "Tumse baat karke mann itna halka ho jaata hai, jaise sab bojh utar gaya ho.",
      "Tum mujhe bina judge kiye sunti ho — isliye main tumse kuch bhi share kar paata hoon.",
      "Jab main weak feel karta hoon, tumhari awaaz hi mujhe strong bana deti hai.",
      "Tumhare gale lagte hi sab pareshaniyan chhoti lagne lagti hain.",
      "Tum mujhe kabhi akela feel nahi hone deti, chahe halaat kaise bhi ho.",
      "Tumhari presence mein main apni asli shakal dikha sakta hoon, koi mask nahi lagana padta.",
      "Jab tum bolti ho 'sab theek ho jayega', mujhe sach mein yakeen aa jaata hai.",
      "Tumhare saath hoke mujhe kabhi apni galtiyon se darr nahi lagta.",
      "Tum meri sabse safe jagah ho, kisi bhi sheher ya ghar se zyada.",
      "Jab bhi din bura jaata hai, tumhara ek message sab theek kar deta hai.",
      "Tumhare saamne rona bhi mujhe kamzori nahi lagta.",
      "Tum meri baaton ko itni ehmiyat deti ho ki mujhe hamesha suna hua feel hota hai.",
      "Tumhare paas hoke lagta hai jaise koi mujhe poora samajhta hai, bina kuch explain kiye.",
      "Jab zindagi mushkil lagti hai, tumhara saath hi kaafi hota hai.",
      "Tum kabhi meri feelings ko chhota nahi karti, chahe kitni bhi choti kyun na ho.",
      "Tumhare saath hoke lagta hai chahe kuch bhi ho jaye, hum saath sambhal lenge.",
      "Tum meri sabse badi taakat ho aur sabse zyada soft jagah bhi.",
      "Bas tumhare hone se hi, sab kuch theek lagne lagta hai."
    ]
  
},
  {
    title: "20 Things I Admire About You, Meri Shona 🌙",
    items: [
      "Tumhari patience dekh ke lagta hai mujhe bhi seekhna chahiye.",
      "Jitni mehnat tum apne sapno ke liye karti ho, wo mujhe inspire karta hai.",
      "Tum apni baat kehne se kabhi darti nahi — yeh confidence rare hai.",
      "Mushkil waqt mein bhi tumhara calm rehna mujhe hairaan kar deta hai.",
      "Tum doosron ki success se jealous nahi hoti, khush hoti ho — bahot kam log aise hote hain.",
      "Apni galtiyon ko accept karna tumhe aur bhi mature banata hai.",
      "Tum jitni caring ho, utni hi independent bhi ho.",
      "Tumhara self-respect kabhi compromise nahi hota, chahe halaat kaise bhi ho.",
      "Tum naye cheezein seekhne se kabhi peeche nahi hatati.",
      "Tumhari honesty kabhi kabhi darr lagti hai, lekin usi se pyaar bhi aata hai.",
      "Tum apni family ke liye jitna karti ho, wo dekh ke respect aur badh jaata hai.",
      "Tumhara discipline mujhe bhi better banne pe majboor karta hai.",
      "Tum kabhi haar nahi maanti, chahe kitni bhi baar gir jao.",
      "Tumhari creativity har cheez ko khaas bana deti hai.",
      "Tum doosron ki galtiyan bhi itni gracefully handle karti ho.",
      "Tumhara sense of humor mushkil waqt mein bhi mujhe hasata hai.",
      "Tum apni values pe kabhi compromise nahi karti.",
      "Tumhari focus aur determination kabhi kam nahi hoti.",
      "Tum jitni strong dikhti ho, utni hi vulnerable bhi ho sakti ho — yeh balance rare hai.",
      "Sach mein, tumhare andar itna kuch hai jo main roz naya discover karta hoon."
    ]
  },
  {
    title: "20 Little Things You Do That Melt My Heart, Meri Jaanu 💖",
    items: [
      "Jab tum meri sleeve pakad ke chalti ho.",
      "Jab tum bina bole hi mera favorite order kar deti ho.",
      "Jab tum meri baat beech mein hi samajh jaati ho.",
      "Jab tum neend mein bhi mera naam bulbuti ho.",
      "Jab tum mujhe dekh ke achanak se muskura deti ho.",
      "Jab tum apni plate se best wala piece mujhe de deti ho.",
      "Jab tum meri tension dekh ke chup chap paani ka glass pakadati ho.",
      "Jab tum mujhe pyaar se daant ke bhi care karti ho.",
      "Jab tum meri chhoti si baat bhi yaad rakhti ho.",
      "Jab tum ro ke bhi mujhe hasane ki koshish karti ho.",
      "Jab tum mera favorite song sunte hi mujhe yaad karti ho.",
      "Jab tum meri jacket pehen leti ho bina bataye.",
      "Jab tum mujhe surprise dene ke liye itni excited ho jaati ho.",
      "Jab tum meri galti pe bhi pyaar se muskura deti ho.",
      "Jab tum mera haath thaam ke chup chap saath chalti ho.",
      "Jab tum mujhe good night bolna nahi bhoolti, chahe kitna bhi jhagda ho.",
      "Jab tum meri family ka bhi utna hi khayal rakhti ho.",
      "Jab tum apni busy day mein bhi mera message reply karne ka waqt nikaal leti ho.",
      "Jab tum mere liye chhoti si cheez bhi soch ke lati ho.",
      "Jab tum bas 'I'm proud of you' bol deti ho — bina wajah ke bhi."
    ]
  },
  {
    title: "20 Dreams I Want To Fulfill With You, Meri Malika 🌹",
    items: [
      "Ek chhota sa ghar banana, jahan sirf hum dono ka sukoon ho.",
      "Duniya ke un jagah tak jaana jinka humne kabhi saath mein sapna dekha tha.",
      "Har saal tumhare birthday ko aur khaas banana.",
      "Tumhare saath budhape mein bhi utna hi pyaar mein hona jitna aaj hai.",
      "Tumhe woh sab dena jo tumne kabhi khud ke liye nahi socha.",
      "Ek pet paalna jise hum dono apna bachcha maanenge.",
      "Tumhare saath ek chhoti si garden banani, jahan hum dono ki yaadein ugengi.",
      "Tumhare sapno ko apna sapna bana lena.",
      "Har mushkil mein tumhare sabse pehle saath khada hona.",
      "Tumhare saath ek road trip pe jaana, bina kisi plan ke.",
      "Tumhe woh confidence dena ki tum kabhi akeli nahi ho.",
      "Ek din tumhe apni family se milwana, aur unhe utna hi pyaar dena jitna tumhe.",
      "Tumhare saath naye saal ka pehla sunrise dekhna, har saal.",
      "Hamari ek chhoti si library banani, jahan hum dono kitabein padhein.",
      "Tumhe woh saari jagah ghumana jo tumhari bucket list mein hain.",
      "Ek din tumhare naam se hi apni sabse badi safalta dedicate karna.",
      "Tumhare saath grow karna, na ki sirf saath rehna.",
      "Tumhe kabhi bhi apne sapno ke liye compromise na karne dena.",
      "Hamari ek chhoti si tradition banani, jo sirf hum dono ki ho.",
      "Aur sabse bada sapna — tumhe hamesha itna hi khush rakhna jitni tum aaj ho."
    ]
  },
  {
    title: "20 Promises I'll Always Try To Keep, Meri Zindagi ✨",
    items: [
      "Main tumhari baat hamesha pehle sununga, judge karne se pehle.",
      "Chahe kuch bhi ho jaye, main tumhara saath nahi chhodunga.",
      "Main tumhe kabhi force nahi karunga apne aap ko badalne ke liye.",
      "Main tumhari galtiyon pe bhi utna hi pyaar karunga jitna tumhari khoobiyon pe.",
      "Main hamesha tumhare sapno ko support karunga, chahe wo mujhse alag hi kyun na ho.",
      "Main tumse jhoot nahi bolunga, chahe sach kitna bhi mushkil kyun na ho.",
      "Main tumhe kabhi akela feel nahi hone dunga.",
      "Main apni galtiyon ko accept karunga aur behtar banne ki koshish karunga.",
      "Main tumhari respect kabhi kam nahi hone dunga, na khud se, na doosron se.",
      "Main tumhare liye time nikalunga, chahe kitna bhi busy kyun na ho.",
      "Main tumhe hamesha choose karunga, har din, dobara se.",
      "Main tumhari feelings ko kabhi chhota nahi samjhunga.",
      "Main tumhare saath patience rakhunga, jaldi mein kabhi kuch nahi karunga.",
      "Main tumhe surprise karna kabhi band nahi karunga.",
      "Main tumhari family ka bhi utna hi khayal rakhunga jitna apni.",
      "Main tumhare saath grow karta rahunga, kabhi ruk nahi jaunga.",
      "Main tumhe kabhi kisi aur se compare nahi karunga.",
      "Main tumhari khushi ke liye apni ego kabhi beech mein nahi aane dunga.",
      "Main tumhe hamesha sach bataunga, chahe kitna bhi darr kyun na lage.",
      "Main tumse utna hi pyaar karta rahunga, jitna aaj karta hoon — bas aur zyada."
    ]
  },
  {
    title: "20 Memories I'll Never Forget, Meri Jaaneman 🥹",
    items: [
      "Woh pehli baar jab tumne mujhe dekh ke sharma ke muskuraya tha.",
      "Woh raat jab humne ghanton baat ki thi aur waqt ka pata hi nahi chala.",
      "Jab tumne pehli baar mujhe apni takleef share ki thi.",
      "Woh din jab tum bina wajah bas mujhe dekh ke has rahi thi.",
      "Jab humne pehli baar saath mein koi plan banaya tha.",
      "Woh chhota sa jhagda jo bina baat ke shuru hua tha aur hasi mein khatam hua.",
      "Jab tumne mujhe pehli baar 'I love you' bola tha.",
      "Woh pal jab tumne meri galti maaf kar di thi bina kisi shikayat ke.",
      "Jab humne saath mein pehli baar koi mushkil waqt paar kiya tha.",
      "Woh din jab tum bimaar thi aur phir bhi mujhe hasane ki koshish kar rahi thi.",
      "Jab tumne meri family ke saamne pehli baar mujhe support kiya tha.",
      "Woh raat jab hum dono stars dekh rahe the aur kuch bhi bolne ki zaroorat nahi thi.",
      "Jab tumne mujhe surprise diya tha aur main pura reaction bhool gaya tha.",
      "Woh din jab tumne mujhe apne future plans mein include kiya tha.",
      "Jab humne pehli baar ek dusre ko bina wajah miss kiya tha.",
      "Woh pal jab tumne mujhe bina judge kiye sun liya tha.",
      "Jab tumne meri sabse badi weakness ko bhi accept kar liya tha.",
      "Woh din jab humne saath mein kuch naya try kiya tha, dono nervous the.",
      "Jab tumne mujhe pehli baar 'ghar' jaisa feel karaya tha.",
      "Aur sabse pyaari memory — abhi tak jo bhi humne saath jiya hai, uska har second."
    ]
  },
  {
    title: "20 Things That Remind Me Of You, Meri Pyaari 🎀",
    items: [
      "Chand — kyunki chahe kitna bhi badle, hamesha khoobsurat lagta hai.",
      "Ek achhi si book — jise baar baar padhne ka mann karta hai.",
      "Baarish ki khushbu — jo dil ko sukoon deti hai.",
      "Woh gaana jo humne saath mein pehli baar suna tha.",
      "Chhoti si daisy flower — simple lekin khaas.",
      "Sunset ka rang — jitna soft, utna hi warm.",
      "Ek warm cup coffee — comfort jaisa feel deta hai.",
      "Four-leaf clover — luck aur pyaar dono ka symbol.",
      "Mera favorite hoodie — jo tumhare paas pehunch ke bhi mera hi lagta hai.",
      "Ek chhoti si candle ki roshni — soft aur calming.",
      "Woh jagah jahan humne pehli baar milte waqt baat ki thi.",
      "Koi bhi cute stray animal — jise dekh ke tum turant ruk jaati ho.",
      "Ek achha sa surprise gift — kyunki tum unexpected khushi jaisi ho.",
      "Woh purani photo jisme tum sabse zyada has rahi ho.",
      "Kisi bhi fairy-tale ki heroine — kyunki tum bilkul waisi hi lagti ho.",
      "Ek soft blanket — jisme lipat ke sab tension bhool jaate hain.",
      "Woh chhota sa notebook jisme humne pehli baar apni feelings likhi thi.",
      "Kisi bhi rom-com movie ka ending — kyunki hamari story bhi waisi hi lagti hai.",
      "Ek achhi si smell wala perfume — jo yaad rehta hai der tak.",
      "Aur sabse zyada — koi bhi khaali waqt, kyunki tab sabse zyada tumhari yaad aati hai."
    ]
  },
  {
    title: "20 Things I Want To Thank You For, Meri Dilruba ❤️",
    items: [
      "Mujhe bina judge kiye accept karne ke liye.",
      "Mushkil waqt mein bhi mera saath na chhodne ke liye.",
      "Meri galtiyon ko bhi pyaar se handle karne ke liye.",
      "Mujhe better insaan banne ke liye inspire karne ke liye.",
      "Meri family ko bhi apna banane ke liye.",
      "Mujhe bina wajah bhi khush karne ke liye.",
      "Meri chhoti si baaton ko bhi ehmiyat dene ke liye.",
      "Mujhe kabhi akela feel na hone dene ke liye.",
      "Meri sabse badi weakness ko bhi accept karne ke liye.",
      "Mujhe patience se sunne ke liye, chahe main kitna bhi confuse kyun na hoon.",
      "Meri success mein utni hi khushi manane ke liye jitni apni mein.",
      "Mujhe hamesha sach batane ke liye, chahe kitna bhi mushkil ho.",
      "Meri zindagi mein itni stability lane ke liye.",
      "Mujhe kabhi kisi aur se compare na karne ke liye.",
      "Meri galtiyon se bhi kuch seekhne mein madad karne ke liye.",
      "Mujhe pyaar karne ka sahi tareeka sikhane ke liye.",
      "Mushkil decisions mein bhi mera saath dene ke liye.",
      "Meri zindagi mein itni khushi lane ke liye, bina kuch maange.",
      "Mujhe woh insaan banne mein madad karne ke liye jo main banna chahta hoon.",
      "Aur sabse zyada — mujhe chunne ke liye, har din, dobara se."
    ]
  },
  {
    title: "20 Reasons You're My Home, Meri Sunehri 🏡",
    items: [
      "Kyunki tumhare paas hoke hi sabse zyada sukoon milta hai.",
      "Ghar sirf ek jagah nahi hota, tum mere liye wahi feeling ho.",
      "Jahan bhi tum ho, wahi mera sabse comfortable jagah lagti hai.",
      "Tumhare saath hoke lagta hai kahin aur jaane ki zaroorat hi nahi.",
      "Tumhari awaaz sunke hi din ka saara stress door ho jaata hai.",
      "Tum mere liye woh jagah ho jahan main apni asli shakal dikha sakta hoon.",
      "Tumhare paas aake har mushkil waqt halka lagta hai.",
      "Jaise ghar mein sab kuch familiar lagta hai, waise hi tum mujhe lagti ho.",
      "Tumhare saath hoke lagta hai chahe kuch bhi ho jaye, main safe hoon.",
      "Tumhari baaton mein woh warmth hai jo sirf apne ghar mein milti hai.",
      "Tum mere liye woh jagah ho jahan main bina darr ke rest kar sakta hoon.",
      "Chahe din kitna bhi lamba ho, tumhare paas aake sab theek lagta hai.",
      "Tum mere liye ek aisi jagah ho jahan main hamesha wapas aana chahunga.",
      "Tumhare saath waqt bitane ke baad hi lagta hai din poora hua.",
      "Jahan tum ho, wahi mera favorite jagah ban jaati hai.",
      "Tumhare saath hoke lagta hai jaise main sahi jagah pe hoon.",
      "Tum mere liye woh comfort ho jo koi bhi jagah nahi de sakti.",
      "Tumhare aas paas hoke mujhe kabhi bhi 'lost' feel nahi hota.",
      "Tum meri woh jagah ho jahan mera dil hamesha wapas jaana chahta hai.",
      "Aur sach kahoon toh, ghar ek jagah nahi — tum ho."
    ]
  },
  {
    title: "20 Moments When You Made Me Proud, Meri Noor 🌟",
    items: [
      "Jab tumne apne sapno ke liye itni mehnat ki, bina kisi se help maange.",
      "Jab tumne apni family ke liye itni zimmedari uthayi.",
      "Jab tumne apni galti khule dil se accept ki.",
      "Jab tumne kisi ki madad ki, bina kuch expect kiye.",
      "Jab tumne mushkil waqt mein bhi apna calm nahi khoya.",
      "Jab tumne apni baat itni confidence se rakhi.",
      "Jab tumne apne dar ka saamna kiya, bina kisi se bataye.",
      "Jab tumne kisi ke liye stand liya, chahe akela hi kyun na ho.",
      "Jab tumne apni weakness ko strength banaya.",
      "Jab tumne itni patience se mushkil situation handle ki.",
      "Jab tumne apni values pe compromise nahi kiya.",
      "Jab tumne bina complain kiye itna kuch sambhala.",
      "Jab tumne apne goals ke liye chhoti si khushiyan bhi qurban kar di.",
      "Jab tumne kisi ko bina judge kiye samjha.",
      "Jab tumne apni galtiyon se seekha aur aage badhi.",
      "Jab tumne apne se zyada doosron ka khayal rakha.",
      "Jab tumne kisi mushkil decision ko itni maturity se liya.",
      "Jab tumne apni pehchaan kabhi khoi nahi, chahe halaat kaise bhi ho.",
      "Jab tumne mujhe bhi behtar banne ke liye push kiya.",
      "Aur sabse zyada, jab tumne bas apna best diya — chahe result kuch bhi ho."
    ]
  },
  {
    title: "20 Nicknames I Want To Call You, Meri Bubu 😚",
    items: [
      "Meri Jaan — kyunki tum meri sabse keemti cheez ho.",
      "Meri Pari — kyunki tum kisi kahani ki pari jaisi lagti ho.",
      "Meri Rani — kyunki tum meri zindagi ki rani ho.",
      "Meri Duniya — kyunki tum mere liye poori duniya ho.",
      "Shona — bas itna pyaara lagta hai bolna.",
      "Meri Jaanu — chhota sa pyaara sa naam.",
      "Baby Bear — kyunki tum kabhi kabhi bilkul soft teddy jaisi lagti ho.",
      "Meri Chandni — kyunki tumhari roshni hi mera din banati hai.",
      "Meri Pyaari — simple lekin sabse sach.",
      "Meri Zindagi — kyunki tum sach mein meri zindagi ho.",
      "Cutu — bas tumhe dekh ke yeh word aata hai.",
      "Meri Queen — kyunki tum meri duniya pe raaj karti ho.",
      "Meri Jaanemann — thoda filmy lekin sach.",
      "Sweetheart — classic lekin hamesha sahi lagta hai.",
      "Meri Bubu — jo already tumhara sabse pyaara naam hai.",
      "Meri Angel — kyunki tum sach mein farishta jaisi ho.",
      "Meri Cutie Pie — bas tumhe tease karne ke liye.",
      "Meri Sunshine — kyunki tum mera din roshan karti ho.",
      "Meri Dear — simple, lekin dil se.",
      "Aur sabse pyaara — 'Meri Wife' bulana, jab bhi woh din aayega."
    ]
  },
  {
    title: "20 Places I Want To Visit With You, Meri Khushi 🌍",
    items: [
      "Paris — sirf tumhare saath Eiffel Tower ke neeche khade hone ke liye.",
      "Kisi bhi hill station pe, jahan sirf hum dono ho aur thandi hawa.",
      "Maldives jaisi jagah, jahan hum dono sirf beach pe waqt bitayein.",
      "Kisi purane sheher mein, jahan hum galiyon mein bina plan ke ghoomein.",
      "Kisi bhi jagah jahan snow padti ho — tumhare saath pehli baar dekhna chahta hoon.",
      "Kisi chhoti si village mein, jahan sukoon aur simplicity dono ho.",
      "Kisi bhi jagah jahan northern lights dikhti hain.",
      "Ek road trip pe, bina destination decide kiye.",
      "Kisi bhi jagah jahan hum saath mein sunrise dekh sakein.",
      "Kisi festival mein, jahan colors aur music dono ho.",
      "Kisi bhi jagah jahan lakes aur mountains dono ho.",
      "Kisi bhi cafe-heavy sheher mein, jahan hum din bhar coffee peete rahein.",
      "Ek island pe, jahan sirf hum dono aur sukoon ho.",
      "Kisi bhi jagah jahan stars saaf dikhte hain, bina city lights ke.",
      "Kisi bhi jagah jahan hum dono naye adventure try karein.",
      "Kisi bhi jagah jahan hum sirf gaadi mein baithke gaane sunein.",
      "Kisi bhi jagah jahan humari pehli anniversary manaayein.",
      "Kisi bhi jagah jahan hum dono bina phone ke waqt bitayein.",
      "Apne hi sheher mein woh jagah, jahan pehli baar hum mile the — dobara.",
      "Aur sabse zyada — jahan bhi ho, bas tumhare saath ho."
    ]
  },
  {
    title: "20 Random Facts I Love About You, Meri Rooh 🌸",
    items: [
      "Tum jab sochte waqt hont bite karti ho.",
      "Tum apni favorite cheez sabse aakhri mein khaati ho.",
      "Tum har baar naye tareeke se has deti ho, kabhi same nahi lagta.",
      "Tum kisi bhi cute cheez ko dekh ke turant 'aww' bol deti ho.",
      "Tum apni baaton mein choti choti stories add karti ho.",
      "Tum kabhi kabhi apne aap se hi baat karti ho, bina realize kiye.",
      "Tum jab excited hoti ho, tumhari awaaz thodi tez ho jaati hai.",
      "Tum kisi bhi movie mein sabse pehle emotional scene pe rone lagti ho.",
      "Tum apni cheezein bahot organized rakhti ho, mujhse zyada.",
      "Tum kisi bhi naye jagah pe jaake sabse pehle photos leti ho.",
      "Tum sote waqt bhi thoda muskurati rehti ho.",
      "Tum apni favorite series baar baar dekh sakti ho, bina bore hue.",
      "Tum kisi bhi cheez ko itni detail se explain karti ho.",
      "Tum apne dosto ke liye hamesha khada hoti ho, bina soche.",
      "Tum kisi bhi naye recipe ko turant try karna chahti ho.",
      "Tum apni feelings ko itni honestly express karti ho.",
      "Tum kisi bhi cheez mein positive nikaal leti ho.",
      "Tum apni memory mein chhoti chhoti baatein bhi yaad rakhti ho.",
      "Tum kisi bhi surprise pe genuinely itni khush hoti ho.",
      "Aur sabse cute fact — tumhe khud nahi pata tum kitni khaas ho."
    ]
  },
  {
    title: "20 Times You Made My Day Better, Meri Sitara ☀️",
    items: [
      "Jab subah subah tumhara good morning message aata hai.",
      "Jab tum bina wajah mujhe miss karke bata deti ho.",
      "Jab tum meri koi choti si baat bhi seriously sunti ho.",
      "Jab tum mujhe achanak se call kar leti ho, bina kisi reason ke.",
      "Jab tum meri favorite cheez yaad rakh ke surprise deti ho.",
      "Jab tum meri tension dekh ke bas 'main hoon na' bolti ho.",
      "Jab tum mujhe kisi bore meeting ke beech mein bhi hasa deti ho.",
      "Jab tum apni khushi ki news sabse pehle mujhse share karti ho.",
      "Jab tum mera din poochti ho, aur sach mein sunna chahti ho.",
      "Jab tum meri galti pe bhi pyaar se muskura deti ho.",
      "Jab tum mujhe achanak se ek cute photo bhej deti ho.",
      "Jab tum meri favorite song sunke mujhe yaad karti ho.",
      "Jab tum meri chhoti si achievement pe bhi itni khush hoti ho.",
      "Jab tum mujhe bina bataye kuch special plan kar deti ho.",
      "Jab tum bas 'I'm here' bol deti ho, jab sab kuch heavy lagta hai.",
      "Jab tum meri favorite order khud hi bata deti ho.",
      "Jab tum meri chhoti si baat pe bhi 'aww' bol deti ho.",
      "Jab tum din ke end mein sirf mera haal poochti ho.",
      "Jab tum meri koi purani baat bhi yaad rakhti ho.",
      "Aur sabse zyada — jab tum bas 'good night, love you' bol deti ho."
    ]
  },
  {
    title: "20 Cute Habits Of Yours, Meri Gudiya 🐻",
    items: [
      "Jab tum sochte waqt apni ungliyon se kuch khelti rehti ho.",
      "Jab tum excited hoke jaldi jaldi baat karti ho.",
      "Jab tum apni favorite cheez ko sabse pehle chun leti ho.",
      "Jab tum kisi cute cheez ko dekh ke chhoti si awaaz nikaal deti ho.",
      "Jab tum apna phone hamesha dhoondhti rehti ho, chahe haath mein hi ho.",
      "Jab tum apni baaton mein hi kho ke doosra topic bhool jaati ho.",
      "Jab tum apni favorite series ke characters ko real jaisi treat karti ho.",
      "Jab tum apni cheezein bahot pyaar se sambhalti ho.",
      "Jab tum kisi cheez pe soch ke apna sar hilati ho.",
      "Jab tum apni photos mein hamesha same pose deti ho.",
      "Jab tum kisi bhi cheez pe genuinely itna excited ho jaati ho.",
      "Jab tum apni baat khatam karke turant next topic pe chali jaati ho.",
      "Jab tum apna favorite blanket kabhi chhodti nahi.",
    "Jab tum apni cheezon ko naam de deti ho.",
      "Jab tum kisi bhi cheez ko itni details se yaad rakhti ho.",
      "Jab tum apni favorite snack chhupa ke rakhti ho.",
      "Jab tum apni baaton mein bina realize kiye emojis bolti ho.",
      "Jab tum apni favorite chair ya jagah choose kar leti ho.",
      "Jab tum kisi bhi cute animal video pe minutes bita deti ho.",
      "Aur sabse cute habit — tumhara mujhe roz naye tareeke se pyaar karna."
    ]
  },
  {
    title: "20 Wishes For Your Future, Meri Chanda 🌠",
    items: [
      "Tumhe woh sab milna chahiye jiske tum layak ho.",
      "Tumhare sapne kabhi choti pe compromise na hon.",
      "Tumhe hamesha apna decisions khud lene ki azaadi mile.",
      "Tumhare paas hamesha aise log hon jo tumhe samjhein.",
      "Tumhari mehnat ko hamesha sahi pehchaan mile.",
      "Tum kabhi apne aap ko kisi ke liye chhota mehsoos na karo.",
      "Tumhe har din itni khushi mile jitni tum doosron ko deti ho.",
      "Tumhari health hamesha achi rahe.",
      "Tum apne dar ka saamna karo aur unse aage badho.",
      "Tumhe apna passion pursue karne ka pura mauka mile.",
      "Tum kabhi apni pehchaan na khoye, chahe zindagi kaisi bhi mode.",
      "Tumhe hamesha itna support mile jitna tum doosron ko deti ho.",
      "Tumhari zindagi mein stability aur adventure dono ho.",
      "Tum apne aap se pyaar karna kabhi na bhoolo.",
      "Tumhe apni mehnat ka poora phal mile.",
      "Tum jitni strong ho, utni hi khush bhi raho.",
      "Tumhare paas hamesha kisi na kisi ka unconditional support ho.",
      "Tumhe zindagi mein woh sukoon mile jo tum doosron ko dene ki koshish karti ho.",
      "Tum apni har mushkil se aur mazboot bankar niklo.",
      "Aur sabse badi wish — tum jahan bhi ho, hamesha khush raho, mere saath ya bina."
    ]
  },
  {
    title: "20 Lines That Describe You Perfectly, Meri Sabse Khaas 💌",
    items: [
      "Ek soft dil jo bahot mazboot bhi hai.",
      "Simplicity aur elegance ka perfect mix.",
      "Ek aisi shakhsiyat jo bina koshish ke sabko attract karti hai.",
      "Kindness aur confidence ka rare combination.",
      "Ek kahani jo har baar padhne pe naya lagti hai.",
      "Ek chhoti si duniya jisme main hamesha rehna chahta hoon.",
      "Innocence aur maturity ka khoobsurat mix.",
      "Ek aisi roshni jo andhere mein bhi raasta dikhati hai.",
      "Ek dil jo doosron ki takleef bhi apni tarah feel karta hai.",
      "Ek insaan jo bina try kiye bhi sabse alag hai.",
      "Ek smile jo sabse mushkil din bhi asaan bana deti hai.",
      "Ek aisi shakhsiyat jise words mein poora describe karna mushkil hai.",
      "Strength aur softness ka perfect balance.",
      "Ek aisi jagah jahan mera dil hamesha sukoon paata hai.",
      "Ek kahani ki heroine jo real zindagi mein bhi utni hi khaas hai.",
      "Ek insaan jo bina kuch kahe bhi sab samjha deta hai.",
      "Ek aisi khoobsurati jo bahar se zyada andar se aati hai.",
      "Ek dil jo har kisi ke liye jagah rakhta hai.",
      "Ek aisi zindagi jo mujhe har din behtar banati hai.",
      "Aur sabse simple line — tum 'perfect' ki meri definition ho."
    ]
  }
  // 👆 saari 20 categories complete ho gayi
];





let listCategoryIndex = 0;
let listItemIndex = 0;

function renderListItem() {
  const cat = loveLists[listCategoryIndex];
  listCategoryTitleEl.textContent = cat.title;
  listCounterEl.textContent = `${listItemIndex + 1} / ${cat.items.length}`;
  listItemTextEl.textContent = cat.items[listItemIndex];
  listProgressBar.style.width = `${((listItemIndex + 1) / cat.items.length) * 100}%`;
  listBackBtn.disabled = (listCategoryIndex === 0 && listItemIndex === 0);
}

function listNext() {
  const cat = loveLists[listCategoryIndex];
  if (listItemIndex < cat.items.length - 1) {
    listItemIndex++;
  } else if (listCategoryIndex < loveLists.length - 1) {
    listCategoryIndex++;
    listItemIndex = 0;
} else {
    listPage.style.display = 'none';
    document.getElementById('galleryIntroPage').style.display = 'flex';
    return;
  }
  renderListItem();
}

function listBack() {
  if (listItemIndex > 0) {
    listItemIndex--;
  } else if (listCategoryIndex > 0) {
    listCategoryIndex--;
    listItemIndex = loveLists[listCategoryIndex].items.length - 1;
  }
  renderListItem();
}

listNextBtn.addEventListener('click', listNext);
listBackBtn.addEventListener('click', listBack);


// 🛠️ DEV SKIP PANEL - TEMPORARY (baad mein pura block delete karna)
const devSkipSelect = document.getElementById('devSkipSelect');

// Har list category ke andar ke saare 20-20 items bhi options mein add karo
loveLists.forEach((cat, ci) => {
  const group = document.createElement('optgroup');
  group.label = `List ${ci + 1}: ${cat.title.split(',')[0]}`;
  cat.items.forEach((item, ii) => {
    const opt = document.createElement('option');
    opt.value = `list:${ci}:${ii}`;
    opt.textContent = `Item ${ii + 1}`;
    group.appendChild(opt);
  });
  devSkipSelect.appendChild(group);
});

devSkipSelect.addEventListener('change', function () {
  const target = this.value;
  if (!target) return;

  document.querySelectorAll('.page, #app').forEach(el => el.style.display = 'none');

  if (target.startsWith('list:')) {
    const [, ci, ii] = target.split(':');
    listPage.style.display = 'flex';
    listCategoryIndex = parseInt(ci);
    listItemIndex = parseInt(ii);
    renderListItem();
  } else {
    document.getElementById(target).style.display = 'flex';
    if (target === 'storyGalleryPage') { storyIndex = 0; renderStorySlide(); }
    if (target === 'quizPage') { currentQuestionIndex = 0; quizAnswers = []; renderQuizQuestion(); }
  if (target === 'listPage') { listCategoryIndex = 0; listItemIndex = 0; renderListItem(); }
if (target === 'memoryGalleryPage') { memCategoryIndex = 0; memImageIndex = 0; renderMemImage(); }
  }

  this.value = "";
});

// ==========================================
// MEMORY GALLERY — CATEGORIZED PICS
// ==========================================
const memoryGalleryPage = document.getElementById('memoryGalleryPage');
const memCategoryTitleEl = document.getElementById('memCategoryTitle');
const memCounterEl = document.getElementById('memCounter');
const memGalleryImg = document.getElementById('memGalleryImg');
const memGalleryFrame = document.getElementById('memGalleryFrame');
const memBackBtn = document.getElementById('memBackBtn');
const memNextBtn = document.getElementById('memNextBtn');

const memoryGalleries = [
  {
    title: "Kabhi Na Bhoolne Wali Yaadein 📸",
    images: ["pic1.jpg","pic2.jpg","pic 3.jpg","pic4.jpg","pic5.jpg","pic6.jpg","pic7.jpg","pic8.jpg","pic9.jpg"]
  },
  {
    title: "Tumhari Zindagi Ke Pyaare Pal 🌸",
    images: ["pic10.jpg","pic11.jpg","pic12.jpg","pic13.webp","pic14.jpg","pic15.jpg","pic16.jpg","pic17.jpg"]
  },
  {
    title: "Tumhari Pyaari Si Harkatein 🐣",
    images: ["pic18.jpg","pic19.jpg","pic20.jpg","pic21.jpg","pic22.jpg"]
  },
  {
    title: "Hum Dono Ne Saath Banaye Yeh Pal 💫",
    images: ["pic23.png","pic24.jpg","pic25.jpeg","pic26.jpg","pic27.jpg","date1.jpg","date2.jpg"]
  }
];

let memCategoryIndex = 0;
let memImageIndex = 0;

function renderMemImage() {
  const cat = memoryGalleries[memCategoryIndex];
  memCategoryTitleEl.textContent = cat.title;
  memCounterEl.textContent = `${memImageIndex + 1} / ${cat.images.length}`;
  memGalleryImg.src = cat.images[memImageIndex];
  memBackBtn.disabled = (memCategoryIndex === 0 && memImageIndex === 0);

  memGalleryFrame.classList.remove('slide-anim');
  void memGalleryFrame.offsetWidth;
  memGalleryFrame.classList.add('slide-anim');
const cat = memoryGalleries[memCategoryIndex];
  if (memImageIndex < cat.images.length - 1) {
    preloadImage(cat.images[memImageIndex + 1]);
  } else if (memCategoryIndex < memoryGalleries.length - 1) {
    preloadImage(memoryGalleries[memCategoryIndex + 1].images[0]);
  }

function memNext() {
  const cat = memoryGalleries[memCategoryIndex];
  if (memImageIndex < cat.images.length - 1) {
    memImageIndex++;
  } else if (memCategoryIndex < memoryGalleries.length - 1) {
    memCategoryIndex++;
    memImageIndex = 0;
  } else {
    console.log('Saari galleries khatam — agla part baad mein aayega 🍀');
    return;
  }
  renderMemImage();
}

function memBack() {
  if (memImageIndex > 0) {
    memImageIndex--;
  } else if (memCategoryIndex > 0) {
    memCategoryIndex--;
    memImageIndex = memoryGalleries[memCategoryIndex].images.length - 1;
  }
  renderMemImage();
}

memNextBtn.addEventListener('click', memNext);
memBackBtn.addEventListener('click', memBack);

document.getElementById('galleryIntroNextBtn').addEventListener('click', () => {
  document.getElementById('galleryIntroPage').style.display = 'none';
  memoryGalleryPage.style.display = 'flex';
  memCategoryIndex = 0;
  memImageIndex = 0;
  renderMemImage();
});

// ==========================================
// PARTY LIGHTS - BLINKING BACKGROUND (Memory Gallery)
// ==========================================
function createPartyLights(){
  const layer = document.getElementById('partyLights');
  const colors = ['#f3d98c','#e6a4c4','#a78bfa','#ffd700'];
  for(let i=0;i<24;i++){
    const light = document.createElement('span');
    const color = colors[Math.floor(Math.random()*colors.length)];
    light.style.left = Math.random()*100+'%';
    light.style.top = Math.random()*100+'%';
    light.style.background = color;
    light.style.boxShadow = `0 0 8px ${color}`;
    light.style.animationDelay = (Math.random()*3)+'s';
    light.style.animationDuration = (1.2+Math.random()*1.6)+'s';
    layer.appendChild(light);
  }
}
createPartyLights();

// ==========================================
// BACKGROUND MUSIC PLAYLIST
// ==========================================
const bgPlaylist = [
  "song1.mp3","song2.mp3","song3.mp3","song4.mp3","song5.mp3","song6.mp3","song7.mp3"
];
let currentSongIndex = 0;

const bgMusic = document.getElementById('bgMusic');
bgMusic.volume = 0.06;
console.log('Volume set to:', bgMusic.volume);
const musicToggleBtn = document.getElementById('musicToggleBtn');
let musicStarted = false;

function playCurrentSong() {
  bgMusic.src = bgPlaylist[currentSongIndex];
  bgMusic.play().catch(e => console.log('Music autoplay blocked:', e));
}

bgMusic.addEventListener('ended', () => {
  currentSongIndex = (currentSongIndex + 1) % bgPlaylist.length;
  playCurrentSong();
});

function startBgMusic() {
  if (musicStarted) return;
  musicStarted = true;
  musicToggleBtn.style.display = 'flex';
  playCurrentSong();
}

musicToggleBtn.addEventListener('click', () => {
  bgMusic.muted = !bgMusic.muted;
  musicToggleBtn.textContent = bgMusic.muted ? '🔇' : '🔊';
});

