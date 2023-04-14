import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AlbumCard from "./AlbumCard";



const HomePage = (props) => {
  const [rock, setRock] = useState([]);
  const [pop, setPop] = useState([]);
  const [hiphop, setHiphop] = useState([]);

  let headers = new Headers({
    // sets the headers
    "X-RapidAPI-Host": "setbeatinc-deezer_api-v1.p.rapidapi.com",
    "X-RapidAPI-Key": "d2974e7875mshf8392d1728dcef5p1db250jsn348a62c2f974",
  });

  const fetchArtist = async (artist, genere) => {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artist,
        {
          method: "GET",
          headers,
        }
      ); // gets the information
      if (res.ok) {
        let data = await res.json(); // transforms the response to json
        let sonoHome = data.data;
        switch (genere) {
          case "rock":
            setRock((prevState) => {
              return [...prevState, sonoHome[0]];
            });
            break;
          case "pop":
            setPop((prevState) => {
              return [...prevState, sonoHome[0]];
            });
            break;
          case "hiphop":
            setHiphop((prevState) => {
              return [...prevState, sonoHome[0]];
            });
            break;
          default:
            console.log("switcherror");
        }
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const albumCard = async () => {
    let rockArtists = [
      "queen",
      "u2",
      "thepolice",
      "eagles",
      "thedoors",
      "oasis",
      "thewho",
      "bonjovi",
    ];

    let popArtists = [
      "maroon5",
      "coldplay",
      "onerepublic",
      "adele",
      "katyperry",
      "arianagrande",
    ];

    let hipHopArtists = [
      "eminem",
      "snoopdogg",
      "lilwayne",
      "drake",
      "kanyewest",
    ];

    let rockRandomArtists = [];
    let popRandomArtists = [];
    let hipHopRandomArtists = [];

    while (rockRandomArtists.length < 4) {
      // pushes elements inside the array until it has 4 strings
      let artist = rockArtists[Math.floor(Math.random() * rockArtists.length)]; // select an element from the array with an index between 0 and 7
      if (!rockRandomArtists.includes(artist)) {
        // checks if the artist is not already present in the array
        rockRandomArtists.push(artist); // pushes the artist in the array
      }
    }

    while (popRandomArtists.length < 4) {
      let artist = popArtists[Math.floor(Math.random() * popArtists.length)];
      if (!popRandomArtists.includes(artist)) {
        popRandomArtists.push(artist);
      }
    }

    while (hipHopRandomArtists.length < 4) {
      let artist =
        hipHopArtists[Math.floor(Math.random() * hipHopArtists.length)];
      if (!hipHopRandomArtists.includes(artist)) {
        hipHopRandomArtists.push(artist);
      }
    }

    for (let i = 0; i < rockRandomArtists.length; i++) {
      fetchArtist(rockRandomArtists[i], "rock");
    }
    for (let i = 0; i < popRandomArtists.length; i++) {
      fetchArtist(popRandomArtists[i], "pop");
    }
    for (let i = 0; i < hipHopRandomArtists.length; i++) {
      fetchArtist(hipHopRandomArtists[i], "hiphop");
    }
  };

  useEffect(() => {
    albumCard();
  }, [albumCard]);

  return (
    <Container>
      <Col xs={12} md={9} className="offset-md-3  HomePage">
        <Row className="row">
          <div className="col-9 col-lg-11 HomeLinks d-none d-md-flex">
            <a href="alt">TRENDING</a>
            <a href="alt">PODCAST</a>
            <a href="alt">MOODS AND GENRES</a>
            <a href="alt">NEW RELEASES</a>
            <a href="alt">DISCOVER</a>
          </div>
        </Row>
        <Row className="row">
          <Col md={10}>
            <div id="searchResults" style={{ display: "none" }}>
              <h2>Search Results</h2>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></div>
            </div>
          </Col>
        </Row>
        <Row className="row">
          <Col xs={10} className="col-10">
            <div id="rock">
              <h2>Rock Classics</h2>
              <div
                className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                id="rockSection"
              >
                {rock?.map((el, i) => {
                  return (
                    <AlbumCard
                      key={i}
                      obj={el}
                      cover={el.album.cover_medium}
                      artist={el.artist.name}
                      album={el.album.title}
                      idAlbum={el.album.id}
                    />
                  );
                })}
              </div>
            </div>
          </Col>
        </Row>
        <Row className="row">
          <Col xs={10} className="col-10">
            <div id="pop">
              <h2>Pop Culture</h2>
              <div
                className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                id="popSection"
              >
                {pop?.map((el, i) => {
                  return (
                    <AlbumCard
                      key={i}
                      obj={el}
                      cover={el.album.cover_medium}
                      artist={el.artist.name}
                      album={el.album.title}
                    />
                  );
                })}
              </div>
            </div>
          </Col>
        </Row>
        <Row className="row">
          <Col xs={10} className="col-10">
            <div id="hiphop">
              <h2>HipHop</h2>
              <div
                className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                id="hipHopSection"
              >
                {hiphop?.map((el, i) => {
                  return (
                    <AlbumCard
                      key={i}
                      obj={el}
                      cover={el.album.cover_medium}
                      artist={el.artist.name}
                      album={el.album.title}
                    />
                  );
                })}
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default HomePage;
