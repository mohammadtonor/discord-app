"use client";

import { CreateServerModal } from "@/components/modals/create-server-modal";
import { InviteModal } from "@/components/modals/invite-modal";
import { useEffect, useState } from "react";
import { EditServerModal } from "../modals/edit-server-modal";
import { MembersModal } from "../modals/members-modal";
import { CreateChannelModal } from "../modals/create-channel-modal";
import { LeaveServer } from "../modals/leave-server-moadal";
import { DeleteServer } from "../modals/delete-server-moadal";
import { DeleteChannelModal } from "../modals/delete-channel-moadal ";
import { EditChannelModal } from "../modals/edit-channel-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CreateServerModal />
      <InviteModal />
      <EditServerModal />
      <MembersModal />
      <CreateChannelModal />
      <LeaveServer />
      <DeleteServer />
      <DeleteChannelModal />
      <EditChannelModal />
    </>
  );
};
