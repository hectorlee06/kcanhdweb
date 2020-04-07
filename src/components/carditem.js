import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard( prop ) {
  const { imagen, titulo, titu, descri, fecha} = prop.href;
  console.log(prop)
  const classes = useStyles();

  return (
    <Card  id="card" className={classes.root}>
      <CardActionArea >
        <CardMedia 
          id="imgcard"
          className={classes.media}
          image={imagen}
        />
        <CardContent>
          <Typography  gutterBottom variant="h5" component="h2">
         <a id="titulocard" href={titulo} target="_blank">{titu}</a>
          
          </Typography>
            <span id="spancard">Publicado {fecha}</span>
          <br/>
          <br></br>
          <Typography variant="body2" color="#000" component="p">
           
            {descri}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
