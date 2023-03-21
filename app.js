/*ボタンの要素を取得する*/
const time = document.getElementById("time");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

/*時刻の定義*/
let startTime;
let timeoutId;
let elapsedTime = 0;

/*ボタンを押した時の処理*/
function countUp() {
  console.log(Date.now() - startTime + elapsedTime);
  const d = new Date(Date.now() - startTime + elapsedTime);
  const h = String(d.getHours() - 9).padStart(2, "0");
  const m = String(d.getMinutes()).padStart(2, "0");
  const s = String(d.getSeconds()).padStart(2, "0");
  const ms = String(d.getMilliseconds()).padStart(3, "0");
  time.textContent = `${h}:${m}:${s}.${ms}`;

  timeoutId = setTimeout(() => {
    countUp();
  }, 10);
}

/*startボタンを押した時の処理*/
start.addEventListener("click", () => {
  /*スタートボタンを押したときにストップボタンとリセットボタンを押せるようにする*/
  start.disabled = true;
  stop.disabled = false;
  reset.disabled = true;
  startTime = Date.now();
  countUp();
});

/*stopボタンを押した時の処理*/
stop.addEventListener("click", () => {
    /*ストップボタンを押したときにスタートボタンとリセットボタンを押せるようにする*/
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = false;  
  clearTimeout(timeoutId);
  elapsedTime += Date.now() - startTime;
});

/*resetボタンを押した時の処理*/
reset.addEventListener("click", () => {
    /*リセットボタンを押したときにスタートボタンを押せるようにする*/
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = true;
  time.textContent = "00:00:00.000";
  elapsedTime = 0;
});
