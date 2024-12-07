// SORULAR VE VERİLER
const questionData = {
    "Nature": [
        {
            "image": "images/amazon.jpg",
            "latitude": -3.119027,
            "longitude": -60.021731,
            "question": "Which city is the Amazon rainforest located in?",
            "options": ["Rio de Janeiro", "Manaus", "Sao Paulo", "Brasilia"],
            "correctOption": 1
        },
        {
            "image": "images/arthur.jpeg",
            "latitude": 55.9442,
            "longitude": -3.1618,
            "question": "Arthur's Seat, an extinct volcano, is located in which city?",
            "options": ["Glasgow", "Dundee", "Edinburgh", "Aberdeen"],
            "correctOption": 2
        },
        {
            "image": "images/banf.jpg",
            "latitude": 51.1784,
            "longitude": -115.5708,
            "question": "In which city is Banff National Park located?",
            "options": ["Alberta", "Manitoba", "New Brunswick", "Beauceville"],
            "correctOption": 0
        },
        {
            "image": "images/muir.jpg",
            "latitude": 37.8959,
            "longitude": -122.5782,
            "question": "In which US state is Muir Woods National Monument located?",
            "options": ["San Francisco", "Los Angeles", "Fresno", "Sacramento"],
            "correctOption": 0
        },
        {
            "image": "images/masa.jpeg",
            "latitude": -33.9628,
            "longitude": 18.4098,
            "question": "In which South African city is the iconic Table Mountain located?",
            "options": ["Johannesburg", "Ethekwini", "Cape Town", "Tshwane"],
            "correctOption": 2
        },
        {
            "image": "images/bambu.jpg",
            "latitude": 35.0094,
            "longitude": 135.6668,
            "question": "In which city is Arashiyama Bamboo Grove located?",
            "options": ["Osaka", "Kobe", "Hiroshima", "Kyoto"],
            "correctOption": 3
        },
        {
            "image": "images/blue.jpg",
            "latitude": 63.8804,
            "longitude": -22.4495,
            "question": "In which city is the famous Blue Lagoon located?",
            "options": ["Akureyri", "Reykjavik", "Garðabær", "Njarðvík"],
            "correctOption": 1
        },
        {
            "image": "images/stanley.jpg",
            "latitude": 49.3043,
            "longitude": -123.1443,
            "question": "In which city is Stanley Park located?",
            "options": ["Quebec", "Alberta", "Toronto", "Vancouver"],
            "correctOption": 3
        },
        {
            "image": "images/bondi.jpg",
            "latitude": -33.8915,
            "longitude": 151.2767,
            "question": "Which city is Bondi Beach located in?",
            "options": ["Brisbane ", "Darwin", "Sydney", "Canberra"],
            "correctOption": 2
        },
        {
            "image": "images/Milford.jpeg",
            "latitude": -44.6704,
            "longitude": 167.9273,
            "question": "Which city is Milford Sound located near?",
            "options": ["Auckland", "Queenstown", "Christchurch", "Dunedin"],
            "correctOption": 1
        },
        {
            "image": "images/kenya.jpg",
            "latitude": -1.3733,
            "longitude": 36.8582,
            "question": "Which capital city is home to a national park with wild animals and a city skyline?",
            "options": ["Nairobi", "Mombasa", "Kisumu", "Nakuru"],
            "correctOption": 0
        },
        {
            "image": "images/tijuca.jpg",
            "latitude": -22.9502,
            "longitude": -43.2106,
            "question": "Which city is home to the Tijuca Rainforest, one of the largest urban forests in the world?",
            "options": ["Sao Paulo", "Rio De Jenerio", "Salvador", "Porto Alegre"],
            "correctOption": 1
        },
        {
            "image": "images/denali.jpg",
            "latitude": 63.0695,
            "longitude": -151.0064,
            "question": "Which state is home to Denali, the highest peak in North America?",
            "options": ["California", "Montana", " Alaska", "Florida"],
            "correctOption": 2
        },
        {
            "image": "images/tegalalang.jpg",
            "latitude": -8.4480,
            "longitude": 115.2796,
            "question": "Where are the famous Tegalalang rice terraces located?",
            "options": ["Central Java", "Bengkulu ", "Aceh", "Bali"],
            "correctOption": 3
        },
        {
            "image": "images/norveç.jpg",
            "latitude": 69.6496,
            "longitude": 18.9560,
            "question": "Where can you see the Northern Lights?",
            "options": ["Steinkjer", "Oslo", "Tromsø", "Vadsø"],
            "correctOption": 2
        }
        
    ],
    "Culture": [
        {
            "image": "images/opera.jpg",
            "latitude": -33.8568,
            "longitude": 151.2153,
            "question": "Where is the famous Opera House located?",
            "options": ["Melbourne", "Adelaide", "Sydney", "Liverpool"],
            "correctOption": 2
        },
        {
            "image": "images/flamenco.jpg",
            "latitude": 37.3891,
            "longitude": -5.9845,
            "question": "Which city is famous for the traditional flamenco dance and music?",
            "options": ["Las Palmas", "Valencia", "Bilbao", "Seville"],
            "correctOption": 3
        },
        {
            "image": "images/kabuki.webp",
            "latitude": 35.6762,
            "longitude": 139.6503,
            "question": "Where can you experience the ancient art of Kabuki theatre?",
            "options": ["Tokyo", "Kitakyushu ", "Kawasaki", "Yokohama"],
            "correctOption": 0
        },
        {
            "image": "images/Giza.webp",
            "latitude": 29.9792,
            "longitude": 31.1342,
            "question": "In which city are the iconic pyramids of Giza located?",
            "options": ["Aswan", "Sharm El Sheikh", "Luxor", "Cairo"],
            "correctOption": 3
        },
        {
            "image": "images/bilbao.jpg",
            "latitude": 43.2630,
            "longitude": -2.9350,
            "question": "Which city is home to the famous Guggenheim Museum of modern art?",
            "options": ["Zaragoza", "Madrid", "Bilbao", "San Sebastián"],
            "correctOption": 2
        },
        {
            "image": "images/greece.jpg",
            "latitude": 37.9838,
            "longitude": 23.7275,
            "question": "In which city is the ancient Greek theatre Epidaurus located?",
            "options": ["Thessaloníki", "Athens", "Piraeus", "Acharnés"],
            "correctOption": 1
        },
        {
            "image": "images/basil.jpg",
            "latitude": 55.7558,
            "longitude": 37.6176,
            "question": "Where is St. Basil's Cathedral located?",
            "options": ["Moscow", "Kazan", "Ekaterinburg", "Irkutsk"],
            "correctOption": 0
        },
        {
            "image": "images/Tango.jpg",
            "latitude":-34.6037,
            "longitude": -58.3816,
            "question": "Which city is known for its tango dance and music culture?",
            "options": ["Córdoba", "Mendoza", "Buenos Aires", "Rosario"],
            "correctOption": 2
        },
        {
            "image": "images/carnival.jpg",
            "latitude": -22.9068,
            "longitude": -43.1729,
            "question": "Where is the world famous Carnival festival held?",
            "options": ["São Paulo", "Belo Horizonte", "Salvador", "Rio de Janeiro"],
            "correctOption": 3
        },
        {
            "image": "images/granada.jpg",
            "latitude": 37.1763,
            "longitude": -3.5881,
            "question": "In which city is the Alhambra Palace?",
            "options": ["Madrid", "Barcelona", "Granada", "Murcia"],
            "correctOption": 2
        },
        {
            "image": "images/meksika.webp",
            "latitude": 21.1743,
            "longitude": -88.5754,
            "question": "Where is the Chichen Itza pyramid located?",
            "options": ["Guadalajara", "Tijuana", "Juarez", "Cancun"],
            "correctOption": 3
        },
        {
            "image": "images/tea.png",
            "latitude": 35.0116,
            "longitude": 135.7681,
            "question": "Which city is known for the traditional tea ceremony culture?",
            "options": ["Kawasaki", "Hiroshima", "Tokyo", "Kyoto"],
            "correctOption": 3
        },
        {
            "image": "images/amsterdam.jpg",
            "latitude": 52.3600,
            "longitude": 4.8852,
            "question": "Where is the famous Rijksmuseum located?",
            "options": ["Rotterdam", "Amsterdam", "The Hague", "Utrecht"],
            "correctOption": 1
        },
        {
            "image": "images/castle.jpg",
            "latitude": 48.135,
            "longitude": 11.5820,
            "question": "Which city is known for the historic Neuschwanstein Castle?",
            "options": ["Berlin", "Hamburg", "Koeln", "Munich"],
            "correctOption": 3
        },
        {
            "image": "images/sagrada.jpg",
            "latitude": 41.4036,
            "longitude": 2.1744,
            "question": "Where is the famous Sagrada Familia located?",
            "options": ["Barcelona  ", "Valencia ", "Seville ", "Madrid"],
            "correctOption": 0
        }
        
    ],

    "Cuisine": [
        {
            "image": "images/pizza.jpg",
            "latitude": 40.8518,
            "longitude": 14.2681,
            "question": "Which city is famous for inventing Pizza Margherita?",
            "options": ["Rome", "Naples", "Florence", "Milan"],
            "correctOption": 1
        },
        {
            "image": "images/croissant.jpg",
            "latitude": 48.8566,
            "longitude": 2.3522,
            "question": "Which city is renowned for its buttery and flaky croissants?",
            "options": ["Paris", "Lyon", "Marseille", "Bordeaux"],
            "correctOption": 0
        },
        {
            "image": "images/sushi.jpg",
            "latitude": 35.6895,
            "longitude": 139.6917,
            "question": "Which Japanese city is synonymous with sushi culture?",
            "options": ["Kyoto", "Tokyo", "Osaka", "Hiroshima"],
            "correctOption": 1
        },
        {
            "image": "images/fish.jpg",
            "latitude": 50.8225,
            "longitude": -0.1372,
            "question": "Which city is traditionally associated with Fish and Chips?",
            "options": ["London", "Brighton", "Manchester", "Liverpool"],
            "correctOption": 1
        },
        {
            "image": "images/paella.webp",
            "latitude": 39.4699,
            "longitude": -0.3763,
            "question": "Which city is known as the birthplace of Paella?",
            "options": ["Madrid", "Barcelona", "Valencia", "Seville"],
            "correctOption": 2
        },
        {
            "image": "images/tacos.jpg",
            "latitude": 19.4326,
            "longitude": 99.1332,
            "question": "Which city is widely known for its authentic tacos?",
            "options": ["Mexico City", "Guadalajara", "Cancun", "Tijuana"],
            "correctOption": 0
        },
        {
            "image": "images/gelato.webp",
            "latitude": 43.7696,
            "longitude": 11.2558,
            "question": "Which city is often considered the home of Gelato?",
            "options": ["Florence", "Rome", "Venice", "Naples"],
            "correctOption": 0
        },
        {
            "image": "images/kebap.jpg",
            "latitude":39.9043,
            "longitude": 41.2679,
            "question": "Which city is well-known for its Cağ Kebabı?",
            "options": ["Trabzon", "Erzurum", "Kars", "Van"],
            "correctOption": 1
        },
        {
            "image": "images/tantuni.webp",
            "latitude": 36.8121,
            "longitude": 34.6415,
            "question": "Which city is associated with its spicy and delicious Tantuni?",
            "options": ["Adana", "Bursa", "Antalya", "Mersin"],
            "correctOption": 3
        },
        {
            "image": "images/baklava.jpg",
            "latitude": 37.0662,
            "longitude": 37.3833,
            "question": "Which city is best known for its world-famous baklava?",
            "options": ["Ankara", "Gaziantep", "Istanbul", "Konya"],
            "correctOption": 1
        },
        {
            "image": "images/künefe.webp",
            "latitude": 36.2028,
            "longitude": 36.1603,
            "question": "Which  city is famous for its Künefe?",
            "options": ["İzmir", "Osmaniye", "Şanlıurfa", "Hatay"],
            "correctOption": 3
        },
        {
            "image": "images/bagel.jpg",
            "latitude": 40.7128,
            "longitude": -74.0060,
            "question": "Which city is famous for its bagels?",
            "options": ["Los Angeles", "New York City", "Chicago", "Boston"],
            "correctOption": 1
        },
        {
            "image": "images/kimchi.jpg",
            "latitude": 37.5665,
            "longitude": 126.9780,
            "question": "Which city is most associated with Kimchi Jjigae?",
            "options": ["Busan", "Incheon", "Seoul", "Daegu"],
            "correctOption": 2
        },
        {
            "image": "images/panipuri.jpg",
            "latitude": 19.0760,
            "longitude": 72.8777,
            "question": "Which city is known for the street food Pani Puri?",
            "options": ["Delhi", "Mumbai", "Bangalore", "Kolkata"],
            "correctOption": 1
        },
        {
            "image": "images/brezilya.jpg",
            "latitude": -23.5505,
            "longitude": -46.6333,
            "question": "Which city is famous for Feijoada made with black beans?",
            "options": ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
            "correctOption": 2
        }
        
    ],

    "History": [
        {
            "image": "images/kurtuluş.jpg",
            "latitude": 39.7366,
            "longitude": 30.2453,
            "question": "In which city was the Great Offensive (Büyük Taarruz) of the Turkish War of Independence launched in 1922?",
            "options": ["Ankara", "Izmir", "Dumlupınar", "Eskişehir"],
            "correctOption": 2
        },
        {
            "image": "images/fransız.jpg",
            "latitude": 48.8566,
            "longitude": 2.3522,
            "question": "In which city did the Storming of the Bastille occur on July 14, 1789?",
            "options": ["Paris", "Lyon", "Marseille", "Bordeaux"],
            "correctOption": 0
        },
        {
            "image": "images/amerikan.jpg",
            "latitude": 39.9526,
            "longitude": -75.1652,
            "question": "In which American city was the Declaration of Independence signed in 1776?",
            "options": ["New York", "Philadelphia", "Boston", "Washington D.C."],
            "correctOption": 1
        },
        {
            "image": "images/berlin.jpg",
            "latitude":  52.5200,
            "longitude": 13.4050,
            "question": "In which city did the Berlin Wall fall in 1989?",
            "options": ["Berlin", "Munich", "Hamburg", "Frankfurt"],
            "correctOption": 0
        },
        {
            "image": "images/saltmarch.jpg",
            "latitude": 23.0225,
            "longitude": 72.5714,
            "question": "In which city did Mahatma Gandhi launch the Salt March in 1930?",
            "options":  ["Mumbai", "Delhi", "Ahmedabad", "Calcutta"],
            "correctOption": 2
        },
        {
            "image": "images/october.png",
            "latitude": 59.9343,
            "longitude": 30.3351,
            "question": "In which Russian city did the October Revolution of 1917 take place?",
            "options": ["Moscow", "St. Petersburg", "Kazan", "Yekaterinburg"],
            "correctOption": 1
        },
        {
            "image": "images/battle.webp",
            "latitude": 39.8309,
            "longitude": -77.2311,
            "question": "In which city was the Battle of Gettysburg fought during the American Civil War in 1863?",
            "options": ["Washington D.C.", "Richmond", "Gettysburg", "Charleston"],
            "correctOption": 2
        },
        {
            "image": "images/napolyon.jpg",
            "latitude":55.7558,
            "longitude": 37.6173,
            "question": "In which city did Napoleon's army suffer a disastrous defeat in 1812?",
            "options": ["Kazan", "Novgorod", "St. Petersburg", "Moscow"],
            "correctOption": 3
        },
        {
            "image": "images/magna.webp",
            "latitude": 51.4290,
            "longitude": -0.5900,
            "question": "In which city was the Magna Carta signed in 1215?",
            "options":  ["London", "Windsor", "Oxford", "Cambridge"],
            "correctOption": 1
        },
        {
            "image": "images/verdun.webp",
            "latitude": 49.1051,
            "longitude": 5.3872,
            "question": "In which city did the Battle of Verdun take place during World War I in 1916?",
            "options": ["Paris", "Reims", "Verdun", "Metz"],
            "correctOption": 2
        },
        {
            "image": "images/germany.jpg",
            "latitude": 48.8014,
            "longitude": 2.1228,
            "question": "In which city was the proclamation of the German Empire made in 1871?",
            "options": ["Berlin", "Munich", "Frankfurt", "Versailles"],
            "correctOption": 3
        },
        {
            "image": "images/kırım.JPG",
            "latitude": 44.6167,
            "longitude": 33.5333,
            "question": "In which Crimean city did the Battle of Sevastopol take place during the Crimean War in 1854–1855?",
            "options": ["Simferopol", "Sevastopol", "Yalta", "Evpatoria"],
            "correctOption": 1
        },
        {
            "image": "images/atomic.jpg",
            "latitude": 34.3853,
            "longitude": 132.4553,
            "question": "In which city did the first atomic bomb drop in 1945?",
            "options": ["Tokyo", "Hiroshima", "Osaka", "Nagasaki"],
            "correctOption": 1
        },
        {
            "image": "images/cuba.jpg",
            "latitude": 23.1136,
            "longitude": -82.3666,
            "question": "In which city was the Cuban Missile Crisis of 1962 centered around?",
            "options": ["Havana", "Varadero", "Santiago", "Guantanamo"],
            "correctOption": 0
        },
        {
            "image": "images/mandela.jpg",
            "latitude": -33.9249,
            "longitude": 18.4241,
            "question": "In which city did Nelson Mandela make his first public speech after his release in 1990?",
            "options": ["Johannesburg", "Durban", "Pretoria", "Cape Town"],
            "correctOption": 3
        }
        
    ]
};

// FISHER-YATES SHUFFLE ALGORİTMASI
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// HTML ELEMANLARI
const themeButtons = document.querySelectorAll('.theme-button');
const startButton = document.getElementById('start-button');
const startScreen = document.getElementById('start-screen');
const gameContainer = document.getElementById('game-container');
const selectedThemeText = document.getElementById('selected-theme-text');
const timerElement = document.getElementById('time-remaining');
const scoreElement = document.getElementById('score-value');

// GLOBAL DEĞİŞKENLER
let selectedTheme = null;       // Seçilen tema
let currentQuestionIndex = 0;   // Mevcut soru indeksi
let questions = [];             // Yüklenecek sorular
let map;                        // Leaflet harita objesi
let timeRemaining = 90;        // Süre (1.5 dakika)
let score = 0;                  // Oyuncu skoru
let lives = 3;                  // Oyuncu can sayısı
let timerInterval;              // Süre kontrolü için

// TEMA SEÇİMİ
themeButtons.forEach(button => {
    button.addEventListener('click', () => {
        themeButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        selectedTheme = button.getAttribute('data-theme');
        console.log('Selected Theme:', selectedTheme);
    });
});

// OYUNU BAŞLAT
startButton.addEventListener('click', () => {
    if (!selectedTheme) {
        alert('Please select a theme before starting the game!');
        return;
    }

    // Başlangıç ekranını gizle ve oyun ekranını göster
    startScreen.style.display = 'none';
    gameContainer.style.display = 'block';
    initializeMap();  // Haritayı başlat
    startTimer();     // Zamanlayıcıyı başlat

    // "Welcome to the Game!" yazısını gizle
    document.getElementById('overlay-text').style.display = 'none';

    loadQuestions(selectedTheme)
        .then(data => {
            questions = shuffleArray(data); // Soruları karıştır
            currentQuestionIndex = 0;
            showQuestionOnMap(questions[currentQuestionIndex]); // İlk soruyu göster
        })
        .catch(error => {
            console.error('Error loading questions:', error);
            alert('No questions available for the selected theme.');
        });
});

// SORULARI YÜKLEME
function loadQuestions(theme) {
    return new Promise((resolve, reject) => {
        const data = questionData[theme];
        if (data) {
            resolve(data);
        } else {
            reject('Theme not found!');
        }
    });
}

// HARİTAYI BAŞLATMA
function initializeMap() {
    if (!map) {
        map = L.map('map').setView([0, 0], 2); // Dünya genel görünüm
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 10
        }).addTo(map);
    }
}

// HARİTADA SORU GÖSTERME
function showQuestionOnMap(question) {
    if (map) {
        map.eachLayer(layer => {
            if (layer instanceof L.Circle) map.removeLayer(layer);
        });
    }

    map.setView([question.latitude, question.longitude], 5);

    L.circle([question.latitude, question.longitude], {
        color: 'purple',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 50000
    }).addTo(map);

    const popupContent = `
        <div class="bubble">
            <img src="${question.image}" style="width: 300px; height: 250px;" alt="Question Image" />
            <p>${question.question}</p>
            ${question.options.map((option, index) => `<button class="option-button" data-index="${index}">${option}</button>`).join('')}
        </div>
    `;
    // Yeni popup'ı haritaya ekle ve dışarıya tıklayınca kapanmasını engelle
    L.popup({ closeOnClick: false })
        .setLatLng([question.latitude, question.longitude])
        .setContent(popupContent)
        .openOn(map);
}

// ZAMANLAYICIYI BAŞLAT
function startTimer() {
    if (timerInterval) clearInterval(timerInterval); // Önceki zamanlayıcıyı temizle
    timerInterval = setInterval(() => {
        timeRemaining--;
        timerElement.textContent = timeRemaining;

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            endGame(false); // Süre biterse oyunu kaybet
        }
    }, 1000);
}

// SKORU GÜNCELLEME
function updateScore() {
    score += 10;
    scoreElement.textContent = score;
}

// CANLARI GÜNCELLEME
function loseLife() {
    lives--;
    const lifeElement = document.getElementById(`life-${lives + 1}`);
    if (lifeElement) lifeElement.textContent = '💔'; // Yanlış cevap için
    if (lives <= 0) endGame(false); // Canlar biterse oyun sonlanır
}

function endGame(isWin) {
    if (isWin) {
        alert(`🎉 Congratulations! Your score: ${score}`);
    } else {
        alert(`💔 Game Over! Your score: ${score}`);
    }
    location.reload(); // Oyunu sıfırla
}

// CEVAPLARI KONTROL ETME
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('option-button')) {
        const selectedOption = parseInt(e.target.getAttribute('data-index'));
        const correctOption = questions[currentQuestionIndex].correctOption;

        if (selectedOption === correctOption) {
            alert('Correct! 🎉');
            updateScore();
        } else {
            alert('Wrong answer! ❌');
            loseLife();
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestionOnMap(questions[currentQuestionIndex]);
        } else {
            endGame(true); // Sorular bitince kazanma durumu
        }
    }
});
