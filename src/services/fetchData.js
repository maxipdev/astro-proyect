export const fetchData = async ({ path = "", method = "GET", body = null, token = "" }) => {
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    }

    if (body) options.body = JSON.stringify(body)

    const res = await fetch(`https://jimbofertas-api.vercel.app/${path}`, options)

    if (!res.ok) throw new Error('Error en la solicitud')

    return await res.json()  // Si ya viene como lo necesitás, ¡listo!
}
