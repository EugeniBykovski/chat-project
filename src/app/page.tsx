import ChatBlock from "@/components/screen/chats/Chat";
import ChatListBlock from "@/components/screen/chats/ChatList";
import CurrentUser from "@/components/screen/chats/CurrentUser";
import styles from "./page.module.scss";

export default function HomePage() {
  return (
    <div className={styles.homeGrid}>
      <div>
        <CurrentUser />
        <ChatListBlock />
      </div>
      <div>
        <ChatBlock />
      </div>
    </div>
  );
}
