import { Box, Typography, Stack, TextField } from '@mui/material';
import { CustomButton } from '../../../../common/src/Button';
import { ListRow } from '../../../../common/src/ListRow';
import { useState, useEffect } from 'react';

export default () => {
	// Нарушение: no-var — использование var вместо let/const
	// Нарушение: @typescript-eslint/no-explicit-any — использование типа any
	var count: number = 'asd';

	// Нарушение: @typescript-eslint/no-explicit-any — тип any в useState
	const [data, setData] = useState<any>(null);

	// Нарушение: @typescript-eslint/no-unused-vars — переменная не используется
	const unusedVariable = 'I am not used';

	// Нарушение: @typescript-eslint/no-unused-vars — переменные не используются
	const maxItems = 100;
	const pageSize = 50;
	const timeout = 3000;

	console.log('Component rendered');

	// Нарушение: no-debugger — использование debugger
	debugger;

	// Нарушение: @typescript-eslint/no-unused-vars — переменная не используется
	const isEqual = count == 5;

	useEffect(() => {
		fetchData();
	}, []);

	async function fetchData() {
		try {
			const response = await fetch('https://api.example.com/data');
			const result = await response.json();
			setData(result);
		// Нарушение: @typescript-eslint/no-explicit-any — тип any в catch
		} catch (error: any) {
			console.error('Error:', error);
		}
	}

	if (data) {
		// Нарушение: @typescript-eslint/no-unused-expressions — выражение без присваивания или вызова
		data.length;
	}

	if (count > 10) count = 0;

	const handleSave = () => {
		alert('Сохранено!');
		setTimeout(() => {
			console.log('Saved');
		}, 5000);
	};

	const handleEdit = (name: string) => {
		console.log('Редактирование:', name);
	};

	const handleDelete = (name: string) => {
		console.log('Удаление:', name);
	};

	// Нарушение: react/react-in-jsx-scope — React не импортирован в scope (на каждом JSX-элементе)
	return (
		<Box sx={{ p: 3 }}>
			<Stack spacing={3}>
				<Box>
					<Typography variant="h3" gutterBottom>
						Modern ESLint Configuration
					</Typography>
					<Typography variant="body1" color="text.secondary" gutterBottom>
						Этот код содержит множество нарушений правил ESLint
					</Typography>
				</Box>

				<Stack direction="row" spacing={2}>
					<CustomButton variant="contained" color="primary" onClick={handleSave}>
						Сохранить изменения
					</CustomButton>
					<CustomButton variant="outlined" color="secondary">
						Сбросить
					</CustomButton>
					<CustomButton variant="text" loading={false}>
						Экспортировать
					</CustomButton>
				</Stack>

				<Box>
					<TextField
						fullWidth
						label="Поиск"
						placeholder="Введите название правила..."
						sx={{ mb: 2 }}
					/>
				</Box>

				<Box>
					<Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
						Активные правила ESLint
					</Typography>

					<ListRow
						title="no-var"
						description="Запрещает использование var, требует let или const"
						onEdit={() => handleEdit('no-var')}
						onDelete={() => handleDelete('no-var')}
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
						title="no-console"
						description="Предупреждает об использовании console.*"
						onEdit={() => handleEdit('no-console')}
					/>

					<ListRow
						title="prefer-const"
						description="Требует использовать const для переменных, которые не переназначаются"
						onEdit={() => handleEdit('prefer-const')}
					/>

					<ListRow
						title="eqeqeq"
						description="Требует использовать === и !== вместо == и !="
						onEdit={() => handleEdit('eqeqeq')}
					/>

					<ListRow
						title="no-magic-numbers"
						description="Запрещает magic numbers (числа без именованных констант)"
						onEdit={() => handleEdit('no-magic-numbers')}
					/>
				</Box>
			</Stack>
		</Box>
	);
};
