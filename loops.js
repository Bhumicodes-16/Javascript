let a = 1;
for (i = 0; i < 100; i++){
    console.log(a + i);
}

let obj = {
    name: "jaiene",
    role: "programmer",
    company:"giigii"
}

for (const key in obj) {
    const element = obj[key];
    console.log(key, element)

    for (const c of "Gargi") {
        console.log(c)
    }
    
    
}