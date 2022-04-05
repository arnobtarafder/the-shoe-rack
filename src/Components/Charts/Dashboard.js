import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart, Pie, PieChart, Scatter, Tooltip, XAxis, YAxis } from 'recharts';
import useData from '../Hooks/useData';

const Dashboard = () => {
    const [data, setdata] = useData();
    return (
       <section className=''>
           <h3 className='text-momo text-center underline text-3xl mt-12 mb-16'>Monthly Report Analysis Charts</h3>
            <div className='grid grid-cols-2 mx-auto'>
            
            <div className='mx-auto'>
                <h4 className='text-center'>Investment vs Revenue</h4>
                <ComposedChart
                    width={450}
                    height={322}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="investment" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="sell" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="month" stroke="#ff7300" />
                    <Scatter dataKey="revenue" fill="red" />
                </ComposedChart>
            </div>

            <div className='mx-auto'>
            <h4 className='text-center'>Investment vs Revenue</h4>

            <AreaChart
                    width={400}
                    height={300}
                    data={data}
                    margin={{top: 5, right: 30, left: 15, bottom: 5}}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="investment"
                        stackId="1"
                        stroke="#8884d8"
                        fill="#8884d8"
                    />
                    <Area
                        type="monotone"
                        dataKey="revenue"
                        stackId="1"
                        stroke="#82ca9d"
                        fill="#82ca9d"
                    />
                    </AreaChart>
            </div>

            <div className="mx-auto mt-32">
            <h4 className='text-center'>Investment vs Revenue</h4>

            <BarChart 
            width={450} 
            height={300} 
            data={data}
            margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
            }}>
            <CartesianGrid 
            strokeDasharray="3 3"
            width={300}
            height={300} />
            <XAxis dataKey="month" />
            <YAxis dataKey="investment" />
            <Tooltip />
            <Legend />
            <Bar dataKey="investment" fill="#82ca9d" />
            <Bar dataKey="revenue" fill="#8884d8" />
            </BarChart>
            </div>

            <div className="mx-auto mt-32">
            <h4 className='text-center'>Revenue vs Investment</h4>

             <PieChart width={400} height={300}
                margin={{ top: 5, right: 30, left: 5, bottom: 5 }}>
                    <Pie data={data} dataKey="revenue" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                    <Pie data={data} dataKey="investment" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                    <Tooltip />
                </PieChart>
            </div>

            <div className="mx-auto mt-32">
            <h4 className='text-center'>Month Wise Sale</h4>

            <LineChart width={400} height={330} data={data}
                        margin={{ top: 5, right: 30, left: -15, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                    </LineChart>
            </div>

        </div>
            
       </section>
    );
};
export default Dashboard;