
export function getAnswers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    title: "Rechazo de semillas en periquitos",
                    content: "Es común que algunos periquitos desarrollen preferencias alimenticias. Intenta mezclar semillas con frutas picadas y reduce gradualmente la cantidad de fruta para reintroducir variedad.",
                    image_url: "/AnimaNatura/animals/periquito.jpg",
                    created_at: "2025-06-06 11:10",
                    question_id: 1,
                    user_id: 3,
                    userRole: "veterinario",
                    userName: "veterinario1"
                },
                {
                    id: 2,
                    title: "Problema con el agua turbia",
                    content: "Podría deberse a una sobrealimentación o exceso de residuos. Asegúrate de no sobrealimentar y revisa si el filtro está funcionando correctamente.",
                    image_url: "",
                    created_at: "2025-06-06 11:13",
                    question_id: 2,
                    user_id: 5,
                    userRole: "especialista",
                    userName: "especialista1"
                },
                {
                    id: 3,
                    title: "Mi experiencia con filtros baratos",
                    content: "Soy cliente y tuve un problema parecido. Cambié a un filtro de mayor potencia y también limpié la grava con más frecuencia, eso ayudó mucho.",
                    image_url: "",
                    created_at: "2025-06-06 11:15",
                    question_id: 2,
                    user_id: 1,
                    userRole: "cliente",
                    userName: "cliente1"
                },
                {
                    id: 4,
                    title: "Comportamiento por estrés en hámsters",
                    content: "Morder los barrotes es una señal clara de estrés. Revisa el tamaño de la jaula y añade tubos, escondites y una rueda sólida. También puedes probar con una jaula de plástico.",
                    image_url: "/AnimaNatura/animals/hamster_sirio.jpg",
                    created_at: "2025-06-06 11:18",
                    question_id: 3,
                    user_id: 4,
                    userRole: "etologo",
                    userName: "etologo1"
                },
                {
                    id: 5,
                    title: "Posible hipovitaminosis en pogonas",
                    content: "Una pogona que rechaza insectos puede tener un déficit o desregulación alimentaria. Asegúrate de usar suplementos de calcio y ofrecer insectos vivos varias veces al día.",
                    image_url: "/AnimaNatura/animals/pogona.jpg",
                    created_at: "2025-06-06 11:21",
                    question_id: 5,
                    user_id: 3,
                    userRole: "veterinario",
                    userName: "veterinario1"
                },
                {
                    id: 6,
                    title: "Mi pogona también solo quería verdura",
                    content: "Soy cliente y me pasó lo mismo. Empecé ofreciéndole grillos justo después de encender la lámpara UVB y con eso recuperó el apetito por los insectos.",
                    image_url: "",
                    created_at: "2025-06-06 11:23",
                    question_id: 5,
                    user_id: 6,
                    userRole: "cliente",
                    userName: "cliente2"
                },
                {
                    id: 7,
                    title: "El estrés por separación en papagayos",
                    content: "El papagayo puede tener ansiedad por separación. Prueba dejar una radio encendida o juguetes interactivos. En casos graves puede requerir terapia conductual.",
                    image_url: "",
                    created_at: "2025-06-06 11:27",
                    question_id: 6,
                    user_id: 4,
                    userRole: "etologo",
                    userName: "etologo1"
                }
            ]
            )
        }, 500)
    })
}

export async function getAnswersByQuestionId(questionId) {
    try {
        let answers = await getAnswers()
        answers = answers.filter(a => a.question_id === Number(questionId))
        if (answers.length === 0) {
            throw new Error('Respuestas no encontrada')
        }
        // se devuelve la pregunta seleccionada
        return answers
    } catch (error) {
        // se devielve el error para capturarlo con la funcion que lo use
        throw error
    }
}

export default {
    getAnswersByQuestionId,
}


