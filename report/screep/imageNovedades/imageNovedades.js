const squeare = require('../../component/generateSquare')
const Header = require('../../component/Header')
const Title = require('../../component/title')

async function novedades() {
    var documentDefinition = {
        content: [
            Header.header(),
            Title.Title('REGISTRO FOTOGRAFICO'),
            {
                table: {
                    widths: [255,254],
                    body: [
                        [
                            {
                                text: 'FRENTE',
                                fontSize: 7,
                                alignment: 'center',
                            },
                            {
                                text: 'LATERAL',
                                fontSize: 7,
                                alignment: 'center',
                            },
                        ],
                    ]
                }
            },
        ],
    }

    return (documentDefinition)
}

module.exports = {
    novedades
}