import { makeStyles } from '@material-ui/styles';
import { material } from '@utils/generators';

export const useStyles = makeStyles(theme => ({
    fab: {
        position: 'absolute',
        right: theme.spacing(0),
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        color: '#757575',
    },
    circle: {
        borderWidth: 0,
        borderStyle: 'solid',
        borderColor: 'black',
        '&:hover': {
            borderWidth: 3,
        },
        transition: theme.transitions.create('border-width', {
            duration: theme.transitions.duration.shortest,            
        })
    },
    indigo: {
        backgroundColor: material('indigo').palette.primary.main,
    },
    purple: {
        backgroundColor: material('purple').palette.primary.main,
    },
    blue: {
        backgroundColor: material('blue').palette.primary.main,
    },
    green: {
        backgroundColor: material('green').palette.primary.main,
    },
    red: {
        backgroundColor: material('red').palette.primary.main,
    },
    amber: {
        backgroundColor: material('amber').palette.primary.main,
    },
}));