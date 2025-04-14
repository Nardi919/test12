import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { format } from "date-fns";
import { Comment } from "@shared/schema";

export default function AdminComments() {
  // State for authentication (simplified version)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  
  // Simplified admin authentication
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check - in a real app, this should be more secure
    if (password === "admin123") {
      setIsAuthenticated(true);
    } else {
      alert("Fjalëkalimi i gabuar!");
    }
  };

  // Query to fetch all comments
  const { data, isLoading, isError, error } = useQuery<{ success: boolean; data: Comment[] }>({
    queryKey: ["/api/comments"],
    enabled: isAuthenticated, // Only fetch when authenticated
  });

  // Render login form if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="container mx-auto p-6 max-w-md">
        <Card>
          <CardHeader>
            <CardTitle>Admin Login</CardTitle>
            <CardDescription>
              Ju lutem vendosni fjalëkalimin për të hyrë në panelin e administratorit
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Fjalëkalimi
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <Button type="submit" className="w-full">Hyr</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Loading state
  if (isLoading) {
    return (
      <div className="container mx-auto p-6">
        <Card>
          <CardHeader>
            <Skeleton className="h-8 w-64" />
            <Skeleton className="h-4 w-full" />
          </CardHeader>
          <CardContent>
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="space-y-2 mb-4">
                <Skeleton className="h-10 w-full" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    );
  }

  // Error state
  if (isError) {
    return (
      <div className="container mx-auto p-6">
        <Card>
          <CardHeader>
            <CardTitle>Gabim!</CardTitle>
            <CardDescription>
              Ndodhi një gabim gjatë ngarkimit të mesazheve
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-red-500">{(error as any)?.message || "Gabim i panjohur"}</p>
            <Button 
              onClick={() => window.location.reload()} 
              className="mt-4"
            >
              Provo përsëri
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Display comments in a table
  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Mesazhet e Kontaktit</CardTitle>
              <CardDescription>
                Lista e të gjitha mesazheve të dërguara nga vizitorët
              </CardDescription>
            </div>
            <Button variant="outline" onClick={() => setIsAuthenticated(false)}>
              Dil
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {data?.data && data.data.length > 0 ? (
            <Table>
              <TableCaption>Lista e mesazheve të kontaktit</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">ID</TableHead>
                  <TableHead>Emri</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Subjekti</TableHead>
                  <TableHead>Mesazhi</TableHead>
                  <TableHead className="text-right">Data</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.data.map((comment) => (
                  <TableRow key={comment.id}>
                    <TableCell className="font-medium">#{comment.id}</TableCell>
                    <TableCell>{comment.name}</TableCell>
                    <TableCell>{comment.email}</TableCell>
                    <TableCell>{comment.subject}</TableCell>
                    <TableCell className="max-w-xs truncate">{comment.message}</TableCell>
                    <TableCell className="text-right">
                      {comment.createdAt ? (
                        format(new Date(comment.createdAt), "dd/MM/yyyy HH:mm")
                      ) : (
                        "N/A"
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground">Nuk ka mesazhe për të shfaqur</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}