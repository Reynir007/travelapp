import { Divider, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { Container } from "@mui/system";
import ResponsiveAppBar from "../components/Navbar";
import Box from '@mui/material/Box';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React from "react";
import img1 from '../assets/Traveling-rafiki.svg'
import img2 from '../assets/Destination-pana.svg';


function LandingPage() {

  const cities = [{ title: "Las Vegas", subtitle: "NV (LAS)" }, { title: "Los Angeles", subtitle: "NV (LAX)" },
  { title: "New York", subtitle: "NY (NYC)" }, { title: "Palm Springs", subtitle: "CA (PSP)" }, { title: "Portland", subtitle: "OR (PDX)" },
  { title: "All cities" }]

  const infos = [{ header: "Welcome to our new website", src: img1, footer: "Learn about VIRGINAMERICA.com" }, { header: "Deals from $49 to your favourite cities", src: img2, footer: "See all details" }]

  return (
    <Container disableGutters maxWidth={"xl"}>
      <Container disableGutters maxWidth={"xl"} >
        <ResponsiveAppBar />
      </Container>
      <Container disableGutters maxWidth={"xl"} sx={{ display: 'flex', flexDirection: 'column' }} >
        <Container sx={{ my: 1 }} disableGutters>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              defaultValue="roundTrip"
            >
              <FormControlLabel value="roundTrip" control={<Radio />} label="Round Trip" />
              <FormControlLabel value="oneWay" control={<Radio />} label="One Way" />
              <FormControlLabel value="multiCity" control={<Radio />} label="Multi City" />
            </RadioGroup>
            <Divider />
          </FormControl>
        </Container>

        <Container disableGutters sx={{ my: { xs: 5, md: 7, lg: 8 } }}>
          <Container disableGutters sx={{my:{xs :2, sm:1}}}>
            <Typography variant="h3" display={"inline"} sx={{ lineHeight: { md: 2 }, fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' } }} >
              Book From
              <Typography variant="h3" display={"inline"} sx={{ lineHeight: { md: 2 }, fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' } }} color="#794198" > Sanfransico</Typography>
              <ArrowDropDownIcon display={"inline"} sx={{ color: "#794198" }} />
              to
            </Typography>
          </Container>

          <Container sx={{ display: 'flex', flexWrap: "wrap", justifyContent: 'space-between' }}>
            {cities.map((city) =>
              <Box padding={2} minHeight={40} margin={1} flex={1} flexWrap="nowrap" sx={{ textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'center', border: "1px solid rgba(15,15,15,0.1)", minWidth: { xs: 116, sm: 136, md: 110, lg: 136 } }}>
                <Typography lineHeight={1.2} fontSize={16} color="#794198" fontWeight="bold" variant="h6"> {city.title}</Typography>
                <Typography lineHeight={1} fontSize={14} variant="h6"> {city.subtitle}</Typography>
              </Box>
            )}
          </Container>
        </Container>
        <Container maxWidth="xl" sx={{ flex: 1, background: 'grey', display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>
          {infos.map((info) =>
            <Box padding={2} margin={1} flex={1} flexWrap="nowrap" sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography lineHeight={1.2} fontSize={16} fontWeight="bold" variant="h6"> {info.header}</Typography>
              <img style={{ maxWidth: "200px" }} alt="travel Img" src={info.src} />
              <Typography lineHeight={1} fontSize={14} variant="h6"> {info.footer}</Typography>
            </Box>
          )}
        </Container>
      </Container>
    </Container>

  );
}

export default LandingPage;