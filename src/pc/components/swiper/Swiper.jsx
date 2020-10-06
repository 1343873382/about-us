import React from 'react';

import './swiper.scss';

class Swiper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dir: [
                "normal1",
                "start",
                "middle",
                "end",
                "normal2",
            ]
        }
    }

    slide (name, key) {  // 图片点击逻辑
        // 记录当前节点
        this.setState({ current: key });
        // 数组操作方法
        this.ArrReSort(name);
    }
    ArrReSort (name) { // 数组处理
        let dirCopy = this.state.dir;
        if (name === 'end') {  // 点击左侧那张
            const pop = dirCopy.pop(); // 从数组尾部弹出一个元素
            dirCopy.unshift(pop); // 尾部元素添加到数组头部
        } else if (name === 'start') { // 点击右侧那张
            const shift = dirCopy.shift(); // 从数组头部弹出一个元素
            dirCopy.push(shift);  // 添加到数组尾部
        } else if (name === 'normal1') {
            this.ArrReSort('start')
            this.ArrReSort('start')
        } else if (name === 'normal2') {
            this.ArrReSort('end')
            this.ArrReSort('end')
        }
        this.setState({ dir: dirCopy }); // 保存重新排列的数组 并触发render
    }
    ChangeAuto (method) {
        console.log(method);
        if (method === "enter") {
            clearInterval(this.timerID)
        } else {
            clearInterval(this.timerID)
            this.timerID = setInterval(() => this.ArrReSort('end'), 3000);
        }
    }
    componentDidMount () {
        this.timerID = setInterval(() => this.ArrReSort('end'), 3000);
    }
    render () {
        const { dir } = this.state
        const detail = this.props.content
        console.log(this.props.content);
        return (
            <div className="root">
                <div className="slideBox" onMouseMove={() => { this.ChangeAuto("enter") }} onMouseOut={() => { this.ChangeAuto("out") }}>
                    {
                        dir.map((item, key) => {
                            return (
                                <div key={key} className={`slide ${item}`} onClick={() => this.slide(item, key)}>
                                    <img src={detail[key].picture} alt="" />
                                    <div className="info">
                                        <p className="info-title">{detail[key].title}</p>
                                        <p className="info-subtitle">{detail[key].subtitle}</p>
                                    </div>
                                    <div className="introduce">{detail[key].intro}</div>

                                    {/* <div className="masking" ></div> */}
                                </div>
                            )
                        })
                    }
                </div>
            </div >
        )
    }
}

export default Swiper;
