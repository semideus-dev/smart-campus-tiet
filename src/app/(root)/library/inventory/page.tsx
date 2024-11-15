"use client";
import PageHeader from "@/components/ui/page-header";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { getAllBooks } from "@/lib/library/utils";

interface Book {
  book_name: string;
  author: string;
}

export default function LibraryInvertoryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [booksData, setBooksData] = useState<Book[]>([]);

  useEffect(() => {
    getAllBooks().then((data) => setBooksData(data));
  }, []);

  const filteredBooks = booksData.filter(
    (book) =>
      book.book_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <PageHeader header="Inventory" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/library">Library</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Inventory</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="relative">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 transform text-muted-foreground"
          size={20}
        />
        <Input
          type="search"
          placeholder="Search books by title or author..."
          className="pl-10 text-muted-foreground"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <ScrollArea className="h-[calc(100vh-200px)]">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredBooks.map((book, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{book.book_name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">By {book.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
