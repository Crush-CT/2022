const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const d = []

function solve(data) {
    const D = data[0]
    const W = 16/ Math.sqrt(337) * D
    const H = (9 / 16) * W
    console.log(
        "Horizontal DPI: "+(data[1] / W).toFixed(2)+"\nVertical DPI: "+
        (data[2] / H).toFixed(2)
    )
}

rl.on("line", (line) => {
    if (line == "0 0 0") rl.close()
    else d.push(line.split(" ").map(Number))
}).on("close", () => {
    for(let i=0;i<d.length;i++){
        solve(d[i])
    }
    process.exit()
})
