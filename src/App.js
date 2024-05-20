import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				Chart:
				<ResponsiveContainer height={100} width={'100%'}>
					<BarChart
						data={[
							{ name: 'a', value: 10 },
							{ name: 'b', value: 20 },
						]}>
						<XAxis dataKey="name" />
						<YAxis dataKey="value" />
						<Bar dataKey="value" />
					</BarChart>
				</ResponsiveContainer>
			</header>
		</div>
	);
}

export default App;
