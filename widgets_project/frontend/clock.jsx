import React from 'react';

class Clock extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            time: new Date()
        }
    }
    
    componentDidMount() {
        this.interval = setInterval(this.tick.bind(this), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    tick() {
        this.setState(
            {time: new Date()}
            );
        }
        
        
        render() {
    
            let hours = this.state.time.getHours();
            let minutes = this.state.time.getMinutes();
            let seconds = this.state.time.getSeconds();
            if (seconds < 10) {
                seconds = `0${seconds}`
            } else {
                seconds = seconds;            
            }
            if (minutes < 10) {
                minutes = `0${minutes}`
            } else {
                minutes = minutes;
            }

            let _m = ""
            if (hours > 12) {
                _m = "pm";    
            } else {
                _m = "am"
            }


            if (hours < 10) {
                hours = `0${hours}%12`
            } else {
                hours = hours%12;
            }
            return (
                <>  
                    <div className="box">
                        <h1>Clock</h1>
                        <div>
                            <p className="time">
                                Time: {hours}:{minutes}:{seconds} {_m}
                            </p>
                            <p className="date">
                                Date: {this.state.time.toDateString()}
                            </p>
                        </div>
                    </div>
                </>
        )

    }

    
}


export default Clock;