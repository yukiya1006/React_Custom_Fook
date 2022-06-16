import { UserCard } from "./components/UserCard";
import "./styles.css";
import { useAllUsers } from "./hooks/useAllUsers";

const user = {
  id: 1,
  name: "yamacode",
  email: "yamacode.gmail.com",
  address: "東京都渋谷"
};

export default function App() {
  const { getUsers, userProfiles, loading, error } = useAllUsers();

  const onClickFetchData = () => getUsers();

  return (
    <div className="App">
      <button onClick={onClickFetchData}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました</p>
      ) : loading ? (
        <p>loading...</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
