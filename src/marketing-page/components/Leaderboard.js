import React from "react";
import {
  Avatar,
  Button,
  Container,
  Grid,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";

const LeaderList = [
  {
    number: 1,
    avatar: "avatar_url_1",
    name: "Name1",
    twitter_link: "https://twitter.com/name1",
    telegram_link: "https://t.me/name1",
    username: "username1",
    number_of_buy: 134,
    number_of_sell: 4,
    profit_of_solana: 319.8,
    profit_of_usd: 47129.1,
  },
  {
    number: 2,
    avatar: "avatar_url_2",
    name: "Name2",
    twitter_link: "https://twitter.com/name2",
    telegram_link: "https://t.me/name2",
    username: "username2",
    number_of_buy: 135,
    number_of_sell: 5,
    profit_of_solana: 320.8,
    profit_of_usd: 47229.1,
  },
  {
    number: 3,
    avatar: "avatar_url_3",
    name: "Name3",
    twitter_link: "https://twitter.com/name3",
    telegram_link: "https://t.me/name3",
    username: "username3",
    number_of_buy: 136,
    number_of_sell: 6,
    profit_of_solana: 321.8,
    profit_of_usd: 47329.1,
  },
  {
    number: 4,
    avatar: "avatar_url_4",
    name: "Name4",
    twitter_link: "https://twitter.com/name4",
    telegram_link: "https://t.me/name4",
    username: "username4",
    number_of_buy: 137,
    number_of_sell: 7,
    profit_of_solana: 322.8,
    profit_of_usd: 47429.1,
  },
  {
    number: 5,
    avatar: "avatar_url_5",
    name: "Name5",
    twitter_link: "https://twitter.com/name5",
    telegram_link: "https://t.me/name5",
    username: "username5",
    number_of_buy: 138,
    number_of_sell: 8,
    profit_of_solana: 323.8,
    profit_of_usd: 47529.1,
  },
  {
    number: 6,
    avatar: "avatar_url_6",
    name: "Name6",
    twitter_link: "https://twitter.com/name6",
    telegram_link: "https://t.me/name6",
    username: "username6",
    number_of_buy: 139,
    number_of_sell: 9,
    profit_of_solana: 324.8,
    profit_of_usd: 47629.1,
  },
  {
    number: 7,
    avatar: "avatar_url_7",
    name: "Name7",
    twitter_link: "https://twitter.com/name7",
    telegram_link: "https://t.me/name7",
    username: "username7",
    number_of_buy: 140,
    number_of_sell: 10,
    profit_of_solana: 325.8,
    profit_of_usd: 47729.1,
  },
  {
    number: 8,
    avatar: "avatar_url_8",
    name: "Name8",
    twitter_link: "https://twitter.com/name8",
    telegram_link: "https://t.me/name8",
    username: "username8",
    number_of_buy: 141,
    number_of_sell: 11,
    profit_of_solana: 326.8,
    profit_of_usd: 47829.1,
  },
  {
    number: 9,
    avatar: "avatar_url_9",
    name: "Name9",
    twitter_link: "https://twitter.com/name9",
    telegram_link: "https://t.me/name9",
    username: "username9",
    number_of_buy: 142,
    number_of_sell: 12,
    profit_of_solana: 327.8,
    profit_of_usd: 47929.1,
  },
  {
    number: 10,
    avatar: "avatar_url_10",
    name: "Name10",
    twitter_link: "https://twitter.com/name10",
    telegram_link: "https://t.me/name10",
    username: "username10",
    number_of_buy: 143,
    number_of_sell: 13,
    profit_of_solana: 328.8,
    profit_of_usd: 48029.1,
  },
  {
    number: 11,
    avatar: "avatar_url_11",
    name: "Name11",
    twitter_link: "https://twitter.com/name11",
    telegram_link: "https://t.me/name11",
    username: "username11",
    number_of_buy: 144,
    number_of_sell: 14,
    profit_of_solana: 329.8,
    profit_of_usd: 48129.1,
  },
  {
    number: 12,
    avatar: "avatar_url_12",
    name: "Name12",
    twitter_link: "https://twitter.com/name12",
    telegram_link: "https://t.me/name12",
    username: "username12",
    number_of_buy: 145,
    number_of_sell: 15,
    profit_of_solana: 330.8,
    profit_of_usd: 48229.1,
  },
  {
    number: 13,
    avatar: "avatar_url_13",
    name: "Name13",
    twitter_link: "https://twitter.com/name13",
    telegram_link: "https://t.me/name13",
    username: "username13",
    number_of_buy: 146,
    number_of_sell: 16,
    profit_of_solana: 331.8,
    profit_of_usd: 48329.1,
  },
  {
    number: 14,
    avatar: "avatar_url_14",
    name: "Name14",
    twitter_link: "https://twitter.com/name14",
    telegram_link: "https://t.me/name14",
    username: "username14",
    number_of_buy: 147,
    number_of_sell: 17,
    profit_of_solana: 332.8,
    profit_of_usd: 48429.1,
  },
  {
    number: 15,
    avatar: "avatar_url_15",
    name: "Name15",
    twitter_link: "https://twitter.com/name15",
    telegram_link: "https://t.me/name15",
    username: "username15",
    number_of_buy: 148,
    number_of_sell: 18,
    profit_of_solana: 333.8,
    profit_of_usd: 48529.1,
  },
  {
    number: 16,
    avatar: "avatar_url_16",
    name: "Name16",
    twitter_link: "https://twitter.com/name16",
    telegram_link: "https://t.me/name16",
    username: "username16",
    number_of_buy: 149,
    number_of_sell: 19,
    profit_of_solana: 334.8,
    profit_of_usd: 48629.1,
  },
  {
    number: 17,
    avatar: "avatar_url_17",
    name: "Name17",
    twitter_link: "https://twitter.com/name17",
    telegram_link: "https://t.me/name17",
    username: "username17",
    number_of_buy: 150,
    number_of_sell: 20,
    profit_of_solana: 335.8,
    profit_of_usd: 48729.1,
  },
  {
    number: 18,
    avatar: "avatar_url_18",
    name: "Name18",
    twitter_link: "https://twitter.com/name18",
    telegram_link: "https://t.me/name18",
    username: "username18",
    number_of_buy: 151,
    number_of_sell: 21,
    profit_of_solana: 336.8,
    profit_of_usd: 48829.1,
  },
  {
    number: 19,
    avatar: "avatar_url_19",
    name: "Name19",
    twitter_link: "https://twitter.com/name19",
    telegram_link: "https://t.me/name19",
    username: "username19",
    number_of_buy: 152,
    number_of_sell: 22,
    profit_of_solana: 337.8,
    profit_of_usd: 48929.1,
  },
  {
    number: 20,
    avatar: "avatar_url_20",
    name: "Name20",
    twitter_link: "https://twitter.com/name20",
    telegram_link: "https://t.me/name20",
    username: "username20",
    number_of_buy: 153,
    number_of_sell: 23,
    profit_of_solana: 338.8,
    profit_of_usd: 49029.1,
  },
];

const Leaderboard = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        pt: { xs: 6, sm: 16 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 1, sm: 2 },
      }}
    >
      {/* Header */}
      <Grid container justifyContent="space-between" alignItems="center">
        <Typography variant="h5" fontWeight="bold">
          Realized PnL Leaderboard
        </Typography>
        <Box>
          <Button variant="outlined" sx={{ mx: 0.2 }}>
            Daily
          </Button>
          <Button variant="outlined" sx={{ mx: 0.2 }}>
            Weekly
          </Button>
          <Button variant="outlined" sx={{ mx: 0.2 }}>
            Monthly
          </Button> 
        </Box>
      </Grid>

      {/* Leaderboard Entries */}
      {LeaderList.map((leader) => (
        <Grid
          container
          alignItems="center"
          spacing={2}
          sx={{ mt: 2, p: 2, border: "1px solid #ccc", borderRadius: 2 }}
          key={leader.number}
        >
          <Grid item>
            <Typography variant="h6" fontWeight="bold">
              {leader.number}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar src={leader.avatar} />
          </Grid>
          <Grid item>
            <Typography variant="body1" fontWeight="bold">
              {leader.name}
            </Typography>
          </Grid>
          <Grid item>
            <IconButton
              color="primary"
              component="a"
              href={leader.twitter_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              color="primary"
              component="a"
              href={leader.telegram_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramIcon />
            </IconButton>
          </Grid>
          <Grid item sx={{ ml: "auto", textAlign: "right" }}>
            <Typography variant="body1">
              {leader.number_of_buy}/{leader.number_of_sell}
            </Typography>
            <Typography variant="body1" fontWeight="bold" color="green">
              +{leader.profit_of_solana} Sol ($
              {leader.profit_of_usd.toLocaleString()})
            </Typography>
          </Grid>
        </Grid>
      ))}
    </Container>
  );
};

export default Leaderboard;
