function getSqueare(Data, leatle) {
    let newData = []


    for (let D of Data) {
        newData.push(
            {
                text: `${D.name}`,
                fontSize: leatle ? leatle : 7,
                border: [false, false, false, false],
            },
            {
                text: '',
                fillColor: D.value ? "#d45a5a" : "#ffffff",
            },
        )

    }
    const Respuesta = [
        {
            table: {
                body: [
                    newData
                ]
            },
        }
    ]

    return Respuesta
}

module.exports ={
    getSqueare
}