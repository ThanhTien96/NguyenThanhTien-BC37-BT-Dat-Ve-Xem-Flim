import React, { Component } from 'react';
import { connect } from 'react-redux'
import Chair from './Chair';
import './Chair.css'

class ChairList extends Component {


    render() {
        const { chairList } = this.props
        return (
            <div className='d-flex flex-column gap-3'>
                {chairList.map(item => {
                    return (
                        <div key={item.hang} className='d-flex justify-content-center align-items-center'>
                            <div className='me-2 fw-bold fs-3' style={{width: '30px'}}>
                                {item.hang}
                            </div>

                            <div>
                                {item.danhSachGhe.map(ghe => {
                                    return <Chair key={ghe.soGhe} item={ghe} />
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        chairList: state.chair.chairList
    }
};

export default connect(mapStateToProps) (ChairList);