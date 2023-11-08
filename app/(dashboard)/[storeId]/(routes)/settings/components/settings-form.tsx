"use client";

import { Store } from "@prisma/client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

interface SettingsFormProps {
  initialData: Store;
}

export const SettingsForm: React.FC<SettingsFormProps> = ({ initialData }) => {
  return (
    <div className="flex items-center justify-between">
      <Heading title="Store settings" description="Manage store preferences" />
      <Button
        disabled={false}
        variant="destructive"
        size="sm"
        onClick={() => {}}
      ></Button>
      <Separator />
    </div>
  );
};
