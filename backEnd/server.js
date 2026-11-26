import http from 'node:http'

const PORT = 7080;

const server = http.createServer((req,res) =>{


})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})