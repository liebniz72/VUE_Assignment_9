import axios from  'axios'

export async function fetchCategories(){
    try {
        const url = 'hhttps://liebniztier.com/wp-content'
        const res = await axios.get(url)
        return res.data
    } catch (error) {
        console.error(error)
        return []
    }
}

export default fetchCategories