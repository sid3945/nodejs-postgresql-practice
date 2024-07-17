const client = require('./db');

async function createPost(title, content){
    try{
        const result = await client.query('INSERT INTO posts (title, content) VALUES ($1, $2)', [title, content]);
        return result.rows[0]; 
    } catch(error){
        console.error(error)
        throw err;
    }
}

module.exports = createPost;