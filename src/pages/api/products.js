import { supabase } from "../../services/client";

export const GET = async ({ url }) => {
  console.log(url)
    const category = url.searchParams.get('category') || null
    let productName = url.searchParams.get('name') || null

    if (productName && productName.length < 1) {
      productName = null
    }

    console.log('amen', category, productName)

    let query = supabase
  .from('products')
  .select("*, categoryTable(name)")
  
  if (category) {
                    const listaDeCategorias = [
            { id: "351e0ef0-08c2-4da9-adc9-5d742c41c2d9", name: "otros" },
            { id: "6137d67b-2caf-4bfe-86f5-7f3900475166", name: "electrodomesticos" },
            { id: "6f74901f-fbf0-42df-b2cc-627d200a62a9", name: "indumentaria" },
            { id: "c3f7b751-a0ac-4385-9411-8dec0774c6a0", name: "tecnologia" },
            { id: "f090cd84-f11a-4207-b8e5-af044301cd1a", name: "higene&hogar" }
            ]

            const {id} = listaDeCategorias.find(element => element.name == category.toLowerCase())

    query = query.eq('category', id)
  }

  if (productName) {
    query = query.ilike('name', `%${productName}%`)
  }

  const { data, error } = await query

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 })
  }


  return new Response(JSON.stringify(data), {status: 200})
}

