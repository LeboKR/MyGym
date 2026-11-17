import http from 'node:http'

const PORT = 7080;

const server = http.createServer((req,res) =>{

        if(req.url.startsWith('/api'))
        {
            if(req.url === '/api/users' && req.method === 'GET')
        {
            console.log('Users endpoint hit')
            res.end(JSON.stringify({message: 'THIS THE ALL USERS OBJECT.'}))
        }
        } else {
            res.end(JSON.stringify({Error: "Error 404, what you're looking for could not be found."}))
        }



})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})