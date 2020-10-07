import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import productMilk from '../../assets/productMilk.png'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            height: 200
        },
    }),
);

export default function GridAuto() {
    const classes = useStyles();
    const products = ["produit A", "produit B", "produit C", "produit D", "produit E", "produit F"]

    const productDescription: React.CSSProperties = {
        margin: "20px 0"
    }


    return (
        <div className={classes.root}>
            <Grid container spacing={3} style={{ justifyContent: "center", padding: "0 30px" }} >

                {
                    products.map((product, index) => <Grid item sm={2} >
                        <Paper className={classes.paper}>
                            <img
                                key={index}
                                src={productMilk}
                                alt="product milk"
                                height={120}
                                width={"auto"}
                            />
                            <div style={productDescription} >{product}</div>
                            <button>Prix $</button>
                        </Paper>
                    </Grid>)
                }

            </Grid>
        </div >
    );
}
