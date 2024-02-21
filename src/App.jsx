import {
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  CssBaseline,
  Divider,
  Grid,
  InputBase,
  Pagination,
  Stack,
  Toolbar,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import { jobData } from "./jobData";
import SkillsPaper from "./SkillPaper";

const CardStyle = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  border: "1px solid black",
  width: "100%",
  maxWidth: "350px",
  minWidth: "270px",
  height: "320px",
  margin: "auto",
  backgroundColor: theme.palette.grey[800],
}));

const CentterPagination = styled(Pagination)(({ theme }) => ({
  ul: {
    justifyContent: "center",
    color: "white",
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": { backgroundColor: alpha(theme.palette.common.white, 0.25) },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrap = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputLine = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function App() {
  return (
    <div id="body">
      <CssBaseline />
      <Box>
        <AppBar
          position="static"
          sx={{ backgroundColor: (theme) => theme.palette.grey[800] }}
        >
          <Toolbar>
            <Typography
              component="h4"
              variant="h4"
              sx={{
                display: { xs: "none", md: "block" },
                cursor: "pointer",
              }}
            >
              Job Routing
            </Typography>
            <Box component="form">
              <Search>
                <SearchIconWrap>
                  <SearchIcon />
                </SearchIconWrap>
                <StyledInputLine
                  placeholder="Search"
                  inputProps={{ "arial-label": "search" }}
                />
              </Search>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <div>
              <LogoutIcon />
              <Typography>Log Out</Typography>
            </div>
          </Toolbar>
        </AppBar>
      </Box>

      <Container sx={{ p: 3 }} maxWidth="lg">
        <>
          <Grid container spacing={3}>
            {jobData.map((job) => (
              <Grid key={job.id} item lg={3} md={4} sm={6} xs={12}>
                <CardStyle ariant="outlined">
                  <Stack
                    direction="column"
                    justifyContent="space-between"
                    alignItems="center"
                    height="100%"
                    padding="5px"
                  >
                    <CardContent>
                      <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{ color: (theme) => theme.palette.common.white }}
                      >
                        {job.title}
                      </Typography>
                      <Divider />
                      <SkillsPaper skills={job.skills} />
                      <Typography
                        sx={{ color: (theme) => theme.palette.common.white }}
                      >
                        {job.description}
                      </Typography>
                    </CardContent>
                    <Button
                      variant="contained"
                      state={{ backgroundLocation: location }}
                      sx={{ width: "130px", backgroundColor: "#df9e0b" }}
                    >
                      Learn More
                    </Button>
                  </Stack>
                </CardStyle>
              </Grid>
            ))}
          </Grid>
          <CentterPagination sx={{ marginTop: "15px" }} color="error" />
        </>
      </Container>
    </div>
  );
}

export default App;
