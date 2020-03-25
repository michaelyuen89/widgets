import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props); // key, name, selected, idx, selectTab (cb)
        this.selectTab = this.selectTab.bind(this);
    }

    selectTab() {
        // hey tab, you clicked on the header with the idx of this.props.idx
        this.props.selectTab(this.props.idx);
    }
    // Good to write now. Grumpily === Emily <== True story; Elijah, I swear to f*ing G*d
    render() {
        const bolded = this.props.selected ? "bolded" : "";
        return (
            <li onClick={this.selectTab} className={bolded}> { this.props.name } </li>
        )
    }
}


export default Header;