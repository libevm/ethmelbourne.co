import logo from "./logo.png";
import {
  Grid,
  Link,
  Typography,
  Container
} from "@mui/material";



function App() {
  return (
    <Container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ marginTop: '50px', textAlign: "center" }}>

      <Grid item md={12}>
        <img src={logo} alt="logo" width={256} height={256} />
        <Typography variant="h4">Ethereum Melbourne</Typography>
        <Typography variant="subtitle1">
          Members of all levels welcomed! Monthly meetups on last Wednesdays.
        </Typography>
      </Grid>



      <Grid item lg={12} sx={{ display: { xs: 'none', sm: 'block' } }}>
        <iframe title="calendar" src="https://calendar.google.com/calendar/embed?src=hello%40ethmelbourne.co&ctz=Australia%2FMelbourne" style={{ 'border': 0 }} width="800" height="600" frameborder="0" scrolling="no"></iframe>
      </Grid>

      <Grid item xs={12} sx={{ display: { xs: 'block', sm: 'none' } }}>
        <iframe title="calendar" src="https://calendar.google.com/calendar/embed?height=400&wkst=1&bgcolor=%23ffffff&ctz=Australia%2FMelbourne&mode=AGENDA&src=aGVsbG9AZXRobWVsYm91cm5lLmNv&color=%23039BE5" style={{ 'border': 'solid 1px #777' }} width="350" height="400" frameborder="0" scrolling="no"></iframe>
      </Grid>


      <Grid item md={12}>
        <Link href="https://twitter.com/ethmelbourne">twitter</Link>
        &nbsp;&nbsp;
        <Link href="https://lu.ma/u/usr-VEFqG8hvMFtTjmx/">events</Link>
        &nbsp;&nbsp;
        <Link href="https://t.me/+Yn85Nzth0XRlM2Jh">telegram</Link>
        &nbsp;&nbsp;
        <Link href="https://discord.gg/tDqFSFxSnt">discord</Link>
        <br />
        <br />
        <Link href="https://forms.gle/z4dZDY16ED5m2SrF8">interested in speaking?</Link>
        <br />
        <br />
        email: hello[at]ethmelbourne.co
      </Grid>
    </Container>
  );
}

export default App;
