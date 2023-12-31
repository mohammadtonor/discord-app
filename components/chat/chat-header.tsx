import { channel } from "diagnostics_channel";
import { Hash, Menu } from "lucide-react";
import { type } from "os";
import { MobileToggle } from "../mobile-toggle";
import { UserAvatar } from "../user-avatar";
import { SocketIndicator } from "../socket-indicator";
import { ChatVideoButtun } from "./chat-video-button";

interface ChatHeaderProps {
  ServerId: string;
  name: string;
  type: "channel" | "conversation";
  imageUrl: string;
}

export const ChatHeader = ({
  name,
  ServerId,
  type,
  imageUrl,
}: ChatHeaderProps) => {
  return (
    <div
      className="text-md font-semibold px-3 flex items-center h-12
       border-r-neutral-200 dark:border-neutral-800 border-b-2 ">
      <MobileToggle serverId={ServerId} />
      {type === "channel" && (
        <Hash className="w-5 h-5 text-zinc-500 dark:text-zinc-400 mr-2" />
      )}
      {type === "conversation" && (
        <UserAvatar className="h-8 w-8 mr-2 md:h-8 md:w-8" src={imageUrl} />
      )}
      <p className="font-semibold text-md text-black dark:text-white">{name}</p>
      <div className="flex ml-auto items-center">
        {type === "conversation" && <ChatVideoButtun />}
        <SocketIndicator />
      </div>
    </div>
  );
};
