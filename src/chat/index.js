// конфигурация чат-бота
const configChatbot = {};
// CSS-селектор кнопки, посредством которой будем вызывать окно диалога с чат-ботом
configChatbot.btn = '.chatbot__btn';
// ключ для хранения отпечатка браузера
configChatbot.key = 'fingerprint';
// реплики чат-бота
configChatbot.replicas = '/examples/libs/chatbot/data.json';
// корневой элемент
configChatbot.root = SimpleChatbot.createTemplate();
// URL chatbot.php
configChatbot.url = '/chatbot/chatbot.php';
// переменная для хранения экземпляра
let chatbot = null;
// добавление ключа для хранения отпечатка браузера в LocalStorage
let fingerprint = localStorage.getItem(configChatbot.key);
if (!fingerprint) {
    Fingerprint2.get(function (components) {
        fingerprint = Fingerprint2.x64hash128(components.map(function (pair) {
            return pair.value
        }).join(), 31)
        localStorage.setItem(configChatbot.key, fingerprint)
    });
}
// при клике по кнопке configChatbot.btn
document.querySelector(configChatbot.btn).onclick = function (e) {
    this.classList.add('d-none');
    const $tooltip = this.querySelector('.chatbot__tooltip');
    if ($tooltip) {
        $tooltip.classList.add('d-none');
    }
    configChatbot.root.classList.toggle('chatbot_hidden');
    if (chatbot) {
        return;
    }

    // получение json-файла, содержащего сценарий диалога для чат-бота через AJAX
    const request = new XMLHttpRequest();
    request.open('GET', configChatbot.replicas, true);
    request.responseType = 'json';
    request.onload = function () {
        const status = request.status;
        if (status === 200) {
            const data = request.response;
            if (typeof data === 'string') {
                configChatbot.replicas = JSON.parse(data);
            } else {
                configChatbot.replicas = data;
            }
            // инициализация SimpleChatbot
            chatbot = new SimpleChatbot(configChatbot);
            chatbot.init();
        } else {
            console.log(status, request.response);
        }
    };
    request.send();
};

// подсказка для кнопки
const $btn = document.querySelector(configChatbot.btn);
$btn.addEventListener('mouseover', function (e) {
    const $tooltip = $btn.querySelector('.chatbot__tooltip');
    if (!$tooltip.classList.contains('chatbot__tooltip_show')) {
        $tooltip.classList.remove('d-none');
        setTimeout(function () {
            $tooltip.classList.add('chatbot__tooltip_show');
        }, 0);
    }
});
$btn.addEventListener('mouseout', function (e) {
    const $tooltip = $btn.querySelector('.chatbot__tooltip');
    if ($tooltip.classList.contains('chatbot__tooltip_show')) {
        $tooltip.classList.remove('chatbot__tooltip_show');
        setTimeout(function () {
            $tooltip.classList.add('d-none');
        }, 200);
    }
});

setTimeout(function () {
    const tooltip = document.querySelector('.chatbot__tooltip');
    tooltip.classList.add('chatbot__tooltip_show');
    setTimeout(function () {
        tooltip.classList.remove('chatbot__tooltip_show');
    }, 10000)
}, 10000);