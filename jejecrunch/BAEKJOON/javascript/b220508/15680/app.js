const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const [input] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number)

switch (input) {
    case 0:
        console.log("YONSEI")
        break
    case 1:
        console.log("Leading the Way to the Future")
        break
}
