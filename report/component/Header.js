function header() {
    data = {
        style: 'tableExample',
        table: {
            widths: [150, 250, 100],
            body: [
                [
                    {
                        /* image: '../../../urls/public/Interedes-WP2.png', */
                            text: 'Imagen interedes electrificadora',
                            fontSize: 7,
                            rowSpan: 2,
                    },
                    {
                        text: 'REPORTE DE NOVEDADES TELEMATICAS',
                        fillColor: "#DE9F4E",
                        fontSize: 7,
                        alignment: 'center'
                    },
                    {
                        text: 'VERSION: 02',
                        fillColor: "#DE9F4E",
                        fontSize: 7,
                        alignment: 'center'
                    }
                ],
                [
                    '',
                    {
                        text: 'GESTION SUPERVISION SOBRE INFRAESTRUCTURA DE EH',
                        fontSize: 7,
                        alignment: 'center'
                    },
                    {
                        text: 'FECHA: 22 DE ABRIL DE 2019',
                        fontSize: 7,
                        alignment: 'center'
                    }
                ],
                [
                    { text: '', colSpan: 3, border: [true, true, true, true], }
                ]
            ]
        }
    }

    return data
}

module.exports = {
    header
}