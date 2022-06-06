const loadedModules = []
class ModuleBuilder {

    constructor(name, description, type, url) {
        let domToolDiv = document.createElement("a")
        domToolDiv.href = url
        domToolDiv.className = "listed-module"
        let domToolTitleDiv = document.createElement("div")
        domToolTitleDiv.className = "flex flex-col"
        this.name = name
        this.description = description
        this.type = type
        this.toolDiv = domToolDiv
        let domTag = document.createElement("span")
        domTag.className = "tag"
        domTag.innerText = type
        let domTitle = document.createElement("span")
        domTitle.className = "module-title"
        domTitle.innerText = name
        let domDesc = document.createElement("span")
        domDesc.innerText = description
        domDesc.className = "description"
        domToolTitleDiv.appendChild(domTag)
        domToolTitleDiv.appendChild(domTitle)
        domToolTitleDiv.appendChild(domDesc)
        domToolDiv.appendChild(domToolTitleDiv)
        loadedModules.push(domToolDiv)
    }

}

const loadAll = (parent) => {
    loadedModules.sort((a, b) => {
        let aType = a.firstChild.firstChild.textContent
        let bType = b.firstChild.firstChild.textContent
        return (aType < bType) ? -1 : (aType > bType) ? 1 : 0
    }).forEach(e => {
        parent.appendChild(e)
    })
}