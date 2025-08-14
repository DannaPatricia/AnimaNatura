
export function getaAnimalTypes() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, name: 'Mamíferos' },
                { id: 2, name: 'Reptiles' },
                { id: 3, name: 'Aves' },
                { id: 4, name: 'Anfibios' },
                { id: 5, name: 'Peces' },
                { id: 6, name: 'Marsupiales' },
                { id: 7, name: 'Insectos' },
            ])
        }, 400)
    })
}

export default {
    getaAnimalTypes
}
