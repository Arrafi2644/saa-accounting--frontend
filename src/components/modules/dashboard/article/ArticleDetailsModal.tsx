"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Clock, Folder } from "lucide-react";
import { IArticle } from "@/types";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  article?: IArticle;
}

export default function ArticleDetailsModal({
  open,
  onOpenChange,
  article,
}: Props) {
  if (!article) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            {article.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <p className="text-muted-foreground">
            {article.description}
          </p>

          <Separator />

          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="flex gap-2">
              <Folder size={14} />
              {article.category}
            </Badge>

            <Badge variant="outline" className="flex gap-2">
              <Clock size={14} />
              {article.readTime}
            </Badge>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
