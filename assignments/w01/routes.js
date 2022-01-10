
const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === "/") {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body>');
        res.write('<h1>Welcome to this page!</h1>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="username"><input type="submit" value="submit"></form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if (url === "/users") {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body>');
        res.write('<ul><li>User 1</li><li>User 2</li><li>User 3</li></ul>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if (url === "/create-user") {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];
            console.log(username);
        });
    }
};

exports.handler = requestHandler;