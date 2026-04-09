import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from 'recharts';

// Bar-er color customize korar jonno (optional)
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

// Custom Triangle Shape logic
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const Recharts = ({ data }) => {
   
    if (!data || data.length === 0) return <div className="text-center">No data available</div>;

    return (
        <div className='w-ful  p-8 rounded-2xl shadow-sm bg-gray-200' style={{ height: '450px' }}>

            
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    
                    {/* X-Axis e ekhon yearOfPublishing dekhabe */}
                    <XAxis 
                        dataKey="yearOfPublishing" 
                        label={{ position: 'insideBottom', offset: -10 }} 
                    />
                    
                    <YAxis label={{ angle: -90, position: 'insideLeft' }} />
                    
                    <Bar 
                        dataKey="totalPages" 
                        fill="#8884d8" 
                        shape={<TriangleBar />} 
                        label={{ position: 'top' }}
                    >
                        {/* Protita bar-e alada color set korar jonno */}
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Recharts;