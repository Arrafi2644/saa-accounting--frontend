"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ITool } from "@/types";

interface ToolDetailsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  tool: ITool;
}

export default function ToolDetailsModal({ open, onOpenChange, tool }: ToolDetailsModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md space-y-4">
        <DialogHeader>
          <DialogTitle>Tool Details</DialogTitle>
        </DialogHeader>

        <div className="space-y-2">
          <p><strong>Title:</strong> {tool.title}</p>
          <p><strong>Description:</strong> {tool.description}</p>
          <p><strong>Icon URL:</strong> {tool.icon}</p>
          <p><strong>Status:</strong> {tool.status}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
