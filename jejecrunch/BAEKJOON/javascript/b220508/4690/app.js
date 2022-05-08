let result = ""

for (let a = 6; a <= 100; a++) {
    for (let b = 2; b < a; b++) {
        for (c = b + 1; c < a; c++) {
            for (let d = c + 1; d < a; d++) {
                if (a ** 3 === b ** 3 + c ** 3 + d ** 3) {
                    result += "Cube = " + a + ", Triple = (" + b + "," + c + "," + d + ")\n"
                }
            }
        }
    }
}

console.log(result.trim())
