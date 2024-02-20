import UserSidebar from "components/Sidebar/User";
import { Text } from "components/Text";

const Messages = () => {
  return (
    <UserSidebar>
      <div>
        <Text size="md" bold={600}>
          hello
        </Text>
        <Text size="md" bold={400}>
          This is for messages
        </Text>
      </div>
    </UserSidebar>
  );
};
export default Messages;
