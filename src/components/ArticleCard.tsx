import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User } from "lucide-react";

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
}

interface ArticleCardProps {
  article: Article;
  onClick: (article: Article) => void;
}

export const ArticleCard = ({ article, onClick }: ArticleCardProps) => {
  return (
    <Card 
      className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:border-primary/50"
      onClick={() => onClick(article)}
    >
      <div className="aspect-video overflow-hidden rounded-t-lg">
        <img 
          src={article.imageUrl} 
          alt={`${article.movieTitle} poster`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary">{article.genre}</Badge>
          <span className="text-sm text-muted-foreground">{article.movieYear}</span>
        </div>
        <CardTitle className="text-xl group-hover:text-primary transition-colors">
          {article.movieTitle}
        </CardTitle>
        <h3 className="text-lg font-semibold text-muted-foreground leading-tight">
          {article.title}
        </h3>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <User className="h-4 w-4" />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4" />
            <span>{article.readTime}</span>
          </div>
        </div>
        <div className="mt-2 text-sm text-muted-foreground">
          {article.publishDate}
        </div>
      </CardContent>
    </Card>
  );
};