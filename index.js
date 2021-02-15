const SECONDS_IN_DAY = 86400; // 1日の秒数
const MINUTES_IN_DAY = 1440; // 1日の分数
const HOURS_IN_DAY = 24; // 1日の時間数
const MINUTES_IN_HOUR = 60; // 1時間の分数
const SECONDS_IN_MINUTE = 60; // 1分の秒数
const MONTH_LIST = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 月の日数
const YEAR_DAY_NUM = 365; // 1年の日数
const MONTH_NUM = 12; // 月の数

function getNow(now) {
	var now = new Date();
	var year = now.getFullYear();
	var mon = now.getMonth()+1; //１を足すこと
	var day = now.getDate();
	var hour = now.getHours();
	var min = now.getMinutes();
	var sec = now.getSeconds();

	//出力用
	var s = hour + ":" + min + ":" + sec; 
	return s;
}

function getDayDate(now_seconds) {
	var mm, dd, hh, mi;
	var days = now_seconds / SECONDS_IN_DAY * YEAR_DAY_NUM;
	var days_int = parseInt(now_seconds / SECONDS_IN_DAY * YEAR_DAY_NUM);

	// calc date
	var remaining_day = days_int + 1; 
	for (i = 1; i <= MONTH_NUM; ++i) {
		var month_days = MONTH_LIST[i];
		if (remaining_day > month_days) {
			remaining_day -= month_days;
			continue;
		}
		mm = i;
		dd = remaining_day;
		break;
	}
	// console.log(mm + "/" + dd);
	// calc time
	var days_remain = days - days_int;
	var seconds = parseInt(days_remain * MINUTES_IN_DAY);

	var hour = seconds / MINUTES_IN_HOUR
	hh = parseInt(hour)
	mi = parseInt(seconds - (hh*MINUTES_IN_HOUR))
	var v = mm + "月" + dd + "日" + hh + "時" + mi + "分"
	return v; 
}

function viewer() {
	var now = new Date();
	var hour = now.getHours();
	var min = now.getMinutes();
	var sec = now.getSeconds();
	var msec = now.getMilliseconds();

	var now_seconds = ((hour * MINUTES_IN_HOUR) + min) * SECONDS_IN_MINUTE + sec + (msec / 1000);
	var now_time = hour + ":" + min + ":" + sec; 
	var year_time = getDayDate(now_seconds);
	var str = year_time + " (" + now_time + ")";
	document.getElementById("view_time").innerHTML = str; 
}

setInterval('viewer()', 100);
