
export function getUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      // devuelve exitosamente la promesa dfespues del tiempo marcado
      resolve([
        { id: 1, username: 'cliente1', password: '1234', role: 'cliente' },
        { id: 2, username: 'admin1', password: '1234', role: 'admin' },
        { id: 3, username: 'veterinario1', password: '1234', role: 'veterinario' },
        { id: 4, username: 'etologo1', password: '1234', role: 'etologo' },
        { id: 5, username: 'especialista1', password: '1234', role: 'especialista' },
        { id: 6, username: 'cliente2', password: '1234', role: 'cliente' },
      ])
    }, 400)
  })
}

export default {
  getUsers
}
