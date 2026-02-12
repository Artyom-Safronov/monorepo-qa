import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import { FC } from 'react';

export interface CustomButtonProps extends MuiButtonProps {
	loading?: boolean;
}

export const CustomButton: FC<CustomButtonProps> = ({ loading, disabled, children, ...props }) => {
	return (
		<MuiButton
			{...props}
			disabled={disabled || loading}
			sx={{
				minWidth: 120,
				...props.sx,
			}}
		>
			{loading ? 'Загрузка...' : children}
		</MuiButton>
	);
};
