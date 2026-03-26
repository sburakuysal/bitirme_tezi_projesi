let generatedCaptcha = "";

// 8 Film Verisi
const movies = [
    { title: "Siber Savaş", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400" },
    { title: "Kripto Analiz", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400" },
    { title: "Sızma Testi", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400" },
    { title: "Veri Koruyucuları", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?w=400" },
    { title: "Yapay Zeka Tehdidi", img: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=400" },
    { title: "Ağ Güvenliği", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400" },
    { title: "Kodun Gizemi", img: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400" },
    { title: "Büyük Veri Operasyonu", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400" }
];

// --- Navigasyon ---
function showLogin() {
    document.getElementById('register-card').classList.add('hidden');
    document.getElementById('login-card').classList.remove('hidden');
    generateCaptcha();
}

function showRegister() {
    document.getElementById('login-card').classList.add('hidden');
    document.getElementById('register-card').classList.remove('hidden');
}

// --- CAPTCHA Sistemi ---
function generateCaptcha() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let code = "";
    for (let i = 0; i < 6; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    generatedCaptcha = code;
    document.getElementById('captcha-code').innerText = code;
}

// --- Form İşlemleri ---
document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Hesabınız oluşturuldu! Lütfen giriş yapın.");
    showLogin();
});

document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const userInput = document.getElementById('captcha-input').value.toUpperCase();
    
    if (userInput === generatedCaptcha) {
        showMainPage();
    } else {
        alert("Hatalı CAPTCHA! Lütfen tekrar deneyin.");
        generateCaptcha();
        document.getElementById('captcha-input').value = "";
    }
});

// --- Ana Sayfayı Yükleme ---
function showMainPage() {
    document.getElementById('auth-container').classList.add('hidden');
    document.getElementById('bg-overlay').classList.add('hidden');
    document.getElementById('main-portal').classList.remove('hidden');
    
    const grid = document.getElementById('movie-grid');
    grid.innerHTML = movies.map(m => `
        <div class="movie-card">
            <img src="${m.img}" alt="${m.title}">
            <div class="movie-title">${m.title}</div>
        </div>
    `).join('');
}

// --- Çıkış ---
document.getElementById('logout-btn').addEventListener('click', () => {
    location.reload();
});

// Sayfa ilk açıldığında CAPTCHA hazırla
window.onload = generateCaptcha;
document.getElementById('refresh-captcha').onclick = generateCaptcha;