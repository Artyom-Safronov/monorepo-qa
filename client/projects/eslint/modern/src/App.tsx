import { Box, Typography, Stack } from '@mui/material';
import { CustomButton } from '../../../../common/src/Button';
import { ListRow } from '../../../../common/src/ListRow';

export default () => {
	const handleSave = () => {
		alert('Сохранено!');
	};

	const handleEdit = (name: string) => {
		console.log('Редактирование:', name);
	};

	const handleDelete = (name: string) => {
		console.log('Удаление:', name);
	};

	return (
		<Box sx={{ p: 3 }}>
			<Stack spacing={3}>
				<Box>
					<Typography variant="h3" gutterBottom>
						Modern ESLint Configuration
					</Typography>
					<Typography variant="body1" color="text.secondary" gutterBottom>
						Управление правилами ESLint для современных проектов
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
					<Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
						Активные правила ESLint
					</Typography>

					<ListRow
						title="no-unused-vars"
						description="Запрещает неиспользуемые переменные"
						onEdit={() => handleEdit('no-unused-vars')}
						onDelete={() => handleDelete('no-unused-vars')}
					/>

					<ListRow
						title="@typescript-eslint/no-explicit-any"
						description="Предупреждает об использовании типа any"
						onEdit={() => handleEdit('@typescript-eslint/no-explicit-any')}
						onDelete={() => handleDelete('@typescript-eslint/no-explicit-any')}
					/>

					<ListRow
						title="react-hooks/rules-of-hooks"
						description="Проверяет правила использования React Hooks"
						onEdit={() => handleEdit('react-hooks/rules-of-hooks')}
					/>
				</Box>
			</Stack>
		</Box>
	);
};
