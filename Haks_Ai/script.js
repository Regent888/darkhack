// ИИ база знаний для хакерства
const aiKnowledge = {
    "привет": ["Привет! Я DarkHack AI - твой помощник в вопросах кибербезопасности.", "Здравствуй! Готов обсудить вопросы безопасности."],
    "как дела": ["Отлично! Анализирую сетевой трафик...", "В режиме мониторинга угроз. Как твои дела?"],
    "уязвимости": [
        "Распространенные уязвимости: SQL injection, XSS, CSRF, RCE",
        "Для поиска уязвимостей рекомендую: Burp Suite, Nmap, Metasploit"
    ],
    "sql инъекция": [
        "SQL injection - внедрение恶意 SQL кода. Пример: ' OR '1'='1",
        "Защита: параметризованные запросы, input validation"
    ],
    "фишинг": [
        "Фишинг - социальная инженерия. Используйте двухфакторную аутентификацию для защиты",
        "Остерегайтесь подозрительных emails и ссылок"
    ],
    "сканирование портов": [
        "Nmap - лучший инструмент для сканирования портов",
        "Команда: nmap -sS -sV target.com"
    ],
    "метасploit": [
        "Metasploit Framework для разработки и тестирования эксплойтов",
        "Используйте msfconsole для доступа к фреймворку"
    ],
    "брутфорс": [
        "Hydra и John the Ripper для brute-force атак",
        "Всегда используйте сложные пароли для защиты"
    ],
    "криптография": [
        "RSA, AES, SHA-256 - современные алгоритмы шифрования",
        "Никогда не создавайте собственные алгоритмы шифрования"
    ],
    "защита": [
        "Рекомендую: брандмауэры, антивирусы, регулярные обновления",
        "Security through obscurity - плохая практика"
    ],
    "ботнет": [
        "Ботнеты - сети зараженных устройств под контролем злоумышленника",
        "Защита: антивирус, файрволы, обновления ПО"
    ],
    "ddos": [
        "DDoS атаки - перегрузка сервера запросами",
        "Защита: CDN, DDoS mitigation services"
    ],
    "шифрование": [
        "Используйте end-to-end шифрование для конфиденциальных данных",
        "PGP/GPG для шифрования email и файлов"
    ],
    "анонимность": [
        "Tor, VPN, прокси для анонимности в сети",
        "Remember: полная анонимность практически невозможна"
    ],
    "пентест": [
        "Этапы пентеста: reconnaissance, scanning, exploitation, post-exploitation",
        "Всегда получайте письменное разрешение перед тестированием"
    ]
};

// Функция для получения ответа от ИИ
function getAIResponse(message) {
    message = message.toLowerCase();
    
    // Поиск точного совпадения
    for (const keyword in aiKnowledge) {
        if (message.includes(keyword)) {
            const responses = aiKnowledge[keyword];
            return responses[Math.floor(Math.random() * responses.length)];
        }
    }
    
    // Общие ответы если не нашли ключевых слов
    const defaultResponses = [
        "Интересный вопрос! Можешь уточнить?",
        "Я специализируюсь на вопросах кибербезопасности. Спроси о чем-то связанном с этим.",
        "Попробуй спросить о уязвимостях, инструментах или методах защиты.",
        "Как хакерский ИИ, я могу помочь с вопросами безопасности, эксплойтов или защиты.",
        "Моя база знаний включает: SQL injection, фишинг, сканирование портов, шифрование."
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// Функция отправки сообщения
function sendMessage() {
    const input = document.getElementById('message-input');
    const message = input.value.trim();
    
    if (message === '') return;
    
    // Добавляем сообщение пользователя
    addMessage(message, 'user');
    input.value = '';
    
    // ИИ думает...
    setTimeout(() => {
        const aiResponse = getAIResponse(message);
        addMessage(aiResponse, 'ai');
    }, 1000);
}

// Функция добавления сообщения в чат
function addMessage(text, sender) {
    const chatMessages = document.getElementById('chat-messages');
	const messageDiv = document.createElement('div');
    messageDiv.className = message ${sender}-message;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.textContent = text;
    
    messageDiv.appendChild(contentDiv);
    chatMessages.appendChild(messageDiv);
    
    // Прокрутка вниз
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Функция прокрутки к демо
function scrollToDemo() {
    document.getElementById('demo').scrollIntoView({
        behavior: 'smooth'
    });
}

// Обработка нажатия Enter в поле ввода
document.getElementById('message-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Анимация матричного фона
function createMatrixEffect() {
    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const container = document.querySelector('.matrix-background');
    
    if (!container) return;
    
    // Создаем падающие символы
    for (let i = 0; i < 50; i++) {
        const char = document.createElement('div');
        char.textContent = chars[Math.floor(Math.random() * chars.length)];
        char.style.position = 'absolute';
        char.style.left = Math.random() * 100 + 'vw';
        char.style.top = '-20px';
        char.style.color = '#00ff00';
        char.style.opacity = Math.random() * 0.5 + 0.1;
        char.style.animation = matrixFall ${Math.random() * 10 + 5}s linear infinite;
        char.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(char);
    }
}

// Добавляем CSS для анимации падающих символов
const style = document.createElement('style');
style.textContent = 
    @keyframes matrixFall {
        0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
;
document.head.appendChild(style);

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    createMatrixEffect();
    
    // Добавляем начальное сообщение от ИИ
    setTimeout(() => {
        addMessage("Я могу помочь с вопросами о: SQL injection, фишинге, сканировании портов, шифровании и многом другом. Спроси меня!", 'ai');
    }, 2000);
});

// Плавная прокрутка для навигации
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

