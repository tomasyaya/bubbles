import React from "react";
import { Playground } from "./views/Playground";
import { getUsers } from "./service/users";
import { User } from "./types/User";
import { Bubble } from "./components/Bubble";

function useUsers(): User[] {
  const [users, setUsers] = React.useState<User[]>([]);
  React.useEffect(() => {
    getUsers().then(({ data: payload }) => setUsers(payload));
  }, [setUsers]);

  return users;
}

function getInitialsFromName(name: string) {
  return name
    .split(" ")
    .reduce((initials: string, word: string) => initials + word[0], "");
}

function getInitials(users: User[]) {
  return users.map(({ name }) => getInitialsFromName(name));
}

function getRanomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

function getPositions() {
  return {
    top: Math.floor(Math.random() * 90),
    left: Math.floor(Math.random() * 90),
  };
}

function App() {
  const users = useUsers();
  const initials = getInitials(users);
  const bubbles = initials.map((initial) => ({
    initial,
    color: getRanomColor(),
    position: getPositions(),
  }));
  return (
    <div>
      <Playground>
        {bubbles.map((bubble) => (
          <Bubble
            key={bubble.initial}
            color={bubble.color}
            top={bubble.position.top}
            left={bubble.position.left}
            initial={bubble.initial}
          />
        ))}
      </Playground>
    </div>
  );
}

export default App;
