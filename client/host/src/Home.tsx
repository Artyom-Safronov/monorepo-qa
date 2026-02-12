import { Box, Grid, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router';

export type HomeState = {};

const ESLINT_PROJECT_DATA: ESLintProjectData[] = [
  {name: "Modern", link: "modern"},
  {name: "Legacy", link: "legacy"},
  {name: "Transitional", link: "transitional"},
]

export const Home = () => {


	return (
		<>
			<Typography variant="h2">Проекты ESLint</Typography>
			<Grid mt={4} spacing={2} container>
				{ESLINT_PROJECT_DATA.map(data => {
          return (
            <Grid size={{ sm: 6, md: 6 }}>
              <ESLintProjectLink {...data} />
            </Grid>
          )
        })}
			</Grid>
		</>
	);
};

type ESLintProjectData = {
  name: string;
  link: string;
}

const ESLintProjectLink = (projectData: ESLintProjectData) => {
  const navigate = useNavigate();

  const handleClick = () => {
      navigate(`/projects/eslint/${projectData.link}`)
  }

  return (
    <Box onClick={handleClick} sx={{cursor: "pointer"}}>
      <Paper variant="elevation" elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h6">{projectData.name}</Typography>
      </Paper>
    </Box>
  )
}
