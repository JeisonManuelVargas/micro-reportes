const squeare = require('../../component/generateSquare')
const CantidadDispositivosTelematicos = require('../../component/cantidad_Dispositivos_Telematicos')
const InformeOcupacionesTelematicas = require('../../component/InformeOcupacionesTelematicas')
const Header = require('../../component/Header')
const Title = require('../../component/title')
const Line = require('../../component/line')

async function novedades(DataPDF) {
    var documentDefinition = {
        content: [
            Header.header(),
            Title.Title('FECHA ACTIVIDAD'),
            {
                table: {
                    widths: [100, 150, 75, 166],
                    body: [
                        [
                            {
                                text: 'FECHA ACTIVIDAD:',
                                fontSize: 7,
                                alignment: 'center',
                            },
                            {
                                text: `${DataPDF.FechaActividad}`,
                                fontSize: 7,
                                alignment: 'center',
                            },
                            {
                                text: 'Hora Inicio',
                                fontSize: 7,
                                alignment: 'center'
                            },
                            {
                                text: `${DataPDF.HoraActividad}`,
                                fontSize: 7,
                                alignment: 'center',
                            },
                        ],
                    ]
                }
            },
            Title.Title('INFORMACIÓN DE LA ESTRUCTURA', true),
            {
                style: 'tableExample',
                table: {
                    widths: [75, 175, 250],
                    body: [
                        [
                            {

                                border: [true, false, true, true],
                                fontSize: 7,
                                text: 'PACVI',
                            },
                            {
                                border: [true, false, true, true],
                                alignment: 'center',
                                fontSize: 7,
                                text: `NUMERO DE APOYO ${DataPDF.CodigoApoyo}`,
                            },
                            squeare.getSqueare(DataPDF.CodigoDefine)
                        ],
                    ]
                }
            },
            {
                style: 'tableExample',
                table: {
                    widths: [75, 175, 75, 48, 47, 53],
                    body: [
                        [
                            {
                                fontSize: 7,
                                text: 'Direccion',
                                border: [true, false, true, true],
                            },
                            {
                                border: [true, false, true, true],
                                fontSize: 7,
                                text: `${DataPDF.Direccion}`,
                            },
                            {
                                border: [true, false, true, true],
                                fontSize: 7,
                                text: 'Latitud',
                            },
                            {
                                border: [true, false, true, true],
                                fontSize: 7,
                                colSpan: 3,
                                alignment: 'center',
                                text: `${DataPDF.Latitud}`,
                            },
                            '',
                            ''
                        ],
                        [
                            {
                                fontSize: 7,
                                text: 'Altura',
                                border: [true, false, true, true],
                            },
                            squeare.getSqueare(DataPDF.Altura, 5),
                            {
                                border: [true, false, true, true],
                                fontSize: 7,
                                text: 'Longitud',
                            },
                            {
                                border: [true, false, true, true],
                                fontSize: 7,
                                alignment: 'center',
                                colSpan: 3,
                                text: `${DataPDF.Longitud}`,
                            },
                            '',
                            ''
                        ],
                        [
                            {
                                fontSize: 7,
                                text: 'Resistencia Mecanica',
                                border: [true, false, true, true],
                            },

                            squeare.getSqueare(DataPDF.ResistensiaMecanica),
                            {
                                border: [true, false, true, true],
                                fontSize: 7,
                                text: 'Ciudad:',
                            },
                            {
                                border: [true, false, true, true],
                                fontSize: 7,
                                alignment: 'center',
                                text: `${DataPDF.Ciudad}`,
                            },
                            {
                                border: [true, false, true, true],
                                fontSize: 7,
                                alignment: 'center',
                                text: 'Departamento:',
                            },
                            {
                                border: [true, false, true, true],
                                fontSize: 7,
                                alignment: 'center',
                                text: `${DataPDF.Departamento}`,
                            }
                        ],
                    ]
                }
            },
            {
                style: 'tableExample',
                table: {
                    widths: [75, 175, 75, 166],
                    body: [

                        [
                            {
                                fontSize: 7,
                                text: 'Material',
                                border: [true, false, true, true],
                            },
                            squeare.getSqueare(DataPDF.Material),
                            {
                                border: [true, false, true, true],
                                fontSize: 7,
                                text: 'Estado',
                            },
                            squeare.getSqueare(
                                [
                                    {
                                        name: 'B',
                                        value: false
                                    },
                                    {
                                        name: 'M',
                                        value: true
                                    },
                                ]
                            ),
                        ],

                    ]
                }
            },
            {
                style: 'tableExample',
                table: {
                    widths: [75, 175, 75, 166],
                    body: [

                        [
                            {
                                fontSize: 7,
                                text: 'Nivel Tension',
                                border: [true, false, true, true],
                            },
                            squeare.getSqueare(
                                [
                                    {
                                        name: 'BAJA',
                                        value: true
                                    },
                                    {
                                        name: 'MEDIA 13,2K',
                                        value: false
                                    },
                                    {
                                        name: 'MEDIA 34,5kV',
                                        value: true
                                    },
                                ]
                            ),
                            {
                                border: [true, false, true, true],
                                fontSize: 7,
                                text: 'Estado',
                            },
                            squeare.getSqueare(
                                [
                                    {
                                        name: 'Descomp.',
                                        value: false
                                    },
                                    {
                                        name: 'Agrietado',
                                        value: false
                                    },
                                    {
                                        name: 'Inclinado',
                                        value: false
                                    },
                                    {
                                        name: 'Estropeado',
                                        value: false
                                    }
                                ],
                                5
                            ),
                        ],

                    ]
                }
            },
            {
                style: 'tableExample',
                table: {
                    widths: [75, 175, 75, 48, 47, 53],
                    body: [

                        [
                            {
                                fontSize: 7,
                                text: 'Tipo de cable de Red',
                                border: [true, false, true, true],
                            },
                            squeare.getSqueare(DataPDF.TipoDeCableRed),
                            {
                                border: [true, false, true, true],
                                fontSize: 7,
                                text: 'Retenidas Aereas',
                            },
                            {
                                border: [true, false, true, true],
                                fontSize: 7,
                                alignment: 'center',
                                text: '0',
                            },
                            {
                                border: [true, false, true, true],
                                fontSize: 7,
                                alignment: 'center',
                                text: 'Retenidas',
                            },
                            {
                                border: [true, false, true, true],
                                fontSize: 7,
                                alignment: 'center',
                                text: `${DataPDF.Retenidas}`,
                            }
                        ],
                        [
                            {
                                fontSize: 7,
                                text: 'Existe Transformador?',
                                border: [true, false, true, true],
                            },
                            squeare.getSqueare([{ name: 'SI', value: false }, { name: 'NO', value: true }]),
                            {
                                border: [true, false, true, true],
                                fontSize: 7,
                                alignment: 'center',
                                text: '',
                            },
                            {
                                border: [true, false, true, true],
                                fontSize: 7,
                                alignment: 'center',
                                text: 'Potencia:',
                            },
                            {
                                border: [true, false, true, true],
                                fontSize: 7,
                                alignment: 'center',
                                colSpan: 2,
                                text: '',
                            },
                            ''
                        ],
                    ]
                }
            },
            {
                style: 'tableExample',
                table: {
                    widths: [75, 175, 75, 50, 107],
                    body: [

                        [
                            {
                                fontSize: 7,
                                text: 'Luminaria Encendida:',
                                border: [true, false, true, true],
                            },
                            squeare.getSqueare(DataPDF.Luminaria),
                            {
                                border: [true, false, true, true],
                                fontSize: 7,
                                alignment: 'center',
                                text: 'Cantidad:',
                                alignment: 'right',
                            },
                            {
                                border: [true, false, true, true],
                                text: '',
                                alignment: 'center',
                                fontSize: 7,
                                colSpan: 2,
                            },
                            ''
                        ],
                    ]
                }
            },
            {
                style: 'tableExample',
                table: {
                    widths: [518],
                    body: [
                        [
                            squeare.getSqueare(DataPDF.Poda),

                        ],
                    ]
                }
            },
            Title.Title('NOMENCLATURA', true),
            {
                table: {
                    widths: [81, 81, 120, 100, 100],
                    body: [
                        [
                            {
                                text: 'CO: concreto',
                                border: [true, false, false, false],
                                fontSize: 7,
                                alignment: 'center',
                            },
                            {
                                text: 'TO: torre Metalica',
                                border: [false, false, false, false],
                                fontSize: 7,
                                alignment: 'center',
                            },
                            {
                                text: 'ACSR: Aluminio Desnudo Reforzado',
                                border: [false, false, false, false],
                                fontSize: 7,
                                alignment: 'center'
                            },
                            {
                                text: 'TRE:Trenzado',
                                border: [false, false, false, false],
                                fontSize: 7,
                                alignment: 'center',
                            },
                            {
                                text: 'CUA:Cobre Aislado',
                                border: [false, false, true, false],
                                fontSize: 7,
                                alignment: 'center',
                            },
                        ],
                        [
                            {
                                text: 'MA:Madera',
                                border: [true, false, false, false],
                                fontSize: 7,
                                alignment: 'center'
                            },
                            {
                                text: 'TU:Tubo Metalico',
                                border: [false, false, false, false],
                                fontSize: 7,
                                alignment: 'center'
                            },
                            {
                                text: 'ASR:Aluminio Aislado',
                                border: [false, false, false, false],
                                fontSize: 7,
                                alignment: 'center'
                            },
                            {
                                text: 'CUD:Cobre Desnudo',
                                border: [false, false, false, false],
                                fontSize: 7,
                                alignment: 'center',
                            },
                            {
                                text: '',
                                border: [false, false, true, false],
                                fontSize: 7,
                                alignment: 'center',
                            },
                        ]
                    ]
                }
            },
            {
                table: {
                    widths: [518],
                    body: [
                        [
                            {
                                text: 'INFORME DE TELEMATICOS',
                                border: [true, true, true, true],
                                fillColor: "#DE9F4E",
                                fontSize: 7,
                                alignment: 'center'
                            },
                        ],
                    ]
                }
            },
            {
                style: 'tableExample',
                table: {
                    widths: [258, 40, 48, 37, 99],
                    body: [

                        [
                            squeare.getSqueare(DataPDF.Excablebt),
                            {
                                text: 'Cantidad:',
                                fontSize: 7,
                                alignment: 'right'
                            },
                            {
                                text: DataPDF.Cantidad,
                                fontSize: 7,
                                alignment: 'center'
                            },
                            {
                                text: 'Tipo Cable:',
                                fontSize: 7,
                            },
                            {
                                text: DataPDF.Cable,
                                fontSize: 7
                            },
                        ],

                    ]
                }
            },
            {
                style: 'tableExample',
                table: {
                    widths: [410, 99],
                    body: [

                        [
                            {
                                text: `Cable Operador(es) sobre red de BT :     ${DataPDF.Cbleoperadores}`,
                                border: [true, true, true, true],
                                fontSize: 7,
                            },
                            {
                                text: `Altura Disponible:   ${DataPDF.Alturadisponible}`,
                                fontSize: 7
                            }
                        ]
                    ]
                }
            },
            {
                style: 'tableExample',
                table: {
                    widths: [258, 40, 48, 37, 99],
                    body: [

                        [
                            squeare.getSqueare([{ name: 'Requiere retenidas Adicionales      SI', value: false }, { name: 'NO', value: false }]),
                            {
                                text: 'Cantidad:',
                                fontSize: 7,
                                alignment: 'right'
                            },
                            {
                                text: '',
                                fontSize: 7,
                                alignment: 'center'
                            },
                            {
                                text: 'Tipo Cable:',
                                fontSize: 7,
                            },
                            squeare.getSqueare([{ name: 'Area', value: false }, { name: '   Normal', value: false }]),
                        ],

                    ]
                }
            },

            {
                style: 'tableExample',
                table: {
                    widths: [124, 125, 50, 56, 56, 62],
                    body: [
                        [
                            squeare.getSqueare(DataPDF.Conexilic),
                            {
                                text: `Tipo de Dispositivo: ${DataPDF.Tipoequipo}`,
                                border: [true, true, true, true],
                                fontSize: 7,
                            },
                            {
                                text: `Consumo(kWatt): ${DataPDF.Conequipos}`,
                                colSpan: 2,
                                fontSize: 7,
                            },
                            '',
                            {
                                text: `Cable Operador: ${DataPDF.Emprequipos}`,
                                fontSize: 7,
                                colSpan: 2,
                            },
                            '',
                        ],
                    ]
                }
            },


            //vamos a crear la tabla dinamica de cantidad de dispositivos Telematicos
            CantidadDispositivosTelematicos.Info(DataPDF),
            {
                style: 'tableExample',
                table: {
                    widths: [76, 45, 45, 45, 45, 45, 45, 31, 30, 30],
                    body: [
                        [
                            {
                                text: 'INFORME OCUPACIONES TELEMATICAS',
                                colSpan: 10,
                                border: [true, false, true, true],
                                fillColor: "#DE9F4E",
                                fontSize: 7,
                                alignment: 'center'
                            },
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            ''
                        ],
                        [
                            {
                                text: 'Cantidad de Cables Telematicos',
                                colSpan: 10,
                                border: [true, false, true, true],
                                fontSize: 7,
                                alignment: 'center'
                            },
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            ''
                        ],
                        [
                            {
                                text: 'Cable Operador',
                                fontSize: 7,
                                alignment: 'center',
                            },
                            {
                                text: 'RG6',
                                fontSize: 7,
                                alignment: 'center',
                            },
                            {
                                text: 'RG11',
                                fontSize: 7,
                                alignment: 'center',
                            },
                            {
                                text: '.500',
                                fontSize: 7,
                                alignment: 'center',
                            },
                            {
                                text: 'FO',
                                fontSize: 7,
                                alignment: 'center',
                            },
                            {
                                text: 'UTP',
                                fontSize: 7,
                                alignment: 'center',
                            },
                            {
                                text: 'Cable Multipar',
                                fontSize: 7,
                                alignment: 'center',
                            },
                            {
                                text: '2X20:',
                                fontSize: 7,
                            },
                            {
                                text: 'Altura de montaje',
                                alignment: 'center',
                                fontSize: 7,
                            },
                            {
                                text: 'Total',
                                alignment: 'center',
                                fontSize: 7,
                            },
                        ],
                    ]
                },
            },

            //vamos a crear la tabla dinamica de Informe de Ocupaciones Telematicas
            InformeOcupacionesTelematicas.Informe(DataPDF),


            Title.Title('DESCRIPCION DE LA NOVEDAD', true),
            {
                table: {
                    widths: [518],
                    body: [
                        [
                            {
                                text: 'TOMACORRIENTE Y BRAKER ANEXADOS AL POSTE ESTÁN CONECTADOS A LA RED DE ENERGÍA DE MANERA ILICITA',
                                border: [true, false, true, true],
                                fontSize: 7,
                                alignment: 'center'
                            }
                        ],
                        [
                            {
                                text: '.',
                                border: [true, false, true, true],
                                fontSize: 7,
                            }
                        ],
                        [
                            {
                                text: '.',
                                border: [true, false, true, true],
                                fontSize: 7,
                            }
                        ],
                        [
                            {
                                text: '.',
                                border: [true, false, true, true],
                                fontSize: 7,
                            }
                        ],
                        [
                            { text: '', border: [true, true, true, false], }
                        ]

                    ]
                }
            },
            {

                table: {
                    widths: [72, 190, 15, 190, 15],
                    body: [

                        [
                            {
                                border: [true, false, true, false],
                                text: ''
                            },
                            {
                                text: 'DATOS DE INGENIERO/TECNICO',
                                border: [true, true, true, true],
                                fillColor: "#DE9F4E",
                                fontSize: 7,
                                alignment: 'center'
                            },
                            {
                                border: [true, false, true, false],
                                text: ''
                            },
                            {
                                text: 'DATOS DE CABLEOPERADOR',
                                border: [true, true, true, true],
                                fillColor: "#DE9F4E",
                                fontSize: 7,
                                alignment: 'center'
                            },
                            {
                                border: [true, false, true, false],
                                text: ''
                            },
                        ],
                        Line.Line('FIRMA:'),
                        Line.Line('NOMBRE:'),
                        Line.Line('CEDULA:'),
                        Line.Line('CARGO'),
                        Line.Line('ELABORO'),
                        Line.LineEnd(),
                    ]
                }
            }
        ],
    }

    return (documentDefinition)
}

module.exports = {
    novedades
}