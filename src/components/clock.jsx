import React from 'react';

class Clock extends React.Component {
    state = { date: new Date(), locale: 'bn-BD' };

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    handleClick = () => {
        // e.preventDefault(); //eivabe default behave stop korte hoyu.
        this.setState({
            locale: 'en-US',
        });
    };

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        const { date, locale } = this.state;
        // const { locale } = this.props;
        return (
            <div>
                <h1 className="header">
                    <span className="text">It is {date.toLocaleTimeString(locale)}</span>
                </h1>
                <button type="button" onClick={this.handleClick}>
                    Click Here
                </button>
            </div>
        );
    }
}

export default Clock;
