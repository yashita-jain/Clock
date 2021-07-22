let mydate;
let date;
let time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    mydate = new Date();
    function seconds_with_leading_zeros(mydate) {
        return (mydate.getSeconds() < 10 ? '0' : '') + mydate.getSeconds();
    }

    function minutes_with_leading_zeros(mydate) {
        return (mydate.getMinutes() < 10 ? '0' : '') + mydate.getMinutes();
    }
    date = mydate.toLocaleDateString(undefined, options);
    //   time=mydate.getHours()+":"+mydate.getMinutes()+":"+mydate.getSeconds();
    time = mydate.getHours() + ":" + minutes_with_leading_zeros(mydate) + ":" + seconds_with_leading_zeros(mydate);
    document.getElementById('time').innerHTML = time + "<br> On " + date + "<br><br>";

}, 1000);