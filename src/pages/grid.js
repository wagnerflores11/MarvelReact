import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "./App.css";
import ReactPaginate from "react-paginate";
import Footer from "../components/footer";
import api from "../services/api";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  fab: {
    float: "right",
  },
  footer: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(6),
  },
}));

export default function Marvel() {
  const classes = useStyles();
  const [heros, setHeros] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  const pageCount = Math.ceil(heros.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    const loadHeros = async () => {
      const response = await api.get();
        setHeros(response.data.data.results);
        console.log(response)
    };
    
    loadHeros();
  }, []);
  
  console.log(heros);

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            LOGO
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Album layout
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {heros
              .slice(pagesVisited, pagesVisited + usersPerPage)
              .map((hero) => (
                <Grid item key={hero.id} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <img
                      src={`${hero.thumbnail.path}/portrait_incredible.${hero.thumbnail.extension}`}
                      alt=""
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        <h2>{hero.name}</h2>
                      </Typography>
                      <Typography>
                        <p>{hero.description}</p>
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        className={classes.fab}
                        size="small"
                        color="primary"
                      >
                        Edit
                      </Button>
                    </CardActions>
                  </Card>
                  {/*<Posts posts={currentPosts} loading={loading} />*/}
                </Grid>
              ))}
          </Grid>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </Container>
      </main>
      <footer className={classes.footer}>
        <Footer />
      </footer>
    </React.Fragment>
  );
}
