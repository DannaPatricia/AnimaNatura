
export function getQuestions() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    title: "¿Qué come un periquito?",
                    content: "Mi periquito ha empezado a rechazar las semillas y solo quiere fruta, y tengo miedo de que no esté recibiendo los nutrientes necesarios. ¿Qué hago si se vuelve selectivo con la comida?",
                    image_url: "/AnimaNatura/animals/periquito.jpg",
                    type: "alimentación",
                    specie_id: 1,
                    specieName: "Periquito",
                    animalType_id: 3,
                    animalTypeName: "Ave",
                    user_id: 1,
                    userName: "Cliente1",
                    lastUploaded: "2025-06-05 09:15"
                },
                {
                    id: 2,
                    title: "¿Cada cuánto se limpia una pecera?",
                    content: "Tengo un pez Betta y, a pesar de cambiar el agua, se sigue poniendo turbia a los pocos días. ¿Estoy haciendo algo mal con la limpieza o el filtro?",
                    image_url: "/AnimaNatura/animals/pez_betta.jpg",
                    type: "cuidados",
                    specie_id: 2,
                    specieName: "Pez Betta",
                    animalType_id: 5,
                    animalTypeName: "Pez",
                    user_id: 1,
                    userName: "Cliente1",
                    lastUploaded: "2025-06-05 09:17"
                },
                {
                    id: 3,
                    title: "¿Cuál es la mejor jaula para un hámster?",
                    content: "Mi hámster sirio muerde constantemente los barrotes de la jaula y parece estresado, aunque tiene juguetes. ¿Es posible que la jaula no sea adecuada o demasiado pequeña?",
                    imageUrl: "",
                    type: "otros",
                    specie_id: 3,
                    specieName: "Hámster Sirio",
                    animalType_id: 1,
                    animalTypeName: "Mamífero",
                    user_id: 4,
                    userName: "Cliente2",
                    lastUploaded: "2025-06-05 09:20"
                },
                {
                    id: 4,
                    title: "¿Qué temperatura necesita una tortuga de orejas amarillas?",
                    content: "Mi tortuga de orejas amarillas no sale del agua y apenas se mueve, y sospecho que puede deberse a la temperatura del entorno. ¿Qué problema puede estar ocurriendo?",
                    image_url: "/AnimaNatura/animals/tortuga_orejas_amarillas.jpg",
                    type: "cuidados",
                    specie_id: 4,
                    specieName: "Tortuga de Orejas Amarillas",
                    animalType_id: 2,
                    animalTypeName: "Reptil",
                    user_id: 4,
                    userName: "Cliente2",
                    lastUploaded: "2025-06-05 09:25"
                },
                {
                    id: 5,
                    title: "¿Cuántas veces al día debe comer una pogona bebé?",
                    content: "Mi pogona bebé se niega a comer insectos y solo acepta verduras, pero me preocupa que no crezca bien. ¿Qué puedo hacer si rechaza proteínas?",
                    imageUrl: "",
                    type: "alimentación",
                    specie_id: 5,
                    specieName: "Pogona",
                    animalType_id: 2,
                    animalTypeName: "Reptil",
                    user_id: 5,
                    userName: "Elena",
                    lastUploaded: "2025-06-05 09:27"
                },
                {
                    id: 6,
                    title: "¿Los papagayos pueden hablar?",
                    content: "Mi papagayo grita todo el día cuando salgo de casa, y los vecinos se quejan del ruido. ¿Qué puedo hacer para que esté más tranquilo cuando está solo?",
                    image_url: "/AnimaNatura/animals/papagayo.jpg",
                    type: "otros",
                    specie_id: 6,
                    specieName: "Papagayo",
                    animalType_id: 3,
                    animalTypeName: "Ave",
                    user_id: 5,
                    userName: "Elena",
                    lastUploaded: "2025-06-05 09:30"
                },
                {
                    id: 7,
                    title: "¿Qué frutas puede comer una cobaya?",
                    content: "Cada vez que le doy fruta a mi cobaya le produce diarrea. ¿Es normal? ¿Cómo saber qué frutas tolera bien o si tiene el estómago sensible?",
                    imageUrl: "",
                    type: "alimentación",
                    specie_id: 7,
                    specieName: "Cobaya",
                    animalType_id: 1,
                    animalTypeName: "Mamífero",
                    user_id: 6,
                    userName: "Hugo",
                    lastUploaded: "2025-06-05 09:32"
                },
                {
                    id: 8,
                    title: "¿Los canarios necesitan compañía?",
                    content: "Mi canario canta menos desde que me ausento más tiempo por trabajo. ¿Puede estar deprimido por la falta de compañía o estimulación?",
                    image_url: "/AnimaNatura/animals/canario.jpg",
                    type: "cuidados",
                    specie_id: 8,
                    specieName: "Canario",
                    animalType_id: 3,
                    animalTypeName: "Ave",
                    user_id: 6,
                    userName: "Hugo",
                    lastUploaded: "2025-06-05 09:35"
                },
                {
                    id: 9,
                    title: "¿Qué tipo de sustrato es mejor para un geco leopardo?",
                    content: "Mi geco leopardo intentó comer arena del terrario y ahora parece tener problemas para defecar. ¿Qué tipo de sustrato debo usar para evitar este problema?",
                    imageUrl: "",
                    type: "cuidados",
                    specie_id: 9,
                    specieName: "Geco Leopardo",
                    animalType_id: 2,
                    animalTypeName: "Reptil",
                    user_id: 1,
                    userName: "Cliente1",
                    lastUploaded: "2025-06-05 09:38"
                }
            ]
            )
        }, 400)
    })
}

// funcion que filtra el lsitado de prguntas por id de usuario
export async function getQuestionByUserId(userId) {
    try {
        let questions = await getQuestions()
        questions = questions.filter(q => q.user_id === userId)
        if (questions.length === 0) {
            throw new Error('Preguntas no encontrada')
        }
        // se devuelve la pregunta seleccionada
        return questions
    } catch (error) {
        // se devielve el error para capturarlo con la funcion que lo use
        throw error
    }
}

// funcion que selecciona la pregunta que coincida con su id
export async function getQuestionById(questionId) {
    try {
        const questions = await getQuestions()
        const question = questions.find(q => q.id === Number(questionId))
        if (question.length === 0) {
            throw new Error('Pregunta no encontrada')
        }
        // se devuelve la pregunta seleccionada
        return question
    } catch (error) {
        // se devielve el error para capturarlo con la funcion que lo use
        throw error
    }
}

// funcion que filtra al lista de preguntas por id de tipo de animal
export async function getQuestionsByAnimalType(animalTypeId) {
    try {
        const questions = await getQuestions()
        const questionsFiltered = questions.filter(q => q.animalType_id === animalTypeId)
        if (questionsFiltered.length === 0) {
            throw new Error('Preguntas no encontradas')
        }
        // se devuelve el listado de preguntas deseado
        return questionsFiltered
    } catch (error) {
        // se devielve el error para capturarlo con la funcion que lo use
        throw error
    }
}

export default {
    getQuestions,
    getQuestionById,
    getQuestionByUserId,
    getQuestionsByAnimalType
}


