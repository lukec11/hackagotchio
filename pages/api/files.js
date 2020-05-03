const fs = require("fs")
import { join } from 'path'

export default async (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    const postsDirectory = join(process.cwd(), '_posts')

    let slugs = await fs.readdirSync(postsDirectory)

    res.end(JSON.stringify(slugs))
}