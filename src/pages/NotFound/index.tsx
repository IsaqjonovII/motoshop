import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Biz siz qidiryotgan narsani topa olmadik.</h1>
      <Link to="/auth">Ro'yhatdan o'tish / Kirish</Link>
    </div>
  );
};
export default NotFound;
