const React = require('react')
const Default = require('./layouts/Default')

function Index ({breads}) {
    console.log(breads)
    return (
        <Default>
            <h2>Index Page For the Bread</h2>
            {/* <p>I have {breads[0].name} bread!</p> */}
            <ul>
                {
                    breads.map((bread, index) => {
                        return <li key={index}>
                            <a href={`/breads/${index}`}>{bread.name}</a>
                            </li>;
                    })
                }
            </ul>
        </Default>
    )
}

module.exports = Index;