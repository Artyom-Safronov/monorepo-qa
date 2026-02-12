import { Paper, Stack, Typography, IconButton, Box } from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';
import { FC, ReactNode } from 'react';

export type ListRowProps = {
	title: string;
	description?: string;
	rightContent?: ReactNode;
	onEdit?: () => void;
	onDelete?: () => void;
	elevation?: number;
}

export const ListRow: FC<ListRowProps> = ({ title, description, rightContent, onEdit, onDelete, elevation = 2 }) => {
	return (
		<Paper
			elevation={elevation}
			sx={{
				p: 2,
				mb: 2,
				transition: 'all 0.2s ease-in-out',
				'&:hover': {
					elevation: 4,
					transform: 'translateY(-2px)',
				},
			}}
		>
			<Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
				<Box sx={{ flex: 1 }}>
					<Typography variant="h6" component="h3" gutterBottom={!!description}>
						{title}
					</Typography>
					{description && (
						<Typography variant="body2" color="text.secondary">
							{description}
						</Typography>
					)}
				</Box>

				{rightContent && <Box>{rightContent}</Box>}

				<Stack direction="row" spacing={1}>
					{onEdit && (
						<IconButton color="primary" onClick={onEdit} aria-label="Редактировать">
							<EditIcon />
						</IconButton>
					)}
					{onDelete && (
						<IconButton color="error" onClick={onDelete} aria-label="Удалить">
							<DeleteIcon />
						</IconButton>
					)}
				</Stack>
			</Stack>
		</Paper>
	);
};
