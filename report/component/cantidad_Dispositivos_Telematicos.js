squeare = require('./generateSquare')


function Info(DataPDF) {
    return data =[
        {
            table: {
                widths: [518],
                body: [
                    [
                        {
                            text: 'CANTIDAD DE DISPOSITIVOS TELEMATICOS',
                            border: [true, false, true, true],
                            fillColor: "#DE9F4E",
                            fontSize: 7,
                            alignment: 'center'
                        },
                    ]
                ]
            }
        },
        {
            table: {
                widths: [130, 45, 45, 45, 45, 45, 35, 65],
                body: [
                    [
                        squeare.getSqueare([{ name: '  Medidor de Energia?    SI  ', value: true }, { name: '  NO   ', value: false }]),
                        {
                            text: 'Marca',
                            fontSize: 7,
                            alignment: 'center',
                        },
                        {
                            text: '',
                            fontSize: 7,
                            alignment: 'center',
                        },
                        {
                            text: 'Serial:',
                            fontSize: 7,
                            alignment: 'center',
                        },
                        {
                            text: '',
                            fontSize: 7,
                            alignment: 'center',
                            colSpan: 2,
                        },
                        '',
                        {
                            text: 'Lectura:',
                            fontSize: 7,
                        },
                        {
                            text: '',
                            alignment: 'center',
                            fontSize: 7,
                        },
                    ]
                ]
            }
        },
        {
            table: {
                widths: [76, 45, 45, 45, 45, 45, 45, 65, 35],
                body: [
                    [
                        {
                            text: 'Cable Operador',
                            fontSize: 7,
                            alignment: 'center',
                        },
                        {
                            text: 'Aplificadores',
                            fontSize: 7,
                            alignment: 'center',
                        },
                        {
                            text: 'Fuente',
                            fontSize: 7,
                            alignment: 'center',
                        },
                        {
                            text: 'Nodo Optico',
                            fontSize: 7,
                            alignment: 'center',
                        },
                        {
                            text: 'Distribucion de fibra',
                            fontSize: 7,
                            alignment: 'center',
                        },
                        {
                            text: 'Reserva tipo Chipa',
                            fontSize: 7,
                            alignment: 'center',
                        },
                        {
                            text: 'Reserva tipo raqueta',
                            fontSize: 7,
                            alignment: 'center',
                        },
                        {
                            text: 'Otro:',
                            fontSize: 7,
                        },
                        {
                            text: 'Total',
                            alignment: 'center',
                            fontSize: 7,
                        },
                    ],
                    [
                        {
                            text: DataPDF.NombreEmpresa,
                            fontSize: 7,
                            alignment: 'center',
                        },
                        {
                            text: DataPDF.Ampli,
                            fontSize: 7,
                            alignment: 'center',
                        },
                        {
                            text: DataPDF.Fuente,
                            fontSize: 7,
                            alignment: 'center',
                        },
                        {
                            text: DataPDF.Nodo,
                            fontSize: 7,
                            alignment: 'center',
                        },
                        {
                            text: DataPDF.distri,
                            fontSize: 7,
                            alignment: 'center',
                        },
                        {
                            text: DataPDF.Reservatipochipa,
                            fontSize: 7,
                            alignment: 'center',
                        },
                        {
                            text: DataPDF.Reservatiporaqueta,
                            fontSize: 7,
                            alignment: 'center',
                        },
                        {
                            text: DataPDF.Otro,
                            fontSize: 7,
                            alignment: 'center',
                        },
                        {
                            text: DataPDF.totalCantidad,
                            alignment: 'center',
                            fontSize: 7,
                        },
                    ]
                ]
            }
        }
    ]
}

module.exports ={
    Info
}























