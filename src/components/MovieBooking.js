import React, { Component } from 'react';
import banner from '../asset/banner.jpg'
import ChairList from './ChairList';
import './MovieBooking.css'
import Result from './Result';

class MovieBooking extends Component {
    render() {
        return (
            <div
                className='text-white py-5'
                style={{ background: `url(${banner})` }}
            >
                <div className='container'>
                    <h2 className='mb-5 text-center'>ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h2>
                    <div className="row">
                        <div className="col-8 p-2">
                            <div className="screen fs-5 text-center text-black">
                                <h5>screen</h5>
                            </div>

                            <ChairList />
                        </div>

                        <div className="col-4 p-4">
                            <h4 className='mb-5 pb-5'>Danh Sách Ghế Bạn Chọn</h4>

                            <Result />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default MovieBooking;