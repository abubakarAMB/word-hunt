import React from "react";
import "./Definitions.css";
import { connect } from "react-redux";
import Box from "@material-ui/core/Box";
import Skeleton from "@material-ui/lab/Skeleton";

const Definitions = ({
  dictionary: { data, loadingSearch, searchErrors },
  LightTheme,
}) => {
  return (
    <div className="meanings">
      {/* audio---------------------------- */}
      {data.length !== 0 && !loadingSearch && !searchErrors && (
        <audio
          style={{ backgroundColor: "#fff", borderRadius: 10 }}
          src={data[0].phonetics[0] && data[0].phonetics[0].audio}
          controls
        >
          Your browser does not support the audio element.
        </audio>
      )}
      {/* audio---------------------------- */}
      {searchErrors && !loadingSearch && (
        <span className="subTitle">
          {searchErrors.title !== "undefined"
            ? searchErrors.title
            : "An error occurred while processing your request, please try again!"}
        </span>
      )}
      {data.length === 0 && !searchErrors && !loadingSearch ? (
        <span className="subTitle">Start by typing a word in search...</span>
      ) : loadingSearch ? (
        <Box sx={{ width: "100%" }}>
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
      ) : (
        data.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def, index) => (
              <div
                className="singleMean"
                key={index}
                style={{
                  backgroundColor: LightTheme ? "white" : "#3b5360",
                  color: LightTheme ? "black" : "white",
                }}
              >
                <b>{def.definition}</b>
                <hr style={{ backgroundColor: "black", width: "100%" }} />
                {def.example && (
                  <span>
                    <b>Example :</b> {def.example}
                  </span>
                )}
                {def.synonyms && (
                  <span>
                    <b>Synonyms :</b> {def.synonyms.map((s) => `${s}, `)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  dictionary: state.dictionary,
});

export default connect(mapStateToProps, null)(Definitions);
