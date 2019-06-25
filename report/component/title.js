function Title(name, borde) {
    data = {
        table: {
            widths: [518],
            body: [
                [
                    {
                        text: `${name}`,

                        border: borde ? [true, false, true, true] : [true, false, true, false],
                        fillColor: "#DE9F4E",
                        fontSize: 8,
                        alignment: 'center'
                    },
                ],
            ]
        }
    }
    return data
}

module.exports = {
    Title
}