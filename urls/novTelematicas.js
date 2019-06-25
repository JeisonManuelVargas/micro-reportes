'use strict'
const express = require('express')
const asyncify = require('express-asyncify')
const reportesController = require('../controller/reporteController')
const pdfMake = require('../pdfmake/pdfmake')

const url = asyncify(express.Router())

url.use('/public',express.static('fonts'))

url.post('/report', async (request, response) =>{
    const data = request.body
    const reporte = await reportesController.generateReporte(data)

    const pdfDoc = pdfMake.createPdf(reporte); 
     pdfDoc.getBase64((data)=>{
         response.writeHead(200, 
        { 
            'Content-Type': 'application/pdf',
            'Content-Disposition':'attachment;filename="filename.pdf"'
        }); 

        const download = Buffer.from(data.toString('utf-8'), 'base64');
        response.end(download); 
     });
})   

url.post('/image', async (request, response) =>{
    const data = request.body
    const reporte = await reportesController.generateReporteImage(data)

    const pdfDoc = pdfMake.createPdf(reporte);
    pdfDoc.getBase64((data)=>{
        response.writeHead(200, 
        {
            'Content-Type': 'application/pdf',
            'Content-Disposition':'attachment;filename="filename.pdf"'
        });

        const download = Buffer.from(data.toString('utf-8'), 'base64');
        response.end(download);
    });

})  

module.exports = url