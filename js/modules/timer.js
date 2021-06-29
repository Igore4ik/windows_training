const timer = (selector, deadLine) => {
    //если число меньше 9 то добавляем 0 перед ним. Это число будет отображаться на странице
    const addZero = (num) => {
        if(num <= 9){
            return '0' + num;
        }else{
            return num;
        }
    };
    //получаем секунды, минуты, часы, дни оставшегося времени до окончания дедлайна
    const getEndOfTime = (endTime) => {
        let t = Date.parse(endTime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)) % 24),
            days = Math.floor((t/(1000*60*60*24)));
        return {
            total: t,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        }
    };
    //ф-я которая обновляет getEndOfTime по таймеру и вставляет в DOM
    const setTimer = () => {
        const timerDOM = document.querySelector(selector),
              daysDOM = timerDOM.querySelector('#days'),
              hoursDOM = timerDOM.querySelector('#hours'),
              minutesDOM = timerDOM.querySelector('#minutes'),
              secondsDOM = timerDOM.querySelector('#seconds'),
              timerInterval = setInterval(updateTimer,1000);
        updateTimer();
        //ф-я которая обновляет таймер
        function updateTimer() {
            const t = getEndOfTime(deadLine);
            if(t.total <= 0){
                clearInterval(timerInterval);
                daysDOM.textContent = '00';
                hoursDOM.textContent = '00';
                minutesDOM.textContent = '00';
                secondsDOM.textContent = '00';
            }else{
                daysDOM.textContent = addZero(t.days);
                hoursDOM.textContent = addZero(t.hours);
                minutesDOM.textContent = addZero(t.minutes);
                secondsDOM.textContent = addZero(t.seconds);
            }
        }
    };
    setTimer();
};
export default timer;