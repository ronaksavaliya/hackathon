"use client";
import { MenuItem, Select, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import "./page.css";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import uploadIcon from "../../assets/svg/uploadIcon.svg";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [description, setDescription] = useState(null);
  const [image, setImage] = useState(null);
  const [levelType, setLevelType] = useState("easy");
  const [imageName, setImageName] = useState(null);
  const [error, setError] = useState({});
  const router = useRouter();
  const handleImageChange = (e) => {
    if (error.image) {
      setError({});
    }
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setImageName(file.name);
    }
  };

  const validateData = () => {
    if (!name) {
      setError({ name: "Please enter a challenge name" });
      return false;
    }

    if (!startDate) {
      setError({ startDate: "Please select a start date" });
      return false;
    }

    if (!endDate) {
      setError({ endDate: "Please select a end date" });
      return false;
    }

    if (!description) {
      setError({ description: "Please enter a description" });
      return false;
    }

    if (!image) {
      setError({ image: "Please upload a image" });
      return false;
    }

    setError({});
    return true;
  };

  const handleSubmit = () => {
    if (validateData()) {
      const challenge = {
        id: Math.random(),
        name,
        startDate: `${startDate.$d}`,
        endDate: `${endDate.$d}`,
        description,
        image,
        levelType,
      };

      if (!localStorage.getItem("challenges")) {
        localStorage.setItem("challenges", JSON.stringify([challenge]));
      } else {
        let challenges = JSON.parse(localStorage.getItem("challenges"));
        challenges.push(challenge);
        localStorage.setItem("challenges", JSON.stringify(challenges));
      }
      router.push("/");
    }
  };

  return (
    <div>
      <div className="challengeDetailsTopBar">
        <h3 className="challengeDetailsText">Challenge Details</h3>
      </div>
      <div className="createChallengeInfo">
        <div>
          <p className="challengeNameText">Challenge Name</p>
          <TextField
            id="outlined-basic"
            value={name}
            onChange={(e) => {
              if (error.name) {
                setError({});
              }
              setName(e.target.value);
            }}
            placeholder="Enter a Name"
            variant="outlined"
            sx={{
              width: "453px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  height: "39px",
                },
                "& input": {
                  height: "1px",
                },
              },
            }}
          />
          {error.name && <p className="error">{error.name}</p>}
        </div>
        <div>
          <p className="startDateText">Start Date</p>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DateTimePicker
                value={startDate}
                onChange={(date) => {
                  if (error.startDate) {
                    setError({});
                  }
                  setStartDate(date);
                }}
                sx={{
                  width: "453px",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      height: "39px",
                    },
                    "& input": {
                      height: "6px",
                    },
                  },
                }}
              />
            </DemoContainer>
          </LocalizationProvider>
          {error.startDate && <p className="error">{error.startDate}</p>}
        </div>
        <div>
          <p className="endDateText">End Date</p>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DateTimePicker
                value={endDate}
                onChange={(date) => {
                  if (error.endDate) {
                    setError({});
                  }
                  setEndDate(date);
                }}
                sx={{
                  width: "453px",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      height: "39px",
                    },
                    "& input": {
                      height: "6px",
                    },
                  },
                }}
              />
            </DemoContainer>
          </LocalizationProvider>
          {error.endDate && <p className="error">{error.endDate}</p>}
        </div>
        <div>
          <p className="descriptionText">Description</p>
          <textarea
            className="textArea"
            onChange={(e) => {
              if (error.description) {
                setError({});
              }
              setDescription(e.target.value);
            }}
          />
          {error.description && <p className="error">{error.description}</p>}
        </div>
        <div>
          <p className="imageText">Image</p>
          <div
            className="imageUploadBox"
            onClick={() => document.getElementById("imageInput").click()}
          >
            <p className="uploadText">Upload</p>
            <Image src={uploadIcon} alt="upload icon" />
          </div>
          {imageName && <p className="imageName">{imageName}</p>}
          {error.image && <p className="error">{error.image}</p>}
          <input
            type="file"
            id="imageInput"
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <div>
          <p className="levelTypeText">Level Type</p>
          <Select
            id="demo-simple-select"
            sx={{
              width: "236px",
              height: "39px",
            }}
            value={levelType}
            onChange={(e) => {
              setLevelType(e.target.value);
            }}
          >
            <MenuItem value="easy">Easy</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="hard">Hard</MenuItem>
          </Select>
        </div>
        <div>
          <button className="createChallengeBtn" onClick={handleSubmit}>
            Create Challenge
          </button>
        </div>
      </div>
    </div>
  );
}
