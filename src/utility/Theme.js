class ThemeControl{
    //1. Describe and initiate our object
    constructor() {
        this.sun = document.querySelector('#sun')
        this.moon = document.querySelector('#moon')
        this.html = document.querySelector('html')

        this.initializedTheme()
        this.events()
    }

    initializedTheme(){
        if(!localStorage.getItem('theme') || localStorage.getItem('theme') !== 'dark'){
            localStorage.setItem('theme', '');

        } else {
            localStorage.setItem('theme', 'dark')
            this.html.classList.add('dark')
            this.toggleIcon()
        }
    }

    // 2. Events
    events() {
        this.sun.addEventListener("click", () => this.changeToDark())
        this.moon.addEventListener("click", () => this.changeToLight())
    }

    // 3. methods (function, action...)
    toggleIcon() {
        this.sun.classList.toggle('hidden')
        this.moon.classList.toggle('hidden')
    }

    changeToLight() {
        console.log('light')
        this.toggleIcon()
        localStorage.setItem('theme', '');
        this.html.classList.remove('dark')
    }

    changeToDark() {
        this.toggleIcon()
        localStorage.setItem('theme', 'dark')
        this.html.classList.add('dark')
    }
}

export default ThemeControl
