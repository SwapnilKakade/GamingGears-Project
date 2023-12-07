import React, { useEffect, useState } from 'react';
import ExpertService from '../../service/ExpertService';
import { Link } from 'react-router-dom';

const Assembly = (props) => {
    const [searcharr, setSearcharr] = useState([]);

    useEffect(() => {
        fetchAssemblyData();
    }, []);

    const fetchAssemblyData = () => {
        ExpertService.getAssemblyList(props.expid)
            .then((response) => {
                setSearcharr([...response.data]);
            })
            .catch();
    };

    return (
        <div className="container">
            <div className="row">
                {searcharr.map((item, index) => (
                    <div className="col-md-6" key={index}>
                        <table
                            className="table table-hover"
                            style={{
                                backgroundColor: '#f1f1f1',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
                            }}
                        >
                            <thead>
                                <tr>
                                    <th scope="col" colSpan="4" style={{ fontSize: '1.3rem', color: 'blue' }}>
                                        PC Under &#8377;{' '}
                                        {item.cpu.price +
                                            item.cpucooler.price +
                                            item.gpu.price +
                                            item.motherboard.price +
                                            item.mouse.price +
                                            item.processor.price +
                                            item.ram.price +
                                            item.ssd.price}
                                    </th>
                                </tr>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>
                                        <Link to={`/products/${item.cpu.proid}`} className="text-reset" style={{ textDecoration: 'none' }}>
                                            <img
                                                src={item.cpu.url1}
                                                className="w-100"
                                                alt={item.ram.url1}
                                                style={{ height: 30, objectFit: 'contain' }}
                                            />
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to={`/products/${item.cpu.proid}`} className="text-reset" style={{ textDecoration: 'none' }}>
                                            {item.cpu.proname}
                                        </Link>
                                    </td>
                                    <td>&#8377; {item.cpu.price}</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>
                                        <Link
                                            to={`/products/${item.cpucooler.proid}`}
                                            className="text-reset"
                                            style={{ textDecoration: 'none' }}
                                        >
                                            <img
                                                src={item.cpucooler.url1}
                                                className="w-100"
                                                alt={item.cpu.url1}
                                                style={{ height: 35, objectFit: 'contain' }}
                                            />
                                        </Link>
                                    </td>
                                    <td>
                                        <Link
                                            to={`/products/${item.cpucooler.proid}`}
                                            className="text-reset"
                                            style={{ textDecoration: 'none' }}
                                        >
                                            {item.cpucooler.proname}
                                        </Link>
                                    </td>
                                    <td>&#8377; {item.cpucooler.price}</td>
                                </tr>


                                <tr>
                                    <th scope="row">3</th>
                                    <td>
                                        <Link to={`/products/${item.gpu.proid}`} className="text-reset" style={{ textDecoration: 'none' }}>
                                            <img src={item.gpu.url1} className="w-100" alt={item.cpucooler.url1} style={{ height: 35, objectFit: 'contain' }} />
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to={`/products/${item.gpu.proid}`} className="text-reset" style={{ textDecoration: 'none' }}>
                                            {item.gpu.proname}
                                        </Link>
                                    </td>
                                    <td>&#8377; {item.gpu.price}</td>

                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>
                                        <Link to={`/products/${item.motherboard.proid}`} className="text-reset" style={{ textDecoration: 'none' }}>
                                            <img src={item.motherboard.url1} className="w-100" alt={item.gpu.url1} style={{ height: 35, objectFit: 'contain' }} />
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to={`/products/${item.motherboard.proid}`} className="text-reset" style={{ textDecoration: 'none' }}>
                                            {item.motherboard.proname}
                                        </Link>
                                    </td>
                                    <td>&#8377; {item.motherboard.price}</td>

                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>
                                        <Link to={`/products/${item.mouse.proid}`} className="text-reset" style={{ textDecoration: 'none' }}>
                                            <img src={item.mouse.url1} className="w-100" alt={item.gpu.url1} style={{ height: 35, objectFit: 'contain' }} />
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to={`/products/${item.mouse.proid}`} className="text-reset" style={{ textDecoration: 'none' }}>
                                            {item.mouse.proname}
                                        </Link>
                                    </td>
                                    <td>&#8377; {item.mouse.price}</td>

                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td>
                                        <Link to={`/products/${item.processor.proid}`} className="text-reset" style={{ textDecoration: 'none' }}>
                                            <img src={item.processor.url1} className="w-100" alt={item.processor.url1} style={{ height: 35, objectFit: 'contain' }} />
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to={`/products/${item.processor.proid}`} className="text-reset" style={{ textDecoration: 'none' }}>
                                            {item.processor.proname}
                                        </Link>
                                    </td>
                                    <td>&#8377; {item.processor.price}</td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>
                                        <Link to={`/products/${item.ram.proid}`} className="text-reset" style={{ textDecoration: 'none' }}>
                                            <img src={item.ram.url1} className="w-100" alt={item.ram.url1} style={{ height: 35, objectFit: 'contain' }} />
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to={`/products/${item.ram.proid}`} className="text-reset" style={{ textDecoration: 'none' }}>
                                            {item.ram.proname}
                                        </Link>
                                    </td>
                                    <td>&#8377; {item.ram.price}</td>
                                </tr>
                                <tr>
                                    <th scope="row">8</th>
                                    <td>
                                        <Link to={`/products/${item.ssd.proid}`} className="text-reset" style={{ textDecoration: 'none' }}>
                                            <img src={item.ssd.url1} className="w-100" alt={item.ssd.url1} style={{ height: 35, objectFit: 'contain' }} />
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to={`/products/${item.ssd.proid}`} className="text-reset" style={{ textDecoration: 'none' }}>
                                            {item.ssd.proname}
                                        </Link>
                                    </td>
                                    <td>&#8377; {item.ssd.price}</td>
                                </tr>


                                {/* <tr>
                                    <th scope="row"></th>
                                    <td></td>
                                    <td>
                                        <h5>Total Price</h5>
                                    </td>
                                    {/* <td>
                                        &#8377;{' '}
                                        {item.cpu.price +
                                            item.cpucooler.price +
                                            item.gpu.price +
                                            item.motherboard.price +
                                            item.mouse.price +
                                            item.processor.price +
                                            item.ram.price +
                                            item.ssd.price}
                                    </td> 
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row"></th>
                                    <td></td>
                                    <td>
                                        <h3></h3>
                                    </td>
                                    <td></td>
                                    {/* <td> <button className="btn btn-primary">Buy Now</button></td> 
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Assembly;
