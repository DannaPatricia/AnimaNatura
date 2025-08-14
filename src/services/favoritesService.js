
export function getFavorites() {
    return new Promise((resolve) => {
        setTimeout(() => {
            // devuelve exitosamente la promesa dfespues del tiempo marcado
            resolve([
                {
                    id: 4,
                    name: 'Tortuga de Orejas Amarillas',
                    scientificName: 'Trachemys scripta scripta',
                    animalType: 'Reptil',
                    animalTypeId: 2,
                    imageUrl: '/AnimaNatura/animals/tortuga_orejas_amarillas.jpg',
                    user_id: 1
                },
                {
                    id: 5,
                    name: 'Pogona',
                    scientificName: 'Pogona vitticeps',
                    animalType: 'Reptil',
                    animalTypeId: 2,
                    imageUrl: '/AnimaNatura/animals/pogona.jpg',
                    user_id: 1
                },
                {
                    id: 6,
                    name: 'Papagayo',
                    scientificName: 'Amazona aestiva',
                    animalType: 'Ave',
                    animalTypeId: 3,
                    imageUrl: '/AnimaNatura/animals/papagayo.jpg',
                    user_id: 1
                },
                {
                    id: 8,
                    name: 'Canario',
                    scientificName: 'Serinus canaria domestica',
                    animalType: 'Ave',
                    animalTypeId: 3,
                    imageUrl: '/AnimaNatura/animals/canario.jpg',
                    user_id: 4
                },
            ])
        }, 400)
    })
}

export async function getFavoriteByUserId(userId) {
    try {
        let favorites = await getFavorites()
        // se filtran los resultados por el id del usuario
        favorites = favorites.filter(favorite => favorite.user_id === userId)
        if (favorites.length === 0) {
            throw new Error('Pregunta no encontrada')
        }
        // se devuelve la lista de favoritos filtrada
        return favorites
    } catch (error) {
        // se devielve el error para capturarlo con la funcion que lo use
        throw error
    }
}


export default {
    getFavorites,
    getFavoriteByUserId
}
