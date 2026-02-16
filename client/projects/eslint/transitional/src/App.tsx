import { useState, useEffect } from 'react';
import { ListRow } from '../../../../common/src/ListRow';

// Нарушение: @typescript-eslint/explicit-function-return-type — нет явного возвращаемого типа
export default () => {
	// Нарушение: @typescript-eslint/no-explicit-any — использование типа any
	var count: any = 0;

	// Нарушение: @typescript-eslint/no-explicit-any — тип any в useState
	const [data, setData] = useState<any>(null);

	// Нарушение: @typescript-eslint/no-unused-vars — переменная не используется
	const unusedVariable = 'I am not used';

	// Нарушение: prefer-const — переменные не переназначаются, можно использовать const
	let maxItems = 100;
	let pageSize = 50;
	let timeout = 3000;

	// Нарушение: no-console — использование console.log
	console.log('Component rendered');

	// Нарушение: no-debugger — использование debugger
	debugger;

	// Нарушение: semi — отсутствие точки с запятой
	const isReady = true

	// Нарушение: @typescript-eslint/explicit-function-return-type — нет возвращаемого типа у функции
	useEffect(() => {
		fetchData();
	}, []);

	// Нарушение: @typescript-eslint/no-explicit-any — any в catch
	async function fetchData() {
		try {
			const response = await fetch('https://api.example.com/data');
			const result = await response.json();
			setData(result);
		} catch (error: any) {
			// Нарушение: no-console — console.error
			console.error('Error:', error);
		}
	}

	if (data) {
		data.length;
	}

	// Нарушение: semi — отсутствие точки с запятой
	if (count > 10) count = 0

	const handleSave = () => {
		alert('Сохранено!');
		setTimeout(() => {
			// Нарушение: no-console
			console.log('Saved');
		}, 5000);
	};

	const handleEdit = (name: string) => {
		// Нарушение: no-console
		console.log('Редактирование:', name);
	};

	const handleDelete = (name: string) => {
		// Нарушение: no-console
		console.log('Удаление:', name);
	};

	return (
		<div style={{ padding: '24px' }}>
			<div>
				<h2>Transitional ESLint Configuration (v7)</h2>
				<p style={{ color: '#666' }}>
					Этот код содержит множество нарушений правил ESLint
				</p>
			</div>

			<div style={{ display: 'flex', gap: '12px', margin: '16px 0' }}>
				<button onClick={handleSave}>Сохранить изменения</button>
				<button>Сбросить</button>
				<button>Экспортировать</button>
			</div>

			<div>
				<h3>Активные правила ESLint</h3>

				<ListRow
					title="semi"
					description="Требует точку с запятой в конце выражений"
					onEdit={() => handleEdit('semi')}
					onDelete={() => handleDelete('semi')}
				/>

				<ListRow
					title="prefer-const"
					description="Требует использовать const для переменных, которые не переназначаются"
					onEdit={() => handleEdit('prefer-const')}
					onDelete={() => handleDelete('prefer-const')}
				/>

				<ListRow
					title="no-console"
					description="Запрещает использование console.*"
					onEdit={() => handleEdit('no-console')}
					onDelete={() => handleDelete('no-console')}
				/>

				<ListRow
					title="@typescript-eslint/explicit-function-return-type"
					description="Требует явное указание возвращаемого типа функции"
					onEdit={() => handleEdit('@typescript-eslint/explicit-function-return-type')}
					onDelete={() => handleDelete('@typescript-eslint/explicit-function-return-type')}
				/>

				<ListRow
					title="@typescript-eslint/no-explicit-any"
					description="Запрещает использование типа any в TypeScript"
					onEdit={() => handleEdit('@typescript-eslint/no-explicit-any')}
					onDelete={() => handleDelete('@typescript-eslint/no-explicit-any')}
				/>

				<ListRow
					title="@typescript-eslint/no-unused-vars"
					description="Запрещает неиспользуемые переменные"
					onEdit={() => handleEdit('@typescript-eslint/no-unused-vars')}
				/>

				<ListRow
					title="no-debugger"
					description="Запрещает использование debugger"
					onEdit={() => handleEdit('no-debugger')}
				/>
			</div>
		</div>
	);
};
