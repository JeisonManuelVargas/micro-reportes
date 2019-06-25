'use strict'
const pdfMake = require('../pdfmake/pdfmake');
const vfsFonts = require('../pdfmake/vfs_fonts');
const novedadesTelematica = require('../report/screep/informeNovedades/NovedadesTelematicas')
const novedadesTelematicaImage = require('../report/screep/imageNovedades/imageNovedades')
pdfMake.vfs = vfsFonts.pdfMake.vfs;

function SelectCheck(data, validator) {
    let Response = []
    for (let D of data) {
        let newData
        if (D == validator) {
            newData = { name: D, value: true }
        } else {
            newData = { name: D, value: false }
        }
        Response.push(newData)
    }
    return Response
}

function SelectBoolean(data, texto) {
    if (data == 1) {
        const newData = [{ name: texto ? `${texto}      SI` : `SI`, value: true }, { name: 'NO', value: false }]
        return newData
    } else {
        const newData = [{ name: texto ? `${texto}      SI` : `SI`, value: false }, { name: 'NO', value: true }]
        return newData
    }
}


async function generateReporte(data) {
    const Altura = SelectCheck(['8 mts', '10 ms', '12 mts', '14 mts', '16 mts'], data[0].altura)
    const ResistensiaMecanica = SelectCheck(['510kg', '750kg', '1050kg', '1350kg'], data[0].resisitencia)
    const Material = SelectCheck(['CO', 'MA', 'TO', 'TU'], data[0].material)
    const Direccion = data[0].direccion
    const FechaActividad = data[0].fechaact
    const CodigoApoyo = data[0].codigoapoyo
    const Longitud = data[0].longitud_elemento
    const Latitud = data[0].latitud_elemento
    const TipoDeCableRed = [
        {
            name: 'ACSR',
            value: data[0].ACSR == 1 ? true : false
        },
        {
            name: 'ASC',
            value: data[0].ASC == 1 ? true : false
        },
        {
            name: 'TRE',
            value: data[0].TRE == 1 ? true : false
        },
        {
            name: 'CUA',
            value: data[0].CUA == 1 ? true : false
        },
        {
            name: 'CUD',
            value: data[0].CUD == 1 ? true : false
        }
    ]
    const EstadoPos = [
        {
            name: 'Descomp.',
            value: data[0].nodesc == 1 ? true : false
        },
        {
            name: 'Agrietado',
            value: data[0].noagri == 1 ? true : false
        },
        {
            name: 'Inclinado',
            value: data[0].noinc == 1 ? true : false
        },
        {
            name: 'Estropeado',
            value: data[0].noest == 1 ? true : false
        }
    ]
    const HoraActividad = data[0].horaact
    const CodigoDefine = [
        {
            name: 'Codigo borroso',
            value: data[0].nocodborroso == 1 ? true : false
        },
        {
            name: '              No Visible',
            value: data[0].novisible == 1 ? true : false
        },
        {
            name: '              No tiene',
            value: data[0].notiene == 1 ? true : false
        }
    ]
    const Poda = SelectBoolean(data[0].poda, 'La estructura Requiere Poda?')
    const Luminaria = SelectBoolean(data[0].luminaria)
    const Retenidas = data[0].retenidas
    const Ciudad = data[0].ciudad
    const Departamento = data[0].departamento
    /* ---------------------- vamos a crear la segunda data (CANTIDAD DE DISPOSITIVOS TELEMATICOS), que viene en un segundo json------------------------ */
        const Ampli = data[1] ? data[1].ampli : 'N/A'
        const Fuente = data[1] ? data[1].fuente : 'N/A'
        const Nodo = data[1] ? data[1].nodo : 'N/A'
        const distri = data[1] ? data[1].distri : 'N/A'
        const Reservatipochipa = data[1] ? data[1].reservatipochipa : 'N/A'
        const Reservatiporaqueta = data[1] ? data[1].reservatiporaqueta : 'N/A'
        const Otro = data[1] ? data[1].otro : 'N/A'
        const totalCantidad = data[1] ? data[1].total : 'N/A'
    
    /*---------------------- vamos a crear la tercera data ( INFORME DE TELEMATICOS), que viene en el json--------------------------------------*/
    const NombreEmpresa = data[2].cbleoperadores
    const IdElemento = data[2].Id
    const Excablebt = SelectBoolean(data[2].excablebt, 'Existe Cable Temático sobre la red de BT?')
    const Cantidad = data[2].cantidad
    const Cable = data[2].cable
    const Alturadisponible = data[2].alturadisponible
    const Conexilic = SelectBoolean(data[2].conexilic, 'Conexion ilicita?')
    const Tipoequipo = data[2].tipoequipo
    const Conequipos = data[2].conequipos
    const Emprequipos = data[2].emprequipos
    /*----------------------vamos a crear la cuarta data (INFORME OCUPACIONES TELEMATICAS), que viene en el json---------------------------*/

    const dataInformeDeTelematicos = data[3]


/*     const Nombre = data[3].Nombre
    const Rg6 = data[3].rg6 
    const Rg11 = data[3].rg11
    const P500 = data[3].p500
    const Fo = data[3].fo
    const Udp = data[3].udp
    const Mult = data[3].mult
    const Dosxd = data[3].dosxd
    const totalInforme = data[3].total
 */



    const DataPDF = {
        Altura,
        ResistensiaMecanica,
        Material,
        Direccion,
        FechaActividad,
        CodigoApoyo,
        Longitud,
        Latitud,
        TipoDeCableRed,
        HoraActividad,
        CodigoDefine,
        Poda,
        Luminaria,
        Retenidas,
        EstadoPos,
        Ciudad,
        Departamento,
        NombreEmpresa,
        Ampli,
        Fuente,
        Nodo,
        distri,
        Reservatipochipa,
        Reservatiporaqueta,
        Otro,
        totalCantidad,
        IdElemento,
        Excablebt,
        Cantidad,
        Cable,
        Alturadisponible,
        Conexilic,
        Tipoequipo,
        Conequipos,
        Emprequipos,
        dataInformeDeTelematicos
    }
    const documentDefinition = await novedadesTelematica.novedades(DataPDF)
    return documentDefinition
}
 

async function generateReporteImage(data) {
    const documentDefinition = await novedadesTelematicaImage.novedades()
        return documentDefinition 
}

module.exports = {
    generateReporte,
    generateReporteImage
}