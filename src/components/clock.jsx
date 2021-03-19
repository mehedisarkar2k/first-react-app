import React from 'react';
import Button from './Button';

class Clock extends React.Component {
    state = { date: new Date(), locale: 'bn-BD' };

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    handleClick = (locale) => {
        // e.preventDefault(); //eivabe default behave stop korte hoyu.
        this.setState({
            locale,
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
                <Button change={this.handleClick.bind(this, 'en-US')}>Click Here</Button>
            </div>
        );
    }
}

export default Clock;
