import { Component } from "react";

class ClassBasedComponent extends Component {

    // state
    state = {
        showText: false,
        changeColor: false
    }

    handleClick = () => {
        console.log('button clicked');
        // this is not recommened - điều này không được khuyến khích
        // this.state.showText = !this.state.showText;

        const { showText, changeColor } = this.state;

        this.setState({
            // showText: !this.state.showText
            showText: !showText, // do ta đã để const { showText } = this.state bên trên nên không cần phải viết như bên trên
            changeColor: !changeColor
        })
    };

    // Cách bên dưới cũng được nhưng sẽ phức tạp
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         showText: false;
    //     }
    // }

    render() {

        console.log(this.state); // { showText : false }

        const { showText, changeColor } = this.state;
    
        return (
            <div>
                {
                    showText ? (
                        <h4 style={{ color: changeColor ? 'red' : 'black'}}>Class based component</h4>
                    ) : null
                }
                <button onClick={this.handleClick}>Toggle Text</button>
            </div>
        )
    }
}

export default ClassBasedComponent;