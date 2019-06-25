const Title = require('./title')

function encargadoIterar(Data) {
    let newData = {data:[]}
    for (let D of Data) {
        IteracionData = [
            {
                text: D.Nombre,
                fontSize: 7,
                alignment: 'center',
            },
            {
                text: D.rg6,
                fontSize: 7,
                alignment: 'center',
            },
            {
                text: D.rg11,
                fontSize: 7,
                alignment: 'center',
            },
            {
                text: D.p500,
                fontSize: 7,
                alignment: 'center',
            },
            {
                text: D.fo,
                fontSize: 7,
                alignment: 'center',
            },
            {
                text: D.udp,
                fontSize: 7,
                alignment: 'center',
            },
            {
                text: D.mult,
                fontSize: 7,
                alignment: 'center',
            },
            {
                text: D.dosxd,
                fontSize: 7,
                alignment: 'center',
            },
            {
                text: D.altmon,
                alignment: 'center',
                fontSize: 7,
            },
            {
                text: D.total,
                alignment: 'center',
                fontSize: 7,
            },
        ]

        newData.data.push(IteracionData) 
    }
    return newData

}


function Informe(DataPDF) {
    const TableInfo = {
        table: {
            widths: [76, 45, 45, 45, 45, 45, 45, 31, 30, 30],
            body:encargadoIterar(DataPDF.dataInformeDeTelematicos).data
        }
    }

    return TableInfo
}


module.exports = {
    Informe
}