const langButtons = document.querySelectorAll("[data-btn]");
const allLangs = ["en", "ua"];
let currentLang =
    localStorage.getItem("language") || checkBrowserLang() || "en";


const headerTexts = {
    "services": {
        en: "services",
        ua: "послуги",
    },
    "work": {
        en: "works",
        ua: "роботи",
    },
    "about": {
        en: "about",
        ua: "про мене",
    },
    "make": {
        en: "let's make",
        ua: "давай зробимо",
    },
};

const mainTexts = {
    "main_title": {
        en: "Front End Developer",
        ua: "Front End Розробник",
    },
    "main_name": {
        en: "Julia Mazur",
        ua: "Юлія Мазур",
    },
    "main_description": {
        en: "When design meets functionality: Front End magic in action to help your website stand out.",
        ua: "Коли дизайн поєднується з функціональністю: магія Front End в дії допоможе вашому веб-сайту виділитися.",
    },
};

const servicesTexts = {
    "serv_title_01": {
        en: "Conversion",
        ua: "Перетворення",
    },
    "serv_title_02": {
        en: "Stylistics",
        ua: "Стилістика",
    },
    "serv_title_03": {
        en: "Interactivity",
        ua: "Інтерактивність",
    },
    "serv_descr_01": {
        en: "Careful analysis of every element of your layout turns it into a functional and colorful reality. Professional experience and advanced tools transform design into a unique interactive experience.",
        ua: "Ретельний аналіз кожного елемента вашого макета перетворює його на функціональну та барвисту реальність. Професійний досвід та передові інструменти трансформують дизайн в унікальне інтерактивне втілення.",
    },
    "serv_descr_02": {
        en: "Embodying your brand identity in every pixel of your unique website. Styling not only provides an aesthetically pleasing user interface, but also enhances your brand awareness.",
        ua: "Втілення вашої брендової ідентичності у кожному пікселі вашого неповторного сайту. Стилізація забезпечує не тільки естетику інтерфейсу користувача, але і підвищує впізнаваність вашого бренду.",
    },
    "serv_descr_03": {
        en: "Interactive elements attract attention and improve the user experience. Animation solutions not only decorate the site, but also add dynamics to your content. They attract attention and inspire the user to further explore your site.",
        ua: "Інтерактивні елементи привертають увагу і покращують досвід користувача. Анімаційні рішення не тільки прикрашають сайт, але і надають динаміку вашому контенту. Приковують увагу та надихають на подальше дослідження вашого сайту користувачем.",
    },
}

const processTexts = {
    "process_title_one": {
        en: "The process",
        ua: "Розробка",
    },
    "process_title_two": {
        en: "Your Website",
        ua: "Ваш сайт",
    },
    "process_title_three": {
        en: "in 5 steps",
        ua: "за 5 кроків",
    },
    "process_title_four": {
        en: "The process of creating a website according to your needs",
        ua: "Процес створення веб-сайту відповідно до ваших потреб",
    },

    "step_one_01": {
        en: "Analysis of layout",
        ua: "Аналіз макета",
    },
    "step_one_02": {
        en: "This process helps understand your project in detail and prepare for the next stage of development. In this step your design layout is study and determine all the necessary requirements for the appearance and functionality of your site.",
        ua: "Цей процес допомагає детально розібратися у вашому проекті та підготуватися до наступного етапу розробки. На цьому кроці відбувається вивчення вашого дизайн-макету для визначення усіх необхідних вимог до зовнішнього вигляду та функціональності вашого сайту.",
    },
    "step_one_03": {
        en: "Obtaining and studying layouts and documentation",
        ua: "Отримання та вивчення макетів та документації",
    },
    "step_one_04": {
        en: "Definition of functional requirements",
        ua: "Визначення функціональних вимог",
    },
    "step_one_05": {
        en: "Preparation for layout",
        ua: "Підготовка до верстки",
    },

    "step_two_01": {
        en: "Development (HTML/CSS)",
        ua: "Розробка (HTML/CSS)",
    },
    "step_two_02": {
        en: "The stage of creating the structure and appearance of your site using HTML to layout the content and CSS to style it. This process allows to create a professional looking and functional website to suit your requirements and provide a superior user experience.",
        ua: "Етап створення структури та зовнішнього вигляду вашого сайту з використанням HTML для розмітки контенту та CSS для його стилізації. Цей процес дозволяє створити професійно виглядаючий і функціональний сайт відповідно до ваших вимог із забезпеченням чудового користувальницького досвіду.",
    },
    "step_two_03": {
        en: "Creating a clear and logical HTML structure",
        ua: "Створення чіткої та логічної HTML-структури",
    },
    "step_two_04": {
        en: "Creating the appearance with CSS",
        ua: "Створення зовнішнього вигляду з використанням CSS",
    },
    "step_two_05": {
        en: "CSS animations and transitions for smooth visual effects",
        ua: "CSS-анімації та переходи для плавних візуальних ефектів",
    },

    "step_three_01": {
        en: "Interactivity (JavaScript)",
        ua: "Інтерактивність (JavaScript)",
    },
    "step_three_02": {
        en: "At this stage, interactive elements and animations are introduced using JavaScript. This process adds functionality to your website, making it more attractive and user-friendly.",
        ua: "На цьому етапі відбувається впровадження інтерактивних елементів та анімації з використанням JavaScript. Цей процес додає функціональність вашому веб-сайту, роблячи його більш привабливим і зручним для користувачів.",
    },
    "step_three_03": {
        en: "Development of basic functions for interaction with page elements",
        ua: "Розробка основних функцій взаємодії з елементами сторінки",
    },
    "step_three_04": {
        en: "Adding event handlers to provide interactivity",
        ua: "Додавання обробників подій для забезпечення інтерактивності",
    },
    "step_three_05": {
        en: "Form validation",
        ua: "Валідація форм",
    },
    "step_three_06": {
        en: "JavaScript animations",
        ua: "JavaScript анімації",
    },

    "step_four_01": {
        en: "Adaptability",
        ua: "Адаптивність",
    },
    "step_four_02": {
        en: "This stage ensures the correct display and functioning of the site on various devices (smartphones, tablets, desktop computers) and in different browsers (Chrome, Firefox, Safari, Edge). The process allows to create a site that looks and performs great on any device and browser, providing the best user experience.",
        ua: "Цей етап забезпечує коректне відображення та функціонування сайту на різних пристроях (смартфони, планшети, настільні комп'ютери) та у різних браузерах (Chrome, Firefox, Safari, Edge). Процес дозволяє створити сайт, який буде виглядати і працювати чудово на будь-якому пристрої і в будь-якому браузері, забезпечуючи кращий досвід користувача.",
    },
    "step_four_03": {
        en: "Adaptive design",
        ua: "Адаптивний дизайн",
    },
    "step_four_04": {
        en: "Cross-browser compatibility",
        ua: "Кросбраузерна сумісність",
    },
    "step_four_05": {
        en: "Testing in different browsers and on different devices",
        ua: "Тестування у різних браузерах та на різних пристроях",
    },

    "step_five_01": {
        en: "Documentation and support",
        ua: "Документація та підтримка",
    },
    "step_five_02": {
        en: "The stage of generating project documentation and providing further support in the operation and development of your site.",
        ua: "Етап формування проектної документації щодо проекту та забезпечення подальшої підтримки роботи та розвитку Вашого сайту.",
    },
    "step_five_03": {
        en: "Description of the structure, all functions and features of the site",
        ua: "Опис структури, всіх функцій та особливостей сайту",
    },
    "step_five_04": {
        en: "Frequently asked questions (FAQ)",
        ua: "Поширені запитання (FAQ)",
    },
    "step_five_05": {
        en: "Support and service",
        ua: "Підтримка та обслуговування",
    },
    "step_five_06": {
        en: "Making improvements based on feedback received",
        ua: "Внесення покращень на основі отриманого зворотного зв'язку",
    },

    "process_end_01": {
        en: "A website that leaves",
        ua: "Веб-сайт, який залишає",
    },
    "process_end_02": {
        en: "a lasting impression!",
        ua: "незабутнє враження!",
    },
};

const workTexts = {
    "work_text": {
        en: "Selected Works",
        ua: "Вибрані Роботи",
    },
    "work_visit01": {
        en: "Visit Website",
        ua: "Більш детально",
    },
    "work_visit02": {
        en: "Visit Website",
        ua: "Більш детально",
    },
    "work_visit03": {
        en: "Visit Website",
        ua: "Більш детально",
    },
    "work_visit04": {
        en: "Visit Website",
        ua: "Більш детально",
    },
};

const aboutTexts = {
    "about_name": {
        en: "Julia",
        ua: "Юлія",
    },
    "about_surname": {
        en: "Mazur",
        ua: "Мазур",
    },
    "about_description": {
        en: "Hi, I'm Julia Mazur - a freelancer specializing in creating modern, interactive and responsive web applications. I am passionate about creating unique and effective solutions for my clients and bring a personal touch to every project. My goal is to transform ideas into reality using cutting-edge technologies and best practices in web development. On this site you see examples of my projects, information about me and my contact details. Let's work together to bring your vision to life!",
        ua: "Привіт, я Юлія Мазур - фрілансер, що спеціалізується на створенні сучасних, інтерактивних та адаптивних веб-додатків. Я захоплена створенням унікальних та ефективних рішень для своїх клієнтів і вношу індивідуальний підхід до кожного проекту. Моя мета — втілити ідеї в реальність, використовуючи передові технології та найкращі практики веб-розробки. На цьому сайті ви бачите приклади моїх проектів, інформацію про мене та мої контактні дані. Давайте працювати разом, щоб втілити ваше бачення в життя!",
    },
};

const makeTexts = {
    "make_box_01": {
        en: "PROJECT IN MIND?",
        ua: "Замислили проект?",
    },
    "make_box_02": {
        en: "Let’s make website",
        ua: "Давайте зробимо сайт",
    },
    "make_box_03": {
        en: "that leaves a lasting impression!",
        ua: "який залишає незабутнє враження!",
    },
    "make_box_04": {
        en: "Front end development to help you and your business stand out",
        ua: "Розробка, яка допоможе вам і вашому бізнесу виділитися",
    },
    "make_box_05": {
        en: "Get in touch",
        ua: "Будемо на зв'язку",
    },
};

const footerTexts = {
    "footer_services": {
        en: "services",
        ua: "послуги",
    },
    "footer_work": {
        en: "works",
        ua: "роботи",
    },
    "footer_about": {
        en: "about",
        ua: "про мене",
    },
    "footer_make": {
        en: "let's make",
        ua: "давай зробимо",
    },
};

const modalText = {
    "modal_title": {
        en: "Let's get in touch",
        ua: "Будемо на зв'язку",
    },

    "placeholder_name": {
        en: "Name",
        ua: "Ім'я"
    },

    "placeholder_email": {
        en: "Email",
        ua: "Електронна пошта"
    },

    "placeholder_message": {
        en: "Message",
        ua: "Повідомлення"
    },

    "modal_button": {
        en: "Send Message",
        ua: "Відправити повідомлення",
    },
}

function changeLang() {
    for (const key in headerTexts) {
        let elem = document.querySelector(`[data-lang=${key}]`);
        if (elem) {
            elem.textContent = headerTexts[key][currentLang];
        }
    }
    for (const key in mainTexts) {
        let elem = document.querySelector(`[data-lang=${key}]`);
        if (elem) {
            elem.textContent = mainTexts[key][currentLang];
        }
    }
    for (const key in servicesTexts) {
        let elem = document.querySelector(`[data-lang=${key}]`);
        if (elem) {
            elem.textContent = servicesTexts[key][currentLang];
        }
    }
    for (const key in processTexts) {
        let elem = document.querySelector(`[data-lang=${key}]`);
        if (elem) {
            elem.textContent = processTexts[key][currentLang];
        }
    }
    for (const key in workTexts) {
        let elem = document.querySelector(`[data-lang=${key}]`);
        if (elem) {
            elem.textContent = workTexts[key][currentLang];
        }
    }
    for (const key in aboutTexts) {
        let elem = document.querySelector(`[data-lang=${key}]`);
        if (elem) {
            elem.textContent = aboutTexts[key][currentLang];
        }
    }
    for (const key in makeTexts) {
        let elem = document.querySelector(`[data-lang=${key}]`);
        if (elem) {
            elem.textContent = makeTexts[key][currentLang];
        }
    }
    for (const key in footerTexts) {
        let elem = document.querySelector(`[data-lang=${key}]`);
        if (elem) {
            elem.textContent = footerTexts[key][currentLang];
        }
    }


    for (const key in modalText) {
        let elem = document.querySelector(`[data-lang=${key}]`);
        if (elem) {
            if (key.startsWith("placeholder_")) {
                elem.placeholder = modalText[key][currentLang];
            } else {
                elem.textContent = modalText[key][currentLang];
            }
        }
    }
}
changeLang();

// Обробники на кожну кнопку
langButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        if (!event.target.classList.contains("header__btn_active")) {
            const scrollY = window.scrollY; // Сохраняем текущую позицию прокрутки
            currentLang = event.target.dataset.btn;
            localStorage.setItem("language", event.target.dataset.btn);
            resetActiveClass(langButtons, "header__btn_active");
            btn.classList.add("header__btn_active");
            changeLang();
            // Восстанавливаем позицию прокрутки с задержкой
            requestAnimationFrame(() => {
                window.scrollTo(0, scrollY);
            });
        }
    });
});

// Сброс активного класса у переданного массива элементов
function resetActiveClass(arr, activeClass) {
    arr.forEach((elem) => {
        elem.classList.remove(activeClass);
    });
}

// Проверка активной кнопки
function checkActiveLangButton() {
    switch (currentLang) {

        case "en":
            document
                .querySelector('[data-btn="en"]')
                .classList.add("header__btn_active");
            break;
        case "ua":
            document
                .querySelector('[data-btn="de"]')
                .classList.add("header__btn_active");
            break;

        default:
            document
                .querySelector('[data-btn="en"]')
                .classList.add("header__btn_active");
            break;
    }
}
checkActiveLangButton();

// Проверка языка браузера
function checkBrowserLang() {
    const navLang = navigator.language.slice(0, 2).toLowerCase();
    const result = allLangs.some((elem) => {
        return elem === navLang;
    });
    if (result) {
        return navLang;
    }
}

console.log("navigator.language", checkBrowserLang());