class MobileNavBar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelector(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards0.3s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavBar = new MobileNavBar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
//---------------------------------------------------------------------------------------------------------------------//
const data = Array.from({length: 100})
    .map((_, i) => `Item ${(i + 1)}`) 

const html = {
    get(element) {
        return document.querySelector(element)
    }
}

let perPage = 5

const state = {
    page: 1,
    perPage,
    totalPage: Math.ceil(data.length / perPage),
    maxVisibleButtons: 3
}

const controls = {
    next() {
        state.page++

        const lastPage = state.page > state.totalPage
        if(lastPage) {
            state.page--
        }
    },
    prev() {
        state.page--

        if(state.page < 1) {
            state.page++
        }
    },
    goTo(page) {
        if ( page < 1) {
            page = 1
        }

        state.page = page

        if (page > state.totalPage) {
            state.page = state.totalPage
        }
        },
    createListeners() {
        html.get('.first').addEventListener('.click', () => {
            controls.goTo(1)
            update()
        })
        html.get('.last').addEventListener('.click', () => {
            controls.goTo(state.totalPage)
            update()
        })
        html.get('.next').addEventListener('.click', () => {
            controls.next()
            update()
        })
        html.get('.prev').addEventListener('.click', () => {
            controls.prev()
            update()
        })
    }

}

const list = {
    create(item) {
        const div = document.createElement('div')
        div.classList.add('item')
        div.innerHTML = item

        html.get('.list').appendChild(div)
    },
    update() {
        html.get('.list').innerHTML = ""

        let page = state.page - 1
        let start = page * state.perPage
        let end = start + state.perPage

        const paginatedItems = data.slice(start, end)

        paginatedItems.forEach(list.create)
    }
}


const buttons = {
    element: html.get('.pagination .numbers'),
    create(numbers) {
        const button = document.createElement('div')

        button.innterHTML = number;

        if(state.page == number) {
            button.classList.add('active')
        }
        
        button.addEventListener('click', (event) => {
            const page = event.target.innerText

            controls.goTo(page)
            update()
        })

        buttons.element.appendChild(button)
    },
    create() {},
    update() {
        buttons.element.innerHTML = ""
        html.get('.pagination .numbers').innterHTML = ""
        const {maxLeft, maxRight} = buttons.calculateMaxVisible()

        for(let page = maxLeft; page <= maxRight; page++ ) {
            buttons.create(page)
    }
    calculateMaxVisible() 
        const { maxVisibleButtons } = state
        let maxLeft = (state.page - Math.floor(maxVisibleButtons / 2 ))
        let maxRight = (state.page + Math.floor(maxVisibleButtons / 2))

        const { maxVisibleButtons } = state
        let maxLeft = (state.page - Math.floor(maxVisibleButtons / 2 ))
        let maxRight = (state.page + Math.floor(maxVisibleButtons / 2))

        if (maxLeft < 1) {
            maxLeft = 1
            maxRight = maxVisibleButtons
        }
        if (maxRight > state.totalPage) {
            maxLeft = state.totalPage - ( maxVisibleButtons - 1)
            maxRight = state.totalPage

            if(maxLeft < 1) maxLeft = 1
        } 

        }
    }

function update() {
    buttons.update()
    list.update()
}
function init() {
    update()
    controls.createListeners()
}
init()