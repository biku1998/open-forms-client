import { Link } from 'react-router-dom';
export default function Logo() {
  return (
    <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-blue-500 cursor-pointer">
      <Link to={'/'}>Open forms</Link>
    </span>
  );
}
