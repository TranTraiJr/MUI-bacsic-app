import { Chip, Paper, styled } from "@mui/material";

const ListItem = styled("li")(({ theme }) => ({
  margin: "1px",
}));

function SkillsPaper({ skills }) {
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "start",
        flexWrap: "wrap",
        listStyle: "none",
        p: 0.5,
        m: 0,
        boxShadow: 0,
        backgroundColor: (theme) => theme.palette.grey[800],
      }}
      component="ul"
    >
      {skills?.map((skill) => (
        <ListItem key={skill}>
          <Chip
            size="small"
            color="primary"
            label={skill}
            sx={{ paddingBottom: "2px", backgroundColor: "#df4747" }}
          />
        </ListItem>
      ))}
    </Paper>
  );
}

export default SkillsPaper;
