"use client";

import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="p-4">
      <Modal title="test" description="Test Desc" isOpen onClose={() => {}}>
        Children
      </Modal>
    </div>
  );
}
