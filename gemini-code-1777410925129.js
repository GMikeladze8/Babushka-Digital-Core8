const content = {
    fr: {
        hero: "Nous transformons votre espace vide en un bureau opérationnel et complet. De l'infrastructure physique à votre présence digitale.",
        email: "📧 contact@babushkahouse.fr",
        list: [
            { t: "CRM", d: "Système adapté (1–50 employés), large choix." },
            { t: "Google Workspace", d: "Configuration domaine et emails pro." },
            { t: "Lead Generation", d: "Formulaires et bases de données vérifiées." },
            { t: "Web Design", d: "Réalisation et gestion de toute complexité." },
            { t: "Branding", d: "Logo, palette de couleurs et supports." },
            { t: "Email Marketing", d: "Gestion complète de vos campagnes." },
            { t: "Analytics", d: "Rapports mensuels et analyse de données." },
            { t: "IA & Bots", d: "Automatisation intelligente pour gain de temps." }
        ]
    },
    en: {
        hero: "We transform your empty space into a fully operational office. From infrastructure to digital presence.",
        email: "📧 contact@babushkahouse.fr",
        list: [
            { t: "CRM", d: "Customized system (1–50 employees)." },
            { t: "Google Workspace", d: "Domain setup and professional emails." },
            { t: "Lead Generation", d: "Online forms and verified databases." },
            { t: "Web Design", d: "Web development of any complexity." },
            { t: "Branding", d: "Logo, color palettes and brand assets." },
            { t: "Email Marketing", d: "Full campaign management." },
            { t: "Analytics", d: "Monthly reports and data analysis." },
            { t: "AI & Bots", d: "Smart automation for optimal efficiency." }
        ]
    },
    ru: {
        hero: "Мы превращаем ваше пустое пространство в готовый к работе офис.",
        email: "📧 contact@babushkahouse.fr",
        list: [
            { t: "CRM", d: "Система для 1–50 сотрудников." },
            { t: "Google Workspace", d: "Настройка домена и проф. почты." },
            { t: "Лидогенерация", d: "Проверенные базы данных лидов." },
            { t: "Веб-дизайн", d: "Создание сайтов любой сложности." },
            { t: "Брендинг", d: "Логотипы и фирменный стиль." },
            { t: "Маркетинг", d: "Управление email-кампаниями." },
            { t: "Аналитика", d: "Ежемесячные отчеты и анализ данных." },
            { t: "ИИ и Боты", d: "Умная автоматизация процессов." }
        ]
    }
};

function init(lang) {
    // გადასვლის ეფექტი
    document.getElementById('gateway').style.display = 'none';
    const app = document.getElementById('app');
    app.classList.remove('hidden');
    setTimeout(() => app.classList.add('opacity-100'), 50);
    
    const data = content[lang] || content['fr'];
    document.getElementById('hero-text').innerText = data.hero;
    document.getElementById('contact-info').innerText = data.email;
    
    // სერვისების ჩაყრა
    document.getElementById('services-grid').innerHTML = data.list.map(s => `
        <div class="card">
            <h3 class="text-lg mb-2 tracking-tighter">${s.t}</h3>
            <p class="text-[10px] font-bold opacity-70 leading-tight italic">${s.d}</p>
        </div>
    `).join('');
}

function toggleColor() {
    document.getElementById('main-body').classList.toggle('mode-light');
}