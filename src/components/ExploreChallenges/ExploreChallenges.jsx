"use client";
import React, { useEffect, useState } from "react";
import "./exploreChallenges.css";
import { Grid2, TextField } from "@mui/material";
import ChallengeCard from "../ChallengeCard/ChallengeCard";
import { FilterMenu } from "../FilterMenu/FilterMenu";

const ExploreChallenges = () => {
  const [allChallenges, setAllChallenges] = useState([]);
  const [challenges, setChallenges] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const status = ["UPCOMING", "ACTIVE", "PAST"];
  const level = ["EASY", "MEDIUM", "HARD"];

  const onFilterChange = (value) => {
    setSelectedFilters(value);
    const statusFilter = value.filter((filterName) => {
      return status.includes(filterName);
    });
    const levelFilter = value.filter((filterName) => {
      return level.includes(filterName);
    });

    let filteredChallenges = [...allChallenges];

    if (!value.includes("ALL") && statusFilter.length > 0) {
      filteredChallenges = filteredChallenges.filter((challenge) => {
        const currentTime = new Date();
        const start = new Date(challenge.startDate);
        const end = new Date(challenge.endDate);

        let status;

        if (start > currentTime) status = "UPCOMING";
        else if (currentTime > start && currentTime < end) status = "ACTIVE";
        else {
          status = "PAST";
        }
        return statusFilter.includes(status);
      });
    }

    if (levelFilter.length > 0) {
      filteredChallenges = filteredChallenges.filter((challenge) => {
        return levelFilter.includes(challenge.levelType.toUpperCase());
      });
    }

    setChallenges([...filteredChallenges]);
  };

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    let searchChallenges = [...allChallenges];

    if (value) {
      searchChallenges = searchChallenges.filter((challenge) =>
        challenge.name.toLowerCase().includes(value.toLowerCase())
      );
    }

    setChallenges([...searchChallenges]);
  };

  useEffect(() => {
    setAllChallenges(JSON.parse(localStorage.getItem("challenges")));
    setChallenges(JSON.parse(localStorage.getItem("challenges")));
  }, []);

  return (
    <>
      <div style={{ height: "324px", backgroundColor: "rgba(0, 42, 59, 1)" }}>
        <h3 className="exploreChallengesText">Explore Challenges</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "70px",
          }}
        >
          <TextField
            id="outlined-basic"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search"
            variant="outlined"
            sx={{
              width: "829px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  height: "50px",
                  border: "none",
                },
                "& input": {
                  height: "12px",
                  backgroundColor: "white",
                  borderRadius: "12px",
                  color: "black",
                },
              },
            }}
          />
          <FilterMenu
            onFilterChange={onFilterChange}
            selectedFilters={selectedFilters}
          />
        </div>
      </div>
      <Grid2
        container
        spacing={3}
        justifyContent="center"
        sx={{ backgroundColor: "rgba(0, 49, 69, 1)" }}
      >
        {challenges?.map((challenge, index) => (
          <Grid2 item key={index}>
            <ChallengeCard challenge={challenge} />
          </Grid2>
        ))}
      </Grid2>
    </>
  );
};

export default ExploreChallenges;
