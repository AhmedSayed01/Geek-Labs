import React from "react";
import { MdOutlineSearch } from "react-icons/md";
import "./Center.css";
import CenterTableProp from "./CenterTableProp";
function Center() {
  const description = (
    <p>
      This is an <a href="/">arbitrage opportunity</a>, with the max gain being
      %X if the deal closes, but the possible risk is %Y if the dead fails, If
      the deal success is % and therefore the recommended play is{" "}
      <a href="/">long/short</a> $ABC
    </p>
  );

  const dataDescription = {
    width: "88.5%",
    position: "relative",
    borderRadius: "0 0 10px 10px",
    zIndex: "-5",
    display: "flex",
    marginTop: "-15px",
    padding: "0px 30px",
    color: "white",
    backgroundColor: "#181818",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    maxWidth: "90%",
  };
  const dataList = [
    {
      first: "AMZN",
      second: "200",
      third: "-0.25%",
      fourth: "Low Risk",
      color: "#D94111",
      description: (
        <div style={dataDescription}>
          <p style={{ paddingTop: "20px" }}>
            <span>$AMZN </span>
            just announced an acquisition of <b>$NFLX</b>
          </p>
          {description}
        </div>
      ),
    },
    {
      first: "TSLA",
      second: "200",
      third: "-0.25%",
      fourth: "High Risk",
      color: "#118F4B",
      description: (
        <div style={dataDescription}>
          <p style={{ paddingTop: "20px" }}>
            <span>$TSLA </span>
            just announced an acquisition of <b>$NFLX</b>
          </p>
          {description}
        </div>
      ),
    },
    {
      first: "ABQQ",
      second: "200",
      third: "-0.25%",
      fourth: "High Risk",
      color: "#118F4B",
      description: (
        <div style={dataDescription}>
          <p style={{ paddingTop: "20px" }}>
            <span>$ABQQ </span>
            just announced an acquisition of <b>$NFLX</b>
          </p>
          {description}
        </div>
      ),
    },
    {
      first: "MSFT",
      second: "200",
      third: "-0.25%",
      fourth: "Low Risk",
      color: "#D94111",
      description: (
        <div style={dataDescription}>
          <p style={{ paddingTop: "20px" }}>
            <span>$MSFT </span>
            just announced an acquisition of <b>$NFLX</b>
          </p>
          {description}
        </div>
      ),
    },
    {
      first: "NFLX",
      second: "200",
      third: "-0.25%",
      fourth: "Low Risk",
      color: "#D94111",
      description: (
        <div style={dataDescription}>
          <p style={{ paddingTop: "20px" }}>
            <span>$NFLX </span>
            just announced an acquisition of <b>$NFLX</b>
          </p>
          {description}
        </div>
      ),
    },

    {
      first: "NFLX",
      second: "200",
      third: "-0.25%",
      fourth: "Low Risk",
      color: "#D94111",
      description: (
        <div style={dataDescription}>
          <p style={{ paddingTop: "20px" }}>
            <span>$NFLX </span>
            just announced an acquisition of <b>$NFLX</b>
          </p>
          {description}
        </div>
      ),
    },

    {
      first: "NFLX",
      second: "200",
      third: "-0.25%",
      fourth: "Low Risk",
      color: "#D94111",
      description: (
        <div style={dataDescription}>
          <p style={{ paddingTop: "20px" }}>
            <span>$NFLX </span>
            just announced an acquisition of <b>$NFLX</b>
          </p>
          {description}
        </div>
      ),
    },

    {
      first: "NFLX",
      second: "200",
      third: "-0.25%",
      fourth: "Low Risk",
      color: "#D94111",
      description: (
        <div style={dataDescription}>
          <p style={{ paddingTop: "20px" }}>
            <span>$NFLX </span>
            just announced an acquisition of <b>$NFLX</b>
          </p>
          {description}
        </div>
      ),
    },

    {
      first: "NFLX",
      second: "200",
      third: "-0.25%",
      fourth: "Low Risk",
      color: "#D94111",
      description: (
        <div style={dataDescription}>
          <p style={{ paddingTop: "20px" }}>
            <span>$NFLX </span>
            just announced an acquisition of <b>$NFLX</b>
          </p>
          {description}
        </div>
      ),
    },

    {
      first: "NFLX",
      second: "200",
      third: "-0.25%",
      fourth: "Low Risk",
      color: "#D94111",
      description: (
        <div style={dataDescription}>
          <p style={{ paddingTop: "20px" }}>
            <span>$NFLX </span>
            just announced an acquisition of <b>$NFLX</b>
          </p>
          {description}
        </div>
      ),
    },
    {
      first: "NFLX",
      second: "200",
      third: "-0.25%",
      fourth: "Low Risk",
      color: "#D94111",
      description: (
        <div style={dataDescription}>
          <p style={{ paddingTop: "20px" }}>
            <span>$NFLX </span>
            just announced an acquisition of <b>$NFLX</b>
          </p>
          {description}
        </div>
      ),
    },
    {
      first: "NFLX",
      second: "200",
      third: "-0.25%",
      fourth: "Low Risk",
      color: "#D94111",
      description: (
        <div style={dataDescription}>
          <p style={{ paddingTop: "20px" }}>
            <span>$NFLX </span>
            just announced an acquisition of <b>$NFLX</b>
          </p>
          {description}
        </div>
      ),
    },
    {
      first: "NFLX",
      second: "200",
      third: "-0.25%",
      fourth: "Low Risk",
      color: "#D94111",
      description: (
        <div style={dataDescription}>
          <p style={{ paddingTop: "20px" }}>
            <span>$NFLX </span>
            just announced an acquisition of <b>$NFLX</b>
          </p>
          {description}
        </div>
      ),
    },
  ];
  return (
    <div>
      <div className="titleAndSearchContainer">
        <h1 className="alertsH1">ALERTS</h1>
        <div className="searchContainer">
          <input
            placeholder="Search By..."
            type="text"
            className="searchInput"
          />
          <span className="searchIcon">
            <MdOutlineSearch />
          </span>
        </div>
        <div className="alertNotifContainer">
          <svg
            width="25"
            height="27"
            viewBox="0 0 25 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.38 16.6942L22.435 14.7491C21.9882 14.2681 21.7293 13.6425 21.7055 12.9864V9.15698C21.7055 4.23345 18.4232 0.0393372 12.5879 0.0393372C6.7526 0.0393372 3.47025 4.11189 3.47025 9.15698V13.4119C3.45899 13.7967 3.3077 14.1641 3.04476 14.4452L0.795736 16.6942C0.566683 16.9187 0.435598 17.2246 0.43103 17.5452V21.9217C0.43103 22.2441 0.559111 22.5533 0.787096 22.7813C1.01508 23.0093 1.3243 23.1374 1.64672 23.1374H8.39377C8.56291 24.1272 9.07671 25.0254 9.84427 25.6729C10.6118 26.3205 11.5837 26.6756 12.5879 26.6756C13.5921 26.6756 14.564 26.3205 15.3315 25.6729C16.0991 25.0254 16.6129 24.1272 16.782 23.1374H23.5291C23.8515 23.1374 24.1607 23.0093 24.3887 22.7813C24.6167 22.5533 24.7448 22.2441 24.7448 21.9217V17.5452C24.7402 17.2246 24.6091 16.9187 24.38 16.6942Z"
              fill="#53ACFF"
            />
          </svg>
          <span>6</span>
        </div>
      </div>
      <div className="tableContainer">
        <table>
          <tbody>
            {dataList.map((data, index) => {
              return (
                <CenterTableProp
                  key={index}
                  first={data.first}
                  second={data.second}
                  third={data.third}
                  fourth={data.fourth}
                  description={data.description}
                  color={data.color}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Center;
