import React, { Component } from 'react';
import { connect } from 'react-redux'
import clxs from 'clsx'
class Chair extends Component {
    render() {
        const { item, chairSelectedList, handleChoose } = this.props
        return (
            <button 
            onClick={() => handleChoose(item)}
            disabled={item.daDat}
            className=
            {clxs('chair', 
            {
                booked: item.daDat,
                booking: chairSelectedList.find(e => e.soGhe === item.soGhe)
            }
            )}
            >
                {item.soGhe}
            </button>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        chairSelectedList: state.chair.chairSelectedList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChoose: (item) => {
            dispatch({
                type: 'CHOOSE_CHAIR',
                payload: item
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Chair);