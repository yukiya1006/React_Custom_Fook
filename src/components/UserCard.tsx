import { UserProfile } from "../types/user";
import styled from "styled-components";

type Props = {
  user: UserProfile;
};

export const UserCard: FC<Props> = (props) => {
  const { user } = props;
  return (
    <SContainer>
      <dl>
        <SDt>Name</SDt>
        <SDd>{user.name}</SDd>
        <SDt>Email</SDt>
        <SDd>{user.email}</SDd>
        <SDt>Adress</SDt>
        <SDd>{user.adress}</SDd>
      </dl>
    </SContainer>
  );
};

const SContainer = styled.div`
  width: 500px;
  height: 500px;
  background-color: blue;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
`;

const SDt = styled.dt`
  margin: 20px;
  text-align: center;
`;

const SDd = styled.dd`
  margin: 20px;
  border-bottom: solid 2px gray;
  text-align: center;
  font-size: 25px;
`;
