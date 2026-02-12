import { ArrowDropDown } from '@mui/icons-material';
import { Box, Button, Container, Grid, InputBase, Paper, Stack, Toolbar, Typography } from '@mui/material';
import AccountMenu from './AccountMenu';
import { Outlet } from 'react-router';

export const Layout = () => {
	return (
		<Container>
			<Stack
				direction="column"
				sx={(theme) => ({
					width: '100%',
					height: '100vh',
				})}
			>
				<Box
					sx={(theme) => ({
						display: 'flex',
						alignItems: 'center',
						minHeight: theme.spacing(10),
						background: '#fff',
						position: 'sticky',
						width: '100%',
						top: 0,
						left: 0,
						zIndex: 9,
					})}
				>
					<Toolbar sx={{ width: '100%' }}>
						<Stack direction={'row'} justifyContent={'space-between'} width={'100%'}>
							<Stack direction={'row'} spacing={2}>
								<img src="vite.svg" />
  							</Stack>
							<Stack direction={'row'}>
								<AccountMenu />
							</Stack>
						</Stack>
					</Toolbar>
				</Box>
				<Box
					sx={(theme) => ({
						flex: 1,
					})}
				>
					<Container fixed sx={(theme) => ({ height: '100%' })}>
						<Outlet />
					</Container>
				</Box>
				<Box
					sx={(theme) => ({
						py: 2,
						background: '#fff',
					})}
				>
					<Typography variant={'subtitle2'} textAlign={'center'}>
						Footer ©
					</Typography>
				</Box>
			</Stack>
		</Container>
	);
};
