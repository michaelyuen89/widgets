import React from 'react';
import Header from './header';


class Tabs extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            position: 0
        };

        this.selectTab = this.selectTab.bind(this);
    }

    //    [_[_]_]
    //    [+[_]:]

    selectTab(idx) {
        this.setState(
            {position: idx}
        );
    }


    render() {

        const tab = this.props.tabs[this.state.position];
        const that = this;
        const headerLis = this.props.tabs.map((tab, idx) => {
            return <Header key={tab.name} idx={idx} name={tab.name} selected={that.state.position === idx} selectTab={this.selectTab}/>;
        //    return <li> { tab.title } </li>;
        });

        return (
            <>
            <div className="boxy" >
                <h1> Cross GamE RULES </h1>
                <ul>
                    { headerLis } 
                </ul>
                    <article width="100%">
                        <img src={tab.content} alt={tab.name} width="100%" height="auto"/>
                    </article>
            </div>

            <div className="lies"></div>
            </>
        );
    }
}

export default Tabs;