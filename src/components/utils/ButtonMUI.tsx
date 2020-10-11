import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

interface ButtonProps {
    label: string
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                color: "#F7FFFE"
            },
        },
    }),
);

export default function ButtonMUI(props: ButtonProps) {

    const classes = useStyles();
    const spaceBetweenStyle: React.CSSProperties = {
        marginLeft: 30
    }

    return <div className={classes.root}>
        <Button style={spaceBetweenStyle} >{props.label}</Button>
    </div >

}
