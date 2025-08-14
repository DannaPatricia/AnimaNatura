
function getSpecies() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    name: 'Periquito',
                    scientificName: 'Melopsittacus undulatus',
                    animalType: 'Ave',
                    animalTypeId: 3,
                    imageUrl: '/AnimaNatura/animals/periquito.jpg',
                    is_exotic: false,
                    description: 'El periquito australiano es una de las aves más populares como mascota. Pequeño, colorido y sociable, es originario de Australia y destaca por su capacidad para emitir sonidos e incluso imitar palabras con práctica. Su plumaje puede variar, aunque los verdes y amarillos son los más comunes.',
                    content: 'Adoptar un periquito es una excelente elección si buscas una mascota alegre y vocal. Son animales gregarios, por lo que es recomendable tener al menos una pareja. Necesitan una jaula amplia, juguetes para entretenerse y estimulación diaria fuera de la jaula si es posible.',
                    care_baby: 'Los periquitos jóvenes requieren una temperatura cálida y alimentación blanda, como papillas específicas o semillas remojadas. Evita manipulaciones excesivas al principio y asegúrate de que beban agua regularmente.',
                    care_junior: 'Durante esta etapa empiezan a explorar, picar juguetes y vocalizar más. Introduce juguetes seguros, variedad de semillas, frutas frescas y baño de agua. Es ideal comenzar a acostumbrarlos a la interacción con humanos.',
                    care_senior: 'Los periquitos adultos deben mantener una dieta equilibrada y recibir revisiones veterinarias ocasionales. Requieren estimulación continua para evitar aburrimiento y pueden volverse más tranquilos con la edad.',
                    habitat_baby: 'Jaula con espacio suficiente para moverse, perchas blandas y refugios. Evitar corrientes de aire. Coloca la jaula en una zona tranquila.',
                    habitat_junior: 'Añadir columpios, juguetes colgantes y baños. Es bueno mover la jaula cerca de una ventana (sin sol directo) para que se estimule con sonidos y luz natural.',
                    habitat_senior: 'Evitar cambios bruscos. Mantener limpieza rigurosa y permitir momentos fuera de la jaula bajo supervisión. Introducir ramas naturales seguras para que limen su pico.',
                    diet_baby: 'Papillas específicas para aves o semillas blandas remojadas. Agua fresca siempre disponible.',
                    diet_junior: 'Mezcla de semillas, mijo en rama, frutas frescas (manzana, pera) y verduras (zanahoria rallada, espinacas). Evitar aguacate o chocolate.',
                    diet_senior: 'Dieta variada con semillas, frutas y verduras. Suplementos de calcio en época de muda. Evitar sobrealimentación.',
                    legal_notes: 'No existe prohibición legal para tener periquitos como mascota en España, pero se recomienda su adquisición en criaderos certificados o tiendas legales para asegurar bienestar y trazabilidad.',
                    myths: 'Un mito común es que los periquitos no necesitan juguetes: sin estímulos pueden deprimirse. Otro error es pensar que siempre deben estar en jaula; al contrario, disfrutan mucho de vuelos controlados en casa.',
                    created_at: '05/04/2018 10:15',
                    advices_good: [
                        'Permitirles salir de la jaula a diario en un entorno seguro.',
                        'Colocar juguetes variados y cambiarlos regularmente.',
                        'Proporcionar un hueso de jibia como fuente de calcio.',
                        'Limpiar la jaula y los comederos al menos 2 veces por semana.',
                        'Hablarles y poner música suave para fomentar interacción.',
                        'Dejar que se bañen en agua tibia una o dos veces por semana.'
                    ],
                    advices_bad: [
                        'Tenerlos solos sin contacto ni juguetes.',
                        'Usar jaulas pequeñas con apenas espacio para volar.',
                        'Darles pan, galletas o dulces.',
                        'Dejar la jaula en zonas frías o con corrientes de aire.',
                        'Cortar sus alas sin supervisión veterinaria.'
                    ]
                },
                {
                    id: 2,
                    name: 'Pez Betta',
                    scientificName: 'Betta splendens',
                    animalType: 'Pez',
                    animalTypeId: 5,
                    imageUrl: '/AnimaNatura/animals/pez_betta.jpg',
                    is_exotic: false,
                    description: 'El pez betta, también conocido como pez luchador siamés, es una especie originaria del sudeste asiático. Su gran atractivo visual se debe a sus aletas largas y colores intensos. A pesar de su belleza, son peces territoriales que requieren cuidados específicos.',
                    content: 'Si decides adoptar un pez betta, debes saber que es una especie que necesita un espacio propio, agua limpia, temperatura constante y una dieta equilibrada. Aunque se suele mantener en acuarios pequeños, lo ideal es un acuario de al menos 10 litros con calentador y filtro suave.',
                    care_baby: 'Las crías de pez betta (alevines) deben mantenerse en acuarios separados, con agua templada (26-28°C), alimentación de infusorios o alimento específico para alevines, y cambios de agua muy frecuentes. No deben tener compañía ni corriente fuerte.',
                    care_junior: 'En la etapa juvenil comienzan a desarrollar color y carácter. Puedes introducir alimento vivo o congelado como daphnia y larvas de mosquito. Evita la sobrealimentación y mantén la temperatura entre 25-27°C. Cambios parciales de agua cada 2-3 días.',
                    care_senior: 'En adultos, la dieta debe ser variada (pienso específico, alimento vivo o congelado). No deben convivir con otros bettas machos. Evita reflejos en el cristal y mantenlo activo con estímulos visuales suaves. Cambios semanales de agua.',
                    habitat_baby: 'Acuario pequeño de cría con calentador suave, temperatura estable y sin filtro fuerte. Iluminación mínima. Cambios de agua diarios en pequeñas cantidades.',
                    habitat_junior: 'Acuario individual de al menos 5 litros, con plantas naturales o de seda. Filtro suave (tipo esponja) y termocalefactor. Evitar objetos con bordes cortantes.',
                    habitat_senior: 'Acuario de mínimo 10 litros, con escondites, plantas y temperatura estable. Iluminación moderada. Agua con pH entre 6.5 y 7.5.',
                    diet_baby: 'Infusorios, microgusanos o alimento líquido para alevines varias veces al día.',
                    diet_junior: 'Alimento granulado pequeño, larvas de mosquito, daphnia. Evitar sobrealimentar.',
                    diet_senior: 'Pellets específicos para bettas, alternado con alimento vivo o congelado. 2 comidas al día.',
                    legal_notes: 'No existen restricciones legales para tener un pez betta como mascota en España, pero se recomienda evitar la compra de ejemplares mantenidos en condiciones inadecuadas y fomentar la adopción responsable.',
                    myths: 'Un error común es pensar que pueden vivir en vasos o botes pequeños: necesitan espacio, temperatura adecuada y limpieza. También se cree que no necesitan filtro ni calentador, cuando ambos son recomendables.',
                    created_at: '15/03/2019 11:30',
                    advices_good: [
                        'Usar un calentador para mantener la temperatura del agua entre 25-27°C.',
                        'Alimentarlo con pellets de calidad específicos para betta.',
                        'Hacer cambios parciales de agua semanalmente (30-40%).',
                        'Usar plantas naturales o suaves para evitar dañar sus aletas.',
                        'Evitar espejos o reflejos que lo estresen.',
                        'Cubrir el acuario parcialmente para evitar saltos.'
                    ],
                    advices_bad: [
                        'Mantenerlo en un recipiente sin calefacción ni filtro.',
                        'Juntar dos bettas machos en el mismo acuario.',
                        'Darle solo escamas genéricas.',
                        'Usar decoraciones afiladas que rompan sus aletas.',
                        'Alimentarlo más de dos veces al día.'
                    ]
                },
                {
                    id: 3,
                    name: 'Hámster Sirio',
                    scientificName: 'Mesocricetus auratus',
                    animalType: 'Mamífero',
                    animalTypeId: 1,
                    imageUrl: '/AnimaNatura/animals/hamster_sirio.jpg',
                    is_exotic: false,
                    description: 'El hámster sirio, también conocido como hámster dorado, es originario del Medio Oriente. Es una de las especies de hámster más populares como mascota debido a su tamaño manejable, su carácter generalmente dócil y su fácil mantenimiento.',
                    content: 'Si has adquirido un hámster sirio, es importante saber que son animales solitarios y nocturnos. Necesitan un espacio adecuado, una rueda sin barrotes, enriquecimiento y una buena alimentación. Aunque parezcan fáciles de cuidar, requieren dedicación para que tengan una vida sana y feliz.',
                    care_baby: 'Los bebés deben permanecer con su madre al menos hasta las 3 semanas. No se deben manipular durante los primeros días. Cuando se destetan, deben tener comida blanda y refugios donde sentirse seguros. Es crucial que estén separados por sexos desde la 4ª semana.',
                    care_junior: 'Ya pueden vivir solos. Necesitan una jaula amplia (mínimo 70x40 cm), una rueda sólida de al menos 20 cm de diámetro, refugios, túneles y papel sin tinta como sustrato. Son muy activos por la noche y requieren estimulación diaria.',
                    care_senior: 'A medida que envejecen pueden perder movilidad o visión. Es importante adaptar su entorno: rampas suaves, revisar dientes y uñas, y facilitarles el acceso a la comida y agua. Mantener una rutina estable reduce su estrés.',
                    habitat_baby: 'Caja de cría con sustrato absorbente y sin corrientes de aire. Evitar jaulas con barrotes por los riesgos de escape o atrapamiento. Silencio y oscuridad son fundamentales.',
                    habitat_junior: 'Jaula horizontal, amplia, con túneles, rueda adecuada y sustrato profundo (mínimo 10 cm) para permitir cavar. Refugios opacos y espacio para almacenar comida.',
                    habitat_senior: 'El mismo tipo de jaula, pero adaptada: menos altura, más facilidad de movimiento y accesibilidad. Evitar cambios bruscos en la disposición del espacio.',
                    diet_baby: 'Pienso específico en pequeñas cantidades, avena, semillas blandas y trozos de fruta fresca como manzana (sin semillas). Agua siempre disponible.',
                    diet_junior: 'Pienso de calidad, mezcla controlada de semillas, proteína animal ocasional (huevo cocido o gusanos secos), frutas y verduras frescas.',
                    diet_senior: 'Menor cantidad de proteína, énfasis en vegetales suaves y evitar alimentos duros si tienen problemas dentales. Suplementos si es necesario.',
                    legal_notes: 'No existen restricciones legales en España para tener hámsters como mascota. Sin embargo, se recomienda no fomentar la cría irresponsable y adoptar de criadores o protectoras responsables.',
                    myths: 'Mucha gente cree que pueden vivir en pareja, pero los hámsters sirios son solitarios y pueden pelear hasta causar la muerte si se les junta. Otro mito es que pueden vivir en jaulas pequeñas: necesitan mucho más espacio del que se suele pensar.',
                    created_at: '22/09/2020 18:20',
                    advices_good: [
                        'Usar una rueda sólida sin barrotes para evitar lesiones.',
                        'Proporcionar al menos 10 cm de sustrato para cavar.',
                        'Respetar su horario nocturno: no molestarlo durante el día.',
                        'Ofrecer objetos para roer que ayuden al desgaste dental.',
                        'Cambiar el agua y revisar el alimento a diario.',
                        'Enriquecer el entorno con juguetes, tubos y escondites.'
                    ],
                    advices_bad: [
                        'Juntar dos hámsters sirios en la misma jaula.',
                        'Usar jaulas con suelos de rejilla: pueden dañar sus patas.',
                        'Darles alimentos azucarados como galletas o dulces.',
                        'Bañarlos con agua: no lo necesitan y puede hacerles daño.',
                        'Dejarlos sueltos sin supervisión en espacios grandes.'
                    ]
                },
                {
                    id: 4,
                    name: 'Tortuga de Orejas Amarillas',
                    scientificName: 'Trachemys scripta scripta',
                    animalType: 'Reptil',
                    animalTypeId: 2,
                    imageUrl: '/AnimaNatura/animals/tortuga_orejas_amarillas.jpg',
                    is_exotic: true,
                    description: 'La tortuga de orejas amarillas es una subespecie de la tortuga de orejas rojas, originaria del sureste de Estados Unidos. Es conocida por las manchas amarillas a los lados de su cabeza y su caparazón ligeramente abombado. Es comúnmente adoptada como mascota acuática, aunque su cuidado requiere atención especializada.',
                    content: 'Si has adquirido una tortuga de orejas amarillas, prepárate para brindarle una vida larga y saludable. Estas tortugas pueden vivir más de 30 años y requieren de un hábitat acuático amplio, alimentación variada y luz UVB. Son mascotas que requieren inversión y dedicación, así que si es tu primera vez, infórmate bien antes de improvisar.',
                    care_baby: 'Las crías de tortuga de orejas amarillas necesitan agua limpia con temperatura estable (24-28°C), luz UVB y una zona seca para descansar. Su dieta debe estar basada principalmente en proteínas como pequeños insectos, lombrices y pienso especial para crías de tortuga acuática. Limpia su caparazón periódicamente y evita manipularla en exceso.',
                    care_junior: 'En etapa juvenil, la tortuga comienza a comer también vegetales como hojas verdes, zanahoria y calabacín. Mantén una dieta equilibrada y asegúrate de que tenga espacio para nadar y una zona seca amplia. Ya puedes introducirle calcio adicional para fortalecer su caparazón.',
                    care_senior: 'Las adultas necesitan menos proteína y más vegetales. Asegúrate de revisar su salud periódicamente y mantener sus condiciones higiénicas estables. A esta edad, pueden volverse más territoriales.',
                    habitat_baby: 'Un acuario de al menos 40 litros, con calefacción, luz UVB y filtro. Deja una zona seca flotante o fija para que pueda tomar el sol artificialmente.',
                    habitat_junior: '',
                    habitat_senior: '',
                    diet_baby: 'Principalmente proteína: insectos, pienso especial, lombrices.',
                    diet_junior: 'Proteína y vegetales a partes iguales. Evitar carne procesada.',
                    diet_senior: 'Predominantemente vegetales y suplementos de calcio. Frutas ocasionalmente.',
                    legal_notes: 'Desde 2016, la tenencia de la tortuga de orejas amarillas está prohibida en España por considerarse especie invasora. Solo se puede conservar si fue adquirida legalmente antes de esa fecha y se dispone del documento CITES correspondiente.',
                    myths: 'Muchas personas creen que estas tortugas se mantienen pequeñas, pero pueden llegar a medir hasta 30 cm. Otra creencia errónea es que pueden vivir en peceras sin equipamiento, cuando en realidad necesitan filtro, calefacción y luz UVB.',
                    created_at: '12/06/2015 13:45',
                    advices_good: [
                        'Alimentarla en un recipiente distinto para mantener limpio su acuario.',
                        'Proveer luz UVB al menos 4 horas al día.',
                        'Mantener una tortuga por acuario para evitar conflictos.',
                        'Limpiar el caparazón suavemente con un cepillo blando.',
                        'Cambiar el agua del acuario cada semana o antes si se ve sucia.',
                        'Decorar el acuario con refugios y plantas artificiales o naturales seguras.'
                    ],
                    advices_bad: [
                        'Creer que no crecen: pueden alcanzar hasta 30 cm.',
                        'No calcular los gastos: requiere filtro, calentador, lámpara UVB.',
                        'Alimentarlas solo con gambas secas o jamón.',
                        'No proporcionar zona seca o calor artificial.',
                        'Meterlas con peces o más tortugas sin control.'
                    ]
                },
                {
                    id: 5,
                    name: 'Pogona',
                    scientificName: 'Pogona vitticeps',
                    animalType: 'Reptil',
                    animalTypeId: 2,
                    imageUrl: '/AnimaNatura/animals/pogona.jpg',
                    is_exotic: true,
                    description: 'La pogona, también conocida como dragón barbudo, es un lagarto originario de Australia. Es muy popular como mascota exótica por su carácter tranquilo, su resistencia y su aspecto peculiar. Tiene una barba que puede inflarse y cambiar de color como mecanismo de defensa.',
                    content: 'Si acabas de adoptar una pogona, prepárate para proporcionarle un entorno cálido y seco, con buena iluminación UVB y espacio suficiente para moverse. Son reptiles diurnos, por lo que necesitan un ciclo de luz natural. Aunque son fáciles de manejar, su mantenimiento exige control de temperatura, humedad y dieta balanceada.',
                    care_baby: 'Las crías requieren temperaturas constantes entre 28°C y 35°C con foco de calor. Necesitan mucha proteína (principalmente insectos vivos como grillos o cucarachas) varias veces al día. Es fundamental proporcionarles luz UVB desde el principio y evitar el exceso de manipulación.',
                    care_junior: 'En etapa juvenil, se introduce poco a poco la verdura (rúcula, escarola, zanahoria rallada). Mantén el terrario con zonas diferenciadas de calor y sombra. Requieren más espacio para moverse y comenzar a desarrollar su musculatura. Aumenta el control de humedad y ventilación.',
                    care_senior: 'En la adultez, su dieta se vuelve más vegetal y menos proteica. Mantén controles veterinarios anuales, revisa uñas y peso. Aunque son más resistentes, necesitan estímulos, tiempo fuera del terrario supervisado y buena higiene en su entorno.',
                    habitat_baby: 'Terrario mínimo de 60x40x40 cm con sustrato no suelto (papel o alfombra), foco de calor, termómetro, y lámpara UVB. Rocía agua diariamente para mantener hidratación.',
                    habitat_junior: 'Terrario mínimo de 90 cm de largo, con ramas, refugios y zonas para escalar. Sustrato seguro, buen control de temperatura (35-40°C en el punto caliente) y foco UVB 10.0.',
                    habitat_senior: 'Terrario de al menos 120x60x60 cm. Decoración natural, piedras, plataformas y ramas para trepar. Se recomienda renovar el foco UVB cada 6-8 meses.',
                    diet_baby: '80% insectos vivos como grillos o tenebrios, 20% vegetales suaves y agua fresca en rociado o bebedero poco profundo.',
                    diet_junior: '50% proteína animal (insectos vivos), 50% vegetales variados. Suplemento de calcio 3 veces por semana.',
                    diet_senior: '70% vegetales (rúcula, escarola, calabaza), 30% insectos. Frutas ocasionales. Calcio y vitaminas cada semana.',
                    legal_notes: 'No está prohibida en España, pero es considerada animal exótico, por lo que su cría y venta debe estar registrada. Es importante informarse sobre su procedencia legal y evitar el tráfico ilegal.',
                    myths: 'Muchos creen que no necesitan calor si hay sol en la habitación, pero la luz solar indirecta no es suficiente. También se piensa que pueden alimentarse solo con lechuga, lo cual es inadecuado y puede provocar deficiencias nutricionales.',
                    created_at: '03/04/2019 10:15',
                    advices_good: [
                        'Proporcionar luz UVB de calidad al menos 10 horas al día.',
                        'Ofrecer variedad de vegetales y proteínas según su etapa.',
                        'Supervisar su crecimiento, uñas y piel durante la muda.',
                        'Permitirles salir del terrario bajo supervisión segura.',
                        'Evitar sustratos sueltos en crías para prevenir impactaciones.'
                    ],
                    advices_bad: [
                        'Darles solo lechuga como alimento principal.',
                        'No controlar la temperatura del terrario.',
                        'Manipularlas constantemente desde pequeñas sin acostumbramiento.',
                        'Mantenerlas en terrarios pequeños durante toda su vida.',
                        'Usar lámparas UVB de baja calidad o caducadas.'
                    ]
                }
                , {
                    id: 6,
                    name: 'Papagayo',
                    scientificName: 'Amazona aestiva',
                    animalType: 'Ave',
                    animalTypeId: 3,
                    imageUrl: '/AnimaNatura/animals/papagayo.jpg',
                    is_exotic: true,
                    description: 'El papagayo de frente azul (Amazona aestiva) es un ave exótica originaria de Sudamérica, reconocida por su plumaje colorido, su gran inteligencia y su capacidad para imitar sonidos. Es una de las especies más populares entre los loros amazónicos por su carácter sociable y longevidad.',
                    content: 'Si acabas de adoptar un papagayo, estás ante un compañero inteligente, ruidoso y con mucha personalidad. Estos loros necesitan estímulos constantes, espacio para moverse y una rutina diaria. Pueden vivir más de 50 años si se cuidan adecuadamente, así que prepárate para una relación a largo plazo llena de aprendizaje mutuo.',
                    care_baby: 'Las crías necesitan estar en un ambiente cálido (alrededor de 30°C) y controlado. Se alimentan con papilla especializada para aves psitácidas cada pocas horas. No deben separarse de su nido prematuramente, ya que requieren socialización progresiva y vigilancia veterinaria para su desarrollo.',
                    care_junior: 'Durante la etapa juvenil, el papagayo empieza a picotear semillas, frutas y verduras. Es fundamental el juego interactivo, socialización con humanos, y evitar la sobredependencia. Se les puede enseñar trucos y establecer hábitos. Es el momento ideal para reforzar un vínculo sano.',
                    care_senior: 'En la adultez necesitan una rutina estable, juegos de enriquecimiento, revisiones veterinarias anuales y contacto social diario. Pueden volverse más territoriales, así que es importante respetar su espacio y leer su lenguaje corporal.',
                    habitat_baby: 'Jaula temporal con fuente de calor y papel absorbente en la base. Sin barrotes donde pueda quedar atrapado. Zona tranquila y cálida, sin corrientes de aire.',
                    habitat_junior: 'Jaula amplia (mínimo 80x80x100 cm), con perchas naturales, juguetes variados, cuerdas y zonas para trepar. Debe situarse en una zona activa del hogar, pero sin estrés.',
                    habitat_senior: 'Espacio amplio o aviario. Puertas abiertas bajo supervisión para explorar. Elementos que estimulen el vuelo y el juego. Idealmente con rutinas diarias de salida.',
                    diet_baby: 'Papilla especial para loros jóvenes. Agua tibia y administración cuidadosa varias veces al día.',
                    diet_junior: 'Frutas variadas (manzana, plátano, papaya), verduras (zanahoria, brócoli, pimiento), semillas y pienso para loros.',
                    diet_senior: 'Dieta variada con énfasis en frutas y verduras. Pienso equilibrado y control de grasas. Evitar semillas en exceso.',
                    legal_notes: 'El papagayo Amazona aestiva requiere documentación legal CITES para su tenencia en España. Es una especie protegida, por lo que su cría, compra o traslado debe cumplir estrictamente la normativa vigente.',
                    myths: 'Un mito común es que todos los papagayos aprenden a hablar, pero no todos lo hacen. También se cree que pueden vivir en jaulas pequeñas sin problemas, cuando en realidad necesitan volar y explorar. Otro error frecuente es alimentarlos solo con semillas, lo cual puede acortar drásticamente su vida.',
                    created_at: '08/03/2018 09:22',
                    advices_good: [
                        'Dedicar tiempo diario para hablarle y jugar con él.',
                        'Rotar los juguetes cada semana para evitar aburrimiento.',
                        'Proporcionar baños o rociado con agua tibia para su plumaje.',
                        'Permitir que salga de la jaula bajo supervisión todos los días.',
                        'Ofrecer ramas naturales y objetos para picotear y desgastar el pico.'
                    ],
                    advices_bad: [
                        'Dejarlo solo largas horas sin interacción.',
                        'Alimentarlo solo con semillas o pan.',
                        'Usar jaulas pequeñas como espacio permanente.',
                        'Forzar el contacto físico si está nervioso.',
                        'Ignorar signos de estrés como gritos excesivos o arrancado de plumas.'
                    ]
                },
                {
                    id: 7,
                    name: 'Cobaya',
                    scientificName: 'Cavia porcellus',
                    animalType: 'Mamífero',
                    animalTypeId: 1,
                    imageUrl: '/AnimaNatura/animals/cobaya.jpg',
                    is_exotic: false,
                    description: 'La cobaya, también conocida como conejillo de Indias, es un roedor doméstico originario de Sudamérica. Es un animal dócil, sociable y muy popular como mascota por su carácter tranquilo. A diferencia de otros roedores, no tiene cola y emite una gran variedad de sonidos para comunicarse.',
                    content: 'Si has adoptado una cobaya, es importante saber que no es una mascota silenciosa ni completamente independiente. Necesitan compañía, espacio adecuado y una dieta específica para mantenerse saludables. No son animales de "observar solamente", requieren interacción y cuidados constantes.',
                    care_baby: 'Las crías pueden comer alimento sólido desde muy temprano, pero deben tener acceso constante a heno fresco y agua. Es importante que vivan en un ambiente limpio, sin corrientes de aire, y con una zona cálida. Manipúlalas con suavidad para que se acostumbren al contacto humano.',
                    care_junior: 'A esta edad ya se pueden bañar ocasionalmente si es necesario (siempre con champú especial). Deben tener juguetes, escondites y un espacio amplio donde moverse. Las cobayas son muy sensibles a la humedad y a los cambios bruscos de temperatura.',
                    care_senior: 'En la etapa adulta es esencial revisar sus dientes y uñas regularmente. Mantén la jaula siempre limpia y dale tiempo fuera del recinto para ejercitarse. Observa su comportamiento, ya que los cambios pueden indicar problemas de salud.',
                    habitat_baby: 'Caja grande con viruta prensada, sin acceso a lugares donde puedan quedarse atrapadas. Evitar suelos resbaladizos. Espacio silencioso y cálido.',
                    habitat_junior: 'Jaula de mínimo 100x50 cm por animal. Añadir tubos, refugios, puentes y plataformas seguras. No usar ruedas de ejercicio, ya que pueden dañar su columna.',
                    habitat_senior: 'Espacio similar al de los juveniles, pero con más control de limpieza, ventilación y menor exposición a ruidos fuertes. Acceso fácil al comedero y bebedero.',
                    diet_baby: 'Heno ilimitado, algo de pienso para crías y verduras suaves (pepino, calabacín). Agua limpia siempre disponible.',
                    diet_junior: 'Heno como base, verduras variadas ricas en vitamina C (pimiento, espinaca, zanahoria) y pienso bajo en grasa.',
                    diet_senior: 'Lo mismo que en etapa juvenil pero reduciendo frutas y evitando alimentos duros. Suplementar vitamina C si el pienso no la aporta.',
                    legal_notes: 'No se requiere permiso especial para tener cobayas como mascotas en España. Sin embargo, deben mantenerse en condiciones higiénicas y con espacio adecuado según la ley de bienestar animal.',
                    myths: 'Mucha gente cree que las cobayas pueden vivir solas, pero en realidad son animales sociales que necesitan compañía. Otro mito es que basta con darles lechuga, cuando esta no es suficiente y puede generar problemas digestivos.',
                    created_at: '02/04/2020 11:13',
                    advices_good: [
                        'Cambiar el heno a diario y mantener siempre agua fresca disponible.',
                        'Manipularlas con cuidado desde pequeñas para que no sean miedosas.',
                        'Proporcionar juguetes seguros y escondites para evitar el aburrimiento.',
                        'Cepillar su pelaje si son de raza de pelo largo para evitar nudos.',
                        'Controlar sus uñas y dientes, ya que pueden crecer en exceso.'
                    ],
                    advices_bad: [
                        'Dejarlas en balcones o terrazas con exposición al sol directo.',
                        'Bañarlas frecuentemente o con agua fría.',
                        'Alimentarlas solo con pienso o solo con lechuga.',
                        'Tenerlas en jaulas pequeñas y sin enriquecimiento ambiental.',
                        'Ignorar señales como pérdida de apetito o inmovilidad.'
                    ]
                },
                {
                    id: 8,
                    name: 'Canario',
                    scientificName: 'Serinus canaria domestica',
                    animalType: 'Ave',
                    animalTypeId: 3,
                    imageUrl: '/AnimaNatura/animals/canario.jpg',
                    is_exotic: false,
                    description: 'El canario es una de las aves domésticas más populares del mundo. Deriva del canario silvestre originario de las Islas Canarias, Azores y Madeira. Es conocido por su canto melodioso, su plumaje colorido y su carácter tranquilo. Los machos son los que generalmente cantan con más intensidad.',
                    content: 'Si acabas de adoptar un canario, es importante saber que son aves sensibles a los cambios de temperatura y a los entornos ruidosos. Con los cuidados adecuados, pueden vivir entre 8 y 10 años. Requieren una jaula amplia, buena iluminación natural y tranquilidad para desarrollar su canto y comportamiento natural.',
                    care_baby: 'Los canarios jóvenes deben permanecer con sus padres hasta que puedan alimentarse solos. Si es huérfano, necesitará papilla especial y alimentaciones frecuentes. Es importante mantenerlo en un lugar cálido, tranquilo y sin corrientes de aire.',
                    care_junior: 'En esta etapa ya pueden alimentarse por sí solos. Se recomienda una dieta equilibrada, socialización suave y un ambiente estable. No deben estar expuestos a estrés ni a cambios constantes.',
                    care_senior: 'Los adultos requieren higiene en la jaula, cambios frecuentes de agua y una dieta variada. Presta atención a sus patas, uñas y plumaje. Si deja de cantar o se muestra apático, puede estar enfermo.',
                    habitat_baby: 'Nido o caja nido en una jaula protegida, sin corrientes de aire. Temperatura estable y luz natural indirecta.',
                    habitat_junior: 'Jaula de al menos 60 cm de largo con espacio para volar. Palos de diferentes grosores, juguetes simples y un pequeño espejo si vive solo.',
                    habitat_senior: 'Mismo que en etapa juvenil, pero se recomienda más control de la higiene, baños de agua y evitar el contacto con otras aves si no están bien socializadas.',
                    diet_baby: 'Papilla específica para aves o pasta de cría. Agua siempre disponible. Introducción progresiva de semillas blandas.',
                    diet_junior: 'Semillas, algo de fruta fresca (manzana, pera), verduras como espinaca o zanahoria rallada, y pasta de cría ocasional.',
                    diet_senior: 'Semillas variadas, fruta y verdura fresca. Suplementos de calcio durante la muda. Evitar alimentos procesados o azucarados.',
                    legal_notes: 'No se requiere permiso especial para tener canarios en España. Deben mantenerse en buenas condiciones higiénicas, con espacio suficiente y sin ser sometidos a cruces forzados o venta ilegal.',
                    myths: 'Se cree que los canarios pueden vivir en cualquier jaula pequeña, pero lo cierto es que necesitan espacio para moverse. Otro mito común es que los canarios solo comen alpiste, cuando requieren una dieta variada.',
                    created_at: '05/07/2019 08:32',
                    advices_good: [
                        'Colocar la jaula en un lugar tranquilo, con buena luz pero sin corrientes de aire.',
                        'Cambiar el agua a diario y limpiar los comederos.',
                        'Permitir baños frecuentes con un recipiente poco profundo.',
                        'Evitar mover la jaula constantemente para que no se estrese.',
                        'Cubrir la jaula por la noche para que duerma sin interrupciones.'
                    ],
                    advices_bad: [
                        'Tener al canario en una jaula estrecha o sin perchas.',
                        'Alimentarlo solo con una mezcla barata de semillas.',
                        'Exponerlo a ruidos fuertes o música alta constantemente.',
                        'Manipularlo en exceso o forzar el contacto físico.',
                        'Dejar la jaula sucia por varios días.'
                    ]
                },
                {
                    id: 9,
                    name: 'Geco Leopardo',
                    scientificName: 'Eublepharis macularius',
                    animalType: 'Reptil',
                    animalTypeId: 2,
                    imageUrl: '/AnimaNatura/animals/geco_leopardo.jpg',
                    is_exotic: true,
                    description: 'El geco leopardo es un reptil originario de las regiones áridas de Afganistán, Pakistán e India. Recibe su nombre por su patrón de manchas que recuerda al de un leopardo. Es una de las especies de reptiles más populares como mascota por su tamaño manejable, carácter tranquilo y facilidad de manejo.',
                    content: 'Si has adoptado un geco leopardo, te espera una experiencia fascinante. Son reptiles nocturnos, por lo que estarán más activos al anochecer. No requieren grandes instalaciones, pero sí condiciones específicas de temperatura, refugio y dieta. Son una opción excelente para quienes se inician en el mundo de los reptiles.',
                    care_baby: 'Las crías necesitan un terrario pequeño y seguro, con temperatura constante entre 28-32°C en el lado caliente. Deben alimentarse con insectos vivos como grillos pequeños y larvas, espolvoreados con calcio. Es importante mantener buena higiene para evitar infecciones.',
                    care_junior: 'Empiezan a explorar más, por lo que pueden pasar a un terrario más amplio (mínimo 40L). Se recomienda mantener el ciclo día/noche con una fuente de calor y esconderijos. Continúa con una dieta rica en insectos y suplementos de calcio y vitaminas.',
                    care_senior: 'Los adultos son más resistentes, pero necesitan revisiones periódicas. Pueden alimentarse cada 2-3 días. Es crucial seguir controlando el calor y ofrecer varios refugios. Evita manipularlos excesivamente.',
                    habitat_baby: 'Terrario pequeño con sustrato de papel, refugio húmedo, temperatura de 30°C y luz tenue. Evita elementos que pueda ingerir.',
                    habitat_junior: 'Terrario de al menos 60x30x30 cm, con zona caliente y fría, refugio seco y húmedo, y decoración segura.',
                    habitat_senior: 'Igual que en etapa juvenil, pero con espacio para explorar. Se puede usar sustrato más natural (como fibra de coco o alfombrilla para reptiles) si ya no hay riesgo de ingestión.',
                    diet_baby: 'Insectos pequeños como grillos y larvas, siempre espolvoreados con calcio.',
                    diet_junior: 'Grillos, tenebrios, cucarachas pequeñas, alternando entre ellos. Suplementar con calcio y multivitamínico.',
                    diet_senior: 'Menor frecuencia, pero misma variedad. No ofrecer presas grandes o duras. Asegurar siempre acceso a agua.',
                    legal_notes: 'Actualmente su tenencia como mascota está permitida en España, pero al ser especie exótica se recomienda mantener documentación del origen del ejemplar y evitar liberar nunca al animal en la naturaleza.',
                    myths: 'Se cree que no necesitan calor porque son pequeños, pero requieren una fuente de calor constante. Otro mito es que pueden vivir en acuarios sin tapa, pero pueden escapar con facilidad.',
                    created_at: '28/03/2018 10:20',
                    advices_good: [
                        'Mantener una zona caliente y una zona fría dentro del terrario.',
                        'Ofrecer refugios tanto secos como húmedos.',
                        'Usar insectos vivos variados con suplementos adecuados.',
                        'Evitar sustratos que puedan ser ingeridos, como arena.',
                        'Limpiar el terrario al menos una vez por semana.'
                    ],
                    advices_bad: [
                        'Usar arena suelta como sustrato en crías.',
                        'Alimentarlos solo con un tipo de insecto.',
                        'Dejar el terrario sin tapa: pueden escapar.',
                        'Exponerlos a luz directa o ruidos fuertes constantemente.',
                        'Tocar al geco todos los días: necesitan tranquilidad.'
                    ]
                }
            ])
        }, 400)
    })
}

export async function getSpeciesByAnimalTypeId(typeId) {
    try {
        let species = await getSpecies()
        // se filtan los resultados por tipo de animal
        species = species.filter(s => s.animalTypeId === Number(typeId))
        if (species.length === 0) {
            throw new Error('No se encontraron especies para este tipo de animal')
        }
        return species
    } catch (error) {
        throw error
    }
}

// funcion para obtner el animal a partir de su id
export async function getSpecieById(animalId) {
    try {
        let species = await getSpecies()
        // se filtan los resultados por id de animal
        species = species.find(a => a.id === Number(animalId))
        if (species.length === 0) {
            throw new Error('No se encontro la especie')
        }
        return species
    } catch (error) {
        throw error
    }
}

export default {
    getSpecies,
    getSpeciesByAnimalTypeId,
    getSpecieById
}
