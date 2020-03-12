let current = 0
let pages = 4
let blocked = false

function handleScroll(e) {
    e.preventDefault()
    if (blocked) return
    
    if (e.deltaY > 0) {
        if (current < pages - 1) ++current
        else return
    }
    else
    if (e.deltaY < 0) {
        if (current > 0) current = --current
        else return
    }

    document.getElementById('sq'+current.toString()).scrollIntoView({ behavior: 'smooth' })

    blocked = true
    setTimeout(x => blocked = false, 500)
}

document.addEventListener('wheel', handleScroll, {passive: false})