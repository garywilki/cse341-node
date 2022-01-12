const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>Greetings</title></head>")
        res.write("<body><h1>Welcome to Assignment 1</h1>")
        res.write('<form action="/create-user" method="POST">');
        res.write('<input name="username" type="text">');
        res.write('<input name="age" type="text">');
        res.write('<input name="eyecolor" type="text">');
        res.write('<button type="submit">Create User</button></form>');
        res.write("</body></html>");
        return res.end();
    }
    if (url === '/users') {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>Greetings</title></head>")
        res.write("<body><ul>");
        res.write("<li>User 1</li>")
        res.write("<li>User 2</li>")
        res.write("<li>User 3</li>")
        res.write("</ul></body></html>");
        return res.end();
    }
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const items = parsedBody.split('&');
            const username = items[0].split('=')[1];
            const age = items[1].split('=')[1];
            const eyeColor = items[2].split('=')[1];
            console.log(username);
            console.log(age);
            console.log(eyeColor);
        });
    }
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>")
    res.write("<body><h1>Default route</h1></body>")
    res.write("</html>");
    res.end();
};

module.exports.handler = requestHandler;