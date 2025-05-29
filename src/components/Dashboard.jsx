import React, { useEffect, useState } from 'react'
import HeadAndDesc from './HeadAndDesc'
import { BarChart, LineChart, Line, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { salesMetrics } from '../utils/apiCalls/metrics';

export default function Dashboard() {

    const dashMeta = [
        { id: 1, icon: "pi pi-money-bill", bground: '#ffbc58', indicator: 'sales', figure: 6659, duration: 'this month' },
        { id: 2, icon: "pi pi-box", bground: '#13c9ca', indicator: 'orders', figure: 9856, duration: 'this month' },
        { id: 3, icon: "pi pi-envelope", bground: '#ec8951', indicator: 'messages', figure: 893, duration: 'this month' },
        { id: 4, icon: "pi pi-users", bground: '#a5a5a5', indicator: 'new Customers', figure: 5631, duration: 'this month' },
    ]

    const [salesData, setSalesData] = useState([])
    const [dateRange, setDateRange] = useState(7)


    const getSalesMetrics = async () => {

        try {
            const res = await salesMetrics({ range: dateRange })

            if (res) {
                setSalesData(res.data)
            }
        } catch (error) {
            console.error("Failed to fetch sales metrics:", error);
        }
    }

    useEffect(() => {
        getSalesMetrics()
    }, [dateRange])

    return (
        <div>
            {
                <HeadAndDesc head={"dashboard"} desc={"multikart admin panel"} />
            }
            <div className=' grid grid-cols-2 gap-5 my-5 '>
                {
                    dashMeta.map((dash, index) => {
                        return (
                            <div key={index}
                                className=' p-5 bg-white '>
                                <div className=' flex gap-3 '>
                                    <div className={`h-fit my-auto`}
                                        style={{ backgroundColor: dash.bground }}>
                                        <i className={`${dash.icon} text-3xl p-3 text-white`} ></i>
                                    </div>
                                    <div className=' capitalize '
                                        style={{ color: dash.bground }}>
                                        <h3>{dash.indicator}</h3>
                                        <p>${dash.figure} this month</p>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
            <div className=' w-full h-[50vh]'>
                <div className=' flex flex-col justify-center sm:flex-row sm:justify-between '>
                    <div className=' flex justify-center '>
                        <HeadAndDesc head={"daily total sales"}
                            desc=''
                            headFontSize='xl' />
                    </div>
                    <label htmlFor="" className=' flex flex-col '>
                        <p className=' capitalize text-center '>adjust date range</p>
                        <div className=' flex justify-center gap-1 '>
                            <input type="number"
                                value={dateRange}
                                onChange={e => setDateRange(e.target.value)}
                                className=' border px-1 w-[50px] ' />
                            <p>DAYS</p>
                        </div>
                    </label>
                </div>
                <ResponsiveContainer width={"100%"} height={"100%"}>
                    <BarChart
                        width={500}
                        height={300}
                        data={salesData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="total" fill="#a5a5a5" activeBar={<Rectangle fill="#ec8951" stroke="#ffffff" />} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className=' w-full h-[50vh] mt-[50px] '>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={salesData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
