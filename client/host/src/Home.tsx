import { Box, Chip, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import { ListRow } from '../../common/src/ListRow';
import { CustomButton } from '../../common/src/Button';
import Grid from '@mui/material/Grid2';

export type HomeState = {};

const ESLINT_PROJECT_DATA: ESLintProjectData[] = [
	{ name: 'Modern', link: 'modern', description: 'Современный ESLint конфиг с последними правилами' },
	{ name: 'Legacy', link: 'legacy', description: 'Устаревший конфиг для поддержки старых проектов' },
	{ name: 'Transitional', link: 'transitional', description: 'Промежуточный конфиг для миграции' },
	{ name: 'Alex Karelin', link: 'alex-karelin', description: 'Legacy-проект: React 17 + Redux 3.7 + airbnb ESLint конфиг' },
];

export const Home = () => {
	const navigate = useNavigate();

	return (
		<>
			<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
				<Typography variant="h2">Проекты ESLint</Typography>
				<CustomButton variant="contained" color="primary" onClick={() => alert('Создать новый проект')}>
					Добавить проект
				</CustomButton>
			</Box>

			<Grid container spacing={2}>
				{ESLINT_PROJECT_DATA.map((data) => {
					return (
						<Grid size={{ xs: 12 }} key={data.link}>
							<ListRow
								title={data.name}
								description={data.description}
								rightContent={<Chip label={data.link === 'modern' ? 'Рекомендуется' : 'Доступен'} color={data.link === 'modern' ? 'success' : 'default'} />}
								onEdit={() => navigate(`/projects/eslint/${data.link}`)}
								onDelete={() => alert(`Удалить проект ${data.name}?`)}
							/>
						</Grid>
					);
				})}
			</Grid>
		</>
	);
};

type ESLintProjectData = {
	name: string;
	link: string;
	description: string;
}

