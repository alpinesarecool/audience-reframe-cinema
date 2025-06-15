import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Clock, User, Calendar, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  publishDate: string;
  readTime: string;
  movieTitle: string;
  movieYear: number;
  genre: string;
  imageUrl: string;
  content: string;
}

interface ArticleModalProps {
  article: Article | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ArticleModal = ({ article, isOpen, onClose }: ArticleModalProps) => {
  if (!article) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary">{article.genre}</Badge>
                <span className="text-sm text-muted-foreground">{article.movieYear}</span>
              </div>
              <DialogTitle className="text-2xl md:text-3xl font-bold leading-tight mb-2">
                {article.movieTitle}
              </DialogTitle>
              <h2 className="text-xl text-muted-foreground font-semibold mb-4">
                {article.title}
              </h2>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="aspect-video overflow-hidden rounded-lg">
            <img 
              src={article.imageUrl} 
              alt={`${article.movieTitle} poster`}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground border-b pb-4">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>{article.publishDate}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>{article.readTime}</span>
            </div>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              {article.excerpt}
            </p>
            <div className="text-foreground leading-relaxed whitespace-pre-line">
              {article.content}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};