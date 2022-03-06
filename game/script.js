function generator(matLen, gr, grEat, pr, bad, sn, hr,fr) {
    let matrix = [];
    for (let i = 0; i < matLen; i++) {
        matrix[i] = [];
        for (let j = 0; j < matLen; j++) {
            matrix[i][j] = 0;
        }
    }
    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 1;
        }
    }
    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 2;
        }
    }
    for (let i = 0; i < pr; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 3;
        }
    }
    for (let i = 0; i < bad; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 4;
        }

    }
    for (let i = 0; i < sn; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 5;
        }
    }

        for (let i = 0; i < sn; i++) {
            let x = Math.floor(Math.random() * matLen);
            let y = Math.floor(Math.random() * matLen);
            if (matrix[x][y] == 0) {
                matrix[x][y] = 5;
            }
        }
        for (let i = 0; i < hr; i++) {
            let x = Math.floor(Math.random() * matLen);
            let y = Math.floor(Math.random() * matLen);
            if (matrix[x][y] == 0) {
                matrix[x][y] = 6;
            }
        }



        for (let i = 0; i < fr; i++) {
            let x = Math.floor(Math.random() * matLen);
            let y = Math.floor(Math.random() * matLen);
            if (matrix[x][y] == 0) {
                matrix[x][y] = 7;
            }
        }
        return matrix;
    }

    let side = 20;

    let matrix = generator(20, 30, 11, 12, 20, 6, 10,15);

    let grassArr = []
    let grassEaterArr = []
    let predArr = []
    let badgrassArr = []
    let snakeArr = []
    let heartArr = []
    let fireArr = []

    function setup() {
        createCanvas(matrix[0].length * side, matrix.length * side);
        background('#acacac');
        frameRate(3)
        for (let y = 0; y < matrix.length; y++) {
            for (let x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 1) {
                    let gr = new Grass(x, y)
                    grassArr.push(gr)
                } else if (matrix[y][x] == 2) {
                    let grE = new GrassEater(x, y)
                    grassEaterArr.push(grE)
                } else if (matrix[y][x] == 3) {
                    let pd = new Predator(x, y)
                    predArr.push(pd)
                } else if (matrix[y][x] == 4) {
                    let bg = new BadGrass(x, y)
                    badgrassArr.push(bg)

                } else if (matrix[y][x] == 5) {
                    let sn = new Snake(x, y)
                    snakeArr.push(sn)


                } else if (matrix[y][x] == 6) {
                    let hr = new Heart(x, y)
                    heartArr.push(hr)


                } else if (matrix[y][x] == 7) {
                let hr = new Heart(x, y)
                heartArr.push(hr)


            }



            }

        }
    }

    function draw() {
        for (let y = 0; y < matrix.length; y++) {
            for (let x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 1) {
                    fill('green')
                } else if (matrix[y][x] == 0) {
                    fill('#acacac')
                } else if (matrix[y][x] == 2) {
                    fill('yellow')

                } else if (matrix[y][x] == 3) {
                    fill('blue')
                } else if (matrix[y][x] == 4) {
                    fill('#808000')

                } else if (matrix[y][x] == 5) {
                    fill('black')

                } else if (matrix[y][x] == 6) {
                    fill('red')

                } else if (matrix[y][x] == 7) {
                    fill('orange')

                }

                rect(x * side, y * side, side, side)
            }
        }

        for (let i in grassArr) {
            grassArr[i].mul()
        }
        for (let i in grassEaterArr) {
            grassEaterArr[i].mul()
            grassEaterArr[i].eat()
        }
        for (let i in predArr) {
            predArr[i].mul()
            predArr[i].eat()
        }
        for (let i in badgrassArr) {
            badgrassArr[i].mul()
        }
        for (let i in snakeArr) {
            snakeArr[i].mul()
            snakeArr[i].eat()
        }
        for (let i in heartArr) {
            heartArr[i].mul()

        }
    }




