import { Box, Typography, Stack, TextField } from '@mui/material';
import { CustomButton } from '../../../../common/src/Button';
import { ListRow } from '../../../../common/src/ListRow';

export default () => {
	const config = {
		tabWidth: 2,
		semi: true,
		bracketSpacing: true,
	};

	const double = (x) => x * 2;

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
						Legacy Prettier (v2)
					</Typography>
					<Typography variant="body1" color="text.secondary" gutterBottom>
						Этот код содержит нарушения правил форматирования Prettier v2
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
						Форматировать
					</CustomButton>
				</Stack>

				<Box>
					<TextField fullWidth label="Поиск" placeholder="Введите название опции..." sx={{ mb: 2 }} />
				</Box>

				<Box>
					<Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
						Опции Prettier v2
					</Typography>

					<ListRow
						title="singleQuote"
						description="Использовать одинарные кавычки вместо двойных"
						onEdit={() => handleEdit('singleQuote')}
						onDelete={() => handleDelete('singleQuote')}
					/>

					<ListRow
						title="trailingComma"
						description='В v2 значение по умолчанию — "es5": запятые в объектах и массивах, но не в параметрах функций'
						onEdit={() => handleEdit('trailingComma')}
						onDelete={() => handleDelete('trailingComma')}
					/>

					<ListRow
						title="arrowParens"
						description='Скобки вокруг единственного аргумента стрелочной функции, в v2 значение по умолчанию изменено на "always"'
						onEdit={() => handleEdit('arrowParens')}
						onDelete={() => handleDelete('arrowParens')}
					/>

					<ListRow
						title="bracketSpacing"
						description="Пробелы внутри фигурных скобок объектов: { foo: bar }"
						onEdit={() => handleEdit('bracketSpacing')}
					/>

					<ListRow
						title="endOfLine"
						description='В v2 добавлена опция endOfLine со значением по умолчанию "lf"'
						onEdit={() => handleEdit('endOfLine')}
					/>
				</Box>
			</Stack>
		</Box>
	);
};
