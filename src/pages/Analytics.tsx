import React from 'react';
import { motion } from 'motion/react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell, AreaChart, Area
} from 'recharts';
import { 
  Users, BookOpen, TrendingUp, Clock, 
  ArrowUpRight, ArrowDownRight, Activity, Zap 
} from 'lucide-react';

const engagementData = [
  { name: 'Mon', users: 400, sessions: 240 },
  { name: 'Tue', users: 300, sessions: 139 },
  { name: 'Wed', users: 200, sessions: 980 },
  { name: 'Thu', users: 278, sessions: 390 },
  { name: 'Fri', users: 189, sessions: 480 },
  { name: 'Sat', users: 239, sessions: 380 },
  { name: 'Sun', users: 349, sessions: 430 },
];

const completionData = [
  { name: 'Negotiation', rate: 85 },
  { name: 'Collaboration', rate: 92 },
  { name: 'Client Handling', rate: 78 },
  { name: 'Professionalism', rate: 95 },
  { name: 'Leadership', rate: 88 },
];

const performanceData = [
  { time: '00:00', load: 20, response: 120 },
  { time: '04:00', load: 15, response: 110 },
  { time: '08:00', load: 45, response: 150 },
  { time: '12:00', load: 80, response: 210 },
  { time: '16:00', load: 65, response: 180 },
  { time: '20:00', load: 40, response: 140 },
];

const COLORS = ['#881337', '#eab308', '#022c22', '#1e1b4b', '#451a03'];

const Analytics = () => {
  return (
    <div className="bg-[#0f172a] min-h-screen p-6 md:p-12 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Platform Analytics</h1>
            <p className="text-slate-400">Real-time performance and engagement metrics</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-slate-800/50 px-4 py-2 rounded-xl border border-white/5 flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Live Updates</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Active Users', value: '1,284', change: '+12.5%', icon: Users, color: 'text-blue-400' },
            { label: 'Completion Rate', value: '88.4%', change: '+4.2%', icon: BookOpen, color: 'text-green-400' },
            { label: 'Avg. Session', value: '24m 12s', change: '-2.1%', icon: Clock, color: 'text-yellow-400' },
            { label: 'Engagement', value: '92%', change: '+8.4%', icon: TrendingUp, color: 'text-rose-400' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-800/50 p-6 rounded-3xl border border-white/5 backdrop-blur-xl"
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-2xl bg-white/5 ${stat.color}`}>
                  <stat.icon size={24} />
                </div>
                <div className={`flex items-center text-xs font-bold ${stat.change.startsWith('+') ? 'text-green-400' : 'text-rose-400'}`}>
                  {stat.change}
                  {stat.change.startsWith('+') ? <ArrowUpRight size={14} className="ml-1" /> : <ArrowDownRight size={14} className="ml-1" />}
                </div>
              </div>
              <p className="text-slate-400 text-sm mb-1">{stat.label}</p>
              <h3 className="text-3xl font-bold">{stat.value}</h3>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* User Engagement Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-slate-800/50 p-8 rounded-[2.5rem] border border-white/5 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold">User Engagement</h3>
              <Activity size={20} className="text-slate-500" />
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={engagementData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                  <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Legend />
                  <Bar dataKey="users" fill="#881337" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="sessions" fill="#eab308" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Training Completion Rates */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-slate-800/50 p-8 rounded-[2.5rem] border border-white/5 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold">Completion Rates by Module</h3>
              <Zap size={20} className="text-slate-500" />
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={completionData}>
                  <defs>
                    <linearGradient id="colorRate" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#eab308" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#eab308" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                  <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  />
                  <Area type="monotone" dataKey="rate" stroke="#eab308" fillOpacity={1} fill="url(#colorRate)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Platform Performance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-800/50 p-8 rounded-[2.5rem] border border-white/5 backdrop-blur-xl"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold">Platform Performance (Response Time vs Load)</h3>
            <Activity size={20} className="text-slate-500" />
          </div>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="time" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                />
                <Legend />
                <Line type="monotone" dataKey="load" stroke="#881337" strokeWidth={3} dot={{ fill: '#881337', r: 4 }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="response" stroke="#eab308" strokeWidth={3} dot={{ fill: '#eab308', r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Analytics;
