    const result = document.getElementById("result");
    const btn = document.getElementById("btn");

    btn.addEventListener("click", () => {
        const n = Math.floor(Math.random()*3);
        switch(n){
            case 0:
                result.textContent = "やるっ!! (^o^)";
                break;
            case 1:
                result.textContent = "やらない(-_-)";
                break;
            case 2:
                result.textContent = "明日考えよ(^^)♪"
        }
    })


