const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")
let index = 1
while (input.length > 0) {
    const [r, c, t] = input.shift().split(" ")
    if (c != 0) {
        const distance = (r * 3.1415927 * c) / 12 / 5280
        let result = [
            "Trip #" + index++ + ":",
            distance.toFixed(2),
            (distance / (t / 3600)).toFixed(2),
        ]
        console.log(result.join(" "))
    }
}
