'use client';

import { AccountCircle, MailOutline, Notifications } from '@mui/icons-material';
import {
	AppBar,
	Avatar,
	AvatarGroup,
	Button,
	Checkbox,
	Chip,
	Container,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	FormControl,
	Grid,
	IconButton,
	InputLabel,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	MenuItem,
	Paper,
	Radio,
	Select,
	Slider,
	Step,
	StepLabel,
	Stepper,
	Tab,
	Tabs,
	TextField,
	Toolbar,
	Typography,
} from '@mui/material';
import React, { useState } from 'react';

function MuiDemo() {
	const [openDialog, setOpenDialog] = useState<boolean>(false);
	const [activeStep, setActiveStep] = useState<number>(0);
	const [tabValue, setTabValue] = useState<number>(0);

	const handleDialogOpen = () => {
		setOpenDialog(true);
	};

	const handleDialogClose = () => {
		setOpenDialog(false);
	};

	const handleStepChange = (step: number) => {
		setActiveStep(step);
	};

	const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
		setTabValue(newValue);
	};

	return (
		<div>
			<AppBar position='static'>
				<Toolbar>
					<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
						MUI Component Demo
					</Typography>
					<IconButton color='inherit'>
						<MailOutline />
					</IconButton>
					<IconButton color='inherit'>
						<Notifications />
					</IconButton>
					<IconButton color='inherit'>
						<AccountCircle />
					</IconButton>
				</Toolbar>
			</AppBar>

			<Container sx={{ marginTop: 2 }}>
				<Grid container spacing={3}>
					<Grid item xs={12} md={6}>
						<Paper sx={{ padding: 2 }}>
							<Typography variant='h4' gutterBottom>
								Material-UI Components
							</Typography>
							<Button variant='contained' color='primary'>
								Primary Button
							</Button>
							<TextField label='Text Field' variant='outlined' fullWidth />
							<Checkbox defaultChecked /> Checkbox
							<Radio defaultChecked /> Radio
							<FormControl variant='outlined' fullWidth>
								<InputLabel>Select</InputLabel>
								<Select label='Select'>
									<MenuItem value={1}>Option 1</MenuItem>
									<MenuItem value={2}>Option 2</MenuItem>
									<MenuItem value={3}>Option 3</MenuItem>
								</Select>
							</FormControl>
							<Slider
								valueLabelDisplay='auto'
								aria-label='Slider'
								defaultValue={50}
							/>
						</Paper>
					</Grid>

					<Grid item xs={12} md={6}>
						<Paper sx={{ padding: 2 }}>
							<Typography variant='h4' gutterBottom>
								Advanced Components
							</Typography>

							<List>
								<ListItem>
									<ListItemAvatar>
										<Avatar>
											<AccountCircle />
										</Avatar>
									</ListItemAvatar>
									<ListItemText
										primary='List Item 1'
										secondary='Secondary text'
									/>
								</ListItem>
								<ListItem>
									<ListItemAvatar>
										<Avatar>
											<AccountCircle />
										</Avatar>
									</ListItemAvatar>
									<ListItemText
										primary='List Item 2'
										secondary='Secondary text'
									/>
								</ListItem>
							</List>

							<Chip label='Basic Chip' />
							<Chip label='Outlined Chip' variant='outlined' />
							<Chip
								label='Clickable Chip'
								onClick={handleDialogOpen}
								clickable
							/>
							<Chip label='Deletable Chip' onDelete={() => {}} />

							<AvatarGroup max={3}>
								<Avatar src='/avatar1.jpg' />
								<Avatar src='/avatar2.jpg' />
								<Avatar src='/avatar3.jpg' />
							</AvatarGroup>

							<Stepper activeStep={activeStep} orientation='vertical'>
								<Step>
									<StepLabel>Step 1</StepLabel>
								</Step>
								<Step>
									<StepLabel>Step 2</StepLabel>
								</Step>
								<Step>
									<StepLabel>Step 3</StepLabel>
								</Step>
							</Stepper>
						</Paper>
					</Grid>
				</Grid>

				<Tabs
					value={tabValue}
					onChange={handleTabChange}
					variant='fullWidth'
					indicatorColor='primary'
					textColor='primary'
				>
					<Tab label='Tab 1' />
					<Tab label='Tab 2' />
					<Tab label='Tab 3' />
				</Tabs>
			</Container>

			<Dialog open={openDialog} onClose={handleDialogClose}>
				<DialogTitle>Dialog Title</DialogTitle>
				<DialogContent>
					<Typography>This is a Material-UI Dialog component.</Typography>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleDialogClose} color='primary'>
						Close
					</Button>
					<Button onClick={handleDialogClose} color='primary'>
						Save
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default MuiDemo;
