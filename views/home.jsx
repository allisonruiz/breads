const React = require('react')

function Home (html) {
    return (
        <html>
            <head>
                <title>Home</title>
                <a href="/index">
                    <button className="btn-primary">Places Page</button>
                </a>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Home


