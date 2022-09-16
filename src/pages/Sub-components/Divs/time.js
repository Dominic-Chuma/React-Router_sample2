import { useEffect } from 'react';
let Timer = () => {
    var time1 = new Date();
    var same ;
    useEffect(() => {
        const interval = setInterval(() => {
        //   console.log('This will run every second!');
        console.log(String(time1.getFullYear() + "-" + (time1.getMonth() + 1) + "-" + time1.getDate() + " - " + time1.getHours() + ":" + time1.getMinutes() + ":" + time1.getSeconds()))
    }, 1000);
        return () => clearInterval(interval);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [same]);
}

export default Timer;

