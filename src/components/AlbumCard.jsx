import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { viewAlbumAction, viewArtistAction } from "../action";

const AlbumCard = (props) => {
  const dispatch = useDispatch();
  const artist = useDispatch();
  return (
    <div className="col text-center">
      <a href=".">
        <img className="img-fluid" src={props.cover} alt="1" />
      </a>
      <p>
        <Link
          className="text-decoration-none"
          onClick={() => dispatch(viewAlbumAction(props))}
          to={"/album"}
        >
          {" "}
          Album: {props.album}{" "}
        </Link>
        <br />

        <Link
          onClick={() => artist(viewArtistAction(props))}
          className="text-decoration-none"
          to={"/artist"}
        >
          Artist: {props.artist}
        </Link>
      </p>
    </div>
  );
};

export default AlbumCard;