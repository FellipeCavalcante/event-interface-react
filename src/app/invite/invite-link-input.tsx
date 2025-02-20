"use client";

import { IconButton } from "@/components/icont-button";
import { InputField, InputIcon, InputRoot } from "@/components/input";
import { Copy, Link } from "lucide-react";

interface InviteLinkInputProps {
  inviteLink: string;
}

export function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
  function copyInvitLink() {
    navigator.clipboard.writeText(inviteLink);
  }

  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>

      <InputField readOnly defaultValue={inviteLink} />

      <IconButton className="-mr-2" onClick={copyInvitLink}>
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  );
}
