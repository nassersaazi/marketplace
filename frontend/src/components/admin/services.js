import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	link: {
		margin: theme.spacing(1, 1.5),
	},
	cardHeader: {
		backgroundColor:
			theme.palette.type === 'light'
				? theme.palette.grey[200]
				: theme.palette.grey[700],
	},
	serviceTitle: {
		fontSize: '16px',
		textAlign: 'left',
	},
	serviceText: {
		display: 'flex',
		justifyContent: 'left',
		alignItems: 'baseline',
		fontSize: '12px',
		textAlign: 'left',
		marginBottom: theme.spacing(2),
	},
}));

const Services = (props) => {
	const { services } = props;
	const classes = useStyles();
	if (!services || services.length === 0) return <p>Can not find any services, sorry</p>;
	return (
		<React.Fragment>
			<Container maxWidth="md" component="main">
				<Paper className={classes.root}>
					<TableContainer className={classes.container}>
						<Table stickyHeader aria-label="sticky table">
							<TableHead>
								<TableRow>
									<TableCell>Id</TableCell>
									<TableCell align="left">Name</TableCell>
									<TableCell align="left">Provider</TableCell>
									<TableCell align="left">Category</TableCell>
									<TableCell align="left">Access Type</TableCell>
									<TableCell align="left">Created By</TableCell>
									<TableCell align="left">Creation Date</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{services.map((service) => {
									return (
										<TableRow>
											<TableCell component="th" scope="row">
												{service.id}
											</TableCell>
											<TableCell align="left">
												<Link
													color="textPrimary"
													href={'/service/' + service.slug}
													className={classes.link}
												>
													{service.name}
												</Link>
											</TableCell>
											<TableCell component="th" scope="row">
												{service.provider}
											</TableCell>
											<TableCell align="left">{service.category}</TableCell>
											<TableCell align="left">{service.accesstype}</TableCell>
											<TableCell align="left">{service.createdby}</TableCell>
											<TableCell align="left">{service.creationdate}</TableCell>
											<TableCell align="left">
												<Link
													color="textPrimary"
													href={'/admin/edit/' + service.id}
													className={classes.link}
												>
													<EditIcon></EditIcon>
												</Link>
												<Link
													color="textPrimary"
													href={'/admin/delete/' + service.id}
													className={classes.link}
												>
													<DeleteForeverIcon></DeleteForeverIcon>
												</Link>
											</TableCell>
										</TableRow>
									);
								})}
								<TableRow>
									<TableCell colSpan={4} align="right">
										<Button
											href={'/admin/create'}
											variant="contained"
											color="primary"
										>
											New Service
										</Button>
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
				</Paper>
			</Container>
		</React.Fragment>
	);
};
export default Services;