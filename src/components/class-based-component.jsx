import { Component } from "react";

class ClassBasedComponent extends Component {

    // state
    state = {
        showText: false,
        changeColor: false,
        count: 0,
        changeCountStyle: false
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

    handleCount = () => {
        this.setState({
            ...this.state,
            count: this.state.count + 1
        })
    }

    // componentDidMount()
    // componentDidUpdate()
    // componentWillUnmount()

    // Được gọi ngay sau khi một component được mount. Trạng thái cài đặt ở đây sẽ kích hoạt kết xuất lại.
    componentDidMount() {
        console.log('this is called first time on page load');

        this.setState({
            // showText: !this.state.showText
            showText: !this.state.showText,
            changeColor: !this.state.changeColor
        })
    }

    // Được gọi ngay sau khi cập nhật xảy ra. Không được gọi cho lần hiển thị đầu tiên.
    // Do ở trong componentDidMount đã làm thay đổi state cho nên componentDidUpdate sẽ được chạy ngay khi componentDidMount chạy xong
    // Nếu ta xóa componentDidMount ở trên thì componentDidUpdate sẽ không được gọi do không có hàm nào làm thay đổi state
    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps on component did update', prevProps); // {}
        console.log('prevState on component did update', prevState); // {showText: false, changeColor: false, count: 0, changeCountStyle: false}
        console.log("prevState and new State on component did update", prevState, this.state); // {showText: false, changeColor: false, count: 0, changeCountStyle: false} {showText: true, changeColor: true, count: 0, changeCountStyle: false}

        if(
            prevState && 
            prevState.count !== this.state.count && 
            this.state.count === 10 
        ) {
            this.setState({
                ...this.state,
                changeCountStyle: true
            })
        }
    }

    // Được gọi ngay trước khi một component bị hủy. 
    // Thực hiện bất kỳ hoạt động dọn dẹp cần thiết nào trong phương thức này, 
    // chẳng hạn như các yêu cầu mạng bị hủy hoặc dọn sạch mọi phần tử DOM được tạo trong thành componentDidMount.
    componentWillUnmount() {
        console.log("component is getting unmounted");
    }

    render() {

        // console.log(this.state); // {showText: false, changeColor: false}

        const { showText, changeColor, count, changeCountStyle } = this.state;
    
        return (
            <div>
                {
                    showText ? (
                        <h4 style={{ color: changeColor ? 'red' : 'black'}}>Class based component</h4>
                    ) : null
                }
                <button onClick={this.handleClick}>Toggle Text</button>
                <button onClick={this.handleCount}>Increse Count Value</button>
                <h3 style={{ color: changeCountStyle ? 'blue' : 'black', fontSize: changeCountStyle ? '30px' : '12px'}}>Count is {count}</h3>
            </div>
        )
    }
}

export default ClassBasedComponent;