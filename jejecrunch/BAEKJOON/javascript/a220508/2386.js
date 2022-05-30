const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
rl.on("line", (line) => {
    if (line == "#") rl.close()
    else {
        line = line.replace(" ", "-")
        const arr = line.split("-")
        console.log(
            arr[0] +
                " " +
                arr[1]
                    .toLowerCase()
                    .split("")
                    .filter((v) => v == arr[0]).length
        )
    }
}).on("close", () => {
    process.exit()
})
