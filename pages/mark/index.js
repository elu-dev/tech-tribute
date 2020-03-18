let pages = 3
let blocked = false

const drawFlags = [0,1,1]

function _scrollTo(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
}

function handleWheel(e) {
    e.preventDefault()
    if (blocked) return

    current = document.documentElement.scrollTop / Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    
    if (e.deltaY > 0) {
        if (current < pages - 1) current = Math.floor(current) + 1
        else return
    }
    else
    if (e.deltaY < 0) {
        if (current > 0) current = Math.max(Math.ceil(current- 1.01), 0)
        else return
    }

    _scrollTo('sq'+current.toString())

    blocked = true
    setTimeout(x => blocked = false, 500)
}

function handleScroll(e) {
    const pos = document.documentElement.scrollTop / Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    let flag = false
    let current = 0

    if (pos < 0.7) {
        current = 0

    } else if (pos > 0.7 && pos < 1.7) {
        current = 1
    
    } else if (pos > 1.7) {
        current = 2
    }

    for (let i = 0; i < pages; ++i) {
        document.getElementById(`page${i}`).style.backgroundColor = i == current ? (current == 1 ? '#0070ba' : 'white') : '#aaa8'
    }
}

document.addEventListener('wheel', handleWheel, {passive: false})
document.addEventListener('scroll', handleScroll)