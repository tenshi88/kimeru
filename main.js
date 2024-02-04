const result = document.getElementById("result");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    const r = Math.random();
    const resultImage = document.getElementById('resultImage');
    if (r < 0.5) {
        result.textContent = "やるっ!! (^o^)";
        resultImage.src = './images/go_sign.jpg'; 
    } else if (r < 0.75) {
        result.textContent = "やらない(-_-)";
        resultImage.src ='./images/stop_sign.jpg'; 
    } else {
        result.textContent = "明日考えよ(^^)♪";
        resultImage.src ='./images/smile_sign.jpg'; 
    }
});
