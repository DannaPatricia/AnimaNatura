<template>
    <footer>
        <p>
            © 2025 AnimaNatura Soporte técnico. Todos los derechos reservados. |
            <a href="/terminos">Términos de uso</a> |
            <a href="/privacidad">Política de privacidad</a> |
            <a href="/contacto">Contacto</a>
        </p>
    </footer>
</template>

<style scoped>
footer {
  background-color: #213b1e;
  color: white;
  padding: 1em 0;
  text-align: center;
  width: 100%;
  z-index: 1000;
}

footer a {
  color: #60af5b;
  text-decoration: none;
}

footer a:hover {
  text-decoration: underline;
}

@media (max-width: 1366px) {
    footer p{
      font-size: 0.85em;
    }
}

</style>