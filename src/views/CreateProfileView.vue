<template>
     <main>
        <div class="form-container">
            <form class="animal-form">
                <h1>Registrar nueva ficha de animal</h1>
                <p class="subtitle">Completa todos los campos para añadir una nueva ficha de animal</p>

                <!-- Datos basicos -->
                <label for="name" class="form-label">Nombre común</label>
                <input id="name" type="text" class="form-input" required />

                <label for="scientificName" class="form-label">Nombre científico</label>
                <input id="scientificName" type="text" class="form-input" required />

                <label for="animalType" class="form-label">Tipo de animal</label>
                <select id="animalType" class="form-select" required>
                    <option disabled value="" selected>Seleccione un tipo</option>
                    <option value="1">Mamífero</option>
                    <option value="2">Reptil</option>
                    <option value="3">Ave</option>
                    <option value="4">Anfibio</option>
                    <option value="5">Pez</option>
                </select>

                <label for="imageUrl" class="form-label">URL de imagen</label>
                <input id="imageUrl" type="text" class="form-input" placeholder="/ruta/imagen.jpg" required />

                <label class="checkbox-label">
                    <input type="checkbox" class="form-checkbox" />
                    ¿Es una especie exótica?
                </label>

                <!-- Descripcion y contenido -->
                <label for="description" class="form-label">Descripción</label>
                <textarea id="description" rows="3" class="form-textarea" required></textarea>

                <label for="content" class="form-label">¿Qué esperar al adoptar?</label>
                <textarea id="content" rows="3" class="form-textarea" required></textarea>

                <!-- Cuidados -->
                <label for="care_baby" class="form-label">Cuidados</label>
                <textarea id="care_baby" rows="2" class="form-textarea"></textarea>

                <!-- Hábitat -->
                <label for="habitat_baby" class="form-label">Hábitat</label>
                <textarea id="habitat_baby" rows="2" class="form-textarea"></textarea>

                <!-- Dieta -->
                <label for="diet_baby" class="form-label">Dieta</label>
                <textarea id="diet_baby" rows="2" class="form-textarea"></textarea>

                <!-- Otros -->
                <label for="legal_notes" class="form-label">Notas legales</label>
                <textarea id="legal_notes" rows="2" class="form-textarea"></textarea>

                <label for="myths" class="form-label">Mitos comunes</label>
                <textarea id="myths" rows="2" class="form-textarea"></textarea>

                <!-- Consejos -->
                <label for="advices_good" class="form-label">Consejos útiles (separados por salto de línea)</label>
                <textarea id="advices_good" rows="3" class="form-textarea"></textarea>

                <label for="advices_bad" class="form-label">Advertencias (separadas por salto de línea)</label>
                <textarea id="advices_bad" rows="3" class="form-textarea"></textarea>

                <button type="submit" class="form-button">Guardar ficha</button>
            </form>
        </div>
    </main>
</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
        const form = ref({
            name: '',
            scientificName: '',
            animalTypeId: '',
            imageUrl: '',
            is_exotic: false,
            description: '',
            content: '',
            care: '',
            habitat: '',
            diet: '',
            legal_notes: '',
            myths: '',
            advices_good: '',
            advices_bad: ''
        })

        return { form }
    }
}
</script>
 <style scoped>

        .form-container {
            margin: 2em auto;
            background: white;
            border-radius: 16px;
            box-shadow: 0 20px 40px rgba(76, 175, 80, 0.1), 0 10px 20px rgba(0, 0, 0, 0.05);
            padding: 40px;
            width: 100%;
            max-width: 800px;
            animation: fadeIn 0.8s ease-out;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .animal-form h1 {
            color: #2e7d32;
            font-size: 2rem;
            margin-bottom: 8px;
            text-align: center;
            font-weight: 600;
        }

        .subtitle {
            color: #666;
            text-align: center;
            margin-bottom: 32px;
            font-size: 1rem;
        }

        .form-label {
            display: block;
            color: #1b5e20;
            font-weight: 500;
            margin-bottom: 6px;
            margin-top: 20px;
            font-size: 0.95rem;
        }

        .form-input,
        .form-select,
        .form-textarea {
            width: 100%;
            padding: 12px 16px;
            border: 2px solid #e8f5e8;
            border-radius: 8px;
            font-size: 1rem;
            background: white;
            transition: all 0.3s ease;
            font-family: inherit;
        }

        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
            outline: none;
            border-color: #4caf50;
            box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.1);
            transform: translateY(-1px);
        }

        .form-input:hover,
        .form-select:hover,
        .form-textarea:hover {
            border-color: #c8e6c9;
        }

        .form-textarea {
            resize: vertical;
            min-height: 80px;
        }

        .form-select {
            cursor: pointer;
        }

        /* Checkbox personalizado */
        .checkbox-label {
            display: flex;
            align-items: center;
            cursor: pointer;
            margin-top: 24px;
            padding: 12px;
            border-radius: 8px;
            transition: background-color 0.3s ease;
            color: #1b5e20;
            font-weight: 500;
            font-size: 0.95rem;
        }

        .checkbox-label:hover {
            background-color: #f1f8e9;
        }

        .form-checkbox {
            width: 20px;
            height: 20px;
            margin-right: 12px;
            margin-bottom: 0;
            appearance: none;
            border: 2px solid #c8e6c9;
            border-radius: 4px;
            background: white;
            cursor: pointer;
            position: relative;
            transition: all 0.3s ease;
        }

        .form-checkbox:checked {
            background: #4caf50;
            border-color: #4caf50;
            transform: scale(1.05);
        }

        .form-checkbox:checked::after {
            content: '✓';
            position: absolute;
            color: white;
            font-size: 14px;
            font-weight: bold;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        .form-checkbox:hover {
            border-color: #4caf50;
            box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.1);
        }

        .form-button {
            width: 100%;
            background: linear-gradient(135deg, #4caf50 0%, #45a049 100%);
            color: white;
            padding: 16px 24px;
            border: none;
            border-radius: 8px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            margin-top: 32px;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
        }

        .form-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(76, 175, 80, 0.4);
        }

        .form-button:active {
            transform: translateY(0);
        }

        /* Animaciones de entrada escalonadas */
        .animal-form > * {
            animation: slideInUp 0.6s ease-out forwards;
            opacity: 0;
            transform: translateY(20px);
        }

        .animal-form > *:nth-child(1) { animation-delay: 0.1s; }
        .animal-form > *:nth-child(2) { animation-delay: 0.15s; }
        .animal-form > *:nth-child(3) { animation-delay: 0.2s; }
        .animal-form > *:nth-child(4) { animation-delay: 0.25s; }
        .animal-form > *:nth-child(5) { animation-delay: 0.3s; }
        .animal-form > *:nth-child(6) { animation-delay: 0.35s; }
        .animal-form > *:nth-child(7) { animation-delay: 0.4s; }
        .animal-form > *:nth-child(8) { animation-delay: 0.45s; }
        .animal-form > *:nth-child(9) { animation-delay: 0.5s; }
        .animal-form > *:nth-child(10) { animation-delay: 0.55s; }

        @keyframes slideInUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Responsive */
        @media (max-width: 768px) {
            .form-container {
                padding: 24px;
                margin: 10px;
            }
            
            .animal-form h1 {
                font-size: 1.6rem;
            }
        }
    </style>