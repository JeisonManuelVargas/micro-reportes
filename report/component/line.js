function Line(name) {
    data = [
        {
            border: [true, false, false, false],
            text: `${name}`,
            fontSize: 10,
        },
        {
            text: '',
            border: [false, false, false, true],
        },
        {
            border: [false, false, false, false],
            text: ''
        },
        {
            text: '',
            border: [false, false, false, true],
        },
        {
            border: [false, false, true, false],
            text: ''
        },
    ]
    return data
}


function LineEnd() {

    data = [
        {
            border: [true, false, false, true],
            text: '.',
        },
        {
            text: '',
            border: [false, false, false, true],
        },
        {
            border: [false, false, false, true],
            text: ''
        },
        {
            text: '',
            border: [false, false, false, true],
        },
        {
            border: [false, false, true, true],
            text: ''
        },
    ]
    
    return data
}

module.exports = {
    Line,
    LineEnd
}